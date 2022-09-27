import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { loginThunk, logoutThunk } from "../../redux/thunks";
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
export const Login = () => {
    const dispatch = useDispatch();

    const connection = useSelector((state) => state.database);
    const connected = useSelector((state) => state.database.connected);
    const [ username, setUsername ] = React.useState(connection.username);
    const [ path, setPath ] = React.useState(connection.path);
    const [ password, setPassword ] = React.useState("")

    const loginHandler = () => {
        dispatch(loginThunk(username, password, path))
    }

    const logoutHandler = () => {
        dispatch(logoutThunk())
    }


    React.useEffect(()=> {
        if (!connected) {
            dispatch({
                type: "@status",
                payload: {
                    message: "Inform your credentials",
                    icon: "idle",
                    log: Date.now()
                }
            })
        } else {
            dispatch({
                type: "@status",
                payload: {
                    message: "Database Connected",
                    icon: "ok",
                    log: Date.now()
                }
            })
        }
    }
   )

    return <>
    <Base>
        <Status/>
        <form autoComplete={"off"}>
            <Input name={"username"} id={"username"} label={"username"} placeholder={"admin"} type={"text"}
            value={username} onchange={(e)=>setUsername(e.target.value)} disabled={connected}/>
            {connected || 
            <Input name={"password"} id={"password"} label={"password"} placeholder={"12345"} type={"password"}
            value={password} onchange={(e)=>setPassword(e.target.value)}/>}
            <Input name={"connection"} id={"connection"} label={"connection"} placeholder={"http://localhost:3001"} type={"text"}
            value={path} onchange={(e)=>setPath(e.target.value)} disabled={connected}/>
        </form>
        {connected ? 
        <Button action={logoutHandler}>Logout</Button> :
        <Button action={loginHandler}>Login</Button> }
    </Base>
    </>
}