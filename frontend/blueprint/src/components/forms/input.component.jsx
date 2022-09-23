import styled from "styled-components";

const Field = styled.div`
    background: white;
    width: 320px;
    height: 48px;
    padding: 8px 16px;
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
        outline: none;
    }
`
        
export const Input = ({name, id, label, type, placeholder}) => {
    return <Field>
        <label for={name}>{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} required/>
    </Field>
}
    