const Card = () => {
  const carro =
    "https://i.pinimg.com/564x/d5/1c/07/d51c074264dc22c6b3b49fae2d2b8019.jpg";
  return (
    <ul className="w-3/4 flex flex-wrap gap-4">
      <li className="w-80 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-center items-center">
            <img className=" w-11/12 object-contain " src={carro} alt="" />
          </div>

          <p>Audi</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
        </div>

        <div className="flex gap-3  items-center">
          <div className="w-12 h-12 bg-pink-400  rounded-full bg-gray-900">
            <p className="w-full h-full flex justify-center items-center text-2xl text-white">
              R
            </p>
          </div>

          <span>Evenlin Camila</span>
        </div>

        <div className="flex gap-3 justify-between">
          <div className="flex gap-2">
            <span className="text-brand-1 font-bold">O KM</span>
            <span className="text-brand-1 font-bold">2019</span>
          </div>

          <span className="font-bold">R$ 00.000,00</span>
        </div>
      </li>

      <li className="w-80 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-center items-center">
            <img className=" w-11/12 object-contain " src={carro} alt="" />
          </div>

          <p>Audi</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
        </div>

        <div className="flex gap-3  items-center">
          <div className="w-12 h-12 bg-pink-400  rounded-full bg-gray-900 ">
            <p className="w-full h-full flex justify-center items-center text-2xl rounded-3xl text-white">
              R
            </p>
          </div>

          <span>Evenlin Camila</span>
        </div>

        <div className="flex gap-3 justify-between">
          <div className="flex gap-2">
            <span className="text-brand-1 font-bold">O KM</span>
            <span className="text-brand-1 font-bold">2019</span>
          </div>

          <span className="font-bold">R$ 00.000,00</span>
        </div>
      </li>
      <li className="w-80 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-center items-center">
            <img className=" w-11/12 object-contain " src={carro} alt="" />
          </div>

          <p>Audi</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
        </div>

        <div className="flex gap-3  items-center">
          <div className="w-12 h-12 bg-pink-400  rounded-full bg-gray-900 ">
            <p className="w-full h-full flex justify-center items-center text-2xl rounded-3xl text-white">
              R
            </p>
          </div>

          <span>Evenlin Camila</span>
        </div>

        <div className="flex gap-3 justify-between">
          <div className="flex gap-2">
            <span className="text-brand-1 font-bold">O KM</span>
            <span className="text-brand-1 font-bold">2019</span>
          </div>

          <span className="font-bold">R$ 00.000,00</span>
        </div>
      </li>
      <li className="w-80 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-center items-center">
            <img className=" w-11/12 object-contain " src={carro} alt="" />
          </div>

          <p>Audi</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
        </div>

        <div className="flex gap-3  items-center">
          <div className="w-12 h-12 bg-pink-400  rounded-full bg-gray-900 ">
            <p className="w-full h-full flex justify-center items-center text-2xl rounded-3xl text-white">
              R
            </p>
          </div>

          <span>Evenlin Camila</span>
        </div>

        <div className="flex gap-3 justify-between">
          <div className="flex gap-2">
            <span className="text-brand-1 font-bold">O KM</span>
            <span className="text-brand-1 font-bold">2019</span>
          </div>

          <span className="font-bold">R$ 00.000,00</span>
        </div>
      </li>
    </ul>
  );
};

export default Card;
