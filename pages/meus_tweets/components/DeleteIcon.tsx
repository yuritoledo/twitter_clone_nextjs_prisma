import { FC, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/core'
import { FiTrash } from 'react-icons/fi'
import useToast from 'hooks/useToast'
import { deleteTweet } from 'services/tweet'

interface Props {
  id: number
}

export const DeleteIcon: FC<Props> = (props) => {
  const [loading, setLoading] = useState(false)
  const { successToast, errorToast } = useToast()

  const onClick = async () => {
    setLoading(true)
    const success = await deleteTweet(props.id)
    setLoading(false)

    if (!success) {
      errorToast('Tente novamente mais tarde')
      return
    }
    successToast('Removindo com sucesso!')
  }

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Box as={FiTrash} color="red.300" />
      </PopoverTrigger>
      <PopoverContent zIndex={1}>

        <PopoverHeader textAlign="center">Excluir?</PopoverHeader>

        <PopoverCloseButton />

        <PopoverBody>
          <ButtonGroup size="sm" justifyContent="center" display="flex">
            <Button
              loadingText="Aguarde ..."
              isLoading={loading}
              onClick={onClick}
              bg="white"
              _hover={{ backgroundColor: 'red.50' }}
            >
              <Text color="red.500">Sim</Text>
            </Button>
          </ButtonGroup>
        </PopoverBody>

      </PopoverContent>
    </Popover>
  )
}
