import { Button, useDisclosure } from '@chakra-ui/react';
import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';
import { UserContext } from 'context/UserContext';
import React, { useContext, useEffect, useState } from 'react';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
const ModalProfile = ({ isOpen, onClose, onOpen }: ModalChildren) => {
  const { user, mode, setMode } = useContext(UserContext);

  const onOpenFunction = () => {
    setMode('delete');
  };

  return (
    <>
      {mode === 'profile' ? (
        <CustomModal
          isOpen={isOpen}
          onClose={onClose}
          headerText={'Editar Perfil'}
        >
          <div className="flex flex-col w-full gap-4">
            <h2>Informações pessoais</h2>

            <form className="w-full">
              <Input
                type="text"
                label="Nome"
                id="name"
                defaultValue={user?.fullname}
              />

              <Input
                type="email"
                label="Email"
                id="email"
                defaultValue={user?.email}
              />

              <Input
                type="text"
                label="Cpf"
                id="cpf"
                defaultValue={user?.cpf}
              />

              <Input
                type="text"
                label="Celular"
                id="cellphone"
                defaultValue={user?.cellphone}
              />

              <Input
                type="text"
                label="Data de nascimento"
                id="birth_date"
                defaultValue={user?.birth_date}
              />

              <Input
                type="text"
                label="Descrição"
                id="description"
                className=" w-full rounded-md p-2  focus:outline-slate-900 border h-20"
              />

              <div className=" flex w-full justify-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                  }}
                  className="w-1/3 text-black box-border flex flex-row justify-center items-center p-3 gap-2 bg-gray-300 border-gray-300 border-2 rounded h-12 "
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={() => onOpenFunction()}
                  className="btn-error w-1/3 font-bold"
                >
                  Excluir perfil
                </button>

                <button className=" w-1/3 flex flex-row justify-center items-center text-white p-3 gap-2 bg-brand-1 border-2  rounded h-12">
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

export default ModalProfile;
