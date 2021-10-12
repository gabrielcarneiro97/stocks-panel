import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img<{ width?: string, height?: string }>`
  height: ${(props) => props.height ?? 'auto'};
  width: ${(props) => props.width ?? 'auto'};
  margin-bottom: 32px;
`;

type Props = {
  img: string;
  imgWidth?: string;
  imgHeight?: string;
  text: string;
}

export default function ChartEmptyState(props : Props) {
  const {
    img, text, imgWidth, imgHeight,
  } = props;

  return (
    <Container>
      <Image src={img} alt="" width={imgWidth} height={imgHeight} />
      {text}
    </Container>
  );
}

ChartEmptyState.defaultProps = {
  imgWidth: undefined,
  imgHeight: undefined,
};
