import styled from "styled-components";
import { Button } from "../button.component";
import { Status } from "../status/status.component";
import { TextArea } from "./textarea.component";

const Base = styled.div`    font: 100% "Open Sans", "Roboto", arial, sans-serif;
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
height: 100%;
width: 100%;
justify-content: center;
span {
    padding: 16px;
}
`

export const CreateClient = () => {
    return <>
    <Base>
        <Status status={"fetching"}/>
        <TextArea name={"name"} id={"name"} label={"name"} placeholder={""} />
        <TextArea name={"email"} id={"email"} label={"emails"} placeholder={""} />
        <TextArea name={"phone"} id={"phone"} label={"phones"} placeholder={""} />
        <span>
            <Button></Button>
        </span>
    </Base>
    </>
}