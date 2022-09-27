import { FaCircleNotch, FaRegCheckCircle, FaRegCircle, FaRegTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
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
        width: 100%;
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
        transition: all .4s;
        svg {
            width: 24px;
            height: 24px;
        }
        &.fetching svg {
            animation: ${spin} 1s infinite;
        }
        span {
            width: 100%;
            text-align: center;
        }
`

export const Status = () => {
    const icon = useSelector((state) => state.status.icon);
    const message = useSelector((state) => state.status.message);

    return <>
    <Base className={icon}>
        {icon === "idle" && <FaRegCircle/>}
        {icon === "fetching" && <FaCircleNotch/>}
        {icon === "ok" && <FaRegCheckCircle/>}
        {icon === "error" && <FaRegTimesCircle/>}
        <span>
        {message}
        </span>      
    </Base>
    </>
}