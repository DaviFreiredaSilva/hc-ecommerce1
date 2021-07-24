import React, {useState} from 'react'
import styled from 'styled-components'

function ClientInsert() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    function update( ){

        let newClients = JSON.parse(localStorage.getItem('clients'))
        newClients.push({
            name: name,
            email: email,
            address:address,
            password: password
        })
        localStorage.setItem("clients", JSON.stringify(newClients))


       
    }

    return (
        <MainDiv>
           <h2>Cadastro de cliente</h2> 
           <div className="input-field col s6">
           <label htmlFor="nome">Nome: </label>
           <input type="text" id="nome" onChange={e=> setName(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label htmlFor="email">Email: </label>
           <input type="email" id="email" onChange={e=> setEmail(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label htmlFor="address">Endereço: </label>
           <input type="text" id="address" onChange={e=> setAddress(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label htmlFor="password">Senha:  </label>
           <input type="password" id="password" onChange={e=> setPassword(e.target.value)}/>
           </div>
           <button 
           className="btn"
           onClick={()=> update(name, email, address, password)}
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
