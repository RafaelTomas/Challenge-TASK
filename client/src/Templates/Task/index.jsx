import React, { useEffect, useState } from 'react';
import {
  
  Box,
  Stack,
  Heading,
  Container,
  Input,
  Button,
  SimpleGrid,
  useColorModeValue,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  Textarea,
  ListItem,
  GridItem
} from '@chakra-ui/react';
import api from '../../services/api';
import Cards from '../../Components/Cards';
import { Controller, useForm } from 'react-hook-form';

function Task() {
  const [tasks, setTasks] = useState([]);
  const {control, handleSubmit, formState } = useForm({ mode: 'onChange' });
  const [refresh, setRefresh] = useState(false);
 
  
  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post('/task/', formData);
      console.log(data);
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      try {
        const { data } = await api.get('/task/');
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadTask();
  }, [refresh]);

  
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ md: 2 }}
        py={{ base: 10, sm: 20, }}>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'm' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ md: '4xl' }}>
              Crie sua tarefa
            </Heading>
          </Stack>
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="m"
            p={4}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base">
            <VStack spacing={4} align={'stretch'}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl >
                  <FormLabel>Nome</FormLabel>
                  <InputGroup>
                    <Controller
                      name="nome"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input type="text" placeholder="Nome da atividade" {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Descrição:</FormLabel>
                  <InputGroup>
                    <Controller
                      name="descricao"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Textarea resize="none" rows='6' placeholder="ex: Aniversario de Jó"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Status</FormLabel>
                  <InputGroup>
                    <Controller
                      name="status"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input
                        type="text"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Data Inicio</FormLabel>
                  <InputGroup>
                    <Controller
                      name="data_inicio"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input
                        type="text"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Data Fim</FormLabel>
                  <InputGroup>
                    <Controller
                      name="data_fim"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <Input
                        type="text"
                        {...field} />}
                    />
                  </InputGroup>
                </FormControl>
                <br />
                <Button
                  type="submit"
                  isDisabled={!formState.isValid}
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isFullWidth>
                  Cadastre sua tarefa!
                </Button>
              </form>
            </VStack>
          </Box>
        </Stack>
        <GridItem spacing={8}>
          {tasks.length != 0 && tasks.map(task => (
            <Cards key={task.id} >
              <ListItem>{task.nome}</ListItem>
              <ListItem>{task.descricao}</ListItem>
              <ListItem>{task.data_inicio}</ListItem>
              <ListItem>{task.data_fim}</ListItem>
              <ListItem>{task.status}</ListItem>
            </Cards>
          ))}
        </GridItem>
      </Container>
    </Box>
  );
}

export default Task;