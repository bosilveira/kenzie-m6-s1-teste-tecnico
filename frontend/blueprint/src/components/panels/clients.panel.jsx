import { FaUserCheck, FaUserEdit, FaUserFriends, FaUserPlus, FaUsers, FaUsersCog, FaUserSlash, FaUserTag, FaUserTimes } from "react-icons/fa";
import { Item } from "./item.panel.component";
import { Panel } from "./panel.component";

export const ClientsPanel = () => {
    return <>
        <Panel icon={<FaUsers/>} label={"Clients"}>
            <Item icon={<FaUserPlus/>} label={"Create"}/>
            <Item icon={<FaUserCheck/>} label={"List"}/>
            <Item icon={<FaUserEdit/>} label={"Update"}/>
            <Item icon={<FaUserTimes/>} label={"Delete"}/>
            <Item icon={<FaUserFriends/>} label={"Contacts"}/>
            <Item icon={<FaUserTag/>} label={"Add"}/>
            <Item icon={<FaUserSlash/>} label={"Remove"}/>
            <Item icon={<FaUsersCog/>} label={"Edit"}/>
        </Panel>
    </>
}