import { FaUserPlus, FaUsers } from "react-icons/fa";
import { Breadcrumb } from "../components/breadcrumb.component";
import { CreateClient } from "../components/forms/create.form";
import { ClientsPanel } from "../components/panels/clients.panel";
import { AppPageModel } from "./model.page";

export const CreateClientPage = () => {
    return <>
    <AppPageModel 
        panel={<ClientsPanel/>}
        breadcrumb={<Breadcrumb icon1={<FaUsers/>} root={"Clients"} icon2={<FaUserPlus/>} current={"Create"}/>}   
        form={<CreateClient/>}
    />
    </>
}