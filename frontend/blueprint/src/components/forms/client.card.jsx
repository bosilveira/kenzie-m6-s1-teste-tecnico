import { FaUser } from "react-icons/fa";
import styled from "styled-components";

const Base = styled.div`
    background: white;
    width: 580px;
    height: 128px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    border-radius: 4px;
    padding: 8px;
    border: 1px solid #3bb3e0;
    span {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: space-between;
        }
    .name {
        display: flex;
        align-items: center;
        font-size: 16px;
        justify-content: space-between;
        text-transform: uppercase;
        color: #3bb3e0;
        width: 100%;
    }
    .emails, .phones {
        font-size: 14px;
        padding: 4px 0;
        width: 100%;
        text-transform: uppercase;
        color: #3bb3e0;
    }
    svg, .icon, .action {
        width: 24px;
        height: 24px;
        color: #3bb3e0;
    }
    &:hover {
        background-color: azure;
        cursor: pointer;
    }
`
        
export const ClientCard = ({id, name, emails, phones, link}) => {

    return <Base onClick={()=>window.location.assign(link)}>
        <span>
            <span className="icon">
                <FaUser/>
            </span>
            <span className="name">
                {name}
            </span>
        </span>
        <span className="emails">
            {emails}
        </span>
        <span className="phones">
            {phones}
        </span>
    </Base>
}
    