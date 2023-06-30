import {
  AdvertisementsContext,
  useAdvertisements
} from 'context/AdvertisementsContext';
import { BiMessageError } from 'react-icons/bi';
import { useContext } from 'react';
import 'moment/locale/pt-br';
import moment from 'moment';
import { UserContext } from 'context/UserContext';

const CommentCard = () => {
  const { comment } = useContext(AdvertisementsContext);
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
  return (
    <>
      {comment && comment?.length > 0 ? (
        <ul className="flex flex-col gap-9 p-4 overflow-auto">
          {comment.map((item) => {
            const time = moment(item.createdAt).fromNow();
            return (
              <>
                <li key={item.id} className="flex flex-col gap-4">
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

                      <span className="text-gray-400 font-semibold">
                        {time}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-[100px] overflow-hidden">
                    <p>{item.content}</p>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      ) : (
        <>
          <div className="w-full h-[250px] flex flex-col gap-2 justify-center items-center">
            <h2 className="font-bold text-2xl text-brand-2 max-sm:text-base">
              Sem comentários...
            </h2>

            <BiMessageError
              className="text-brand-2"
              style={{
                fontSize: '6rem'
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CommentCard;
