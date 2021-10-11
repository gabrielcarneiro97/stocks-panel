import { useRef, useState } from 'react';
import { FiBarChart2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled, { useTheme } from 'styled-components';
import { AddToFavButton, Button, StockCard } from 'components';
import { useSelector } from 'react-redux';
import { selectors } from 'store';

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`;

const Cards = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray002};
    border-radius: 10px;
    cursor: pointer;

  }

  & > * {
    /* float: left; */
    min-width: 320px;
    margin: 16px;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const cardWithMarginWidth = 384;

export default function Recents() {
  const recents = useSelector(selectors.recents.getCompanies);
  const [scrollStatus, setScrollStatus] = useState(0);
  const [actualCard, setActualCard] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <div>
          <FiBarChart2 size={18} color={theme.colors.primary} style={{ marginRight: 3 }} />
          {' '}
          Empresas Recentes
        </div>
        <Buttons>
          <Button
            variant="ghost"
            disabled={scrollStatus === 0}
            onClick={() => {
              const to = actualCard === 0 ? 0 : actualCard - 1;
              const position = to * cardWithMarginWidth;
              cardsRef.current?.scrollTo({ left: position });
            }}
          >
            <FiChevronLeft size={24} />
          </Button>
          <Button
            variant="ghost"
            disabled={scrollStatus === 1}
            onClick={() => {
              const to = scrollStatus === 1 ? actualCard : actualCard + 1;
              const position = to * cardWithMarginWidth;
              cardsRef.current?.scrollTo({ left: position });
            }}
          >
            <FiChevronRight size={24} />
          </Button>
        </Buttons>

      </Header>

      <Cards
        onScroll={(e) => {
          const t = e.currentTarget;
          const cardsQnt = t.scrollWidth / cardWithMarginWidth;
          const scrollEnd = t.scrollWidth - t.scrollLeft === t.offsetWidth;
          const scrollStart = t.scrollLeft === 0;

          if (scrollEnd) setScrollStatus(1);
          else if (scrollStart) setScrollStatus(0);
          else setScrollStatus(0.5);

          setActualCard(
            Math.trunc(cardsQnt - ((t.scrollWidth - t.scrollLeft) / cardWithMarginWidth)),
          );
        }}
        ref={cardsRef}
      >
        {recents.map(
          (comp) => (
            <StockCard
              hoverble
              key={comp.symbol}
              companyName={comp.name}
              changeValue={comp.changeValue}
              symbol={comp.symbol}
              logoSrc={comp.logoSrc}
              addon={<AddToFavButton symbol={comp.symbol} />}
            />
          ),
        )}

      </Cards>
    </Container>
  );
}
