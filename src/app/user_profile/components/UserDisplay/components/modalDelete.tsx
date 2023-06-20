import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from '@chakra-ui/react';
import CustomModal from 'app/components/Modal';
import { UserContext } from 'context/UserContext';
import React, { useContext, useRef, useState } from 'react';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
}

const ModalDelete = ({ isOpen, onClose }: ModalChildren) => {
  const { mode } = useContext(UserContext);
  return (
    <>
      {mode === 'delete' ? (
        <CustomModal
          isOpen={isOpen}
          onClose={onClose}
          headerText="Excluir anuncio"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h3>Tem certeza que deseja remover este anúncio?</h3>

              <div>
                <p>
                  Essa ação não pode ser desfeita. Isso excluirá permanentemente
                  sua conta e removerá seus dados de nossos servidores.
                </p>
              </div>

              <div className="w-full flex justify-end gap-2">
                <button
                  onClick={() => onClose()}
                  className="w-1/3 text-black box-border flex flex-row justify-center items-center p-3 gap-2 bg-gray-300 border-gray-300 border-2 rounded h-12 "
                >
                  Cancelar
                </button>
                <button className="btn-error w-1/3 font-bold">
                  Sim, excluir
                </button>
              </div>
            </div>
          </div>
        </CustomModal>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalDelete;
