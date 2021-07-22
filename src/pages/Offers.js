import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import api from '../services/api'

const Offers = function () {

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get('/products').then(
            response => {
                setProducts(response.data)
            }
        )
    }, []);

    return (
        <div >
            <TitleDiv>
                <h3>Principais Ofertas</h3>
                <Link to="/subscribe">
                    <SubsBtn className="btn waves-effect green darken-1">
                        Inscreva-se e receba ofertas no seu email!
                    </SubsBtn>
                </Link>
            </TitleDiv>
            <MainDiv  >

                {
                    products.map(((product) => {
                        return (
                            <Card key={product.name}>
                                <Img alt={product.price} src={product.img} />
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
    flex-wrap: wrap;
    
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
    text-align: center;
    width: 220px;
    cursor: pointer;
    border: 2px solid grey;
    border-radius: 10px;
    margin: 20px;
    padding: 10px;

    &:hover{
        border: 2px solid red;
    }
`
const Img = styled.img`
    width: 120px;
`

export default Offers
