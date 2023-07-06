import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  position,
  useDisclosure
} from '@chakra-ui/react';
import { UserContext } from 'context/UserContext';
import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscClose } from 'react-icons/vsc';
import ModalProfile from './modalProfile';
import ModalDelete from './modalDelete';
import ModalAd from './modalAd';
import { destroyCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import Toast from 'app/components/Toast';
import { AuthContext } from 'context/AuthContext';

const DropDown = () => {
  const router = useRouter();
  const { setMode, mode } = useContext(UserContext);
  const { user } = useContext(AuthContext);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onOpenFunction = () => {
    setMode('profile');
    onOpen();
  };

  const handleLogout = () => {
    destroyCookie(null, 'user.Token');
    Toast({
      message: 'Logout realizado!',
      isSucess: true
    });
    return router.push('/login');
  };

  if (!user) {
    return <></>;
  }

  let initials = '';
  const names = user.fullname.split(' ');

  if (names && names.length > 0) {
    const firstName = names[0];
    initials += firstName.charAt(0).toUpperCase();
  }

  if (names && names?.length > 1) {
    const lastName = names[names.length - 1];
    initials += lastName.charAt(0).toUpperCase();
  }
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button}>
                <div className="w-full h-full flex gap-3  items-center max-lg:h-0">
                  <div className="w-8 h-8 bg-pink-400  rounded-full bg-gray-900">
                    <p className="w-full h-full flex justify-center items-center  text-white">
                      {initials}
                    </p>
                  </div>

                  <span className="text-gray-700 font-semibold">
                    {capitalizeFirstLetter(user.fullname)}
                  </span>
                </div>
              </MenuButton>
              <MenuList
                className=" shadow-xl transform translate-y-4"
                style={{
                  background: 'white',
                  padding: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  width: '100%',
                  marginTop: '12px',
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  position: 'relative',
                  left: '17%'
                }}
              >
                <div className="flex flex-col gap-2">
                  {user?.is_advertiser ? (
                    <>
                      <button
                        onClick={() => onOpenFunction()}
                        className="flex text-gray-400 text-base"
                      >
                        Editar Perfil
                      </button>

                      <button
                        className="flex text-gray-400 text-base"
                        onClick={() => {
                          setMode('edit');
                          onOpen();
                        }}
                      >
                        Editar Endereço
                      </button>

                      <button
                        onClick={() => {
                          router.push('/user_profile');
                        }}
                        className="flex text-gray-400 text-base"
                      >
                        Meus Anuncios
                      </button>

                      <button
                        onClick={() => handleLogout()}
                        className="flex text-gray-400 text-base"
                      >
                        Sair
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => onOpenFunction()}
                        className="flex text-gray-400 text-base"
                      >
                        Editar Perfil
                      </button>

                      <button
                        className="flex text-gray-400 text-base"
                        onClick={() => {
                          setMode('edit');
                          onOpen();
                        }}
                      >
                        Editar Endereço
                      </button>

                      <button
                        onClick={() => handleLogout()}
                        className="flex text-gray-400 text-base"
                      >
                        Sair
                      </button>
                    </>
                  )}
                </div>
              </MenuList>
            </>
          )}
        </Menu>
      </>
      <ModalProfile onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      <ModalDelete isOpen={isOpen} onClose={onClose} />
      <ModalAd onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
    </>
  );
};

export default DropDown;
