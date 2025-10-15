'use client';

import { useEffect } from 'react';

export function ScrollToTop() {
  useEffect(() => {
    const handleLoad = () => {
      if (window.location.hash) {
        history.replaceState(null, '', ' ');
      }
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return null;
}
