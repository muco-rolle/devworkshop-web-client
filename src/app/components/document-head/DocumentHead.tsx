import React from "react";
import { Helmet } from "react-helmet";

interface DocumentHeadProps {
    title?: string;
}

export const DocumentHead = (props: DocumentHeadProps) => {
    return (
        <Helmet>
            <title>{props.title} | Developers Workshop</title>
        </Helmet>
    );
};
