import styled from 'styled-components';

const AddRemoveButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@500&display=swap');
    height: 30px;
    padding: 0 15px 0 15px;
    border-radius: 20px;
    background-color: ${(props) => props.color ?? 'green'};
    font-family: 'Baloo Tamma 2', cursive;
    font-size: 12px;
    color: white;
    border: none;
    display: block;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }
`;

export default AddRemoveButton;
