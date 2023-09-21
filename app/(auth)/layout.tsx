import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"
import Head from "next/head"

export const metadata = {
  icons: {
    icon: "/icon.ico"
  },
  title: "Threads | @wjbetech",
  description: "Next.js13 Threads Clone"
}

const interFont = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/icon.png" className="rounded-full" />
        </Head>
          <body className={`${interFont.className} bg-dark-1`}>
            {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
