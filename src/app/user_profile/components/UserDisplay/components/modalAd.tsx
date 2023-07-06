import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';

import { Address, UserContext } from 'context/UserContext';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
const ModalAd = ({ isOpen, onClose }: ModalChildren) => {
  const { user, mode, updateUserAddress } = useContext(UserContext);
  const { register, handleSubmit } = useForm<Address>();

  const onSubFunction = (data: Address) => {
    updateUserAddress(data);
  };

  return (
    <>
      {mode === 'edit' ? (
        <CustomModal
          MaxWidthBody="90%"
          MaxWidthHeader="90%"
          widthBody="600px"
          widthHeader="600px"
          isOpen={isOpen}
          onClose={onClose}
          headerText={'Editar Endereço'}
        >
          <div className="flex flex-col w-full gap-4">
            <h2>Informações de endereço</h2>

            <form className="w-full" onSubmit={handleSubmit(onSubFunction)}>
              <Input
                type="text"
                label="Cep"
                id="cep"
                defaultValue={user?.Address.zip_code}
                {...register('zip_code')}
              />

              <div className="flex gap-12">
                <Input
                  type="texto"
                  label="Estado"
                  id="state"
                  defaultValue={user?.Address.state}
                  {...register('state')}
                  style={{
                    width: '100%'
                  }}
                />

                <Input
                  type="text"
                  label="Cidade"
                  id="city"
                  defaultValue={user?.Address.city}
                  {...register('city')}
                  style={{
                    width: '100%'
                  }}
                />
              </div>

              <Input
                type="text"
                label="Rua"
                id="street"
                {...register('street')}
                defaultValue={user?.Address.street}
              />

              <div className="flex gap-12">
                <Input
                  type="text"
                  label="Numero"
                  id="number"
                  {...register('number')}
                  defaultValue={user?.Address.number}
                  style={{
                    width: '100%'
                  }}
                />

                <Input
                  type="text"
                  label="Complemento"
                  id="complement"
                  {...register('complement')}
                  defaultValue={user?.Address.complement}
                  style={{
                    width: '100%'
                  }}
                />
              </div>

              <div className=" flex w-full justify-end gap-2">
                <button
                  type="button"
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
