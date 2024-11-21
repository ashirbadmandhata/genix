import { ThemeProvider } from "@/components/theme"
import { ReactQueryProvider } from "@/react-query/provider"
import { ReduxProvider } from "@/redux/provider"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
// import { Toaster } from "sonner"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "GenixAI",
    description: "An advanced learning management system with Ai features and custom domain",
}

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
