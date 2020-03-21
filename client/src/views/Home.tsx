import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useQueryParam, StringParam, BooleanParam } from 'use-query-params';
import { Box } from '@components/atoms/Box';
import { Translation } from '@services';
import { Title, Paragraph, Select, Tag, Radio, Text } from '@components/ant-design';
import { styled } from '@utils';
import { RadioChangeEvent } from 'antd/lib/radio';
import { SearchOutlined, HeartOutlined, AlertOutlined } from '@ant-design/icons';

const LargeText = styled(Paragraph)(({ theme }) => ({
  fontSize: theme.fontSizes.heading2,
}));

const cities = ['Warsaw', 'Kraków', 'Łódź', 'Wrocław', 'Poznań'];

const Hero = () => {
  const { t } = Translation.use('main');
  const [city, setCity] = useQueryParam('city', StringParam);

  const handleChange = (value: string) => {
    console.log(value);
    setCity(value);
  };

  return (
    <Box width={960} height={400} mx="auto" display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <Title level={1} width={400}>
          {t('Helping with supplies for COVID-19 crisis')}
        </Title>
        <LargeText>
          {t('There are')} <Text strong>428</Text> {t('hospitals looking for your help')}
        </LargeText>
        <Select
          showSearch
          suffixIcon={<SearchOutlined />}
          mt={64}
          width={280}
          placeholder="Select a city"
          onChange={handleChange}
          value={city || undefined}
        >
          {cities.map(city => (
            <Select.Option key={city} value={city}>
              {city}
            </Select.Option>
          ))}
        </Select>
      </Box>
      <ReactSVG
        src="map.svg"
        beforeInjection={svg => {
          svg.setAttribute('style', 'height: 320px');
        }}
      />
    </Box>
  );
};

type Category = {
  value: string;
  label: string;
};

const Bar = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.border.split,
  padding: 16,
}));

const StyledTag = styled(Tag.CheckableTag)(({ theme }) => ({
  borderRadius: 4,

  '&:not(.ant-tag-checkable-checked)': {
    border: `1px solid ${theme.colors.border.base}`,
  },
}));

const CategoriesBar = () => {
  const { t } = Translation.use('main');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [helpOffers, setHelpOffers] = useQueryParam('help-offers', BooleanParam);

  const categories: Category[] = [
    { value: 'CLOTHING', label: t('Protective clothing') },
    { value: 'CLEANING', label: t('Cleaning supplies') },
    { value: 'DEVICES', label: t('Devices') },
    { value: 'BEEDING', label: t('Bedding') },
    { value: 'FOOD', label: t('Food') },
    { value: 'COSMETICS', label: t('Cosmetics') },
    { value: 'OTHERS', label: t('Others') },
  ];

  const handleCategoriesChange = (category: Category, checked: boolean) => {
    const nextSelectedCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(t => t.value !== category.value);
    setSelectedCategories(nextSelectedCategories);
  };

  const handleTypeChange = (e: RadioChangeEvent) => {
    setHelpOffers(e.target.value);
  };

  return (
    <Bar>
      <Box width={960} mx="auto" display="flex" alignItems="center" justifyContent="space-between">
        <Box minWidth={320}>
          <Radio.Group buttonStyle="solid" value={Boolean(helpOffers)} onChange={handleTypeChange}>
            <Radio.Button value={false} width={128}>
              <Box display="flex" alignItems="center" justifyContent="center" width={1}>
                <AlertOutlined />
                <Box ml={8}>{t('Necessitous')}</Box>
              </Box>
            </Radio.Button>
            <Radio.Button value={true} width={128}>
              <Box display="flex" alignItems="center" justifyContent="center" width={1}>
                <HeartOutlined />
                <Box ml={8}>{t('Helpers')}</Box>
              </Box>
            </Radio.Button>
          </Radio.Group>
        </Box>
        <Box display="flex" alignItems="center">
          <Paragraph mr={8}>{t('Categories')}:</Paragraph>
          {categories.map(({ label, value }) => (
            <StyledTag
              key={value}
              checked={Boolean(selectedCategories.find(t => t.value === value))}
              onChange={(checked: boolean) => handleCategoriesChange({ label, value }, checked)}
            >
              {label}
            </StyledTag>
          ))}
        </Box>
      </Box>
    </Bar>
  );
};

const Home = () => {
  return (
    <Box>
      <Hero />
      <CategoriesBar />
    </Box>
  );
};

export default Home;
