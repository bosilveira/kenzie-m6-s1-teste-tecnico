import { FaDatabase, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Item } from "./item.panel.component";
import { Panel } from "./panel.component";

export const DatabasePanel = () => {
    return <>
        <Panel icon={<FaDatabase/>} label={"Database"}>
            <Item icon={<FaSignInAlt/>} label={"Login"}/>
            <Item icon={<FaSignOutAlt/>} label={"Logout"}/>
        </Panel>
    </>
}