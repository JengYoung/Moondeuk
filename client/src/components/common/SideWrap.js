import React from 'react'
import styled, { css } from 'styled-components';

/**
* * SideWrap: wrap that contains overall side layout
**/

const StyledSideWrap = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 30;
    opacity: 0.9;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 1rem;

    // dark-mode 여부에 따른 CSS 효과
    background-color: ${({ theme }) => theme.loginBg};
    transition: background-color 0.5s;
    ${props =>
        props.isMain && css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: fixed;
            top: 0;
            z-index: 100;
            border: 1px solid black;
            background-color: #312330;
        `
    }
    ${props => 
        (props.isSideBar === false) && css`
            display: none;
            min-width: 0vw;
            max-width: 0vw;
            overflow: hidden;
        ` 
    }
`;

const SideWrap = (props) => {
    return (
        <StyledSideWrap {...props}>
            
        </StyledSideWrap>
    );
};

export default SideWrap;