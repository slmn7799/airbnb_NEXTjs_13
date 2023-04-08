import ClientOnly from './components/ClientOnly';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Nunito } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone by NEXTjs-13',
}

const font = Nunito({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
