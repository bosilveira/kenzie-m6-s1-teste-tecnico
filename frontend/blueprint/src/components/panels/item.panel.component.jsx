import styled from "styled-components";

const Base = styled.div`
        width: 128px;
        height: 54px;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #3bb3e0;
        color: #3bb3e0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        text-transform: uppercase;
        gap: 4px;
        svg {
            width: 32px;
            height: 32px;
        }
        span {
            width: 100%;
            text-align: center;
        }
`

export const Item = ({icon, label}) => {
    return <>
    <Base>
        {icon}
        <span>
            {label}
        </span>      
    </Base>
    </>
}