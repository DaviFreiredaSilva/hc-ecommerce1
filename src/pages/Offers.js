import React from 'react'
import styled from 'styled-components'
import Data from '../Data'

const Offers = function (){
    return (
        <div>
            <h3>Principais Ofertas</h3>
            <MainDiv>
            {
                Data.map(((product, index)=> {
                    var strImg=`../img/product${index}.jpg`
                    return(
                        <Card key={product.name}>
                        <img src={product.img}/>
                            <p>{product.name}</p>
                            <h4>{product.price}</h4>
                        </Card>
                    )
                }))
            }
            </MainDiv>
        </div>
    )
}

const MainDiv = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Card = styled.div`
    width: 300px;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 20px;
`


export default Offers