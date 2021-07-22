import React, {useState} from 'react'
import styled from 'styled-components'

function ClientInsert() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    var clients = []

    function subscribe(newName, newEmail){

        clients.push({
        name: newName,
        email:newEmail
        })

        localStorage.setItem("cients", JSON.stringify(clients));
    }

    return (
        <MainDiv>
           <h2>Cadastro de cliente</h2> 
           <div className="input-field col s6">
           <label for="nome">Nome: </label>
           <input type="text" id="nome" onChange={e=> setName(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label for="email">Email: </label>
           <input type="email" id="email" onChange={e=> setEmail(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label for="address">Endereço: </label>
           <input type="text" id="address" onChange={e=> setAddress(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label for="password">Senha:  </label>
           <input type="password" id="password" onChange={e=> setPassword(e.target.value)}/>
           </div>
           <button 
           className="btn"
           onClick={()=> subscribe(name, email)}
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

export default ClientInsert
