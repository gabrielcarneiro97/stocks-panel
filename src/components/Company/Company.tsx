import styled from 'styled-components';

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

type Props = {
  ticker?: string;
  name?: string;
}

export default function Company(props : Props) {
  const { ticker, name } = props;
  return (
    <CompanyInfo>
      <CompanyTicker>
        { ticker || 'TCKR' }
      </CompanyTicker>
      <CompanyName>
        { name || 'Company Name' }
      </CompanyName>
    </CompanyInfo>
  );
}

Company.defaultProps = {
  ticker: undefined,
  name: undefined,
};
