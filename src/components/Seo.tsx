import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonical?: string;
  openGraphImage?: string;
  keywords?: string;
  jsonLd?: object;
};

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  openGraphImage,
  keywords,
  jsonLd,
}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('twitter:card', 'summary_large_image');

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (openGraphImage) {
      updateMetaTag('og:image', openGraphImage, true);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, openGraphImage, keywords, jsonLd]);

  return null;
};
