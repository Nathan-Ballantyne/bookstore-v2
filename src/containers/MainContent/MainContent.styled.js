import styled from 'styled-components';

const MainContent = styled.div`
    position: fixed;
    left: 260px;
    top: 80px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: auto;
    flex-direction: column;

    @media (max-width: 579px) {
        left: 40px;
    }
`;

export default MainContent;
