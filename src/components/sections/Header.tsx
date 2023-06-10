import React, { memo, FC } from 'react';
import styled from 'styled-components';

interface HeaderProps {}

const StyledHeader = styled.div`
    padding: 10px 35px;
    background-color: white;
    position: fixed;
    width: 100vw;
    box-shadow: 1px 5px 33px 0px rgba(0, 0, 0, 0.24);
    z-index: 1;
`;

const HeaderTitle = styled.div`
    font-size: 50px;
    font-weight: bold;
`;

const Header: FC<HeaderProps> = () => {
    return (
        <StyledHeader>
            <HeaderTitle>STORE</HeaderTitle>
        </StyledHeader>
    );
};

export default memo(Header);
