import styled from "styled-components";

const Base = styled.div`
    box-sizing: border-box;
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    background: white;
    width: 600px;
    height: 540px;;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin: auto;
    .page {
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        height: 100%;
        width: 100%;
        justify-content: center;
    }
`

export const AppPageModel = ({panel, breadcrumb, form}) => {
    return <>
    <Base>
        {panel}
        <div className="page">
            {breadcrumb}
            {form}
        </div>
    </Base>
    </>
}