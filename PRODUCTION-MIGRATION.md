# 🚀 Production Migration Guide - Integrations zu storyclash.com

## ✅ Was bereits erledigt wurde

Die folgenden Dinge wurden bereits für dich vorbereitet:
- ✅ Alle Integration-Slugs auf kurze URLs angepasst (`/power-bi` statt `/integrations/power-bi-influencer-marketing`)
- ✅ Header-Button zeigt "Explore more integrations" auf Detail-Seiten und führt zurück zur Übersicht
- ✅ Routing lokal auf `/` für Übersicht und kurze URLs für Details konfiguriert

## 📋 MUST-HAVE: Minimale Änderungen für Production

Diese Schritte sind **PFLICHT** damit die Seite funktioniert:

### 1️⃣ React Routing für Unterordner konfigurieren

**Datei:** `src/App.tsx` (Zeile 45)

**Ändern von:**
```tsx
<BrowserRouter>
```

**Ändern zu:**
```tsx
<BrowserRouter basename="/integrations">
```

**Das wars!** Diese eine Zeile macht aus:
- `localhost:5173/` → `storyclash.com/integrations/`
- `localhost:5173/power-bi` → `storyclash.com/integrations/power-bi`
- `localhost:5173/spryker` → `storyclash.com/integrations/spryker`

---

### 2️⃣ SPA Fallback Config (damit Seiten nach Reload funktionieren)

Wenn du die Seite auf Apache/Nginx deployst, brauchst du eine Config damit `/integrations/power-bi` auch nach Browser-Reload funktioniert:

**Apache (.htaccess im integrations/ Ordner):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /integrations/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /integrations/index.html [L]
</IfModule>
```

**Vercel (vercel.json):**
```json
{
  "rewrites": [
    {
      "source": "/integrations/:path*",
      "destination": "/integrations/index.html"
    }
  ]
}
```

**Netlify (_redirects):**
```
/integrations/*  /integrations/index.html  200
```

**Warum?** React Router funktioniert client-side. Wenn jemand direkt `storyclash.com/integrations/power-bi` aufruft oder die Seite reloaded, muss der Server `index.html` ausliefern, damit React Router übernehmen kann.

---

### 3️⃣ Build erstellen und deployen

```bash
# Build erstellen
npm run build

# Teste lokal (optional)
npm run preview
```

Der `dist/` Ordner enthält alle Build-Files. Diese legst du in den Unterordner `integrations/` auf deinem Server:

```
storyclash.com/
├── (andere Storyclash Seiten...)
└── integrations/           ← Hier die Build-Files hinein
    ├── index.html
    ├── assets/
    ├── logos/
    └── illustrations/
```

**✅ FERTIG! Die Seite funktioniert jetzt.**

---

## 🔧 OPTIONAL: SEO Optimierungen

Diese Schritte sind **nicht zwingend nötig**, aber gut für SEO:

### 4️⃣ Canonical URL Redirects (nur für SEO)

⚠️ **Info:** Die canonical URLs in deinen Seiten sind **LANG**:
```tsx
// Beispiel Power BI:
canonical = "https://www.storyclash.com/integrations/power-bi-influencer-marketing"
```

Aber die echte React Route ist **KURZ**: `/integrations/power-bi`

**Warum ist das ok?**
- Die Canonical URL ist nur ein SEO-Signal an Google
- Die React Route ist für die Navigation

**Wann brauchst du Redirects?**
- Nur wenn jemand die LANGE URL direkt aufruft
- Oder wenn diese URLs schon bei Google indexiert sind

**Optional: Server-Redirects einrichten**

Falls gewünscht, leite lange URLs zu kurzen URLs um:

```apache
# .htaccess - Pattern-basierte Redirects
RewriteRule ^integrations/(.*)-influencer-marketing$ /integrations/$1 [R=301,L]
```

Das macht aus:
- `/integrations/power-bi-influencer-marketing` → `/integrations/power-bi` (301 Redirect)
- `/integrations/spryker-influencer-marketing` → `/integrations/spryker` (301 Redirect)

**Meine Empfehlung:** Erstmal **OHNE** diese Redirects starten. Du kannst sie später hinzufügen wenn nötig.

---

### 5️⃣ Open Graph Images überprüfen (optional)

**Beispiel Power BI:** `src/pages/PowerBIPage.tsx` (Zeile 48)
```tsx
openGraphImage="/og/integrations-PowerBI.png"
```

Stelle sicher, dass diese Bilder im `public/og/` Ordner existieren!

---

## 🧪 Testing Checkliste

**Lokal testen (mit npm run preview):**
- [ ] `http://localhost:4173/` → Übersichtsseite lädt
- [ ] `http://localhost:4173/power-bi` → Power BI Seite lädt
- [ ] Alle Links auf der Übersichtsseite funktionieren
- [ ] Browser Back/Forward funktioniert

**Nach dem Deployment auf Server testen:**
- [ ] `storyclash.com/integrations` → Übersichtsseite lädt
- [ ] `storyclash.com/integrations/power-bi` → Power BI Seite lädt
- [ ] `storyclash.com/integrations/spryker` → Spryker Seite lädt
- [ ] **Direkter Zugriff funktioniert**: URL in Browser eingeben und Enter (nicht nur über Navigation klicken!)
- [ ] **Browser Reload funktioniert**: F5 drücken auf Detail-Seite
- [ ] Header-Button "Explore more integrations" erscheint auf Detail-Seiten
- [ ] Alle Links auf der Übersichtsseite funktionieren
- [ ] Browser Back/Forward funktioniert
- [ ] Canonical URLs sind korrekt im HTML (Rechtsklick → Seitenquelltext anzeigen)
- [ ] Open Graph Meta Tags sind korrekt

---

## 📝 Quick Summary

### MUST-HAVE (3 Schritte):
1. **`src/App.tsx` ändern**: `<BrowserRouter basename="/integrations">`
2. **SPA Fallback Config**: .htaccess oder vercel.json (damit Reload funktioniert)
3. **Build deployen**: `npm run build` → Files in `integrations/` Ordner auf Server

### OPTIONAL (später):
- SEO Redirects für lange URLs (`-influencer-marketing` → kurze URLs)
- Google Analytics / Tracking Code hinzufügen
- Sitemap.xml generieren mit allen Integration-URLs
- robots.txt konfigurieren

---

## 🆘 Troubleshooting

**Problem:** "Page not found" (404) nach Browser Reload auf Detail-Seite
→ **Lösung:** SPA Fallback Config fehlt! Siehe Schritt 2 (.htaccess / vercel.json / netlify)

**Problem:** Seite lädt, aber ohne Styles / weiße Seite
→ **Lösung:** Basename fehlt! Siehe Schritt 1 (`basename="/integrations"` in App.tsx)

**Problem:** Übersichtsseite lädt nicht unter `/integrations`
→ **Lösung:** Build-Files liegen im falschen Ordner. Sie müssen im Unterordner `integrations/` auf dem Server liegen

**Problem:** Bilder/Logos laden nicht
→ **Lösung:** Stelle sicher dass der `public/` Ordner (logos, illustrations, og) mit deployed wird

**Problem:** Links auf Integrationskarten funktionieren nicht
→ **Lösung:** Die Slugs in `src/data/integrations.ts` sollten OHNE `/integrations` Prefix sein (z.B. `/power-bi` statt `/integrations/power-bi`). Das ist aber bereits korrekt implementiert.

---

**Letzte Aktualisierung:** 2025-01-27
**Version:** 1.2

## 📝 Changelog

### v1.2 (2025-01-27) - Komplett überarbeitet
- 🔄 Komplette Neustrukturierung der Anleitung
- ✅ Klare Trennung: **MUST-HAVE** vs **OPTIONAL**
- ✅ SPA Fallback Config als Schritt 2 (vorher Schritt 7) - jetzt klar als PFLICHT markiert
- ✅ Detaillierte Erklärung: Warum Redirects OPTIONAL sind
- ✅ Erweiterte Testing Checkliste (lokal + nach Deployment)
- ✅ Besseres Troubleshooting mit konkreten Lösungen
- ✅ Quick Summary für schnellen Überblick

### v1.1 (2025-01-27)
- ✅ Alle Integration-Slugs auf kurze URLs aktualisiert
- ✅ Header-Navigation für neue URL-Struktur angepasst
- ✅ Schritt 3 als "bereits erledigt" markiert
- ✅ Neuer Abschnitt "Was bereits erledigt wurde" hinzugefügt

### v1.0 (2025-01-27)
- Initial release der Production Migration Anleitung
