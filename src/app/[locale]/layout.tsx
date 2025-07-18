import type { Metadata } from "next"
import { Montserrat, Geist_Mono } from "next/font/google"
import "tw-animate-css"
import "../globals.scss"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { type Locale, routing } from "@/shared/config/i18n/routing"
import { notFound } from "next/navigation"
import Providers from "@/shared/config/providers"
import { initMocks } from "@mocks/index"
import { cn } from "@/shared/lib/utils"

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  initMocks()
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={cn(montserrat.variable, geistMono.variable)}>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}
