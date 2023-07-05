'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';

import { UserData } from './validator';

import { useDisclosure } from '@chakra-ui/react';
/* import { zodResolver } from '@hookform/resolvers/zod'; */
import { useAuth } from 'hooks';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserData>();

  const { RegisterFunction, is_advertiser, isModal } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onFormSubmit = (formData: UserData) => {
    RegisterFunction(formData);
    if (isModal) {
      onOpen();
    }
  };

  return (
    <div className="flex flex-col items-start max-w-md w-full border-2 bg-white  rounded-md  p-8 bg-cover bg-center max-lg:w-3/4 max-sm:w-3/4">
      <div className="w-2/2">
        <h2 className="text-2xl font-bold  mb-6">Cadastro</h2>

        <h4 className="text-sm font-semibold  mb-6">Informações pessoais</h4>
      </div>

      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4 w-full text-sm"
      >
        <Input
          type="text"
          id="fullname"
          placeholder="Ex: Samuel Leão"
          label="Nome"
          className="input-style w-full"
          {...register('fullname')}
        />
        {errors?.fullname?.message && <p>{errors.fullname.message}</p>}

        <Input
          type="email"
          id="email"
          placeholder="Ex: samuel@kenzie.com.br"
          label="Email"
          className="input-style w-full"
          {...register('email')}
        />

        <Input
          type="text"
          id="cpf"
          placeholder="000.000.000-00"
          label="CPF"
          className="input-style w-full"
          {...register('cpf')}
        />

        <Input
          type="text"
          id="cellphone"
          placeholder="(DDD) 90000-0000"
          label="Celular"
          className="input-style w-full"
          {...register('cellphone')}
        />

        <Input
          type="date"
          id="birth_date"
          placeholder="00/00/00"
          label="Data de nascimento"
          className="input-style w-full"
          {...register('birth_date')}
        />

        <Input
          type="textarea"
          id="description"
          placeholder="Digitar descrição"
          label="Descrição"
          className="input-style w-full"
          {...register('description')}
        />

        <div className="w-full">
          <h4 className="text-sm font-semibold  mb-6">
            Informações de endereço
          </h4>
        </div>

        <Input
          type="text"
          id="zip_code"
          placeholder="00000.000"
          label="CEP"
          className="input-style w-full"
          {...register('zip_code')}
        />

        <div className="flex gap-3">
          <Input
            type="text"
            id="state"
            placeholder="Digitar Estado"
            label="Estado"
            className="input-style w-full"
            {...register('state')}
          />

          <Input
            type="text"
            id="city"
            placeholder="Digitar cidade"
            label="Cidade"
            className="input-style w-full"
            {...register('city')}
          />
        </div>

        <Input
          type="text"
          id="street"
          placeholder="Digitar rua"
          label="Rua"
          className="input-style w-full"
          {...register('street')}
        />

        <div className="flex gap-3">
          <Input
            type="text"
            id="number"
            placeholder="Digitar número"
            label="Número"
            className="input-style w-full"
            {...register('number')}
          />

          <Input
            type="textarea"
            id="complement"
            placeholder="Ex: apart 307"
            label="Complemento"
            className="input-style w-full"
            {...register('complement')}
          />
        </div>

        <div className="w-full">
          <h4 className="text-sm font-semibold  mb-6">Tipo de conta</h4>
        </div>

        {/* <BtnTypeOfAccount /> */}
        <div className="flex gap-3">
          <input
            onClick={is_advertiser}
            id="is_advertiser"
            className="peer/is_advertiser hidden"
            type="radio"
            defaultChecked
            {...register('is_advertiser')}
          />
          <label
            htmlFor="is_advertiser"
            className="btn-form w-full cursor-pointer text-center peer-checked/is_advertiser:bg-brand-1 peer-checked/is_advertiser:text-white peer-checked/is_advertiser:border-brand-1"
          >
            Anunciante
          </label>

          <input
            id="is_buyer"
            onClick={is_advertiser}
            className="peer/is_buyer hidden"
            type="radio"
            {...register('is_advertiser')}
          />
          <label
            htmlFor="is_buyer"
            className="btn-form w-full cursor-pointer text-center peer-checked/is_buyer:bg-brand-1 peer-checked/is_buyer:text-white peer-checked/is_buyer:border-brand-1"
          >
            Comprador
          </label>
        </div>

        <Input
          type="password"
          id="password"
          placeholder="Digitar senha"
          label="Senha"
          className="input-style w-full"
          {...register('password')}
        />

        <Input
          type="password"
          id="passwordConfirmed"
          placeholder="Digitar senha novamente"
          label="Confirmar Senha"
          className="input-style w-full"
          {...register('passwordConfirmed')}
        />

        <button
          type="submit"
          className="btn-primary relative top-0 left-0 w-full font-bold"
        >
          Finalizar cadastro
        </button>
      </form>

      {
        <CustomModal
          MaxWidthBody="90%"
          MaxWidthHeader="90%"
          widthBody="600px"
          widthHeader="600px"
          isOpen={isOpen}
          onClose={onClose}
        >
          <div className="flex flex-col">
            <h2 className="text-xl font-bold  mb-6">Sucesso!</h2>
            <h2 className="text-xl font-bold  mb-6">
              Sua conta foi criada com sucesso!
            </h2>
            <p className="text-sm  mb-6">
              Agora você poderá ver seus negócios crescendo em grande escala
            </p>
            <Link
              href={'/login'}
              type="button"
              className="btn-primary relative top-0 left-0 w-2/5 font-bold"
            >
              Ir para o login
            </Link>
          </div>
        </CustomModal>
      }
    </div>
  );
};

export default RegisterForm;
