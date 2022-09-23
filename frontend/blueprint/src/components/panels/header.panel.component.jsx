import styled from "styled-components";

const Base = styled.div`
        width: 128px;
        height: 128px;
        padding: 8px;
        border-radius: 4px;
        border: 0px solid #3bb3e0;
        color: #3bb3e0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        text-transform: uppercase;
        gap: 4px;
        svg {
            width: 72px;
            height: 72px;
        }
`

export const Header = ({icon, label}) => {
    return <>
    <Base>
        {icon}
        {label}
    </Base>
    </>
}