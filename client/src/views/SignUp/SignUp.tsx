import React, { useState } from 'react';
import { Box } from '@components/atoms/Box';
import { Steps, Card, Paragraph, Button, Result } from '@components/ant-design';
import { SignUpContainer as SignUpForm } from '@components/forms';
import { Title } from '@components/ant-design';
import { Translation } from '@services';
import { HospitalForm } from './HospitalForm';
import { useQueryParam, StringParam, NumberParam } from 'use-query-params';
import { RouterLink } from '@components/atoms';

type StepsHeaderProps = {
  step: number;
};

const StepsHeader = ({ step }: StepsHeaderProps) => {
  const { t } = Translation.use('main');

  return (
    <Steps current={step} mx="auto" width={960} mb={50} mt={30} px={100}>
      <Steps.Step title={t('Choose account type')} />
      <Steps.Step title={t('Provide required data')} />
      <Steps.Step title={t('Confirmation')} />
    </Steps>
  );
};

type ChooseAccountTypeProps = {
  setAccountType: (type: AccountType) => void;
};

const ChooseAccountType = ({ setAccountType }: ChooseAccountTypeProps) => {
  const { t } = Translation.use('main');

  const handleAccountChoice = (type: AccountType) => () => {
    setAccountType(type);
  };

  return (
    <Box display="flex" justifyContent="space-between" width={960} mx="auto">
      <Card width={296}>
        <Title level={3}>{t('Business')}</Title>
        <Paragraph>{t('Some business description')}</Paragraph>
        <Button mt={24} onClick={handleAccountChoice('business')} type="primary">
          {t('Select')}
        </Button>
      </Card>
      <Card width={296}>
        <Title level={3}>{t('Hospital')}</Title>
        <Paragraph>{t('Some hospital description')}</Paragraph>
        <Button mt={24} onClick={handleAccountChoice('hospital')} type="primary">
          {t('Select')}
        </Button>
      </Card>
      <Card width={296}>
        <Title level={3}>{t('Private person')}</Title>
        <Paragraph>{t('Some private person description')}</Paragraph>
        <Button mt={24} onClick={handleAccountChoice('person')} type="primary">
          {t('Select')}
        </Button>
      </Card>
    </Box>
  );
};

const HospitalConfirmation = () => {
  const { t } = Translation.use('main');

  return (
    <Result
      status="success"
      title={t('Account creation successful')}
      subTitle={t(
        'Your account has been created successfully. We send an activation link to the official email address of your hospital.',
      )}
      icon={<></>}
      extra={[
        <RouterLink to="/">
          <Button type="primary" key="console">
            {t('Go to the main page')}
          </Button>
        </RouterLink>,
      ]}
    />
  );
};

type AccountType = 'business' | 'hospital' | 'person';

const SignUpContainer = () => {
  const [accountType, setAccountType] = useQueryParam('type', StringParam);
  const [currentStep = 0, setCurrentStep] = useQueryParam('step', NumberParam);
  const { t } = Translation.use('main');

  const handleAccountTypeSelect = (type: AccountType) => {
    setAccountType(type);
    setCurrentStep(1);
  };

  return (
    <div>
      <Box display="flex" width="100%" justifyContent="center" mt="80px">
        <Title>Hospitalshare</Title>
      </Box>
      <StepsHeader step={currentStep} />
      {currentStep === 0 && <ChooseAccountType setAccountType={handleAccountTypeSelect} />}
      {currentStep === 1 && accountType === 'hospital' && <HospitalForm handleNextStep={() => setCurrentStep(2)} />}
      {currentStep === 2 && accountType === 'hospital' && <HospitalConfirmation />}
      <Box mt={24} textAlign="center">
        <Paragraph>
          {t("Already have an account?")}
          <RouterLink to="/sign-in">
            {t('Sign in')}
          </RouterLink>
        </Paragraph>
      </Box>
    </div>
  );
};

export const SignUp = SignUpContainer;
