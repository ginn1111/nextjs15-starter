"use client"

import { locales } from "@/shared/config/i18n/routing"
import { usePathname, useRouter } from "@/shared/config/i18n/navigation"
import { motion } from "motion/react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/animate-ui/radix/dropdown-menu"

const localeLabels: Record<string, string> = {
  "en-US": "ENG",
  "vi-VN": "VIE",
}

const Header: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  // Get current locale from <html lang> attribute
  const currentLocale = typeof window !== "undefined" ? document.documentElement.lang : locales[0]

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      className="w-full h-16 flex items-center justify-between px-6 bg-background border-b border-border shadow-sm z-10"
    >
      <div className="font-bold text-lg tracking-tight">MyApp</div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="border text-12 font-semibold rounded px-2 py-1 bg-background text-left"
            >
              {localeLabels[currentLocale] || currentLocale}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom">
            <DropdownMenuRadioGroup value={currentLocale} onValueChange={handleLocaleChange}>
              {locales.map((locale) => (
                <DropdownMenuRadioItem key={locale} value={locale}>
                  {localeLabels[locale] || locale}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* User actions placeholder */}
      </div>
    </motion.header>
  )
}

export default Header
