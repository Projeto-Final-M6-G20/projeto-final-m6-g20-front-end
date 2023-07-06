import { useContext } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';

import ModalDelete from 'app/user_profile/components/UserDisplay/components/modalDelete';

import EditComment from '../EditCommentForm';

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure
} from '@chakra-ui/react';
import { UserContext } from 'context/UserContext';

interface dropDownProps {
  commentId: string;
  adsId: string;
}

const DropDownComment = ({ commentId, adsId }: dropDownProps) => {
  const { user, setMode } = useContext(UserContext);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const onOpenFunction = () => {
    setMode('editComment');
    onOpen();
  };

  const onOpenDelete = () => {
    setMode('deleteComment');
    onOpen();
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initials += lastName.charAt(0).toUpperCase();
  }

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
