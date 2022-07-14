import styled from 'styled-components';

export const Image = styled.img `
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 75rem;
    padding: 5.625rem;
`;

export const H2 = styled.h2`
    text-align: center;
`;

export const Instrucao = styled.p`
    text-align: center;
    margin: 1.25rem 0 0 0;
`;

export const Divisor = styled.hr`
    background: #e5e5e5;
    height: 0.0625rem;
    width: 100%;
    margin: 6.25rem 0 2.1875rem 0;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    textarea {
        min-height: 6.25rem;
        max-height: 12.5rem;
        min-width: 50%;
        max-width: 100%;
    }
`;

export const Aviso = styled.p`
    font-weight: 500;
    margin-bottom: 6.25rem;

    strong {
        font-weight: 600;
        color: #bd041a;
    }
`;