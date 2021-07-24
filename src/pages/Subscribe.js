import React, {useState} from 'react'
import styled from 'styled-components'

function Subscribe() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

   function update(){

    let newEmaillist = JSON.parse(localStorage.getItem('emaillist'))
    newEmaillist.push({
        name: name,
        email: email
    })
    localStorage.setItem("emaillist", JSON.stringify(newEmaillist))
}

    return (
        <MainDiv>
           <h2>Inscreva-se</h2> 
           <div className="input-field col s6">
           <label htmlFor="nome">Nome: </label>
           <input type="text" id="nome" onChange={e=> setName(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label htmlFor="email">Email: : </label>
           <input type="email" id="email" onChange={e=> setEmail(e.target.value)}/>
           </div>
           <button 
           className="btn"
           onClick={()=> update(name, email)}
           >
           Inscrever
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

export default Subscribe
