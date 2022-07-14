import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 5.625rem 2.5rem 5.625rem 2.5rem;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3.125rem;
  background: rgba(35, 31, 32, 0.93);

  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6875rem;
    text-align: center;
    color: #ffffff;
  }

  img {
    margin: 2.5rem 0;
    max-width: 100%;
  }

  h2,
  p {
    font-weight: 400;
    line-height: 1.625rem;
    color: #ffffff;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-top: 0.625rem;
  }
`;

export const GroupCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 6.25rem;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 1.875rem;
  justify-content: center;

  img {
    height: 23.125rem;
    border-radius: 5.3125rem 5.3125rem 5.3125rem 5.3125rem;
  }

  @media (max-width: 47.9375rem) {
    flex-wrap: wrap;

    img { 
      width: 100%;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 31.25rem;

  h3 {
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.625rem;
    color: #7d2eba;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #201e1f;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
`;
