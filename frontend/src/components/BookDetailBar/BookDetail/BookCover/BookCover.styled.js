import styled from 'styled-components';

const Cover = styled.img.attrs(props => ({
    src: props.img,
    alt: props.alt
}))`
    height: 202px;
    width: 128px;
    border-radius: 16px;
    box-sizing: border-box;
    padding-top: 20px;
`;

export default Cover;
