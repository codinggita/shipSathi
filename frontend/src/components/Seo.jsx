import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // 1. Update document title
    if (title) {
      document.title = `${title} | ShipSathi - Courier Rate Aggregator`;
    } else {
      document.title = 'ShipSathi - Courier Rate Aggregator';
    }

    // 2. Update/create meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEO;
