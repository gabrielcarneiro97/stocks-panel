import { useState } from 'react';
import { FiStar, FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import {
  CartesianGrid, Tooltip as RechartsTooltip, XAxis, YAxis, Area, AreaChart, ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import { Button, Company, Tooltip } from '../../..';
import theme from '../../../../Theme';

import { ChartTooltip } from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 12px rgba(222, 222, 231, 0.4);
  border-radius: 8px;
  padding: 25px 20px;
  height: 45vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompanyContainer = styled.div`
  display: flex;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 20px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  img {
    margin-right: 3px;
  }
`;

const Variation = styled.div<{ variation : string }>`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${(props) => (props.variation === 'positive' ? props.theme.colors.success : props.theme.colors.danger)};
`;

const data = [{ Data: '', Preço: null }, { Data: 'a', Preço: 12 }, { Data: 'b', Preço: 10 }, { Data: 'b', Preço: 11 }, { Data: 'b', Preço: 21 }, { Data: 'b', Preço: 14 }, { Data: 'b', Preço: 14 }, { Data: 'b', Preço: 14 }, { Data: 'b', Preço: 14 }, { Data: '', Preço: null }];

export default function Chart() {
  const [variation] = useState('negative');
  return (
    <Container>
      <Header>
        <CompanyContainer>
          <Tooltip content="Favoritar">
            <Button variant="white"><FiStar size={24} /></Button>
          </Tooltip>

          <Company />
        </CompanyContainer>
        <PriceContainer>
          <Price>
            {variation === 'positive'
              ? (
                <FiTrendingUp
                  color={theme.colors.success}
                  style={{ marginRight: 3 }}
                />
              )
              : (
                <FiTrendingDown
                  color={theme.colors.danger}
                  style={{ marginRight: 3 }}
                />
              )}
            $200
          </Price>
          <Variation variation={variation}>
            $-0.09 (-0.03%)
          </Variation>
        </PriceContainer>
      </Header>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.colors.primary} stopOpacity={0.25} />
              <stop offset="95%" stopColor={theme.colors.primary} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="Data" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <RechartsTooltip content={<ChartTooltip />} />
          <Area
            type="monotone"
            dataKey="Preço"
            stroke={theme.colors.primary}
            fillOpacity={1}
            strokeWidth={2}
            fill="url(#colorUv)"
            dot
            activeDot
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}
