import React, {useState} from 'react'
import styled from 'styled-components'

function Subscribe() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    var emailList = []

    function subscribe(newName, newEmail){

        emailList.push({
        name: newName,
        email:newEmail
        })

        localStorage.setItem("emailList", JSON.stringify(emailList));
    }

    return (
        <MainDiv>
           <h2>Inscreva-se</h2> 
           <div className="input-field col s6">
           <label for="name">Nome: </label>
           <input id="name" onChange={e=> setName(e.target.value)}/>
           </div>
           <div className="input-field col s6">
           <label for="email">Email: : </label>
           <input type="email" id="email" onChange={e=> setEmail(e.target.value)}/>
           </div>
           <button 
           className="btn"
           onClick={()=> subscribe(name, email)}
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
