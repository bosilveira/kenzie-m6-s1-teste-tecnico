import styled from "styled-components";
import { Button } from "../button.component";
import { Status } from "../status/status.component";
import { Input } from "./input.component";

const Base = styled.div`
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    height: 100%;
    width: 100%;
    justify-content: center;
`

export const Login = () => {
    return <>
    <Base>
        <Status status={"fetching"}/>
        <Input name={"username"} id={"username"} label={"username"} placeholder={"admin"} type={"text"}/>
        <Input name={"password"} id={"password"} label={"password"} placeholder={"1234"} type={"password"}/>
        <Input name={"connection"} id={"connection"} label={"connection"} placeholder={"localhost:3000"} type={"url"}/>
        <Button></Button>
    </Base>
    </>
}