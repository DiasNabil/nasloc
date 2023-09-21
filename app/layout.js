

import '../styles/globals.css'
import localFont  from 'next/font/local'

const kanit = localFont({ 
  src: './font/Kanit-Light.ttf',
  variable: '--font-kanit',
  preload: true,
})



export const metadata = {
  title: {
    default: "NASLOC - Location d'équipement de construction et peinture",
    template: '%s | Nasloc'
  },
/*  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
*/
  description: 'Nous vous facilitons la vie dans la réalisation de vos projets',
}

export default function RootLayout({ children }) {
  return (

    <html lang="fr">
      <body suppressHydrationWarning={true} className={`${kanit.variable}`}>{children}</body>
    </html>

  )
}
