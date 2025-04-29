import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    const adContainer = adRef.current;

    if (window.adsbygoogle && adContainer && !adContainer.getAttribute('data-adsbygoogle-status')) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsbygoogle push error:', e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      ref={adRef}
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-client="ca-pub-3198354148185299"
      data-ad-slot="1511736642"  // ← Replace with valid slot
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
