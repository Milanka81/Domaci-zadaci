import { useContext } from "react"
import { GlobalContext } from "./GlobalState"

export const JednaTransakcija = ({transakcija}) =>{
    const plusMinus = transakcija.suma < 0? '-' : '+'
    const {obrisiTransakciju} = useContext(GlobalContext)
    
    
    return (
        <li key={transakcija.id}>
            {transakcija.opis}
            <span>{plusMinus}{Math.abs(transakcija.suma)}</span>
             <button onClick = {() => obrisiTransakciju(transakcija.id)}>obrisi</button>
          </li>
    )
}