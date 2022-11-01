import React from "react";
import { Container } from "react-bootstrap";

const Layout = (PropTypes) => (
    <Container>
        {PropTypes.children};
    </Container>
);
    
export default Layout;