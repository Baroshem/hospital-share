import React from 'react';
import { Form, FormItem, Input, SubmitButton } from '@components/formik-antd';
import { Button } from '@components/ant-design';
import { Formik, FormikHelpers } from 'formik';
import { Box } from '@components/atoms/Box';
import { styled } from '@utils';
import { Steps } from 'antd';
const { Step } = Steps;

const Label = styled.div({
  color: 'black',
  fontSize: 16,
  lineHeight: '150%',
  marginBottom: 10,
});

const InputLabel = styled.div({
  fontSize: '14px',
  lineHeight: '22px',
});

export const SignUpComponent = () => {
  return (
    <Box
      padding="30px 120px"
      borderTop="4px solid #1890FF"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1)"
    >
      <Form layout="vertical">
        <Label>Dane osobowe</Label>
        <InputLabel>Imię</InputLabel>
        <FormItem name="name" marginBottom={3} rules={[{ required: true, message: 'Proszę podać imię!' }]}>
          <Input name="name" placeholder="Podaj imię" size="large" />
        </FormItem>
        <InputLabel>Nazwisko</InputLabel>
        <FormItem name="surname" marginBottom={3} rules={[{ required: true, message: 'Proszę podać nazwisko!' }]}>
          <Input name="surname" placeholder="Podaj nazwisko" size="large" />
        </FormItem>
        <InputLabel>Telefon</InputLabel>
        <FormItem name="phone_number" marginBottom={4} rules={[{ required: true, message: 'Proszę podać nazwisko!' }]}>
          <Input name="phone_number" placeholder="Podaj numer telefonu" size="large" />
        </FormItem>

        <Label>Dane do logowania</Label>
        <InputLabel>Mail</InputLabel>
        <FormItem name="email" marginBottom={3} rules={[{ required: true, message: 'Proszę podać adres e-mail!' }]}>
          <Input name="email" placeholder="Podaj e-mail" size="large" />
        </FormItem>
        <InputLabel>Hasło</InputLabel>
        <FormItem name="password" marginBottom={4} rules={[{ required: true, message: 'Proszę podać hasło!' }]}>
          <Input.Password name="password" placeholder="Podaj hasło" size="large" />
        </FormItem>

        <Label>Dodatkowe informacje</Label>
        <InputLabel>Funkcja</InputLabel>
        <FormItem name="position" marginBottom={3} rules={[{ required: true, message: 'Proszę podać stanowisko!' }]}>
          <Input name="position" placeholder="Podaj funkcje jaką wykonujesz" size="large" />
        </FormItem>
        <InputLabel>Nazwa szpitala</InputLabel>
        <FormItem
          name="position"
          marginBottom={3}
          rules={[{ required: true, message: 'Proszę podać nazwe szpitala!' }]}
        >
          <Input name="position" placeholder="Podaj nazwę szpitala" size="large" />
        </FormItem>
        <FormItem name="type" marginBottom={3} rules={[{ required: true, message: '' }]}>
          <Input name="position" placeholder="Podaj typ szpitala" size="large" />
        </FormItem>

        <FormItem name="rodo" marginBottom={1} rules={[{ required: true }]}>
          <Input.Checkbox name="rodo">RODO</Input.Checkbox>
        </FormItem>
        <FormItem name="marketing" marginBottom={2} rules={[{ required: true }]}>
          <Input.Checkbox name="marketing">Zgody Marketingowe</Input.Checkbox>
        </FormItem>

        <FormItem name="submit">
          <Box display="flex" justifyContent="flex-end">
            <Box mr={3}>
              <Button>Wstecz</Button>
            </Box>
            <SubmitButton type="primary" htmlType="submit">
              Dalej
            </SubmitButton>
          </Box>
        </FormItem>
      </Form>
    </Box>
  );
};

type FormValues = {
  username: string;
  password: string;
  remember: boolean;
};

export const SignUpContainer = () => {
  const initialValues: FormValues = {
    username: '',
    password: '',
    remember: true,
  };

  const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    console.log(values);
    helpers.setSubmitting(false);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <SignUpComponent />
    </Formik>
  );
};
