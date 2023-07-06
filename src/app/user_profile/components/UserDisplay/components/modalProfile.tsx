import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';
import { UserData } from 'app/register/components/FormRegister/validator';

import { UserContext } from 'context/UserContext';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
const ModalProfile = ({ isOpen, onClose }: ModalChildren) => {
  const { user, mode, setMode, updateUser } = useContext(UserContext);
  const { register, handleSubmit } = useForm<UserData>();

  const onOpenFunction = () => {
    setMode('delete');
  };

  const onSubFunction = (data: UserData) => {
    updateUser(data);
    onClose();
  };

  return (
    <>
      {mode === 'profile' ? (
        <CustomModal
          MaxWidthBody="90%"
          MaxWidthHeader="90%"
          widthBody="600px"
          widthHeader="600px"
          isOpen={isOpen}
          onClose={onClose}
          headerText={'Editar Perfil'}
        >
          <div className="flex flex-col w-full gap-4">
            <h2>Informações pessoais</h2>

            <form className="w-full" onSubmit={handleSubmit(onSubFunction)}>
              <Input
                type="text"
                label="Nome"
                id="fullname"
                {...register('fullname')}
                defaultValue={user?.fullname}
              />

              <Input
                type="email"
                label="Email"
                id="email"
                {...register('email')}
                placeholder={user?.email}
              />

              <Input
                type="text"
                label="Cpf"
                id="cpf"
                {...register('cpf')}
                placeholder={user?.cpf}
              />

              <Input
                type="text"
                label="Celular"
                id="cellphone"
                defaultValue={user?.cellphone}
                {...register('cellphone')}
              />

              <Input
                type="text"
                label="Data de nascimento"
                id="birth_date"
                defaultValue={user?.birth_date}
                {...register('birth_date')}
              />

              <Input
                type="text"
                label="Descrição"
                id="description"
                defaultValue={user?.description}
                className=" w-full rounded-md p-2  focus:outline-slate-900 border h-20"
                {...register('description')}
              />

              <div className=" flex w-full justify-center gap-2">
                <button
                  type="button"
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

                <button
                  type="submit"
                  className="w-1/3 flex flex-row justify-center items-center text-white p-3 gap-2 bg-brand-1 border-2  rounded h-12"
                >
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
