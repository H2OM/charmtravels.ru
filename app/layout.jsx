import '@/scss/global.scss';
import localFont from 'next/font/local';
import { ClientProvider } from "@/lib/context/ClientContext";


// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Charmtravels.ru",
  description: "!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru"
          // className={inter.className}
    >
      <body>
      <ClientProvider>
        {/*<Header/>*/}
        <main style={{overflowX: "hidden"}}>
          {children}
        </main>
        {/*<Footer/>*/}
      </ClientProvider>
      </body>
    </html>
  );
}
