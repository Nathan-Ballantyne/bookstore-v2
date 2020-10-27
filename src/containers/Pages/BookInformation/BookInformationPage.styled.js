import styled from 'styled-components';

const BookPage = styled.div`
    position: fixed;
    left: 260px;
    top: 80px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: auto;
    flex-direction: column;
    width: 50%;
`;

export const Cover = styled.img`
    width: 128px;
    height: 196px;
    display: inline-block;
`;



export default BookPage;