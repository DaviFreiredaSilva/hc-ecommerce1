import React from 'react'
import styled from 'styled-components'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Offers = function () {
    return (
        <div>
            <TitleDiv>
                <h3>Principais Ofertas</h3>
                <Link to="/subscribe">
                    <SubsBtn className="btn waves-effect green darken-1">
                        Inscreva-se e receba ofertas no seu email!
                    </SubsBtn>
                </Link>
            </TitleDiv>
            <MainDiv>
                {
                    Data.map(((product, index) => {
                        return (
                            <Card key={product.name}>
                                <img alt={product.price} src={product.img} />
                                <p>{product.name}</p>
                                <h4>R$ {product.price}</h4>
                            </Card>
                        )
                    }))
                }
            </MainDiv>
        </div>
    )
}

const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
`

const TitleDiv = styled.div`
    display: flex;

`

const SubsBtn = styled.button`
    margin: 20px;
    height: 80px;
    font-size: 20px;
    border-radius: 10px;
`

const Card = styled.div`
    width: 300px;
    cursor: pointer;
    border: 2px solid grey;
    border-radius: 10px;
    margin: 20px;

    &:hover{
        border: 2px solid red;
    }
`


export default Offers
