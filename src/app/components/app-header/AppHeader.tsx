import React from "react";
import { FaPlus } from "react-icons/fa";
import { Logo } from "app/components";
import { StyledAppHeader } from "./app-header.style";
import { Whisper, Popover } from "rsuite";

export const AppHeader = () => {
    const speaker = (
        <Popover>
            <p>add project</p>
        </Popover>
    );
    return (
        <StyledAppHeader>
            <Logo className="logo" />
            <nav>
                <ul>
                    <li className="addButton">
                        <Whisper
                            placement="bottom"
                            trigger="hover"
                            speaker={speaker}
                        >
                            <FaPlus />
                        </Whisper>
                    </li>

                    <li className="avatar">MU</li>
                </ul>
            </nav>
        </StyledAppHeader>
    );
};
