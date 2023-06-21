import { Button, useDisclosure } from '@chakra-ui/react';
import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';
import { UserContext } from 'context/UserContext';
import React, { useContext, useState } from 'react';
import ModalDelete from './modalDelete';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
const ModalAd = ({ isOpen, onClose, onOpen }: ModalChildren) => {
  const { user, mode } = useContext(UserContext);

  return (
    <>
      {mode === 'edit' ? (
        <CustomModal
          isOpen={isOpen}
          onClose={onClose}
          headerText={'Editar Endereço'}
        >
          <div className="flex flex-col w-full gap-4">
            <h2>Informações de endereço</h2>

            <form className="w-full">
              <Input
                type="text"
                label="Cep"
                id="cep"
                defaultValue={user?.Address.zip_code}
              />

              <div className="flex gap-12">
                <Input
                  type="texto"
                  label="Estado"
                  id="state"
                  defaultValue={user?.Address.state}
                  style={{
                    width: '100%'
                  }}
                />

                <Input
                  type="text"
                  label="Cidade"
                  id="city"
                  defaultValue={user?.Address.city}
                  style={{
                    width: '100%'
                  }}
                />
              </div>

              <Input
                type="text"
                label="Rua"
                id="street"
                defaultValue={user?.Address.street}
              />

              <div className="flex gap-12">
                <Input
                  type="text"
                  label="Numero"
                  id="number"
                  defaultValue={user?.Address.number}
                  style={{
                    width: '100%'
                  }}
                />

                <Input
                  type="text"
                  label="Complemento"
                  id="complement"
                  defaultValue={user?.Address.complement}
                  style={{
                    width: '100%'
                  }}
                />
              </div>

              <div className=" flex w-full justify-end gap-2">
                <button
                  onClick={() => {
                    onClose();
                  }}
                  className="w-1/3 text-black box-border flex flex-row justify-center items-center p-3 gap-2 bg-gray-300 border-gray-300 border-2 rounded h-12 "
                >
                  Cancelar
                </button>
                <button className="btn-disabled w-1/3 ">
                  Salvar alterações
                </button>
              </div>
            </form>
          </div>
        </CustomModal>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalAd;
