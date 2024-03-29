import { useRouter } from 'next/navigation';

import { Spinner } from '@chakra-ui/react';
import { iAdvertisement } from 'context/AdvertisementsContext';

interface CardProps {
  advertisements: iAdvertisement[] | null | undefined;
}

const getInitials = (name: string) => {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');

  return initials;
};

const ListAds = ({ advertisements }: CardProps) => {
  const router = useRouter();
  if (!advertisements) {
    return <Spinner color="blue" />;
  }
  const handleCarId = (carId: string) => {
    router.push(`/product_view/${carId}`);
  };
  return (
    <div className="w-full h-full  max-lg:h-80">
      <ul className="flex justify-center w-full h-full flex-wrap gap-11 max-lg:flex-col max-lg:overflow-x-auto">
        {advertisements.map((item: iAdvertisement) => (
          <li
            onClick={() => handleCarId(item.id)}
            key={item.id}
            className="w-4/5 flex flex-col gap-5 max-lg:h-80 sm:w-2/6 lg:w-5/12 xl:w-60 cursor-pointer "
          >
            <div className="flex  flex-col gap-4">
              <div className="w-full h-32 flex  justify-center items-center bg-gray-300">
                <img
                  className="w-5/6   h-28  object-cover "
                  src={
                    item.images[0]?.url
                      ? item.images[0].url
                      : 'https://www.ispsaude.com.br/images/image-404.png'
                  }
                  alt=""
                />
              </div>

              <p className="font-bold">{item.title}</p>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </p>
            </div>

            <div className="w-full h-full flex gap-3  items-center max-lg:h-0">
              <div className="w-8 h-8 bg-pink-400 rounded-full ">
                <p className="w-full h-full flex justify-center items-center  text-white">
                  {getInitials(item.User.fullname)}
                </p>
              </div>

              <span className="text-gray-700 font-semibold">
                {item.User.fullname}
              </span>
            </div>

            <div className="w-full h-full flex gap-3 justify-between">
              <div className="flex gap-2">
                <span className="text-brand-1 font-bold">
                  {item.mileage} KM
                </span>
                <span className="text-brand-1 font-bold">{item.year}</span>
              </div>

              <span className="font-bold">R$ {item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAds;
