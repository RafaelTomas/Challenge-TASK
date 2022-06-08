import React from 'react';
import {
  Input,
  VStack,
  FormControl,
  Select,
  FormLabel,
  InputGroup,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../Button';
import { propTypes } from './types';


function TaskForm({ onSubmit, task }) {

  let defaultValues = {};

  if (task) {
    const { nome, descricao, data_inicio, data_fim, status } = task;
    defaultValues = {
      nome,
      descricao,
      data_inicio,
      data_fim,
      status
    };
  }

  const { control, handleSubmit, formState: { errors }, formState } = useForm({ mode: 'onChange', defaultValues });


  return (
    <VStack spacing={4} align={'stretch'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.message}>
          <FormLabel >Nome</FormLabel>
          <InputGroup>
            <Controller
              name="nome"
              control={control}
              rules={{ required: true , maxLength: { value: 22, message: 'Nome tem que ter ate 22 characters' }}}
              render={({ field }) => <Input type="text" placeholder="Nome da atividade" {...field} />}
            />
            <FormErrorMessage>
              {errors.nome && errors.nome.message}
            </FormErrorMessage>
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
        <FormLabel>Status</FormLabel>
        <FormControl >
          <InputGroup>
            <Controller
              name="status"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Select placeholder='Selecione uma opção' {...field} >
                <option value='pendente'> Pendente</option>
                <option value='concluida'> Concluida</option>
              </Select>
              } />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Data Inicio</FormLabel>
          <InputGroup>
            <Controller
              name="data_inicio"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input
                type="date"
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
                type="date"
                {...field} />}
            />
          </InputGroup>
        </FormControl>
        <br />
        <Button
          type="submit"
          bgColor="blue.500"
          hoverColor="blue.500"
          isDisabled={!formState.isValid}>
          Criar
        </Button>
      </form>
    </VStack>
  );
}

TaskForm.propTypes = propTypes;

export default TaskForm;
