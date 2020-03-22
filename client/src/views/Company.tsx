import React from 'react';
import { Table } from 'antd'
import { Box } from '@components/atoms/Box';
import { Button, Input } from '@components/ant-design';
import { styled } from '@utils';


const dataSource = [
  {
    key: '1',
    name: 'Maska',
    amount: 32,
  },
  {
    key: '2',
    name: 'Maska',
    amount: 42,
  },
];

const columns = [
  {
    title: 'Ilość',
    dataIndex: 'amount',
    key: 'amount',
    render: (val: any) => <Input defaultValue={val} />,
    width: '15%'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '50%'
  },
  {
    title: 'Delete',
    dataIndex: 'action',
    key: 'action',
    render: () =>  <Button type="danger">Delete</Button>,
    width: '15%'
  },
];

const HeroTitle = styled.h1({
  fontSize: '50px'
})


const Company = (props: any) => {
  console.log(props.match.params.name)
  return (
    <Box>
      <Box width="100%" height={160} display="flex" alignItems="center" justifyContent="center">
        <HeroTitle>
          { props.match.params.name }
        </HeroTitle>
      </Box>
      <Box width={960} height={400} mx="auto" display="flex" alignItems="center" justifyContent="space-between">
        <Box width="100%">
          <Table dataSource={dataSource} columns={columns} />;
        </Box>
      </Box>
    </Box>
  )
}

export default Company