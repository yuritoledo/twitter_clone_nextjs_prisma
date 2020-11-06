import {
  useToast as useChakraToast, useToastOptions,
} from '@chakra-ui/core'

const defaultParams: useToastOptions = {
  duration: 2000,
  position: 'top',
  isClosable: true,
}

const useToast = () => {
  const toast = useChakraToast()

  const successToast = (title: string, description?: string) => {
    toast({
      ...defaultParams,
      status: 'success',
      title: title ?? 'Sucesso!',
      description,
    })
  }

  const errorToast = (title: string, description?: string) => {
    toast({
      ...defaultParams,
      status: 'error',
      title: title ?? 'Erro!',
      description,
    })
  }

  return {
    successToast,
    errorToast,
  }
}

export default useToast
