import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const StyledLogo = styled(Link)`
    font-size: 30px;
    font-weight: 800;
    color: #094067;
    font-family: "Grand Hotel", cursive;

    &:hover {
        text-decoration: none;
    }

    span {
        font-size: 40px;
        color: #3da9fc;
    }
`;

export const Logo = () => {
    return (
        <StyledLogo to="/">
            dev-workshop <span>.</span>
        </StyledLogo>
    );
};
