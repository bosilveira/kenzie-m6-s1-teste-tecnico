import { FaCircleNotch, FaRegCheckCircle, FaRegCircle, FaRegTimesCircle } from "react-icons/fa";
import styled, { keyframes } from "styled-components";


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Base = styled.div`
        width: 300px;
        height: 32px;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #3bb3e0;
        color: white;
        background-color: #3bb3e0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        text-transform: uppercase;
        gap: 4px;
        svg {
            width: 24px;
            height: 24px;
            animation: ${spin} 1s infinite;
        }
        span {
            width: 100%;
            text-align: center;
        }
`

export const Status = ({icon, label, status}) => {
    return <>
    <Base>
        {status === "idle" && <FaRegCircle/>}
        {status === "fetching" && <FaCircleNotch/>}
        {status === "ok" && <FaRegCheckCircle/>}
        {status === "error" && <FaRegTimesCircle/>}
        <span>
        {status === "idle" && "Status: Idle"}
        {status === "fetching" && "Status: Fetching"}
        {status === "ok" && "Status: Connected"}
        {status === "error" && "Status: Error"}
        </span>      
    </Base>
    </>
}