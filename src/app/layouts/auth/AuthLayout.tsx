import React from "react";
import styled from "styled-components";
import bgImage from "assets/images/auth.jpg";
import { Logo } from "app/components";
interface AuthLayoutProps {
    children: React.ReactChild;
}

const StyledAuthLayout = styled.div`
    height: 100vh;
    width: 100vw;
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
        min-width: 800px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

        &-form {
            background-color: white;
            padding: 50px 50px;

            .logo {
                display: inline-block;
                margin-bottom: 20px;
            }
        }

        &-image {
            background-image: url(${bgImage});
            background-size: cover;
            background-position: center;
            width: 100%;

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
                <div className="card-form">
                    <Logo className="logo" />
                    {props.children}
                </div>

                <div className="card-image"></div>
            </div>
        </StyledAuthLayout>
    );
};
