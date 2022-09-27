import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { listClientsThunk } from "../../redux/thunks";
import { Status } from '../status/status.component';
import { Card } from './card.component';

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
        width: 100%;
        display: flex;
        gap: 4px;
        flex-direction: column;
        overflow-y: scroll;
        align-items: center;
    }
`

export const ClientList = () => {

    const dispatch = useDispatch();

    const connected = useSelector((state) => state.database.connected);
    const connection = useSelector((state) => state.database);
    
    const loadHandler = () => {
        dispatch(listClientsThunk())
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
        {connection.data?.map((item, index) => <Card name={item.name} id={item.id} link={"/clients/"+item.id} date={item.created_at} key={index}/>)}
        </div>
    </Base>
    </>
}