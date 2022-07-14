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
  max-width: 75rem;
  padding: 5.625rem 2.5rem 5.625rem 2.5rem;

  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6875rem;
    text-align: center;
    color: #7d2eba;
    margin-bottom: 5.625rem;
  }

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.625rem;
    text-align: center;
    color: #201e1f;
  }

  p#desc {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #201e1f;
    margin-top: 0.625rem;
  }

  hr {
    background: #e5e5e5;
    height: 0.0625rem;
    width: 100%;
    margin: 3.75rem 0 1.875rem 0;
  }

  hr:first-child {
    margin: 2.5rem 0 2.1875rem 0;
  }

  h3 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #7d2eba;
    margin: 3.75rem 0 1.875rem 0;
    width: 100%;
  }

  ul {
    width: 100%;

    li {
      margin-left: 1.25rem;
      font-weight: 400;
      font-size: 1rem;
      line-height: 2.1875rem;
      color: #201e1f;

      a {
        font-weight: 400;
        font-size: 1rem;
        line-height: 2.1875rem;
        text-decoration-line: underline;
        color: #1b3bae;
      }
    }
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #000000;
    width: 100%;
    margin-bottom: 9.375rem;

    strong {
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.625rem;
      color: #000000;
    }
  }
`;

export const Objetivo = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.625rem;
  color: #201e1f;
  width: 100%;

  strong {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: #7d2eba;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  gap: 1.875rem;
  margin: 9.375rem 0 2.5rem 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
