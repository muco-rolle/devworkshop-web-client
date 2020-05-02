import styled from "styled-components";
import { color } from "utils";

export const StyledAppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0 1px 12px rgba(0, 0, 0, 0.1);
    padding: 0 40px;
    height: 70px;
    background-color: white;

    .logo {
        line-height: 70px;
    }

    nav ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    nav ul .addButton {
        margin-right: 30px;
        :hover {
            cursor: pointer;
        }
    }

    nav ul .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 800;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 2px solid ${color("body2")};

        :hover {
            cursor: pointer;
        }
    }
`;
