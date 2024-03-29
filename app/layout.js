import "../styles/globals.css"
import Container from "@/components/container"
import Footer from "@/components/footer"
import Header from "@/components/Header"
export const metadata = {
  title: 'BOST| IITRPR',
  description: 'Official Site of BOST IITRPR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="pt-[var(--navigationheight)] bg-page-gradient">{children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
