"use client"

import { ThemeProvider } from "@/context/ThemeContext";



// export default function
export default function LayoutClient({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <ThemeProvider>
            <html lang="en">
                <body
                    className={`mx-auto antialiased`}
                >
                    {children}
                </body>
            </html>
        </ThemeProvider>
    );
}
