import '../styles/global.css';
import { Inter } from 'next/font/google';
import { IoIosArrowUp } from 'react-icons/io';

import HeaderComponent from './components/Header';

import { AuthProvider } from 'context/AuthContext';

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
      <AuthProvider>

        <body className={inter.className}>
          <HeaderComponent />
          {children}
          <footer className="w-full flex justify-between h-32 bg-black max-lg:flex-col max-lg:items-center max-sm:min-h-80 max-sm:justify-normal max-sm:gap-3">
            <div className="flex  text-center  justify-center items-center max-lg:w-5/6">
              <p className="heading-2-600 text-white max-lg:text-center">
                Motors <span className="text-lg">shop</span>
              </p>
              <nav className="flex items-center p-3 max-sm:hidden">
                {pathname === '/login' ? (
                  <Link
                    href={'/'}
                    className="btn-header flex text-lg text-center items-center justify-center text-black text-gray-600 hover:font-semibold"
                  >
                    Home
                  </Link>
                ) : (
                  <Link
                    href={'/login'}
                    className="btn-header flex text-lg text-center items-center justify-center text-black text-gray-600 hover:font-semibold"
                  >
                    Fazer login
                  </Link>
                )}

                {pathname === '/register' ? (
                  <Link
                    href={'/'}
                    className="btn-header flex text-lg items-center text-center justify-center text-black text-gray-600 hover:font-semibold"
                  >
                    Home
                  </Link>
                ) : (
                  <Link
                    href={'/register'}
                    className="btn-header flex text-lg items-center text-center justify-center text-black text-gray-600 hover:font-semibold"
                  >
                    Cadastrar
                  </Link>
                )}
              </nav>
              <div className="flex items-center p-3  sm:hidden">
                <MenuMobile />
              </div>
            </header>
            {children}
            <footer className="w-full flex justify-between h-32 bg-black max-lg:flex-col max-lg:items-center max-sm:min-h-80 max-sm:justify-normal max-sm:gap-3">
              <div className="flex  text-center  justify-center items-center max-lg:w-5/6">
                <p className="heading-2-600 text-white max-lg:text-center">
                  Motors <span className="text-lg">shop</span>
                </p>
              </div>

              <div className="flex w-96 items-center justify-center gap-2">
                <p className="text-white text-sm">
                  © 2022 - Todos os direitos reservados.
                </p>
              </div>

              <div className="flex w-48 items-center justify-center gap-2">
                <button className="w-12 flex justify-center rounded-md items-center  text-white font-bold bg-gray-900 h-12">
                  <IoIosArrowUp className=" text-xl" />
                </button>
              </div>
            </footer>
          </body>
        </UserProvider>
      </AuthProvider>
    </html>
  );
}
