import { FaRegArrowAltCircleRight, FaUserAlt } from "react-icons/fa";
import styled from "styled-components";

const Base = styled.div`
    background: white;
    width: 580px;
    height: 64px;
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
        white-space: nowrap;
        overflow-x: hidden;
    }
    .date {
        font-size: 10px;
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
        
export const Card = ({id, name, date, link}) => {

    const locale = new Date(date)

    return <Base onClick={()=>window.location.assign(link)}>
        <span>
            <span className="icon">
                <FaUserAlt/>
            </span>
            <span className="name">
                {name}
            </span>
            <span className="action">
                <FaRegArrowAltCircleRight/>
            </span>
        </span>
        <span className="date">
            {locale.toLocaleString("pt-PT")}
        </span>
    </Base>
}
    