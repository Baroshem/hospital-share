import React from 'react';
import { Form, FormItem, Input, SubmitButton } from '@components/formik-antd';
import { Button } from '@components/ant-design';
import { Select, Option } from '@components/formik-antd';
import { Box } from '@components/atoms/Box';
import { styled } from '@utils';

const Label = styled.div({
  color: 'black',
  fontSize: 16,
  lineHeight: '150%',
  marginBottom: 10,
});

export const SignUp = () => {
  return (
    <Box
      px={120}
      pt={30}
      pb={30}
      borderTop="4px solid #1890FF"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1);"
    >
      <Form>
        <Label>Dane osobowe</Label>
        <FormItem name="name" marginBottom={3} rules={[{ required: true, message: 'Proszę podać imię!' }]}>
          <Input name="name" placeholder="Podaj imię" height={40} />
        </FormItem>
        <FormItem name="surname" marginBottom={4} rules={[{ required: true, message: 'Proszę podać nazwisko!' }]}>
          <Input name="surname" placeholder="Podaj nazwisko" height={40} />
        </FormItem>

        <Label>Dane do logowania</Label>
        <FormItem name="email" marginBottom={3} rules={[{ required: true, message: 'Proszę podać adres e-mail!' }]}>
          <Input name="email" placeholder="Podaj e-mail" height={40} />
        </FormItem>
        <FormItem name="password" marginBottom={4} rules={[{ required: true, message: 'Proszę podać hasło!' }]}>
          <Input.Password name="password" placeholder="Podaj hasło" height={40} />
        </FormItem>

        <Label>Dodatkowe informacje</Label>
        <FormItem name="region" marginBottom={3} rules={[{ required: true, message: 'Proszę podać imię!' }]}>
          <Input name="region" placeholder="Wpisz miejscowość" height={40} />
        </FormItem>
        <FormItem
          name="hasIsolationWard"
          marginBottom={3}
          rules={[{ required: true, message: 'Proszę podać wybrać opcje!' }]}
        >
          <Select name="hasIsolationWard" onChange={() => {}} size="large" placeholder="Wybierz opcje">
            <Option value="yes">Tak</Option>
            <Option value="no">Nie</Option>
          </Select>
        </FormItem>

        <FormItem name="rodo" marginBottom={2} rules={[{ required: true }]}>
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
