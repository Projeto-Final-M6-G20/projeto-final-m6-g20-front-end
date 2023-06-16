'use client';

import { GiHamburgerMenu } from 'react-icons/gi';
import { VscClose } from 'react-icons/vsc';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  Button
} from '@chakra-ui/react';

const DrawerFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        leftIcon={isOpen ? <VscClose /> : <GiHamburgerMenu />}
      ></Button>
      <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
        <DrawerContent
          style={{ background: 'white', position: 'fixed', top: '64px' }}
        >
          <button onClick={onClose}>XXXX</button>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerFilter;
