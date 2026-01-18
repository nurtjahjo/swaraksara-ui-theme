import React, { useEffect } from 'react';
// @ts-ignore
import iconScript from '../assets/scripts/selected.v2.js?raw';

/**
 * Komponen ini menyuntikkan script FontAwesome Legacy (selected.v2.js)
 * secara otomatis ke dalam <head> dokumen saat dipasang.
 * 
 * Gunakan ini sekali saja di root aplikasi (main.tsx/App.tsx).
 */
export const LegacyIconLoader: React.FC = () => {
  useEffect(() => {
    const SCRIPT_ID = 'swaraksara-legacy-icons';

    // Cek apakah script sudah pernah diinject untuk mencegah duplikasi
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.type = 'text/javascript';
      script.text = iconScript; // Inject raw content
      document.head.appendChild(script);
      
      console.log('[UI-Theme] Legacy Icons Injected.');
    }
  }, []);

  return null; // Komponen ini tidak merender UI apa-apa
};
