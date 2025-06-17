import { Locale } from "@/shared/config/i18n/routing";
import messages from "@/shared/config/i18n/locales/vi-VN.json";
import { formats } from "@/shared/config/i18n/request";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
    Formats: typeof formats;
  }
}
