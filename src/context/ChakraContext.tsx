'use client';

import { ChakraBaseProvider, theme } from '@chakra-ui/react';

interface ChakraProviderProps {
  children: React.ReactNode;
}

export default function ChakraProvider({ children }: ChakraProviderProps) {
  return (
    <>
      <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
    </>
  );
}
