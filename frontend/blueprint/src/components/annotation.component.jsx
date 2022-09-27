import { FaRegCheckCircle } from "react-icons/fa";
import styled from "styled-components";

const Note = styled.div`
    margin: auto;
    color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 100px;
    border: 0px dashed rgba(255, 255, 255, .6);
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 16px;
        svg {
            width: 64px;
            height: 64px;
        }
        h2 {
            font-family: 'Permanent Marker', cursive;
            font-size: 32px;
            letter-spacing: 4px;
        }
    }
    .content {
        padding: 0 0 0 80px;
        width: 100%;
    }
`

export const Annotation = ({icon, title, children}) => {
    return <>
    <Note>
        <div className="header">
            {icon || <FaRegCheckCircle/>}
            <h2>{title}</h2>
        </div>
        <div className="content">
            {children}
        </div>
    </Note>
    </>
}