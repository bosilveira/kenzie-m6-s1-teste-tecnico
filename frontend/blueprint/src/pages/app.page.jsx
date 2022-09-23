import { FaDatabase, FaSignInAlt } from "react-icons/fa";
import styled from "styled-components";
import { Breadcrumb } from "../components/breadcrumb.component";
import { Login } from "../components/forms/login.form";
import { ClientsPanel } from "../components/panels/clients.panel";

const Base = styled.div`
    box-sizing: border-box;
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    background: white;
    width: 600px;
    height: 400px;;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    
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

export const AppPage = () => {
    return <>
    <Base>
        <ClientsPanel/>
        <div className="page">
            <Breadcrumb icon1={<FaDatabase/>} root={"Database"} icon2={<FaSignInAlt/>} current={"Login"}/>
            <Login/>
        </div>
    </Base>
    </>
}