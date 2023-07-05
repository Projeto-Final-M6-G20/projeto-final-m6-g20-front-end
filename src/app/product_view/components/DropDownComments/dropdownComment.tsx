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

import { destroyCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import Toast from 'app/components/Toast';
import ModalProfile from 'app/user_profile/components/UserDisplay/components/modalProfile';
import ModalDelete from 'app/user_profile/components/UserDisplay/components/modalDelete';
import ModalAd from 'app/user_profile/components/UserDisplay/components/modalAd';
import { AiOutlineEllipsis } from 'react-icons/ai';
import EditComment from '../EditCommentForm';

interface dropDownProps {
  commentId: string;
  adsId: string;
}

const DropDownComment = ({ commentId, adsId }: dropDownProps) => {
  const router = useRouter();
  const { user, setMode, mode } = useContext(UserContext);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onOpenFunction = () => {
    setMode('editComment');
    onOpen();
  };

  const onOpenDelete = () => {
    setMode('deleteComment');
    onOpen();
  };

  const handleLogout = () => {};

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
                <div className="flex justify-center items-center h-[30px]">
                  <AiOutlineEllipsis className="text-3xl cursor-pointer" />
                </div>
              </MenuButton>
              <MenuList
                className=" shadow-xl transform translate-y-4"
                style={{
                  background: 'white',
                  padding: '5px 11px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  minWidth: '0px',
                  // width: '100%',
                  border: '2px solid #5126EA',
                  borderRadius: '28px 0px 11px 22px',
                  paddingLeft: '11px',
                  paddingRight: '11px',
                  position: 'relative'
                }}
              >
                <div className="flex flex-col gap-2">
                  <>
                    <button
                      className="flex text-gray-400 text-base"
                      onClick={() => onOpenFunction()}
                    >
                      Editar comentario
                    </button>

                    <button
                      onClick={() => onOpenDelete()}
                      className="flex text-gray-400 text-base"
                    >
                      Excluir comentario
                    </button>
                  </>
                </div>
              </MenuList>
            </>
          )}
        </Menu>
      </>
      <EditComment
        onClose={onClose}
        isOpen={isOpen}
        commentId={commentId}
        adsId={adsId}
      />
      <ModalDelete
        onClose={onClose}
        isOpen={isOpen}
        commentId={commentId}
        adsId={adsId}
      />
    </>
  );
};

export default DropDownComment;
