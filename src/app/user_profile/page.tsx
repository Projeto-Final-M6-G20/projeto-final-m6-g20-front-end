'use client';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import CreateAdForm from './components/CreateAdForm';
import UserDisplay from './components/UserDisplay';
import { Tooltip } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from 'context/UserContext';
import ModalProfile from './components/UserDisplay/components/modalProfile';
import ModalDelete from './components/UserDisplay/components/modalDelete';

const UserProfile = () => {
  const sellerData = {
    name: 'Julio Consentini',
    description: 'um garoto batraquio',
    id: 1,
    initials: ['J', 'C']
  };
  const { onOpen, onClose, isOpen } = useDisclosure();
  const { setMode } = useContext(UserContext);

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose
  } = useDisclosure();

  const onOpenFunction = () => {
    setMode('profile');
    onOpen();
  };

  const onCreateFunction = () => {
    setMode('create');
    onOpen();
  };

  return (
    <main className="flex flex-col min-h-full min-w-full items-center justify-center py-20 backgroundImage bg-no-repeat">
      <div className="flex flex-col gap-6 bg-white rounded h-min w-3/4 px-10 py-11">
        <Tooltip label="Editar perfil" fontSize="md">
          <div
            onClick={() => onOpenFunction()}
            className="w-[104px] h-[104px] bg-pink-400  rounded-full bg-gray-900 cursor-pointer"
          >
            <p className="w-full h-full flex justify-center items-center  text-white text-4xl">
              {sellerData.initials[0]}
              {sellerData.initials[1]}
            </p>
          </div>
        </Tooltip>

        <div className="flex flex-row items-center">
          <h2 className="heading-2-600">{sellerData.name}</h2>
          <p className="text-brand-1  h-full rounded bg-brand-4 p-2 align-middle">
            Anunciante
          </p>
        </div>

        <p className="text-base text-[#495057]">{sellerData.description}</p>

        <button
          className="border-2 border-brand-1 rounded-md text-brand-1 px-7 py-2 w-max h-max font-semibold"
          onClick={onCreateOpen}
        >
          Criar Anuncio
        </button>
      </div>

      <UserDisplay />

      <div className="flex w-full h-48 items-center justify-center gap-4">
        <div className="flex gap-2">
          <p className="text-xl text-gray-500">1 </p>
          <p className="text-xl text-gray-400"> de 2</p>
        </div>

        <button className="text-brand-1 font-bold flex items-center justify-center">
          Seguinte <MdOutlineKeyboardArrowRight className="text-xl" />{' '}
        </button>
      </div>

      <CreateAdForm isOpen={isCreateOpen} onClose={onCreateClose} />

      <ModalProfile onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      <ModalDelete isOpen={isOpen} onClose={onClose} />
    </main>
  );
};

export default UserProfile;
