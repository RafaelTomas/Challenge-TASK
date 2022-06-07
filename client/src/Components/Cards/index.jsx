import React from 'react';
import {
  Box,
  Center,
  Stack,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Button from '../Button';
import { propTypes } from './types';

function Card({ handleDelete, handleEdit, task }) {
  return (
    <Center>
      <Box
        mb={2}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={20}
        overflow={'hidden'}>
        <Box bg='white' px={4} py={6}>
          <Stack>
            <HStack>
              <Text fontWeight="bold" fontSize='2xl'>{task.nome}</Text>
              <Text>({task.status})</Text>
            </HStack>
            <Text fontWeight="light" fontSize="medium">
              {task.descricao}
            </Text>
            {/* date-fns */}
            <Text fontWeight="bold" fontSize='lg'>{task.data_inicio}</Text>
            <Text fontWeight="bold" fontSize='lg'>{task.data_fim}</Text>
            <HStack>
              <Button onClick={handleEdit} bgColor="blue.500" hoverColor="blue.400" fontColor="white">Editar</Button>
              <Button onClick={handleDelete} bgColor="red.500" fontColor="white">Deletar</Button>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}

Card.propTypes = propTypes;

export default Card;