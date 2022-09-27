import { FaChevronRight, FaRegArrowAltCircleLeft, FaUsers, FaUserTag } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Background } from "../components/background.component";
import { Breadcrumb } from "../components/breadcrumb.component";
import { CreateContact } from "../components/forms/create.contact.form";
import { MainWindow } from "../components/windows/main.window";

export const CreateContactPage = () => {
    const { id } = useParams();

    return <>
    <Background>
        <MainWindow title={"Application: Create Contact"}>
            <Breadcrumb>
                <FaUsers/>
                <a href="/clients">Clients</a>
                <FaChevronRight/>
                <FaUserTag/>
                <a href="/clients/add">Add Contact</a>
                |
                <FaRegArrowAltCircleLeft/>
                <a href={"/clients/" + id}>Back</a>
            </Breadcrumb>
            <CreateContact/>
        </MainWindow>
    </Background>
    </>
}