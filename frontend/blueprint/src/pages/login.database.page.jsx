import { FaDatabase, FaSignInAlt } from "react-icons/fa";
import { Breadcrumb } from "../components/breadcrumb.component";
import { Login } from "../components/forms/login.form";
import { DatabasePanel } from "../components/panels/database.panel";
import { AppPageModel } from "./model.page";

export const LoginDatabasePage = () => {
    return <>
    <AppPageModel 
        panel={<DatabasePanel/>}
        breadcrumb={<Breadcrumb icon1={<FaDatabase/>} root={"Database"} icon2={<FaSignInAlt/>} current={"Login"}/>}   
        form={<Login/>}
    />
    </>
}