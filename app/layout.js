import './globals.css'


export const metadata = {
  title: 'Get Hired',
  description: 'Hiring for CU exclusive students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
