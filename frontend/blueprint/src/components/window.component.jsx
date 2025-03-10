import styled from "styled-components";

const Frame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    width: 800px;
    height: 360px;
    margin: auto;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.7), 0px 20px 30px rgba(0, 0, 0, 0.3), 0px 10px 50px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    opacity: 1;
    animation-duration: .2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    background: rgba(244, 245, 250, 0.1);
    backdrop-filter: blur(16px);
    .header {
        box-sizing: border-box;
        padding: 12px 16px 32px 16px;
        height: 16px;
        width: 100%;
        justify-content: center;
        text-align: center;
        position: relative;
        font-family: 'Segoe UI';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.02em;
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        .lights {
            width: 52px;
            height: 16px;
            display: flex;
            gap: 8px;
            top: 12px;
            left: 16px;
            position: absolute;
            align-items: center;
            div {
                width: 12px;
                height: 12px;
                border-radius: 50%;
            }
            .red {
                background: #EE6A5F;
                border: 0.5px solid #CE5347;
                box-shadow: inset 0px 0px 6px #EC6D62;
            }
            .yellow {
                background: #F5BD4F;
                border: 0.5px solid #D6A243;
                box-shadow: inset 0px 0px 6px #F5C451;
            }
            .green {
                background: #61C454;
                border: 0.5px solid #58A942;
                box-shadow: inset 0px 0px 6px #68CC58;
            }
        }
        .title {
            height: 16px;
            width: 100%;
            justify-content: center;
            text-align: center;
            position: relative;
            font-family: 'Segoe UI';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 14px;
            letter-spacing: 0.02em;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    .body {
        background-color: rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 32px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .button {
        background-color:#3bb3e0;
        padding:10px;
        position:relative;
        justify-self: center;
        width: 200px;
        height: 48px;
        font-family: 'Open Sans', sans-serif;
        font-size:12px;
        text-decoration:none;
        color:#fff;
        border: solid 1px #186f8f;
        background-image: linear-gradient(90deg, rgb(44,160,202),rgb(62,184,229));
        border-radius: 5px;
        cursor: pointer;
        &:active {
            padding-bottom:9px;
            padding-left:10px;
            padding-right:10px;
            padding-top:11px;
            top:1px;
        }
    }
`

export const Window = () => {
    return <>
    <Frame>
        <div className="header">
            <div className="lights">
                <div className="red"/>
                <div className="yellow"/>
                <div className="green"/>
            </div>
            <div className="title">
                Teste Técnico
            </div>
        </div>
        <div className="body">
            Teste técnico
            <button className="button">
                Iniciar Apresentação
            </button>
        </div>
    </Frame>
    </>
}