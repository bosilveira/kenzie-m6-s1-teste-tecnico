import styled from "styled-components";
import { Header } from "./header.panel.component";

const Base = styled.div`
        width: 192px;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #3bb3e0;
        color: #3bb3e0;
        display: flex;
        padding: 8px 0;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        span {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
`

export const Panel = ({icon, label, children}) => {
    return <>
    <Base>
        <Header icon={icon} label={label}/>
        <span>
            {children}
        </span>
    </Base>
    </>
}