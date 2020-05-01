import React from "react";
import styled from "styled-components";
import { Logo } from "app/components";

const StyledAppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    padding: 0 40px;
    height: 70px;

    .logo {
        line-height: 70px;
    }

    nav ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export const AppHeader = () => {
    return (
        <StyledAppHeader>
            <Logo className="logo" />
            <nav>
                <ul>
                    <li>search field...</li>
                    <li>add project button</li>
                    <li>avatar</li>
                </ul>
            </nav>
        </StyledAppHeader>
    );
};
