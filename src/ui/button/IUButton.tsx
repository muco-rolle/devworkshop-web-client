import React from "react";
import styled from "styled-components";
import { Button } from "rsuite";
import { ButtonProps } from "rsuite/lib/Button";

const StyledUIButton = styled(Button)<ButtonProps>`
    &.rs-btn,
    &.rs-btn-primary {
        border-radius: 40px;
    }
`;

interface UIButtonProps extends ButtonProps {
    children: React.ReactChild;
}

export const UIButton = (props: UIButtonProps) => {
    return <StyledUIButton {...props}>{props.children}</StyledUIButton>;
};
