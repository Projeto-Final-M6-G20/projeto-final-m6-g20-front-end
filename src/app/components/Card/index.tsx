const Card = () => {
  const carArray = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/da/40/6d/da406db7a58751aa594e8ae36916b44f.jpg",
      carName: "Toyota Camry",
      userName: "John Smith",
      mileage: 5000,
      carValue: 25000,
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/08/2f/7f/082f7ff6a8721f4d36a4b017011eee22.jpg",
      carName: "Honda Civic",
      userName: "Emily Johnson",
      mileage: 8000,
      carValue: 22000,
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/564x/33/95/77/3395770abda07fa452da041305519e9a.jpg",
      carName: "Masserati",
      userName: "Michael Brown",
      mileage: 3000,
      carValue: 35000,
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/564x/7d/72/76/7d7276b663438f33d7fbf1292e0361eb.jpg",
      carName: "Chevrolet Corvette",
      userName: "Sophia Davis",
      mileage: 2000,
      carValue: 45000,
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/564x/55/c7/e7/55c7e7818fc58a9e740a8527cb3d11b5.jpg",
      carName: "BMW 3 Series",
      userName: "Daniel Wilson",
      mileage: 6000,
      carValue: 30000,
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/564x/cb/a5/7a/cba57a095ad59c031ffff5aab9e26dcc.jpg",
      carName: "Audi A1",
      userName: "Olivia Thompson",
      mileage: 4000,
      carValue: 28000,
    },
    {
      id: 7,
      image:
        "https://i.pinimg.com/564x/c5/72/49/c572495a735f8c9a42c9419524c90b23.jpg",
      carName: "Mercedes-Benz C-Class",
      userName: "David Martinez",
      mileage: 10000,
      carValue: 32000,
    },
    {
      id: 8,
      image:
        "https://i.pinimg.com/564x/62/8d/e8/628de8483d7cf057885246ebdfad2fe2.jpg",
      carName: "Volkswagen Golf",
      userName: "Emma Anderson",
      mileage: 1500,
      carValue: 18000,
    },
    {
      id: 9,
      image:
        "https://i.pinimg.com/564x/80/fe/ce/80feceebd41999278f2eb2f5d5792c1b.jpg",
      carName: "Tesla Model S",
      userName: "Noah Taylor",
      mileage: 100,
      carValue: 70000,
    },
    {
      id: 10,
      image:
        "https://i.pinimg.com/564x/68/08/2a/68082af4427fbbc513f2bf72b4dc2bd6.jpg",
      carName: "Mitsubishi",
      userName: "Ava Wilson",
      mileage: 9000,
      carValue: 15000,
    },
  ];

  const carro =
    "https://i.pinimg.com/564x/d5/1c/07/d51c074264dc22c6b3b49fae2d2b8019.jpg";
  return (
    <ul className="w-3/4 flex flex-wrap gap-4">
      {carArray.map((item) => (
        <li key={item.id} className="w-80 flex flex-col gap-5">
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-center items-center">
              <img
                className=" w-11/12 h-52 object-fit "
                src={item.image}
                alt=""
              />
            </div>

            <p>{item.carName}</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem...
            </p>
          </div>

          <div className="flex gap-3  items-center">
            <div className="w-12 h-12 bg-pink-400  rounded-full bg-gray-900">
              <p className="w-full h-full flex justify-center items-center text-2xl text-white">
                {item.userName.charAt(0)}
              </p>
            </div>

            <span>{item.userName}</span>
          </div>

          <div className="flex gap-3 justify-between">
            <div className="flex gap-2">
              <span className="text-brand-1 font-bold">{item.mileage} KM</span>
              <span className="text-brand-1 font-bold">2019</span>
            </div>

            <span className="font-bold">R$ {item.carValue}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
