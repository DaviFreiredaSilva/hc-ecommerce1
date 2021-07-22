import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import api from '../services/api'

function Subscribe() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [emailList, setEmailList] = useState([])

    useEffect(() => {
        api.get('/emaillist').then(
            response => {
                setEmailList(response.data)
            }
        )
    }, []);

    function update(newName, newEmail){

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
