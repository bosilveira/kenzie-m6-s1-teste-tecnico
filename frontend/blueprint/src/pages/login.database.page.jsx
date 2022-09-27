import { FaChevronRight, FaDatabase, FaPlug } from "react-icons/fa";
import { Background } from "../components/background.component";
import { Breadcrumb } from "../components/breadcrumb.component";
import { Login } from "../components/forms/login.form";
import { MainWindow } from "../components/windows/main.window";

export const LoginDatabasePage = () => {
    return <>
    <Background>
        <MainWindow title={"Application: Database Connection"}>
            <Breadcrumb>
                <FaDatabase/>
                <a href="/database">Database</a>
                <FaChevronRight/>
                <FaPlug/>
                <a href="/database">Connection</a>
            </Breadcrumb>
            <Login/>
        </MainWindow>
    </Background>
    </>
}