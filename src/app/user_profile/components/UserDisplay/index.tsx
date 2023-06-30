import { useDisclosure } from '@chakra-ui/react';
import { TfiFaceSad } from 'react-icons/tfi';
import { AiOutlineWarning } from 'react-icons/ai';
import React, { useContext, useState } from 'react';
import { UserContext } from 'context/UserContext';
import CreateAdForm from '../CreateAdForm';
import EditAdModal from '../EditAdForm/editModalAd';
import { useAdvertisements } from 'context/AdvertisementsContext';

const UserDisplay = () => {
  const [active, setActive] = useState(false);
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose
  } = useDisclosure();

  const { car } = useAdvertisements();

  const { setMode, mode, adv, user, getAd, updateAdv } =
    useContext(UserContext);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onOpenFunction = (id: string) => {
    getAd(id);
    setMode('editAd');
    onOpen();
  };
  console.log(adv);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {adv && adv?.length != 0 ? (
        <div className="w-10/12 h-full max-lg:h-80">
          <ul className="flex h-full w-full flex-wrap gap-[4%] max-lg:flex-col max-lg:overflow-x-auto pt-20 px-[4%]">
            {adv &&
              adv.map((item) => (
                <li
                  key={item.id}
                  className="w-[22%] flex flex-col gap-5 max-lg:h-80 mb-20 relative"
                >
                  <div className="flex  flex-col gap-4 ">
                    <div className="w-full h-32 flex  justify-center items-center bg-[#E9ECEF]">
                      <img
                        className="w-5/6   h-28  object-cover "
                        src={car?.images[0].url}
                        alt=""
                      />
                    </div>

                    {item.is_available ? (
                      <div className="flex justify-center items-center h-[32px] w-[70px] absolute top-3 left-3 bg-brand-1 text-sm text-white font-medium pt-0.5 hover:bg-brand-2">
                        Ativo
                      </div>
                    ) : (
                      <div className="flex justify-center items-center h-[32px] w-[70px] absolute top-3 left-3 bg-[#ADB5BD] text-sm text-white font-medium pt-0.5 hover:bg-brand-2">
                        Inativo
                      </div>
                    )}

                    <p className="font-bold">
                      {capitalizeFirstLetter(item.title)}
                    </p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>

                  <div className="w-full h-full flex gap-3 justify-between">
                    <div className="flex gap-2">
                      <span className="text-brand-1 font-bold">
                        {item.mileage} KM
                      </span>
                      <span className="text-brand-1 font-bold">
                        {item.year}
                      </span>
                    </div>

                    <span className="font-bold">R$ {item.price}</span>
                  </div>
                  <div className="flex flex-row gap-5">
                    <button
                      onClick={() => onOpenFunction(item.id)}
                      className="flex flex-row justify-center items-center text-black font-semibold p-3 gap-2 w-max h-12 border-2 border-black rounded-md"
                    >
                      Editar
                    </button>
                    <button className="flex flex-row justify-center items-center text-black font-semibold p-3 gap-2 w-max h-12 border-2 border-black rounded-md">
                      Ver Detalhes
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className="w-full h-80 flex justify-center ">
          <div className="w-full h-full flex justify-center items-center flex-col gap-6">
            <>
              {user && user?.is_advertiser ? (
                <>
                  <h2 className="font-bold text-3xl text-brand-2 max-sm:text-base">
                    Você ainda não possui nenhum anuncio
                  </h2>

                  <TfiFaceSad
                    className="text-brand-2"
                    style={{
                      fontSize: '8rem'
                    }}
                  />

                  <button
                    className="border-2 border-brand-1 rounded-md text-brand-1 px-7 py-2 w-1/4 h-max font-semibold"
                    onClick={onCreateOpen}
                  >
                    Criar Anuncio
                  </button>
                </>
              ) : (
                <>
                  <h2 className="font-bold text-3xl text-brand-2">
                    Essa pagina ainda está sendo desenvolvida...
                  </h2>

                  <AiOutlineWarning
                    className="text-brand-2"
                    style={{
                      fontSize: '8rem'
                    }}
                  />
                </>
              )}
            </>
          </div>
        </div>
      )}
      <EditAdModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default UserDisplay;
