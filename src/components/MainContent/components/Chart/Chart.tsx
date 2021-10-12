import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import {
  CartesianGrid, Tooltip as RechartsTooltip, XAxis, YAxis, Area, AreaChart, ResponsiveContainer,
} from 'recharts';
import styled, { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';

import {
  AddToFavButton, Company, EmptyState,
} from 'components';
import { selectors } from 'store';
import { ChartData } from 'store/slices/companiesSlice';
import { useEffect, useState } from 'react';
import { iexApi } from 'store/apis/iexApi';
import { ChartTooltip } from './components';

import emptyStateImg from './assets/empty-state.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 12px rgba(222, 222, 231, 0.4);
  border-radius: 8px;
  padding: 25px 20px;
  height: 51vh;
  margin-bottom: 30px;
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

function chartDataHandler(chartData? : ChartData[]) : ChartData[] | undefined {
  if (!chartData) return undefined;

  return [{
    label: '',
    value: null,
  },
  ...chartData,
  {
    label: '',
    value: null,
  }];
}

export default function Chart() {
  const company = useSelector(selectors.chart.active);
  const [getChartData, chartDataResult] = iexApi.useLazyGetChartDataBySymbolQuery();

  const [chartData, setChartData] = useState<ChartData[] | undefined>(undefined);

  useEffect(() => {
    if (company) {
      getChartData(company.symbol);
    }
  }, [company]);

  useEffect(() => {
    if (chartDataResult.isLoading || chartDataResult.isFetching) return;

    if (chartDataResult.isSuccess) {
      setChartData(chartDataHandler(company?.chartData));
    }
  }, [chartDataResult]);

  const theme = useTheme();

  const variation = company && company.changeValue <= 0 ? 'negative' : 'positive';

  return (
    <Container>
      {
        company
        && (
          <>
            <Header>
              <CompanyContainer>
                <AddToFavButton symbol={company.symbol} />
                <Company name={company.name} symbol={company.symbol} />
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
                  $
                  {company.latestPrice}
                </Price>
                <Variation variation={variation}>
                  $
                  {company.changeValue}
                  {' '}
                  (
                  {company.changePercent}
                  %)
                </Variation>
              </PriceContainer>
            </Header>

            <ResponsiveContainer width="100%" height="80%">
              <AreaChart
                data={chartData}
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
                <XAxis dataKey="label" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <RechartsTooltip content={<ChartTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={theme.colors.primary}
                  fillOpacity={1}
                  strokeWidth={2}
                  fill="url(#colorUv)"
                  dot
                  activeDot
                />
              </AreaChart>
            </ResponsiveContainer>
          </>

        )
      }
      {
        !company
        && (
        <EmptyState
          img={emptyStateImg}
          imgHeight="30vh"
          text="Nenhuma empresa selecionada! Use a barra de pesquisa para começar."
        />
        )
      }

    </Container>
  );
}
