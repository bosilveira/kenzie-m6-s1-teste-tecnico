import styled from "styled-components";

const Base = styled.div`
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 48px;
    width: 100%;
    padding: 0 8px;
    justify-content: center;
    text-decoration: none;
    font-size: 20px;
    text-transform: uppercase;
    color: #3bb3e0;
    svg {
        color: #3bb3e0;
    }
    a {
        text-decoration: none;
        font-size: 16px;
        text-transform: uppercase;
        color: #3bb3e0;
    }
    .spacer {
        margin-left: auto;
    }
`

export const Breadcrumb = ({ children }) => {
    return <>
    <Base>
        { children }
    </Base>
    </>
}