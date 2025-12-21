// src/utils/cookieManager.ts

// Konfigurasi Domain Utama
const ROOT_DOMAIN = '.swaraksara.id';

export interface CookieOptions {
  days?: number;
  domain?: string;
  path?: string;
}

/**
 * Helper internal untuk menentukan domain cookie.
 * Agar berjalan di localhost, kita tidak boleh memaksa domain .swaraksara.id
 * kecuali sedang berada di environment production/staging yang sesuai.
 */
const getDomainAttribute = (): string => {
  const hostname = window.location.hostname;
  // Jika sedang di localhost atau IP, jangan set domain (agar browser menghandle-nya sebagai host-only)
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.match(/^\d{1,3}\./)) {
    return '';
  }
  // Jika di sub-domain swaraksara.id, gunakan root domain agar shared
  if (hostname.endsWith('swaraksara.id')) {
    return `; domain=${ROOT_DOMAIN}`;
  }
  return '';
};

export const setSwaraksaraCookie = (name: string, value: string, days: number = 365) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  
  const domain = getDomainAttribute();
  const path = '; path=/'; // Selalu tersedia di seluruh path
  const security = '; SameSite=Lax'; // Best practice keamanan standar

  document.cookie = `${name}=${value || ''}${expires}${domain}${path}${security}`;
};

export const getSwaraksaraCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};