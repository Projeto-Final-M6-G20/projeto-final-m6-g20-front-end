'use client';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent
} from '@chakra-ui/react';

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
}

const DrawerFilter = ({ children, isOpen, onClose }: DrawerProps) => {
  return (
    <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
      <DrawerContent
        style={{ background: 'white', position: 'fixed', top: '64px' }}
      >
        <DrawerHeader
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px'
          }}
          borderBottomWidth="1px"
        >
          Filtro
          <button onClick={onClose}>X</button>
        </DrawerHeader>

        <DrawerBody>
          <>{children}</>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFilter;
