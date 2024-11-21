import { ThemeProvider } from "@/components/theme"
import { ReactQueryProvider } from "@/react-query/provider"
import { ReduxProvider } from "@/redux/provider"
import { ClerkProvider } from "@clerk/nextjs"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { SITE_CONFIG } from "@/config"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata= SITE_CONFIG
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${jakarta.className} bg-black`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        disableTransitionOnChange
                    >
                        <ReduxProvider>
                            <ReactQueryProvider>{children}</ReactQueryProvider>
                        </ReduxProvider>
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}
