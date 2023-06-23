'use client';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import CreateAdForm from './components/CreateAdForm';
import UserDisplay from './components/UserDisplay';
import { Tooltip } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { UserContext } from 'context/UserContext';
import ModalProfile from './components/UserDisplay/components/modalProfile';
import ModalDelete from './components/UserDisplay/components/modalDelete';
import Container from 'app/components/Container/container';

const UserProfile = () => {
  const sellerData = {
    name: 'Julio Consentini',
    description: 'um garoto batraquio',
    id: 1,
    initials: ['J', 'C']
  };

  const { user, getUser } = useContext(UserContext);

  let initials = '';
  const names = user?.fullname.split(' ');

  if (names && names?.length > 0) {
    const firstName = names[0];
    initials += firstName.charAt(0).toUpperCase();
  }

  if (names && names?.length > 1) {
    const lastName = names[names.length - 1];
    initials += lastName.charAt(0).toUpperCase();
  }

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose
  } = useDisclosure();

  useEffect(() => {
    console.log(user);
    getUser();
  }, []);
  return (
    <main className="flex min-h-screen flex-col   items-center justify-center py-20 backgroundImage bg-contain bg-no-repeat">
      <Container>
        <div className="flex flex-col gap-6 bg-white rounded h-min w-3/4 px-10 py-11">
          <div className="w-[104px] h-[104px] bg-pink-400  rounded-full bg-gray-900 cursor-pointer">
            {names ? (
              <p className="w-full h-full flex justify-center items-center  text-white text-4xl">
                {initials}
              </p>
            ) : (
              <p className="w-full h-full flex justify-center items-center  text-white text-4xl">
                ??
              </p>
            )}
          </div>

          <div className="flex flex-row items-center">
            <h2 className="w-[13rem] heading-2-600">{user?.fullname}</h2>
            {user?.is_advertiser ? (
              <p className="text-brand-1  h-full rounded bg-brand-4 p-2 align-middle">
                Anunciante
              </p>
            ) : (
              <p className="text-brand-1  h-full rounded bg-brand-4 p-2 align-middle">
                Comprador
              </p>
            )}
          </div>

          <p className="text-base text-[#495057]">{user?.description}</p>

          {user && user.is_advertiser ? (
            <button
              className="border-2 border-brand-1 rounded-md text-brand-1 px-7 py-2 w-max h-max font-semibold"
              onClick={onCreateOpen}
            >
              Criar Anuncio
            </button>
          ) : (
            <></>
          )}
        </div>

        <UserDisplay />

        {user && user?.is_advertiser ? (
          <div className="flex w-full h-48 items-center justify-center gap-4">
            <>
              <div className="flex gap-2">
                <p className="text-xl text-gray-500">1 </p>
                <p className="text-xl text-gray-400"> de 2</p>
              </div>

              <button className="text-brand-1 font-bold flex items-center justify-center">
                Seguinte <MdOutlineKeyboardArrowRight className="text-xl" />{' '}
              </button>
            </>
          </div>
        ) : (
          <></>
        )}

        <CreateAdForm isOpen={isCreateOpen} onClose={onCreateClose} />
      </Container>
    </main>
  );
};

export default UserProfile;
