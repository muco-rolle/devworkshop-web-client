import React from "react";
import { StyledProject } from "./project.style";
import { Button } from "rsuite";

export const Project = () => {
    return (
        <StyledProject>
            <h5>Project title</h5>
            <p>Created at: 1 May </p>

            <Button size="sm" appearance="primary">
                Start
            </Button>
        </StyledProject>
    );
};
