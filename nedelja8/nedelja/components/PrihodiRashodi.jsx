import { useContext } from "react";
import { GlobalContext } from "./GlobalState"

const PrihodiRashodi = () => {
    const {transakcije} = useContext(GlobalContext)

    const suma = transakcije.map(transakcija => transakcija.suma)


    const prihod = suma.filter(el => el > 0).reduce((zbir, el) => (zbir += el), 0).toFixed(2)
    const rashod = (suma.filter(el => el < 0).reduce((zbir, el) => (zbir += el), 0)* -1).toFixed(2)
  return (
    <>
      <div>
        <h3>Prihodi</h3>
        <p>{prihod}</p>
      </div>
      <div>
        <h3>Rashodi</h3>
        <p>{rashod}</p>
      </div>
    </>
  );
};
export default PrihodiRashodi
