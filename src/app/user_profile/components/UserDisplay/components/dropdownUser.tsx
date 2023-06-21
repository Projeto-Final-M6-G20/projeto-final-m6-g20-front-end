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
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';

const DropDown = () => {
  const { user, setMode } = useContext(UserContext);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onOpenFunction = () => {
    setMode('profile');
    onOpen();
  };

  const cookies = parseCookies();
  const token = cookies['user.Token'];
  const router = useRouter();
  const handleLogout = () => {
    const deleteCookie = (cookie: string) => {
      document.cookie = `${cookie}`;
    };

    deleteCookie(token);
    return router.push('/login');
  };

  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button}>
              <div className="w-full h-full flex gap-3  items-center max-lg:h-0">
                <div className="w-8 h-8 bg-pink-400  rounded-full bg-gray-900">
                  <p className="w-full h-full flex justify-center items-center  text-white">
                    {user?.fullname.charAt(0)}
                    {user?.fullname.charAt(6)}
                  </p>
                </div>

                <span className="text-gray-700 font-semibold">
                  {user?.fullname}
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

                    <button className="flex text-gray-400 text-base">
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
      <ModalProfile onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
      <ModalDelete isOpen={isOpen} onClose={onClose} />
      <ModalAd onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
    </>
  );
};

export default DropDown;