import styled from 'styled-components';

import logo from './ttwr.png';

import pos from './assets/pos.png';
import neg from './assets/neg.png';

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  max-width: 320px;
  min-height: 69px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 45px;
  min-width: 45px;
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
}

export default function StockCard(props : Props) {
  const { variation } = props;

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="" />
      </LogoContainer>
      <CardInfo>
        <CompanyInfo>
          <CompanyTicker>
            TTWR
          </CompanyTicker>
          <CompanyName>
            Twitter
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
};
