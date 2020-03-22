import React from 'react';
import { Box } from '@components/atoms/Box';
import { SignUpContainer as SignUpForm } from '@components/forms';
import { Title } from '@components/ant-design';
import { Steps } from 'antd';

const { Step } = Steps;

const SignUpContainer = () => {
  return (
    <Box>
      <Box display="flex" width="100%" justifyContent="center" mt="80px">
        <Title>LOGO PLATFORMY</Title>
      </Box>
      <Box display="flex" mx="auto" width={650} justifyContent="center" mb={50} mt={30} px={100}>
        <Steps size="small" current={0}>
          <Step title="Dane Pracownika" />
          <Step title="Potwierdzenie" />
        </Steps>
      </Box>

      <Box margin="auto" width={650} mb="80px">
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default SignUpContainer;
