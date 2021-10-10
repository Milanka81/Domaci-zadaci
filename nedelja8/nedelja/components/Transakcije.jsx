import { useContext } from "react";
import { GlobalContext, pocetnoStanje } from "./GlobalState";
import { JednaTransakcija } from "./JednaTransakcija";



const Transakcije = ({transakcija}) => {
  const {transakcije} = useContext(GlobalContext)

  
  return (
    <>
      <h3>Lista transakcija</h3>
      <ul>
        {transakcije.map(transakcija => (<JednaTransakcija key = {transakcija.id} transakcija = {transakcija}/>))}
      </ul>
    </>
  );
};
export default Transakcije;
