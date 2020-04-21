import React from "react";
import { Button } from "rsuite";
import { DocumentHead } from "components";

export const HomeView = () => {
    return (
        <>
            <DocumentHead title="Home" />
            <Button appearance="primary">Hello Button</Button>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates temporibus ullam, cumque maiores nemo ipsam sapiente
                reiciendis, incidunt praesentium commodi nihil pariatur labore
                dolore animi consequuntur provident harum. Commodi, fugit.
            </p>
            <h1>Home View</h1>
            <h2>Home View</h2>
            <h3>Home View</h3>
            <h4>Home View</h4>
            <h5>Home View</h5>
            <h6>Home View</h6>
        </>
    );
};
