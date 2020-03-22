import React, { useEffect } from 'react';
import { Form, FormItem, Input, SubmitButton, Select } from '@components/formik-antd';
import { Button, Title } from '@components/ant-design';
import { Formik, FormikHelpers } from 'formik';
import { Box } from '@components/atoms/Box';
import { styled } from '@utils';
import { Translation } from '@services';
import { useHospitalsState, useHospitalsActions } from '@store/hospitals';
import { useEffectOnce } from 'react-use';
import { useAuthActions } from '@store/auth';
import { omit } from 'lodash';

type HospitalFormProps = {
  handleNextStep: () => void;
};

const FormCard = styled.div(({ theme }) => ({
  margin: '0 auto 80px',
  width: 600,
  padding: '32px 80px',
  borderTop: `4px solid ${theme.colors.primary.main}`,
  overflow: 'hidden',
  boxShadow: theme.shadows.card,
}));

const HospitalFormComponent = () => {
  const { t } = Translation.use('main');
  const hospitals = useHospitalsState();
  const { fetchHospitals } = useHospitalsActions();

  useEffectOnce(() => {
    if (hospitals.status === 'idle') {
      fetchHospitals();
    }
  });

  return (
    <FormCard>
      <Form layout="vertical">
        <Title level={4}>{t('Personal data')}</Title>
        <FormItem name="fullName" label={t('Full name')} marginBottom={3}>
          <Input name="fullName" placeholder={t('Type four full name')} />
        </FormItem>
        <FormItem name="phone" label={t('Phone number')} marginBottom={4}>
          <Input name="phone" placeholder={t('Type your phone number')} />
        </FormItem>
        <FormItem name="city" label={t('City')} marginBottom={4}>
          <Input name="city" placeholder={t('Type your city name')} />
        </FormItem>

        <Title mt={24} level={4}>
          {t('Login data')}
        </Title>
        <FormItem name="email" label={t('E-mail')} marginBottom={3}>
          <Input name="email" placeholder={t('Typu your e-mail address')} />
        </FormItem>
        <FormItem name="password" label={t('Password')} marginBottom={4}>
          <Input.Password name="password" placeholder={t('Type your password')} />
        </FormItem>
        <FormItem name="repeatPassword" label={t('Repeat password')} marginBottom={4}>
          <Input.Password name="repeatPassword" placeholder={t('Repeat your password')} />
        </FormItem>

        <Title mt={24} level={4}>
          {t('Hospital data')}
        </Title>
        <FormItem name="hospital" label={t('Hospital')} marginBottom={3}>
          <Select
            name="hospital"
            loading={['idle', 'loading'].includes(hospitals.status)}
            placeholder={t('Select your hospital from the list')}
          >
            {hospitals.data.map(hospital => (
              <Select.Option value={hospital.id}>{hospital.name}</Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem name="position" label={t('Position')} marginBottom={3}>
          <Input name="position" placeholder={t('Type your role in the hospital')} />
        </FormItem>

        <Box mt={24}>
          <FormItem name="shareContactData" marginBottom={1}>
            <Input.Checkbox name="shareContactData">RODO</Input.Checkbox>
          </FormItem>
          <FormItem name="terms" marginBottom={2}>
            <Input.Checkbox name="terms">Zgody Marketingowe</Input.Checkbox>
          </FormItem>
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={16}>
          <Button type="primary" htmlType="submit">
            {t('Submit form')}
          </Button>
        </Box>
      </Form>
    </FormCard>
  );
};

type FormValues = {
  fullName: string;
  phone: string;
  city: string;
  email: string;
  password: string;
  repeatPassword: string;
  hospital?: string;
  position: string;
  terms: boolean;
  shareContactData: boolean;
};

const HospitalFormContainer = ({ handleNextStep }: HospitalFormProps) => {
  const { createUser } = useAuthActions();

  const initialValues: FormValues = {
    fullName: '',
    phone: '',
    city: '',
    email: '',
    password: '',
    repeatPassword: '',
    hospital: undefined,
    position: '',
    terms: false,
    shareContactData: false,
  };

  const handleSubmit = (values: FormValues, helpers: FormikHelpers<FormValues>) => {
    createUser(omit(values, ['hospital', 'position']), values.hospital);
    handleNextStep();
    helpers.setSubmitting(false);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <HospitalFormComponent />
    </Formik>
  );
};

export const HospitalForm = HospitalFormContainer;
