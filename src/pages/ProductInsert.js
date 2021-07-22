import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import api from '../services/api'

function ProductInsert() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/emaillist').then(
            response => {
                setProducts(response.data)
            }
        )
    }, []);

    function update(newName, newPrice, newImg){

        products.push({
        name: newName,
        price:newPrice,
        img: newImg
        })

        localStorage.setItem("products", JSON.stringify(products));
    }

    return (
        <MainDiv>
            {console.log(products)}
           <h2>Cadastro de produto</h2> 
           <div className="input-field col s6">
           <label htmlFor="nome">Nome do produto: </label>
           <input type="text" id="nome" onChange={e=> setName(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label htmlFor="price">Preço: </label>
           <input type="text" id="price" onChange={e=> setPrice(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label htmlFor="img">Endereço da imagem: </label>
           <input type="text" id="img" onChange={e=> setImg(e.target.value)}/>
           </div>
           <button 
           className="btn"
           onClick={()=> update(name, price, img)}
           >
           Cadastrar
           </button>
           
        </MainDiv>
    )
}

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default ProductInsert
