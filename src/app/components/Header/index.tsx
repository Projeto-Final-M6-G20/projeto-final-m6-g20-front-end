'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import DropDown from 'app/user_profile/components/UserDisplay/components/dropdownUser';

import MenuMobile from '../MenuMobile';
import { parseCookies } from 'nookies';
import { useEffect } from 'react';

const HeaderComponent = () => {
  const pathname = usePathname();
  const cookies = parseCookies();

  return (
    <div className="flex flex-col justify-center border-2 border-b-gray-300 items-center  max-sm:w-screen max-[1024px]:w-full max-[1560px]:w-full max-[2560px]:w-full  max-[1560px]:w-1/2">
      <header className="w-full h-16 p-9  items-center  flex justify-between max-lg:p-5 max-[1560px]:w-full max-[2560px]:w-[60%] max-[3440px]:w-[50%]">
        <Link
          href={'/'}
          className="heading-1-700  bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text p-3  "
        >
          Motors <span className="text-lg font-bold">shop</span>
        </Link>
        <>
          {pathname === '/user_profile' ||
          ('/product_view/:carId' && cookies['user.Token']) ||
          ('/' && cookies['user.Token']) ? (
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
    </div>
  );
};

export default HeaderComponent;
