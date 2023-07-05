import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'context/UserContext';
import { Tooltip, useDisclosure } from '@chakra-ui/react';
import api from 'service/api';
import { add } from 'date-fns';
import ModalDelete from 'app/user_profile/components/UserDisplay/components/modalDelete';
import { AdvertisementsContext, iComment } from 'context/AdvertisementsContext';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
  commentId: string;
  adsId: string;
}

const EditComment = ({ isOpen, onClose, commentId, adsId }: ModalChildren) => {
  const { register, handleSubmit, setValue } = useForm<iComment>({
    // resolver: zodResolver(NewAdSchema)
  });
  const { mode } = useContext(UserContext);
  const { updateComment, comment } = useContext(AdvertisementsContext);

  if (!comment) {
    return (
      <>
        <p>Carregando</p>
      </>
    );
  }

  const onSubFunction = (data: iComment) => {
    updateComment(data, commentId, adsId);
    onClose();
  };

  //   setValue('content', comment[0].content);

  return (
    <>
      {mode === 'editComment' ? (
        <CustomModal
          MaxWidthBody="90%"
          MaxWidthHeader="90%"
          widthBody="600px"
          widthHeader="600px"
          heightBody="80%"
          isOpen={isOpen}
          onClose={onClose}
          headerText="Editar Comentario"
        >
          <div className="flex flex-col w-full h-full overflow-auto">
            <form
              className="w-full h-full p-2"
              onSubmit={handleSubmit(onSubFunction)}
            >
              <Input
                type="text"
                label="Comentario"
                id="content"
                placeholder="Edite seu comentario
                "
                {...register('content')}
              />
              <div className="flex flex-row w-full justify-end gap-[10px] mb-[18px]">
                <button
                  className="text-base px-[28px] py-[12px] rounded-md text-brand-4 bg-brand-2 w-max font-semibold"
                  type="submit"
                >
                  Atualizar Comentario
                </button>
              </div>
            </form>
          </div>
        </CustomModal>
      ) : (
        <></>
      )}
    </>
  );
};

export default EditComment;
