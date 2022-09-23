import { FaUserEdit } from "react-icons/fa";
import styled from "styled-components";
import { Button } from "../button.component";
import { Input } from "./input.component";

const Base = styled.div`
    box-sizing: border-box;
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    background: white;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: flex-end;
    .panel {
        width: 200px;
        border-radius: 4px;
        border: 1px solid #3bb3e0;
        color: #3bb3e0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        text-transform: uppercase;
        gap: 8px;
        svg {
            width: 72px;
            height: 72px;
        }
    }
    form {
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

    }
`

export const UpdateClient = () => {
    return <>
    <Base>
        <div className="panel">
            <FaUserEdit/>      
            Update Info
        </div>
        <form>
            <Input name={"id"} id={"id"} label={"ID"} placeholder={"Full Name"} type={"text"}/>
            <Input name={"name"} id={"name"} label={"name"} placeholder={"Full Name"} type={"text"}/>
            <Input name={"email"} id={"email"} label={"email"} placeholder={"client@email.com"} type={"email"}/>
            <Input name={"phone"} id={"phone"} label={"phone"} placeholder={"+55 00 00000-0000"} type={"text"}/>
        <Button></Button>
        </form>
    </Base>
    </>
}