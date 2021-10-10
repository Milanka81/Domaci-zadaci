import { useState } from "react"
import { postProduct } from "../service"


const ProductForm = ({setProducts}) => {

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [productInfo, setProductInfo] = useState('')
  
   

    return (
        <div>
           <label>name:</label>
           <input type="text" name="productName" onChange={(e)=>{
           setProductName(e.target.value)}}/>

           <label>price:</label>
           <input type="number" name="productPrice" onChange={(e)=>{
            setProductPrice(e.target.value)}}/>

           <label>info:</label>
           <input type="text" name="productInfo" onChange={(e)=>{
            setProductInfo(e.target.value)}}/>
      

      <button onClick={()=>{
    
        let newProduct ={
          name: productName,
          price: productPrice,
          info: productInfo
        }
        
        postProduct(newProduct).then(res=> {
         setProducts(prev=> [...prev,res.data]); 
         
        })
            
      }}>Create product</button> 
        </div>
      );
}
 
export default ProductForm;