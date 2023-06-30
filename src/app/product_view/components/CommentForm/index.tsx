import {
  AdvertisementsContext,
  iComment,
  useAdvertisements
} from 'context/AdvertisementsContext';
import { UserContext } from 'context/UserContext';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

const CommentForm = () => {
  const { register, handleSubmit, reset } = useForm<iComment>();
  const { createComment } = useContext(AdvertisementsContext);
  const { car } = useAdvertisements();
  const { user } = useContext(UserContext);
  if (!car || !user) {
    return <></>;
  }
  const getInitials = (name: string) => {
    const initials = name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('');

    return initials;
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const pathname = usePathname();
  const id = pathname.split('/')[2];

  const onSub = (data: iComment) => {
    createComment(data, id);

    reset();
  };

  return (
    <div className="my-32">
      <form onSubmit={handleSubmit(onSub)}>
        <div className="mb-2 w-full flex flex-col gap-2">
          <div>
            <div className="w-full h-full flex gap-3  items-center max-lg:h-0">
              <div className="w-8 h-8 bg-pink-400  rounded-full ">
                <p className="w-full h-full flex justify-center items-center  text-white">
                  {getInitials(user.fullname).toLocaleUpperCase()}
                </p>
              </div>

              <span className="text-gray-700 font-semibold">
                {capitalizeFirstLetter(user.fullname)}
              </span>
            </div>
          </div>

          <input
            type="text"
            id="content"
            placeholder="Carro muito confortavel, foi uma experiencia otima de compra"
            className=" w-full  rounded-md p-2 border outline-none h-20"
            {...register('content')}
          />

          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-brand-1 w-1/4 h-11 rounded-md text-white"
            >
              Comentar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
