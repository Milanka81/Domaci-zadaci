import { useContext } from "react"
import { GlobalContext } from "./GlobalState"


const Budzet = () => {
    const {transakcije} = useContext(GlobalContext)

    const suma = transakcije.map(transakcija => transakcija.suma)
    const ukupno = suma.reduce((zbir, el) => (zbir += el), 0).toFixed(2)

    return (
        <>
        <p>Dostupan budzet</p>
        <h1>{ukupno}</h1>
        </>
    )
}
 export default Budzet