import { CSSProperties } from 'react';
import { default as default_2 } from 'react';

export declare const Footer: default_2.FC;

export declare const getSwaraksaraCookie: (name: string) => string | null;

/**
 * Komponen Wrapper untuk Icon SVG.
 * Penggunaan:
 * import UserIcon from '../../assets/icons/light/user.svg?react';
 * <Icon as={UserIcon} size="lg" className="text-primary" />
 */
export declare const Icon: default_2.FC<IconProps>;

declare interface IconProps {
    /** Komponen SVG yang diimport (e.g. import { ReactComponent as Star } ...) */
    as: default_2.FunctionComponent<default_2.SVGProps<SVGSVGElement>>;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    color?: string;
    className?: string;
    style?: CSSProperties;
}

declare interface LocaleContextType {
    locale: LocaleType;
    setLocale: (lang: LocaleType) => void;
    t: (key: string) => string;
}

export declare const LocaleProvider: default_2.FC<{
    children: default_2.ReactNode;
}>;

export declare type LocaleType = 'id' | 'en';

export declare const Modal: default_2.FC<ModalProps>;

declare interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: default_2.ReactNode;
}

export declare const Navbar: default_2.FC<NavbarProps>;

declare interface NavbarProps {
    hamburgerPosition: 'left' | 'right';
}

export declare const setSwaraksaraCookie: (name: string, value: string, days?: number) => void;

export declare const Sidebar: default_2.FC<SidebarProps>;

declare interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    position: 'left' | 'right';
}

declare interface ThemeContextType {
    mode: ThemeMode;
    resolvedTheme: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}

export declare type ThemeMode = 'light' | 'dark';

export declare const ThemeProvider: default_2.FC<ThemeProviderProps>;

declare interface ThemeProviderProps {
    children: default_2.ReactNode;
    defaultMode?: ThemeMode;
}

export declare const ThemeSwitcher: default_2.FC;

export declare const useLocale: () => LocaleContextType;

export declare const useTheme: () => ThemeContextType;

export { }
