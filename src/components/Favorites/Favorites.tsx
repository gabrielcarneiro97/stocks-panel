import styled from 'styled-components';
import { ProfileBar } from '..';

const Container = styled.div`
  display: flex;
  flex-grow: 3;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  margin: -8px;
  margin-left: 12px;
`;

export default function Favorites() {
  return (
    <Container>
      <ProfileBar />

    </Container>
  );
}
