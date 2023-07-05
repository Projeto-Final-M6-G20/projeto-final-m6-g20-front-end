import { Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Loading;
