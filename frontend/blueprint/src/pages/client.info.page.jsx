import { FaChevronRight, FaInfoCircle, FaUserAlt, FaUserEdit, FaUserSlash, FaUserTag } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Background } from "../components/background.component";
import { Breadcrumb } from "../components/breadcrumb.component";
import { ClientInfo } from "../components/forms/client.info";
import { MainWindow } from "../components/windows/main.window";

export const ClientInfoPage = () => {
    const { id } = useParams();

    return <>
    <Background>
        <MainWindow title={"Application: Client Info"}>
            <Breadcrumb>
                <FaUserAlt/>
                <a href="/clients">Clients</a>
                <FaChevronRight/>
                <FaInfoCircle/>
                <a href={"/clients/" + id}>Info</a>
                |
                <FaUserEdit/>
                <a href={"/clients/" + id}>Update</a>
                |
                <FaUserSlash/>
                <a href={"/clients/" + id}>Delete</a>
                |
                <FaUserTag/>
                <a href={"/clients/" + id + "/add_contact"}>Add Contact</a>
            </Breadcrumb>
            <ClientInfo/>
        </MainWindow>
    </Background>
    </>
}