import React from "react";
import { DocumentHead, AppHeader } from "app/components";
import styled from "styled-components";

const StyledAppView = styled.div`
    min-height: 100vh;
    background-color: #f8fafb;
`;

export const AppView = () => {
    return (
        <StyledAppView>
            <DocumentHead title="Projects" />
            <AppHeader />
        </StyledAppView>
    );
};
