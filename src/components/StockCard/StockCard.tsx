import styled, { css } from 'styled-components';

import pos from './assets/pos.png';
import neg from './assets/neg.png';

const Container = styled.div<{ shadow : boolean, hoverble: boolean }>`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.shadow && '0px 8px 20px -2px rgba(43, 37, 63, 0.1)'};
  border-radius: 8px;
  padding: 12px 16px;
  max-width: 320px;
  min-height: 69px;
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
        /* background-size: 45px 45px; */
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

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CompanyTicker = styled.div`
  color: ${(props) => props.theme.colors.gray003};
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
`;

const CompanyName = styled.div`
  color: ${(props) => props.theme.colors.gray002};

  font-size: 14px;
  line-height: 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceValue = styled.div<{ positiveVariation: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.positiveVariation ? props.theme.colors.success : props.theme.colors.danger)};
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
}

export default function StockCard(props : Props) {
  const {
    variation,
    shadow,
    hoverble,
    ticker,
    companyName,
    logoSrc,
  } = props;

  return (
    <Container hoverble={hoverble ?? false} shadow={shadow ?? true}>
      <LogoContainer>
        <Logo src={logoSrc} />
      </LogoContainer>
      <CardInfo>
        <CompanyInfo>
          <CompanyTicker>
            { ticker || 'TCKR' }
          </CompanyTicker>
          <CompanyName>
            { companyName || 'Company Name' }
          </CompanyName>
        </CompanyInfo>
        <PriceContainer>
          <PriceValue positiveVariation={variation === 'positive'}>
            Value
          </PriceValue>
          <PriceIcon>
            {variation === 'positive' ? <img src={pos} alt="" /> : <img src={neg} alt="" />}
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
};
