import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { NewAdData, NewAdSchema } from './validator';

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from 'context/UserContext';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
}

const CreateAdForm = ({ isOpen, onClose }: ModalChildren) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<NewAdData>({
    resolver: zodResolver(NewAdSchema)
  });

  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
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

  const submitCarAd = async (data: NewAdData) => {
    console.log(data);
    await createCarAd({
      ...data,
      price: parseInt(data.price)
    });
    onClose();
  };

  const {
    getCarBrands,
    brands,
    setSelectedBrand,
    getCarModels,
    models,
    selectedBrand,
    selectedModel,
    setSelectedModel,
    createCarAd
  } = useContext(UserContext);

  useEffect(() => {
    getCarBrands();
  }, []);

  useEffect(() => {
    getCarModels();
  }, [selectedBrand]);

  useEffect(() => {
    if (selectedModel) {
      const modelInfo = models.filter(
        (element) => element.name == selectedModel
      );
      setValue(
        'fuel_type',
        modelInfo[0]?.fuel == 1
          ? 'Flex'
          : modelInfo[0]?.fuel == 2
          ? 'Híbrido'
          : modelInfo[0]?.fuel == 3
          ? 'Elétrico'
          : ''
      );
      setValue('fipe_price', parseInt(modelInfo[0]?.value));
      setValue('year', parseInt(modelInfo[0]?.year));
    }
  }, [selectedModel]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay className="w-full h-full flex flex-col items-center bg-opacity-70 bg-black overflow-scroll">
        <ModalHeader className="bg-white w-full max-w-xl rounded-t-md py-5 px-6 relative text-base font-medium mt-3">
          Criar Anuncio
          <ModalCloseButton className="absolute right-6 top-5" />
        </ModalHeader>

        <ModalBody className="bg-white w-full max-w-xl rounded-b-md px-6 mb-3">
          <p className="text-sm mb-6">Infomações do veículo</p>
          <form
            onSubmit={handleSubmit(submitCarAd)}
            className="flex flex-row flex-wrap w-full justify-between overflow-scroll"
          >
            <div className="mb-2 w-full">
              <label className="block  text-sm mb-2" htmlFor={'title'}>
                Titulo
              </label>
              <input
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 pl-4 focus:outline-none"
                id={'title'}
                placeholder="Digite o titulo"
                {...register('title')}
              ></input>
            </div>

            <div className="mb-2 w-full">
              <label className="block  text-sm mb-2" htmlFor={'brand'}>
                Marca
              </label>
              <select
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 pl-4"
                id={'brand'}
                placeholder="selecione a marca"
                {...register('brand')}
                onChange={(event) => {
                  setSelectedBrand(event.target.value);
                }}
              >
                {brands.map((element, index) => (
                  <option value={element} key={index}>
                    {element}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-2 w-full">
              <label className="block  text-sm mb-2" htmlFor={'model'}>
                Modelo
              </label>
              <select
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 pl-4"
                id={'model'}
                {...register('model')}
                onChange={(event) => {
                  setSelectedModel(event.target.value);
                }}
              >
                {models.map((element, index) => (
                  <option value={element.name} key={index}>
                    {element.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-2 w-[48%]">
              <label className="block  text-sm mb-2" htmlFor={'year'}>
                Ano
              </label>
              {errors?.year?.message && <p>{errors.year.message}</p>}
              <input
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4"
                id={'year'}
                placeholder="2022"
                {...register('year')}
                disabled={true}
              />
            </div>

            <div className="mb-2 w-[48%]">
              <label className="block  text-sm mb-2" htmlFor={'fuel_type'}>
                Combustivel
              </label>
              <input
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4"
                id={'fuel_type'}
                placeholder="Flex"
                {...register('fuel_type')}
                disabled={true}
              />
            </div>

            <div className="mb-2 w-[48%]">
              <label className="block  text-sm mb-2" htmlFor={'milleage'}>
                Quilometragem
              </label>
              {errors?.mileage?.message && <p>{errors.mileage.message}</p>}
              <input
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4"
                placeholder="30.000"
                id={'mileage'}
                {...register('mileage')}
                type="number"
              />
            </div>

            <div className="mb-2 w-[48%]">
              <label className="block  text-sm mb-2" htmlFor={'color'}>
                Cor
              </label>

              <input
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4"
                id={'color'}
                placeholder="Digite a cor"
                {...register('color')}
              />
            </div>

            <div className="mb-2 w-[48%]">
              <label className="block  text-sm mb-2" htmlFor={'fipe_price'}>
                Preço tabela FIPE
              </label>
              <input
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4"
                id={'fipe_price'}
                placeholder="R$ 48.000,00"
                {...register('fipe_price')}
                disabled={true}
              />
            </div>

            <div className="mb-2 w-[48%]">
              <label className="block  text-sm mb-2" htmlFor={'price'}>
                Preço
              </label>
              <input
                className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4"
                id={'price'}
                placeholder="R$ 50.000,00"
                {...register('price')}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-2 w-full">
              <label className="block  text-sm mb-2" htmlFor={'description'}>
                Descrição
              </label>
              <input
                className="w-full bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4 h-[80px]"
                id={'description'}
                placeholder="Descreva detalhes do carro aqui..."
                {...register('description')}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
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
              <button onClick={AddInputImage} disabled={images.length >= 6}>
                Adicionar campo para imagem da galeria
              </button>
            </div>
            <div className="flex flex-row w-full justify-end gap-[10px] mb-[18px]">
              <button
                className="text-base px-[28px] py-[12px] rounded-md text-[#495057] bg-[#DEE2E6] w-max font-semibold"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="text-base px-[28px] py-[12px] rounded-md text-brand-4 bg-brand-3 w-max font-semibold"
                type="submit"
              >
                Criar anúncio
              </button>
            </div>
          </form>
        </ModalBody>
      </ModalOverlay>
    </Modal>
  );
};

export default CreateAdForm;
