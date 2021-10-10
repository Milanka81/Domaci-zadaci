import User from "./User";

const Users = ({users}) => {
    return ( 
        <div style={{display: "flex" , flexWrap:"wrap"}}>
            {users.map(user => <User key={user.id} user = {user}/>)}
        </div>
     );
}
 
export default Users;