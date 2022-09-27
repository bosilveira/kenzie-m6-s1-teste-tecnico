import styled from "styled-components";

const Base = styled.div`
    background: white;
    width: 300px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    label {
        font-size: 16px;
        text-transform: uppercase;
        color: #3bb3e0;
    }
    input {
        padding: 2px 4px;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: double;
        border-color: #3bb3e0;
        background: white;
        line-height: 24px;
        outline: none;
    }
`
        
export const Input = ({name, id, label, type, placeholder, value, onchange, required, disabled}) => {
    return <Base>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} value={value} autoComplete={"off"} 
        onChange={onchange} required={required} disabled={disabled}/>
    </Base>
}
    