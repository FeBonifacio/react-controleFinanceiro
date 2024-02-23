import styled from "styled-components";

export const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #9d9ad9;
    border-radius: 5px;
    padding: 8px 15px;

    @media (max-width: 750px) {
        width: 22%;
        margin: 0 10px 0 10px;
    }

    p {
        font-size: 1.2rem;
    }

    svg {
        display: none;
    }

    @media (max-width: 550px) {
        width: 18%;
        margin: 0 5px 0 5px;
    }

    p {
        font-size: 1rem;
    }

    svg {
        display: none;
    }
    
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 1rem;
`;

export const Valores = styled.span`
    font-size: 2rem;
`;