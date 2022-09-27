import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { getClientThunk } from "../../redux/thunks";
import { Status } from '../status/status.component';
import { ClientCard } from './client.card';
import { ContactCard } from './contact.card';

const Base = styled.div`
    font: 100% "Open Sans", "Roboto", arial, sans-serif;
    height: 480px;
    width: 600px;
    padding: 16px 0;
    background-color: white;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    .clientlist {
        height: 100%;
        display: flex;
        gap: 4px;
        flex-direction: column;
        overflow-y: scroll;
        align-items: center;
    }
`

export const ClientInfo = () => {

    const { id } = useParams();


    const dispatch = useDispatch();

    const connected = useSelector((state) => state.database.connected);
    const connection = useSelector((state) => state.database);
    
    const loadHandler = () => {
        dispatch(getClientThunk(id))
    }

    React.useEffect(()=>{
        dispatch ({
            type: "@status",
            payload: {
                message: "Loading...",
                icon: "fetching",
                log: Date.now()
            }
        })
        loadHandler()
    },[connected])


    return <>
    <Base>
        <Status/>
        <div className="clientlist">
        <ClientCard name={connection.client?.name} 
        emails={connection.client?.emails.join("; ")} phones={connection.client?.phones.join("; ")}
        id={connection.client?.id} link={"/clients/" + connection.client?.id}/>
        {connection.client?.contacts.map((item, index) => <ContactCard name={item.name} 
        emails={item.emails.join("; ")} phones={item.phones.join("; ")}
        id={item.id} link={"/clients/" + connection.client?.id} key={index}/>)}
        </div>
    </Base>
    </>
}