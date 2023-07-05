'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscClose } from 'react-icons/vsc';

import { Menu, MenuButton, MenuList, Button } from '@chakra-ui/react';

const MenuMobile = () => {
  const pathname = usePathname();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            style={{ display: 'flex', justifyContent: 'center' }}
            isActive={isOpen}
            as={Button}
          >
            {isOpen ? <VscClose /> : <GiHamburgerMenu />}
          </MenuButton>
          <MenuList
            style={{
              background: 'white',
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100vw',
              marginTop: '12px',
              paddingLeft: '40px',
              paddingRight: '40px'
            }}
          >
            <Link
              style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#495057',
                paddingTop: '15px'
              }}
              href={pathname === '/login' ? '/' : '/login'}
            >
              {pathname === '/login' ? 'Home' : 'Login'}
            </Link>
            <Link
              style={{
                marginBottom: '15px',
                padding: '8px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'solid 1px',
                borderColor: '#ADB5BD'
              }}
              href={pathname === '/register' ? '/' : '/register'}
            >
              {pathname === '/register' ? 'Home' : 'Cadastrar'}
            </Link>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuMobile;
