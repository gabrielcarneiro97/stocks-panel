import styled, { css } from 'styled-components';
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

import { Company } from '..';
import theme from '../../Theme';

const Container = styled.div<{ shadow : boolean, hoverble: boolean }>`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.shadow && '0px 8px 20px -2px rgba(43, 37, 63, 0.1)'};
  border-radius: 8px;
  padding: 12px 16px;
  width: 320px;
  height: 69px;
  cursor: pointer;

  ${(props) => props.hoverble && css`
    box-shadow: none;
    transition-duration: .2s;
    &:hover {
      box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
    }
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

const Logo = styled.div<{ src? : string }>`
  ${(props) => (props.src
    ? css`
        background-image: url(${props.src});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `
    : css`background-color: ${props.theme.colors.gray002};`)};
  border-radius: 100px;
  height: 45px;
  width: 45px;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 12px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceValue = styled.div<{ variation: string }>`
  font-weight: bold;
  color: ${(props) => (props.variation === 'positive' ? props.theme.colors.success : props.theme.colors.danger)};
  margin-right: 2px;
`;

const PriceIcon = styled.div`
  display: flex;
  align-content: center;
`;

type Props = {
  variation? : string;
  hoverble?: boolean;
  shadow?: boolean;
  ticker?: string;
  companyName?: string;
  logoSrc?: string;
  value?: string;
}

export default function StockCard(props : Props) {
  const {
    variation,
    shadow,
    hoverble,
    ticker,
    companyName,
    logoSrc,
    value,
  } = props;

  return (
    <Container hoverble={hoverble ?? false} shadow={shadow ?? true}>
      <LogoContainer>
        <Logo src={logoSrc} />
      </LogoContainer>
      <CardInfo>
        <Company name={companyName} ticker={ticker} />
        <PriceContainer>
          <PriceValue variation={variation ?? 'positive'}>
            { value || 'Value' }
          </PriceValue>
          <PriceIcon>
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
          </PriceIcon>
        </PriceContainer>
      </CardInfo>
    </Container>
  );
}

StockCard.defaultProps = {
  variation: 'positive',
  hoverble: false,
  shadow: true,
  ticker: undefined,
  companyName: undefined,
  logoSrc: undefined,
  value: undefined,
};
