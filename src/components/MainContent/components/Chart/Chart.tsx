import { FiStar } from 'react-icons/fi';
import {
  CartesianGrid, Tooltip as RechartsTooltip, XAxis, YAxis, Area, AreaChart, ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import { Button, Company, Tooltip } from '../../..';
import theme from '../../../../Theme';

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
`;

const data = [{ Data: '', Preço: null }, { Data: 'a', Preço: 12 }, { Data: 'b', Preço: 10 }, { Data: 'b', Preço: 11 }, { Data: 'b', Preço: 21 }, { Data: 'b', Preço: 14 }, { Data: 'b', Preço: 14 }, { Data: 'b', Preço: 14 }, { Data: 'b', Preço: 14 }, { Data: '', Preço: null }];

const CustomTooltip = (
  { active, payload } : { active? : boolean, payload? : any },
) => {
  if (active && payload && payload.length) {
    return (
      <Tooltip chart content={`$${payload[0].value}`} />
    );
  }

  return null;
};

CustomTooltip.defaultProps = {
  active: undefined,
  payload: undefined,
};

export default function Chart() {
  return (
    <Container>
      <Header>
        <Tooltip content="Favoritar">
          <Button variant="white"><FiStar size={24} /></Button>
        </Tooltip>

        <Company />
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
          <RechartsTooltip content={<CustomTooltip />} />
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
