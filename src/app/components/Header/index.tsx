'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DropDown from 'app/user_profile/components/UserDisplay/components/dropdownUser';

import MenuMobile from '../MenuMobile';

const HeaderComponent = () => {
  const pathname = usePathname();

  return (
    <header className="w-full h-16 p-9 border-2 items-center border-b-gray-300 flex justify-between max-lg:p-5">
      <Link
        href={'/'}
        className="heading-1-700  bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text p-3  "
      >
        Motors <span className="text-lg font-bold">shop</span>
      </Link>

      <>
        {pathname === '/user_profile' ? (
          <DropDown />
        ) : (
          <nav className="flex items-center p-3 max-sm:hidden">
            {pathname === '/login' ? (
              <Link
                href={'/'}
                className="btn-header flex text-lg text-center items-center justify-center text-black hover:font-semibold"
              >
                Home
              </Link>
            ) : (
              <Link
                href={'/login'}
                className="btn-header flex text-lg text-center items-center justify-center text-gray-600 hover:font-semibold"
              >
                Fazer login
              </Link>
            )}

            {pathname === '/register' ? (
              <Link
                href={'/'}
                className="btn-header flex text-lg items-center text-center justify-center text-black  hover:font-semibold"
              >
                Home
              </Link>
            ) : (
              <Link
                href={'/register'}
                className="btn-header flex text-lg items-center text-center justify-center text-black  hover:font-semibold"
              >
                Cadastrar
              </Link>
            )}
          </nav>
        )}

        <div className="flex items-center p-3  sm:hidden">
          <MenuMobile />
        </div>
      </>
    </header>
  );
};

export default HeaderComponent;
