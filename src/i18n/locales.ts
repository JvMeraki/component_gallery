export const DEFAULT_LOCALE = 'en';
export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];