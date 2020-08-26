import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #a3d2ca;
    height: 100vh;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    z-index: 90;
`;
