import styled from 'styled-components';

const StyledListPage = styled.div`
    position: fixed;
    left: 260px;
    top: 80px;
    height: 100%;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    overflow: auto;
`;

export const ListItem = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500&display=swap');
    background-color: #5eaaa8;
    color: #e8ded2;
    font-family: 'Baloo Tamma 2', cursive;
    display: inline-block;
    padding: 5px 8px;
    border-radius: 5px;
    margin: 10px;
    margin-top: var(--flow-space, 1em);

    &:hover {
        cursor: pointer;
    }
`;

export default StyledListPage;
