import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { color } from "utils";

const StyledLogo = styled(Link)`
    font-size: 30px;
    font-weight: 800;
    color: ${color("heading5")};
    font-family: "Grand Hotel", cursive;

    &:hover {
        text-decoration: none;
    }

    span {
        font-size: 40px;
        color: ${color("primary5")};
    }
`;

export const Logo = () => {
    return (
        <StyledLogo to="/">
            dev-workshop <span>.</span>
        </StyledLogo>
    );
};
