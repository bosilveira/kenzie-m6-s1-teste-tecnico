import { FaMailBulk, FaSearch, FaUserTag, FaWhatsappSquare } from "react-icons/fa";
import { Item } from "./item.panel.component";
import { Panel } from "./panel.component";

export const SearchPanel = () => {
    return <>
        <Panel icon={<FaSearch/>} label={"Search"}>
            <Item icon={<FaUserTag/>} label={"Client"}/>
            <Item icon={<FaMailBulk/>} label={"Email"}/>
            <Item icon={<FaWhatsappSquare/>} label={"Phone"}/>
        </Panel>
    </>
}