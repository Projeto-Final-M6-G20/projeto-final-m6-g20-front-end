'use client';
import {
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { useState } from 'react';

interface ModalChildren {
  children: React.ReactNode;
  isOpen: boolean;
  headerText?: string;
  onClose: () => void;
  MaxWidthHeader: string;
  MaxWidthBody: string;
  widthHeader: string;
  widthBody: string;
  heightBody?: string;
}

const CustomModal = ({
  isOpen,
  onClose,
  children,
  headerText,
  MaxWidthHeader,
  MaxWidthBody,
  widthHeader,
  widthBody,
  heightBody
}: ModalChildren) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className=" flex flex-col items-center justify-center bg-opacity-70 bg-black">
        <ModalHeader
          style={{ maxWidth: MaxWidthHeader, width: widthHeader }}
          className=" bg-white flex justify-between  p-4"
        >
          <p>{headerText}</p>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody
          style={{
            padding: '1rem',
            maxWidth: MaxWidthBody,
            width: widthBody,
            height: heightBody
          }}
          className=" bg-white flex justify-start p-8"
        >
          {children}
        </ModalBody>
      </ModalOverlay>
    </Modal>
  );
};

export default CustomModal;
