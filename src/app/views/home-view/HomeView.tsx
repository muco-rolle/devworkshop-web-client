import React from "react";
import styled from "styled-components";
import { DocumentHead, Logo } from "app/components";

import introImage from "assets/images/intro.svg";
import { Button } from "rsuite";
import { UIText } from "app/ui";
import { Link } from "react-router-dom";
import { routes } from "config";

const StyledHomeView = styled.div`
    margin: 100px 150px 0 150px;

    .intro {
        display: flex;

        img {
            width: 600px;
        }

        &-text {
            margin-right: 70px;

            h1 {
                margin: 30px 0 10px 0;
                letter-spacing: 2px;
            }

            a {
                margin-top: 30px;
            }
        }
    }
`;

export const HomeView = () => {
    return (
        <StyledHomeView>
            <DocumentHead title="Home" />
            <div className="intro">
                <div className="intro-text">
                    <Logo />
                    <h1>Start making progress</h1>
                    <UIText level={2}>Manage your projects easily</UIText>

                    <Button
                        appearance="primary"
                        size="md"
                        to={routes.signup}
                        componentClass={Link}
                    >
                        Get Started
                    </Button>
                </div>
                <div className="intro-img">
                    <img src={introImage} alt="People working illustration" />
                </div>
            </div>
        </StyledHomeView>
    );
};
