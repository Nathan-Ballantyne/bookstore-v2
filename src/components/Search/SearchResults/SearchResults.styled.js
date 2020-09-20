import styled from 'styled-components';

const List = styled.ul`
    z-index: 100;
    background-color: #a3d2ca;
    border-radius: 5px;
    border: 2px solid #056676;
`;

export const Item = styled.li`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500&display=swap');
    position: relative;
    color: #056676;
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 20px;
    list-style-type: none;
    border: none;
    border-bottom: 2px solid #056676;
    span {
        box-sizing: border-box;
        margin-left: 12px;
        margin-bottom: 20px;
        font: 1em sans-serif;
    }

    img {
        width: 36px;
        height: 60px;
        display: inline-block;
        margin-top: 8px;
    }
`;

export default List;
