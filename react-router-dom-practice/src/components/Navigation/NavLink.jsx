import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    transition: color 0.25s;

    &:hover {
        color: lightgray;
    }
`;