import '../styles/global.css';
import { Inter } from 'next/font/google';

import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';

import { AdvertisementsProvider } from 'context/AdvertisementsContext';
import { AuthProvider } from 'context/AuthContext';
import ToastProvider from 'context/ToastContext';
import { UserProvider } from 'context/UserContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Motors Shop',
  description: 'Encontre o seu carro aqui'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <AuthProvider>
            <UserProvider>
              <AdvertisementsProvider>
                <HeaderComponent />
                {children}
                <FooterComponent />
              </AdvertisementsProvider>
            </UserProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
