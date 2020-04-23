import React from "react";
import styled from "styled-components";

interface UITextProps {
    children: React.ReactChild;
    level: number;
}

const ParagraphOne = styled.p`
    font-size: 16px;
`;

const ParagraphTwo = styled.p`
    font-size: 18px;
`;

const ParagraphThree = styled.p`
    font-size: 20px;
`;
export const UIText = (props: UITextProps) => {
    switch (props.level) {
        case 1:
            return <ParagraphOne {...props}>{props.children}</ParagraphOne>;

        case 2:
            return <ParagraphTwo {...props}>{props.children}</ParagraphTwo>;

        case 3:
            return <ParagraphThree {...props}>{props.children}</ParagraphThree>;

        default:
            return <p>{props.children}</p>;
    }
};
