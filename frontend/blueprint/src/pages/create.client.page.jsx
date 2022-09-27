import { FaChevronRight, FaRegArrowAltCircleLeft, FaUserPlus, FaUsers } from "react-icons/fa";
import { Background } from "../components/background.component";
import { Breadcrumb } from "../components/breadcrumb.component";
import { CreateClient } from "../components/forms/create.form";
import { MainWindow } from "../components/windows/main.window";

export const CreateClientPage = () => {
    return <>
    <Background>
        <MainWindow title={"Application: Add Client"}>
            <Breadcrumb>
                <FaUsers/>
                <a href="/clients">Clients</a>
                <FaChevronRight/>
                <FaUserPlus/>
                <a href="/clients/add">Add</a>
                |
                <FaRegArrowAltCircleLeft/>
                <a href="/clients">Back</a>
            </Breadcrumb>
            <CreateClient/>
        </MainWindow>
    </Background>
    </>
}