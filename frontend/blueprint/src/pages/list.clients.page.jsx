import { FaChevronRight, FaList, FaUserPlus, FaUsers } from "react-icons/fa";
import { Background } from "../components/background.component";
import { Breadcrumb } from "../components/breadcrumb.component";
import { ClientList } from "../components/forms/client.list";
import { MainWindow } from "../components/windows/main.window";

export const ListClientsPage = () => {
    return <>
    <Background>
        <MainWindow title={"Application: Client List"}>
            <Breadcrumb>
                <FaUsers/>
                <a href="/clients">Clients</a>
                <FaChevronRight/>
                <FaList/>
                <a href="/clients">List</a>
                |
                <FaUserPlus/>
                <a href="/clients/add">Add</a>
            </Breadcrumb>
            <ClientList/>
        </MainWindow>
    </Background>
    </>
}