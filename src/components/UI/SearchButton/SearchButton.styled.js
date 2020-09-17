import styled from 'styled-components';
//import searchIcon from '../../../assets/Icons/search-icon.png';

const SearchButton = styled.div`
    background-image: url('https://www.flaticon.com/svg/static/icons/svg/751/751463.svg');
    height: 25px;
    width: 25px;
    display: inline-block;
    box-sizing: border-box;
    margin-left: 10px;
    position: relative;
    top: 10px;
    opacity: 0.3;
    &:hover {
        cursor: pointer;
    }
`;

export default SearchButton;