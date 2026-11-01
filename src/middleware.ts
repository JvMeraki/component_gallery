import { defineMiddleware } from "astro:middleware";
import { DEFAULT_LOCALE} from "./i18n/locales.ts";

export const onRequest = defineMiddleware(async (context, next) => {
    if (context.url.pathname !== '/') return next();

    const targetLocale = context.preferredLocale ?? DEFAULT_LOCALE;

    return context.redirect(`/${targetLocale}/`, 302);
});