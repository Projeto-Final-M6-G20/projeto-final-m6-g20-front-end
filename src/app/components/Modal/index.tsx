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
  headerText: string;
  onClose: () => void;
}

const CustomModal = ({
  isOpen,
  onClose,
  children,
  headerText
}: ModalChildren) => {
  //   const { onOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className=" flex flex-col items-center justify-center bg-opacity-70 bg-black">
        <ModalHeader className="w-1/2 bg-white flex justify-between justify-end p-4">
          <p>{headerText}</p>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody className="w-1/2 bg-white flex justify-start p-8">
          {children}
        </ModalBody>
      </ModalOverlay>
    </Modal>
  );
};

export default CustomModal;
