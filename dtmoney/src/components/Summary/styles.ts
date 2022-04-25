import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;  
`;

interface CardProps {
  totalValue?: number;
}

export const Card = styled.div<CardProps>`
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  ${(props) => 
    props.totalValue ?
      props.totalValue > 0 ?
        css`
          background: var(--green);
          color: white;
        `
      : css`
        background: var(--red);
        color: white;
      `
    : css`
      background: var(--shape);
      color: var(--text-title);
    `
  };

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;