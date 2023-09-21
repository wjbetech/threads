import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import TopBar from "@/components/shared/TopBar"
import LeftSideBar from "@/components/shared/LeftSideBar"
import RightSideBar from "@/components/shared/RightSideBar"
import BottomBar from "@/components/shared/BottomBar"
import Head from "next/head"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: "/icon.ico"
  },
  title: "Threads | @wjbetech",
  description: "Next.js13 Threads Clone",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/icon.png" className="rounded-full" />
        </Head>
          <body className={inter.className}>
            <TopBar  />

              <main>
                <LeftSideBar />

                  <section className="main-container">
                    <div className="w-full max-w-4xl">
                      {children}
                    </div>
                  </section>

                <RightSideBar />
              </main>

            <BottomBar />
          </body>
      </html>
    </ClerkProvider>
  )
}
