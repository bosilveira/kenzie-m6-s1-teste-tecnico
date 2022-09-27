import styled from "styled-components";

const Field = styled.div`
    background: white;
    width: 320px;
    height: 92spx;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    label {
        font-size: 16px;
        text-transform: uppercase;
        color: #3bb3e0;
    }
    textarea {
        height: 56px;
        resize: none;
        padding: 2px 4px;
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: double;
        border-bottom-width: 2px;
        border-color: #3bb3e0;
        background: #F0F8FF;
        outline: none;
    }
`
        
export const TextArea = ({name, id, label, placeholder}) => {
    return <Field>
        <label htmlFor={name}>{label}</label>
        <textarea name={name} id={id} placeholder={placeholder} ></textarea>
    </Field>
}
    