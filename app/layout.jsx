import '@/scss/global.scss';
import localFont from 'next/font/local';
import { ClientProvider } from "@/lib/context/ClientContext";
import Header from "@/components/header/server/Header";
import Popup from "@/components/popup/server/Popup";

const montserrat = localFont({
  src: [
    {
      path:"../public/fonts/Montserrat-Thin.woff2",
      weight:"100",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-ThinItalic.woff2",
      weight:"100",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-ExtraLight.woff2",
      weight:"200",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-ExtraLightItalic.woff2",
      weight:"200",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-Light.woff2",
      weight:"300",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-LightItalic.woff2",
      weight:"300",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-Regular.woff2",
      weight:"400",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-Italic.woff2",
      weight:"400",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-Medium.woff2",
      weight:"500",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-MediumItalic.woff2",
      weight:"500",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-SemiBold.woff2",
      weight:"600",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-SemiBold.woff2",
      weight:"600",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-Bold.woff2",
      weight:"700",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-BoldItalic.woff2",
      weight:"700",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-ExtraBold.woff2",
      weight:"800",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-ExtraBoldItalic.woff2",
      weight:"800",
      style:"italic",
    },
    {
      path:"../public/fonts/Montserrat-Black.woff2",
      weight:"900",
      style:"normal",
    },
    {
      path:"../public/fonts/Montserrat-BlackItalic.woff2",
      weight:"900",
      style:"italic",
    },
  ]
});

export const metadata = {
  title: "Charmtravels",
  description: "!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserrat.className}>
      <body>
      <ClientProvider>
        <Popup/>
        <Header/>
        <main style={{overflowX: "hidden", height: "200vh"}}>
          {children}
        </main>
        {/*<Footer/>*/}
      </ClientProvider>
      </body>
    </html>
  );
}
