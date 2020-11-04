import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
    margin-right: 10px;
    margin-left: 5px;
    color: #000;
`;

const SLink = (props) => <StyledLink {...props} />;

export default SLink;
