import { Button, useDisclosure } from '@chakra-ui/react';
import ModalProfile from './components/modalProfile';
import React, { useContext, useState } from 'react';
import { UserContext } from 'context/UserContext';
import ModalAd from './components/modalAd';
import ModalDelete from './components/modalDelete';

const UserDisplay = () => {
  const [active, setActive] = useState(false);
  const carArray = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/736x/da/40/6d/da406db7a58751aa594e8ae36916b44f.jpg',
      carName: 'Toyota Camry',
      userName: 'John Smith',
      mileage: 5000,
      isActive: true,
      carValue: 25000
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/08/2f/7f/082f7ff6a8721f4d36a4b017011eee22.jpg',
      carName: 'Honda Civic',
      userName: 'Emily Johnson',
      mileage: 8000,
      isActive: true,
      carValue: 22000
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/33/95/77/3395770abda07fa452da041305519e9a.jpg',
      carName: 'Masserati',
      userName: 'Michael Brown',
      mileage: 3000,
      isActive: true,
      carValue: 35000
    },
    {
      id: 4,
      image:
        'https://i.pinimg.com/564x/7d/72/76/7d7276b663438f33d7fbf1292e0361eb.jpg',
      carName: 'Chevrolet Corvette',
      userName: 'Sophia Davis',
      mileage: 2000,
      isActive: true,
      carValue: 45000
    },
    {
      id: 5,
      image:
        'https://i.pinimg.com/564x/55/c7/e7/55c7e7818fc58a9e740a8527cb3d11b5.jpg',
      carName: 'BMW 3 Series',
      userName: 'Daniel Wilson',
      mileage: 6000,
      isActive: true,
      carValue: 30000
    },
    {
      id: 6,
      image:
        'https://i.pinimg.com/564x/cb/a5/7a/cba57a095ad59c031ffff5aab9e26dcc.jpg',
      carName: 'Audi A1',
      userName: 'Olivia Thompson',
      mileage: 4000,
      isActive: false,
      carValue: 28000
    },
    {
      id: 7,
      image:
        'https://i.pinimg.com/564x/c5/72/49/c572495a735f8c9a42c9419524c90b23.jpg',
      carName: 'Mercedes-Benz C-Class',
      userName: 'David Martinez',
      mileage: 10000,
      isActive: true,
      carValue: 32000
    },
    {
      id: 8,
      image:
        'https://i.pinimg.com/564x/62/8d/e8/628de8483d7cf057885246ebdfad2fe2.jpg',
      carName: 'Volkswagen Golf',
      userName: 'Emma Anderson',
      mileage: 1500,
      isActive: false,
      carValue: 18000
    },
    {
      id: 9,
      image:
        'https://i.pinimg.com/564x/80/fe/ce/80feceebd41999278f2eb2f5d5792c1b.jpg',
      carName: 'Tesla Model S',
      userName: 'Noah Taylor',
      mileage: 100,
      isActive: true,
      carValue: 15000
    },
    {
      id: 12,
      image:
        'https://i.pinimg.com/564x/d0/08/53/d00853120ee040ae6c1f3cb60d5b57be.jpg',
      carName: 'Hundai Santa fe',
      userName: 'Cintya Jhonson',
      mileage: 4000,
      isActive: true,
      carValue: 35000
    },
    {
      id: 13,
      image:
        'https://i.pinimg.com/564x/68/08/2a/68082af4427fbbc513f2bf72b4dc2bd6.jpg',
      carName: 'Mitsubishi',
      userName: 'Ava Wilson',
      mileage: 9000,
      isActive: false,
      carValue: 16000
    }
  ];

  const { setMode } = useContext(UserContext);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onOpenFunction = () => {
    setMode('ad');
    setActive(false);
    onOpen();
  };

  return (
    <div className="w-10/12 h-full max-lg:h-80">
      <ul className="flex h-full w-full flex-wrap gap-[4%] max-lg:flex-col max-lg:overflow-x-auto pt-20 px-[4%]">
        {carArray.map((item) => (
          <li
            key={item.id}
            className="w-[22%] flex flex-col gap-5 max-lg:h-80 mb-20 relative"
          >
            <div className="flex  flex-col gap-4 ">
              <div className="w-full h-32 flex  justify-center items-center bg-[#E9ECEF]">
                <img
                  className="w-5/6   h-28  object-cover "
                  src={item.image}
                  alt=""
                />
              </div>

              {item.isActive ? (
                <div className="flex justify-center items-center h-[32px] w-[70px] absolute top-3 left-3 bg-brand-1 text-sm text-white font-medium pt-0.5 hover:bg-brand-2">
                  Ativo
                </div>
              ) : (
                <div className="flex justify-center items-center h-[32px] w-[70px] absolute top-3 left-3 bg-[#ADB5BD] text-sm text-white font-medium pt-0.5 hover:bg-brand-2">
                  Inativo
                </div>
              )}

              <p className="font-bold">{item.carName}</p>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </p>
            </div>

            <div className="w-full h-full flex gap-3 justify-between">
              <div className="flex gap-2">
                <span className="text-brand-1 font-bold">
                  {item.mileage} KM
                </span>
                <span className="text-brand-1 font-bold">2019</span>
              </div>

              <span className="font-bold">R$ {item.carValue}</span>
            </div>
            <div className="flex flex-row gap-5">
              <button
                onClick={() => onOpenFunction()}
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

      <ModalAd
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};

export default UserDisplay;
