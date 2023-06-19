'use client';

import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscClose } from 'react-icons/vsc';

import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
const MenuMobile = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            leftIcon={isOpen ? <VscClose /> : <GiHamburgerMenu />}
          ></MenuButton>
          <MenuList
            style={{
              background: 'white',
              padding: '5px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100vw'
            }}
          >
            <Link
              href={'login'}
              className="btn-header text-lg text-black text-gray-600 hover:font-semibold"
            >
              Login
            </Link>
            <Link
              href={'register'}
              className="btn-header text-lg text-black text-gray-600 hover:font-semibold"
            >
              Cadastrar
            </Link>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default MenuMobile;
