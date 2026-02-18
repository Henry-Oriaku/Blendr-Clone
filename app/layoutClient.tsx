"use client"

import { ThemeProvider } from "@/context/ThemeContext";

export default function LayoutClient({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ThemeProvider>
            <html lang="en">
                <body className="mx-auto antialiased">

                    {/* Mobile Notice */}
                    <div className="md:hidden fixed inset-0 bg-black text-white flex items-center justify-center p-6 z-[9999]">
                        <div className="text-center">
                            <h1 className="text-xl font-semibold mb-4">
                                Desktop Experience Recommended
                            </h1>
                            <p className="text-sm text-gray-300">
                                This site is optimized for desktop viewing.
                                Please open on a larger screen for the full experience.
                            </p>
                        </div>
                    </div>

                    {children}

                </body>
            </html>
        </ThemeProvider>
    );
}
