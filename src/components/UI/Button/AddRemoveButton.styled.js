import styled from 'styled-components';

const AddRemoveButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500&display=swap');
    height: 20px;
    width: 60px;
    border-radius: 10px;
    background-color: ${props => props.color};
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 12px;
    color: white;
    border: none;
    display: inline-block;
    &:hover {
        cursor: pointer;
    }
`;

export default AddRemoveButton;
