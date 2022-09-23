import { Annotation } from "../components/annotation.component"
import { Background } from "../components/background.component"
import { CreateClient } from "../components/forms/create.form"
import { DeleteClient } from "../components/forms/delete.form"
import { Login } from "../components/forms/login.form"
import { ReadClient } from "../components/forms/read.form"
import { SearchClient } from "../components/forms/search.form"
import { UpdateClient } from "../components/forms/update.form"
import { Window } from "../components/window.component"
import { WindowApp } from "../components/windowapp.component"
import { AppPage } from "./app.page"

export function Intro() {
    return <>
    <Background>
        <h1>Intro</h1>    
        <Window></Window>
        <Annotation title={"Especificações"}>
            text text txtws
        </Annotation>
        <WindowApp/>
        <AppPage/>
        <Login></Login>
        <CreateClient/>
        <DeleteClient/>
        <ReadClient/>
        <UpdateClient/>
        <SearchClient/>

    </Background>
    </>
}