import { Metadata } from "next"

export const metadata : Metadata = {
  title: {
    absolute: "",
    default: "Next.js Learnings",
    template: "%s | Nilanchala"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: "100vw",
        margin: "0",
        padding: "0"
      }}>
        <header>
          <h1 className="text-3xl" style={{
            backgroundColor: "aqua",
            padding: "1rem",
            textAlign: "center"
          }}>
            This is Header
          </h1>
        </header>
        {children}
        <footer>
          <h2 className="text-2xl" style={{
            backgroundColor: "maroon",
            padding: "1rem",
            color: "ghostwhite",
            textAlign: "center"
          }}>This is Footer</h2>
        </footer>
      </body>
    </html>
  )
}
