import React from "react";
import styled from "styled-components";
import bgImage from "assets/images/auth.jpg";
interface AuthLayoutProps {
    children: React.ReactChild;
}

const StyledAuthLayout = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.9)
        ),
        url(${bgImage}); */
    .card {
        display: flex;
        width: 600px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

        &-form {
            background-color: white;
            padding: 100px 30px;
            border: 2px solid red;
        }

        &-image {
            background-image: url(${bgImage});
            background-size: cover;
            width: 100%;
            border: 2px solid black;

            img {
                width: inherit;
                height: inherit;
            }
        }
    }
`;

export const AuthLayout = (props: AuthLayoutProps) => {
    return (
        <StyledAuthLayout>
            <div className="card">
                <div className="card-form">{props.children}</div>

                <div className="card-image"></div>
            </div>
        </StyledAuthLayout>
    );
};
