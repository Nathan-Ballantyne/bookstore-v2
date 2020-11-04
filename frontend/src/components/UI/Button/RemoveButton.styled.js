import styled from 'styled-components';
import minus from '../../../assets/Icons/minus-icon.png';

const Remove = styled.div`
    background-image: url(${minus});
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    z-index: 50;
    position: absolute;
    margin-top: 15px;
    margin-left: -5px;
    transition: transform .3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.15);
    }
`;

export default Remove;
