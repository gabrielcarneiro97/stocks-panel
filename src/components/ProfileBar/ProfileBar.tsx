import { FiChevronDown } from 'react-icons/fi';
import styled, { useTheme } from 'styled-components';
import { Button } from 'components';

import picture from './assets/profile.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 71, 187, 0.2);
  box-sizing: border-box;
  border-radius: 120px;
  margin: 16px;
  font-size: 16px;
  line-height: 20px;
  padding: 4px;
  height: 40px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
`;

const ProfilePic = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 8px;
`;

const UserName = styled.div`
  text-align: start;
  flex-grow: 4;
  margin-left: 10px;
`;

export default function ProfileBar() {
  const theme = useTheme();

  return (
    <Container>
      <ProfilePic src={picture} alt="" />
      <UserName>
        João da Silva Almeida Magalhães
      </UserName>

      <Button variant="ghost"><FiChevronDown color={theme.colors.secondary} /></Button>
    </Container>
  );
}
