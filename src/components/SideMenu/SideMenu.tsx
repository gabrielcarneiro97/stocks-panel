import styled, { useTheme } from 'styled-components';
import { FiGrid } from 'react-icons/fi';

import { useState } from 'react';
import logo from './assets/logo.png';
import { MenuItem } from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: -8px;
  margin-right: 8px;
  width: 98px;
  background-color: ${(props) => props.theme.colors.white};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export default function SideMenu() {
  const theme = useTheme();
  const [active, setActive] = useState(0);

  const menuItems = [
    {
      id: 0,
      content: <FiGrid color={theme.colors.primary} size={32} />,
    },
  ];

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Monetus Logo" />
      </LogoContainer>
      {menuItems.map((el) => (
        <MenuItem
          key={el.id}
          active={active === el.id}
          onClick={() => setActive(el.id)}
        >
          {el.content}
        </MenuItem>
      ))}
    </Container>
  );
}
