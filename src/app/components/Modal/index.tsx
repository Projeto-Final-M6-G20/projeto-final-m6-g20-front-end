'use client';
import {
  useDisclosure,
  ModalHeader,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';

interface ModalChildren {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal = ({ isOpen, onClose, children }: ModalChildren) => {
  //   const { onOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className=" flex flex-col items-center justify-center bg-opacity-70 bg-black">
        <ModalHeader className="w-1/2 bg-white flex justify-end p-2">
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody className="w-1/2 bg-white flex justify-center">
          {children}
        </ModalBody>
      </ModalOverlay>
    </Modal>
  );
};

export default CustomModal;
