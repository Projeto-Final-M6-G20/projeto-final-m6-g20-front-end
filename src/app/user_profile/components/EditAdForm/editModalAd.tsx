/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import ModalDelete from '../UserDisplay/components/modalDelete';
import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';

import { EditAdData } from './validator';

import { Tooltip } from '@chakra-ui/react';
import { AdvertisementsContext } from 'context/AdvertisementsContext';
import { UserContext } from 'context/UserContext';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
}

const EditAdModal = ({ isOpen, onClose }: ModalChildren) => {
  const { register, handleSubmit, setValue } = useForm<EditAdData>({
    // resolver: zodResolver(NewAdSchema)
  });
  const { mode, adData, setMode, setAdData, updateAdv } =
    useContext(UserContext);
  const { updateImage } = useContext(AdvertisementsContext);
  const [images, setImages] = useState<string[]>(['', '']);

  const changeImage = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    images[index] = event.target.value;
    setImages([...images]);
  };

  const AddInputImage = () => {
    setImages([...images, '']);
  };

  if (!adData) {
    return (
      <>
        <p>Carregando</p>
      </>
    );
  }

  const onSubFunction = (updata: any) => {
    const { urls, ...newData } = updata;

    updata.urls.map((image: string, i: any) => {
      if (image.length === 0) {
        return console.log({ vazio: image });
      }
      if (image.length > 0 && i !== 0) {
        adData.images.forEach((item, index) => {
          if (index !== 0 && index === i) {
            const updatedImage = { url: image };
            updateImage(adData.images[index].id, updatedImage);
            // console.log(adData.images[index])
          }
        });
      }
      if (i === 0 && image.length > 0) {
        const updatedImage = { url: image };
        updateImage(adData.images[0].id, updatedImage);
      }
    });

    console.log(adData.images);

    updateAdv(newData, adData?.id);
    onClose();
  };
  setValue('title', adData.title);
  setValue('year', adData.year);
  setValue('fipe_price', adData.fipe_price);
  setValue('fuel_type', adData.fuel_type);
  setValue('model', adData.model);
  setValue('brand', adData.brand);
  setValue('color', adData.color);
  setValue('mileage', adData.mileage);
  setValue('price', adData.price);
  setValue('description', adData.description);
  // setValue('url', adData.images[0].url);

  return (
    <>
      {mode === 'editAd' ? (
        <CustomModal
          MaxWidthBody="90%"
          MaxWidthHeader="90%"
          widthBody="600px"
          widthHeader="600px"
          heightBody="80%"
          isOpen={isOpen}
          onClose={onClose}
          headerText="Editar Anuncio"
        >
          <div className="flex flex-col w-full h-full overflow-auto ">
            <h2>Informações do veiculo</h2>
            <form
              className="w-full h-full p-2"
              onSubmit={handleSubmit(onSubFunction)}
            >
              <Tooltip label="Campo desabilitado por motivos de segurança">
                <Input
                  type="text"
                  label="Marca"
                  disabled={true}
                  id="brand"
                  style={{
                    width: '100%'
                  }}
                  {...register('brand')}
                />
              </Tooltip>

              <Input
                type="text"
                label="Nome"
                id="title"
                style={{
                  width: '100%'
                }}
                {...register('title')}
              />

              <Input
                type="text"
                label="Modelo"
                id="model"
                style={{
                  width: '100%'
                }}
                {...register('model')}
              />

              <div className="flex gap-12">
                <Input
                  type="text"
                  label="Ano"
                  id="year"
                  style={{
                    width: '100%'
                  }}
                  {...register('year')}
                />

                <Input
                  type="text"
                  label="Combustivel"
                  id="fuel"
                  style={{
                    width: '100%'
                  }}
                  {...register('fuel_type')}
                />
              </div>

              <div className="flex gap-12">
                <Input
                  type="texto"
                  label="Quilometragem"
                  id="millimiter"
                  placeholder={adData?.mileage}
                  style={{
                    width: '100%'
                  }}
                  {...register('mileage')}
                />

                <Input
                  type="text"
                  label="Cor"
                  id="color"
                  placeholder="Digite sua cor"
                  style={{
                    width: '100%'
                  }}
                  {...register('color')}
                />
              </div>

              <div className="flex gap-12">
                <Tooltip label="Campo desabilitado por motivos de segurança">
                  <Input
                    type="text"
                    label="Tabela de preço FIPE"
                    id="fipe"
                    disabled
                    style={{
                      width: '100%'
                    }}
                    {...register('fipe_price')}
                  />
                </Tooltip>

                <Input
                  type="text"
                  label="Preço"
                  id="price"
                  placeholder="Digite o preço"
                  {...register('price')}
                  style={{
                    width: '100%'
                  }}
                />
              </div>

              <div className="mb-2 w-full">
                <label
                  className="block  font-semibold mb-2"
                  htmlFor={'description'}
                >
                  Descrição
                </label>
                <textarea
                  id="description"
                  defaultValue={adData?.description}
                  style={{
                    width: '100%',
                    height: '90px'
                  }}
                  {...register('description')}
                />
              </div>

              <div className="flex flex-col  gap-8">
                <p>Publicado</p>

                <div className="flex gap-8">
                  <button
                    type="button"
                    onClick={() => {
                      const available = true;
                      setAdData({ ...adData!, is_available: available });
                      setValue('is_available', available);
                    }}
                    className="text-black hover:text-white items-center p-3 gap-2 hover:bg-brand-1  w-[100%] h-12 hover:border-brand-1 border-2 focus:bg-brand-1 focus:text-white rounded-md"
                  >
                    Sim
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const available = false;
                      setAdData({ ...adData!, is_available: available });
                      setValue('is_available', available);
                    }}
                    className="text-black hover:text-white items-center p-3 gap-2 hover:bg-brand-1  w-[100%] h-12 hover:border-brand-1 border-2 focus:bg-brand-1 focus:text-white  rounded-md"
                  >
                    Não
                  </button>
                </div>
              </div>

              {images.map((image, index) =>
                index === 0 ? (
                  <div className="mb-2 w-full" key={index + 1}>
                    <label
                      className="block  text-sm mb-2"
                      htmlFor={'cover_image'}
                    >
                      Imagem de Capa
                    </label>
                    <input
                      className="w-full bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4 h-12"
                      id={'cover_image'}
                      placeholder="https://image.com"
                      {...register(`urls.${index}`)}
                      value={images[index]}
                      onChange={(event) => changeImage(event, index)}
                    />
                  </div>
                ) : (
                  <div className="mb-2 w-full" key={index + 1}>
                    <label
                      className="block  text-sm mb-2"
                      htmlFor={`${index}° image`}
                    >
                      {`${index}° Imagem da galeria`}
                    </label>
                    <input
                      className="w-full bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4 h-12"
                      id={`${index}° image`}
                      placeholder="https://image.com"
                      {...register(`urls.${index}`)}
                      value={image}
                      onChange={(event) => changeImage(event, index)}
                    />
                  </div>
                )
              )}

              <div className="px-[20px] py-[12px] rounded-md text-brand-1 bg-brand-4 w-max text-sm font-semibold mb-[42px] disabled:text-brand-4">
                <button
                  type="button"
                  onClick={AddInputImage}
                  disabled={images.length >= 6}
                >
                  Adicionar campo para imagem da galeria
                </button>
              </div>

              <div className="flex flex-row w-full justify-end gap-[10px] mb-[18px]">
                <button
                  type="button"
                  className="text-base px-[28px] py-[12px] rounded-md text-[#495057] bg-[#DEE2E6] w-max font-semibold"
                  onClick={() => {
                    setMode('deleteAd'), onClose;
                  }}
                >
                  Excluir anuncio
                </button>

                <button
                  className="text-base px-[28px] py-[12px] rounded-md text-brand-4 bg-brand-2 w-max font-semibold"
                  type="submit"
                >
                  Atualizar anúncio
                </button>
              </div>
            </form>
          </div>
        </CustomModal>
      ) : (
        <></>
      )}
      <ModalDelete isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default EditAdModal;
