import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Input from 'app/components/Input';
import CustomModal from 'app/components/Modal';
import { useContext, useEffect, useState } from 'react';
import { NewAdData, NewAdSchema } from '../CreateAdForm/validator';
import { UserContext } from 'context/UserContext';
import ModalDelete from '../UserDisplay/components/modalDelete';
import { useDisclosure } from '@chakra-ui/react';
import api from 'service/api';

interface ModalChildren {
  isOpen: boolean;
  onClose: () => void;
}

const EditAdModal = ({ isOpen, onClose }: ModalChildren) => {
  const { register, handleSubmit, setValue } = useForm<NewAdData>({
    // resolver: zodResolver(NewAdSchema)
  });
  const {
    mode,
    adData,
    setMode,
    setAdData,
    updateAdv,
    brands,
    setSelectedBrand,
    models,
    setSelectedModel,
    selectedBrand,
    getCarModels,
    getCarBrands,
    selectedModel
  } = useContext(UserContext);

  const [year, setYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [fipe, setFipe] = useState('');
  const [price, setPrice] = useState('');
  const [km, setKm] = useState('');

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

  const onSubFunction = (updata: any) => {
    console.log(updata);
    const newData = {
      ...updata,
      price: Number(updata.price),
      year: Number(updata.year),
      fipe_price: Number(updata.fipe_price)
    };
    updateAdv(newData, adData!.id);
    onClose();
  };

  useEffect(() => {
    getCarBrands();
  }, []);

  useEffect(() => {
    getCarModels();
  }, [selectedBrand, getCarModels]);

  useEffect(() => {
    if (models) {
      const modelInfo = models.filter(
        (element) => element.name == selectedModel
      );
      setFuel(
        modelInfo[0]?.fuel == 1
          ? 'Flex'
          : modelInfo[0]?.fuel == 2
          ? 'Híbrido'
          : modelInfo[0]?.fuel == 3
          ? 'Elétrico'
          : ''
      );
      setFipe(modelInfo[0]?.value);
      setYear(modelInfo[0]?.year);
    }
  }, [selectedModel]);

  useEffect(() => {
    setValue('year', year);
    setValue('fipe_price', fipe);
    setValue('fuel_type', fuel);
  }, [getCarModels]);

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
              <div className="mb-2 w-full">
                <label className="block  text-sm mb-2" htmlFor={'brand'}>
                  Marca
                </label>
                <select
                  className="w-full h-12 bg-white rounded-md border-2 focus:border-brand-1 pl-4"
                  required
                  id={'brand'}
                  placeholder="selecione a marca"
                  {...register('title')}
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
                  required
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

              <div className="flex gap-12">
                <Input
                  type="text"
                  label="Ano"
                  id="year"
                  style={{
                    width: '100%'
                  }}
                  {...register('year')}
                  value={year}
                />

                <Input
                  type="text"
                  label="Combustivel"
                  id="fuel"
                  style={{
                    width: '100%'
                  }}
                  {...register('fuel_type')}
                  value={fuel}
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
                <Input
                  type="text"
                  label="Tabela de preço FIPE"
                  id="fipe"
                  defaultValue={fipe}
                  style={{
                    width: '100%'
                  }}
                  {...register('fipe_price')}
                />

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

              {images.map((image, index) => (
                <div className="mb-2 w-full" key={index + 1}>
                  <label
                    className="block  text-sm mb-2"
                    htmlFor={'cover_image'}
                  >
                    {`${index + 1}° Imagem da galeria`}
                  </label>
                  <input
                    className="w-full bg-white rounded-md border-2 focus:border-brand-1 focus:outline-none pl-4 h-12"
                    required={false}
                    id={'cover_image'}
                    placeholder="https://image.com"
                    {...register('cover_image')}
                    value={image}
                    onChange={(event) => changeImage(event, index)}
                  />
                </div>
              ))}

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
