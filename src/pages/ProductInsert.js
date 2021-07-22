import React, {useState} from 'react'
import styled from 'styled-components'

function ProductInsert() {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")

    var products = []

    function subscribe(newName, newEmail){

        products.push({
        name: newName,
        email:newEmail
        })

        localStorage.setItem("cients", JSON.stringify(products));
    }

    return (
        <MainDiv>
           <h2>Cadastro de produto</h2> 
           <div className="input-field col s6">
           <label for="nome">Nome do produto: </label>
           <input type="text" id="nome" onChange={e=> setName(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label for="price">Preço: </label>
           <input type="text" id="price" onChange={e=> setPrice(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label for="img">Endereço da imagem: </label>
           <input type="text" id="img" onChange={e=> setImg(e.target.value)}/>
           </div>
           <button 
           className="btn"
           onClick={()=> subscribe(name, price, img)}
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
