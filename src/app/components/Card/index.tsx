import { useEffect } from 'react';

import { data } from 'autoprefixer';
import {
  iAdvertisement,
  useAdvertisements
} from 'context/AdvertisementsContext';

const Card = () => {
  const { advertisements, setAdvertisements, getAdvertisements } =
    useAdvertisements();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdvertisements({ limit: 12, page: 1 });
      setAdvertisements(data);
    };

    fetchData();
  }, []);

  if (!advertisements) {
    return <p>Loading...</p>;
  }
  console.log(advertisements);

  return (
    <div className="w-full h-full max-lg:h-80">
      <ul className="flex h-full flex-wrap gap-8 max-lg:flex-col max-lg:overflow-x-auto">
        {advertisements.data.map((item: iAdvertisement) => (
          <li
            key={item.id}
            className="w-72 h-80 flex flex-col gap-5 max-lg:h-80"
          >
            <div className="flex  flex-col gap-4">
              <div className="w-full h-32 flex  justify-center items-center">
                <img className="w-5/6   h-28  object-cover " src="" alt="" />
              </div>

              <p className="font-bold">{item.title}</p>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </p>
            </div>

            <div className="w-full h-full flex gap-3  items-center max-lg:h-0">
              <div className="w-8 h-8 bg-pink-400  rounded-full bg-gray-900">
                <p className="w-full h-full flex justify-center items-center  text-white">
                  {}
                </p>
              </div>

              <span className="text-gray-700 font-semibold">{}</span>
            </div>

            <div className="w-full h-full flex gap-3 justify-between">
              <div className="flex gap-2">
                <span className="text-brand-1 font-bold">
                  {item.mileage} KM
                </span>
                <span className="text-brand-1 font-bold">2019</span>
              </div>

              <span className="font-bold">R$ {item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
