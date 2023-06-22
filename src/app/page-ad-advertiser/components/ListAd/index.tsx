const ListAds = () => {
  const carArray = [
    {
      id: 1,
      image:
        'https://i.pinimg.com/736x/da/40/6d/da406db7a58751aa594e8ae36916b44f.jpg',
      carName: 'Toyota Camry',
      userName: 'John Smith',
      mileage: 5000,
      carValue: 25000
    },
    {
      id: 2,
      image:
        'https://i.pinimg.com/564x/08/2f/7f/082f7ff6a8721f4d36a4b017011eee22.jpg',
      carName: 'Honda Civic',
      userName: 'Emily Johnson',
      mileage: 8000,
      carValue: 22000
    },
    {
      id: 3,
      image:
        'https://i.pinimg.com/564x/33/95/77/3395770abda07fa452da041305519e9a.jpg',
      carName: 'Masserati',
      userName: 'Michael Brown',
      mileage: 3000,
      carValue: 35000
    },
    {
      id: 9,
      image:
        'https://i.pinimg.com/564x/80/fe/ce/80feceebd41999278f2eb2f5d5792c1b.jpg',
      carName: 'Tesla Model S',
      userName: 'Noah Taylor',
      mileage: 100,
      carValue: 70000
    },
    {
      id: 11,
      image:
        'https://i.pinimg.com/564x/af/8b/2b/af8b2bddab3f12fe5117e814535bf0f8.jpg',
      carName: 'Ford Mustang',
      userName: 'Dan Wilson',
      mileage: 1000,
      carValue: 15000
    },
    {
      id: 13,
      image:
        'https://i.pinimg.com/564x/68/08/2a/68082af4427fbbc513f2bf72b4dc2bd6.jpg',
      carName: 'Mitsubishi',
      userName: 'Ava Wilson',
      mileage: 9000,
      carValue: 16000
    }
  ];

  return (
    <div className="w-full h-full  max-lg:h-80">
      <ul className="flex w-full h-full flex-wrap gap-11 max-lg:flex-col max-lg:overflow-x-auto">
        {carArray.map((item) => (
          <li
            key={item.id}
            className="w-4/5 flex flex-col gap-5 max-lg:h-80 sm:w-2/6 lg:w-5/12 xl:w-60 "
          >
            <div className="flex  flex-col gap-4">
              <div className="w-full h-32 flex  justify-center items-center bg-gray-300">
                <img
                  className="w-5/6   h-28  object-cover "
                  src={item.image}
                  alt=""
                />
              </div>

              <p className="font-bold">{item.carName}</p>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem...
              </p>
            </div>

            <div className="w-full h-full flex gap-3  items-center max-lg:h-0">
              <div className="w-8 h-8 bg-pink-400 rounded-full bg-gray-900">
                <p className="w-full h-full flex justify-center items-center  text-white">
                  {item.userName.charAt(0)}
                </p>
              </div>

              <span className="text-gray-700 font-semibold">
                {item.userName}
              </span>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListAds;
