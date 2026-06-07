import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.itsdanishkhan.me";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * SEOHead — dynamically updates document head for each page.
 *
 * Updates: <title>, meta description, canonical, OG/Twitter cards,
 * and injects page-specific JSON-LD structured data.
 *
 * @param {Object} props
 * @param {string} props.title        — Page title
 * @param {string} props.description  — Meta description (150-160 chars ideal)
 * @param {string} [props.canonical]  — Override canonical URL (defaults to current path)
 * @param {string} [props.ogImage]    — Override OG image URL
 * @param {string} [props.ogType]     — OG type (default: "website")
 * @param {Object} [props.jsonLd]     — Page-specific JSON-LD structured data
 */

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  jsonLd,
}) {
  const { pathname } = useLocation();
  const fullUrl = canonical || `${BASE_URL}${pathname}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create a meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullUrl);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", "Danish Khan Portfolio");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:url", fullUrl);

    // JSON-LD — inject/update a dedicated script tag
    const JSONLD_ID = "seo-head-jsonld";
    let script = document.getElementById(JSONLD_ID);
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = JSONLD_ID;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    // Cleanup: remove dynamic JSON-LD when component unmounts
    return () => {
      const el = document.getElementById(JSONLD_ID);
      if (el) el.remove();
    };
  }, [title, description, fullUrl, image, ogType, jsonLd]);

  // This component renders nothing — it only modifies <head>
  return null;
}
