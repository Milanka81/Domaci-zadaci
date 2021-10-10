import { useState } from "react";
import StyledBox from "./StyledBox";

const User = ({user}) => {
    const [boja,setBoja] = useState('blue')
    return ( 
        <StyledBox background = {boja} onMouseEnter={(e)=>{
            setBoja(`rgb(${e.clientX},${e.clientY},${Math.random()*255})`)
        }}>
            <p>{user.username}</p>
            {user.avatar?<img src={user.avatar} alt="avatar" />:''}
        </StyledBox>
     );
}
 
export default User;