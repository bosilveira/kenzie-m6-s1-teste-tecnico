import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import * as yup from "yup";
import { createClientThunk } from '../../redux/thunks';
import { Button } from "../button.component";
import { Status } from "../status/status.component";
import { Input } from "./input.component";

const Base = styled.div`
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    height: 480px;
    width: 600px;
    padding: 16px 0;
    background-color: white;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    form {
        height: 100%;
        display: flex;
        gap: 24px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const CreateClient = () => {
    const dispatch = useDispatch();

    const connection = useSelector((state) => state.database);
    const connected = useSelector((state) => state.database.connected);
    
    const [ name, setName ] = React.useState("");
    const [ emails, setEmails ] = React.useState("");
    const [ phones, setPhones ] = React.useState("")

    const clientSaveSchema = yup.object().shape({
        name: yup.string().required(),
        emails: yup.array()
            .required()
            .min(1, "Invalid array of emails")
            .transform((value) => Array.from(new Set(value)))
            .of(yup.string().email()),
        phones: yup.array()
            .required()
            .min(1, "Invalid array of phones")
            .transform((value) => Array.from(new Set(value)))
            .of(yup.string()),
    })

    const saveHandler = async () => {
        try {
            const data = await clientSaveSchema.validate(
                { name, emails: emails.split(","), phones: phones.split(",") }
            )
            dispatch(createClientThunk(data.name, data.emails, data.phones))
        } catch (error) {
            dispatch({
                type: "@status",
                payload: {
                    message: "Invalid form data",
                    icon: "error",
                    log: Date.now()
                }
            })
        }
    }

    React.useEffect(()=> {
        dispatch({
            type: "@status",
            payload: {
                message: "Inform New Client Data",
                icon: "idle",
                log: Date.now()
            }
        })
    }
   )

    return <>
    <Base>
        <Status/>
        <form autoComplete={"off"}>
            <Input name={"name"} id={"name"} label={"name"} placeholder={""} type={"text"}
            value={name} onchange={(e)=>setName(e.target.value)} />
            <Input name={"emails"} id={"emails"} label={"emails (use comma \",\" for list)"} placeholder={""} type={"text"}
            value={emails} onchange={(e)=>setEmails(e.target.value)} />
            <Input name={"phones"} id={"phones"} label={"phones (use comma \",\" for list)"} placeholder={""} type={"text"}
            value={phones} onchange={(e)=>setPhones(e.target.value)} />
        </form>
        <Button action={saveHandler}>Save</Button> :
    </Base>
    </>
}