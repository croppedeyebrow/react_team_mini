import styled from 'styled-components';

export const FiveStars = styled.div`
    display: flex;
`;

export const Container = styled.div`
    margin-bottom: 1rem;
    .rating {
        display: none;
    }
    .star {
        cursor: pointer;
    }
    svg {
        width: 20px;
        height: 20px;
    }
`

