import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import BackgroundDecorations from "@/components/background-decorations"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Kaniska Mitra",
  description: "Personal portfolio website of Kaniska Mitra",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text relative overflow-x-hidden`}>
        <BackgroundDecorations />
        <Navbar />
        <main className="min-h-screen relative z-10">{children}</main>
      </body>
    </html>
  )
}


