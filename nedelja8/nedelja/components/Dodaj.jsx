import { useContext, useState } from "react"
import { GlobalContext } from "./GlobalState"
import {v4 as uuidv4} from 'uuid'

const Dodaj = () => {
    const [opis,setOpis] = useState('')
    const [suma,setSuma] = useState(0)
    const [type, setType] = useState("EXPENSE");

    const {dodajTransakciju} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const novaTransakcija = {
            id: uuidv4,
            opis,
            suma: +suma
        }


        dodajTransakciju(novaTransakcija)
    }
    return(
        <>
        <h3>Dodaj transakciju</h3>
        <form onSubmit={onSubmit}>
            
            <div>
                <input type = "text" value = {opis} onChange={(e) => setOpis(e.target.value)}/>
            </div>
            <div>
                <input type = "number" value = {suma} onChange={(e) => setSuma(e.target.value)}/>
            </div>
        
        <button className="btn">Dodaj Transakciju</button>

        </form>
        </>
    )
}
export default Dodaj