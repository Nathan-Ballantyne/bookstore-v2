import styled from 'styled-components';

export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #a3d2ca;
    height: 100vh;
    width: 16rem;
    text-align: left;
    position: relative;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    z-index: 90;
`;
