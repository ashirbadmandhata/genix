import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "GenXAI - An AI Powered LMS Platform",
        template: `%s | GeniX AI`
    },
    description: "GeniXAI is an AI powered LMS that helps you to accelerate your career path in minutes. Get started for free!",
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                href: "/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "GenXAI - An AI Powered LMS(Made By Ashirbad Mandhata)",
        description: "GeniXAI is an AI powered LMS that helps you to accelerate your career path in minutes. Get started for free!",
        images: [
            {
                url: "/favicon.ico",
            }
        ]
    },
    metadataBase: new URL("https://fixifyx.in"),
};