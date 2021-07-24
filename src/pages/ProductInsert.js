import React, {useState} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

function ProductInsert() {

    const history = useHistory()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")

       function update( ){
        let newProducts = JSON.parse(localStorage.getItem('products'))
        newProducts.push({
            name: name,
            price: price,
            img:img
        })
        localStorage.setItem("products", JSON.stringify(newProducts))

        history.push('/')
    }

    return (
        <MainDiv>
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
