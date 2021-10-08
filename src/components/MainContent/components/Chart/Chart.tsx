import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 12px rgba(222, 222, 231, 0.4);
  border-radius: 8px;
  padding: 25px 20px;
`;

export default function Chart() {
  return (
    <Container>
      Chart
    </Container>
  );
}
