import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-5 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="mt-5 flex flex-row gap-8 xl:gap-8 w-full">
                <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        {/* <Icons.logo className="w-7 h-7" /> */}
                        <h2 className="h-7">GeniXAI</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm text-start">
                        Grow your career with GenXAI.
                    </p>
                    <span className="mt-4 text-neutral-200 text-sm flex items-center">
                        Made by{" "}
                        <Link
                            href="https://codewithashirbad.me/"
                            className="font-semibold ml-1"
                            target="_blank"
                        >
                            Ashirbad Mandhata
                        </Link>
                    </span>
                </div>
            </div>

            <div className="mt-8 mb-5 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-center w-full">
                <p className="text-sm text-muted-foreground text-center">
                    &copy; {new Date().getFullYear()} GenXAI INC. All
                    rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
