import styled from "styled-components";

const Wallpaper = styled.div`
width: 100%;
min-height: 100vh;
margin: 0;
padding: 32px 0;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
gap: 32px;
background: radial-gradient(50% 100%, rgba(255,255,255,.2), rgba(255,255,255,0)),
            linear-gradient(90deg, rgba(50,100,170,.7) 1px, transparent 0),
            linear-gradient(180deg, rgba(50,100,170,.7) 1px, transparent 0),
            linear-gradient(90deg, rgba(50,100,170,.4) 1px, transparent 0),
            linear-gradient(180deg, rgba(50,100,170,.4) 1px, transparent 0),
            linear-gradient(90deg, rgba(50,100,170,1) 2px, transparent 0),
            linear-gradient(180deg, rgba(50,100,170,1) 2px, transparent 0);
  
  background-color:#074b97;
  background-size:100% 100%, 
                  50px 50px,
                  50px 50px,
                  25px 25px,
                  25px 25px,
                  100px 100px, 
                  100px 100px;
  
  background-attachment: local;
  color: white;
   * {
    margin: 0;
    padding: 0;
    top: 0;
   }
  `

  export const Background = ({children}) => {
    return <Wallpaper>
        {children}
    </Wallpaper>
  }