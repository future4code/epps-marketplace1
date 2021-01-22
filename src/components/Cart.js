import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core';


const ProductBox = styled.div`
    margin: auto;
`

const Box = styled.div`
    margin: auto;
    width: 500px;
    margin-top: 8vh;
    font-family: 'Rajdhani', sans-serif;
    padding: 20px;
    background-color: #FFFCED; //cor de fundo do box
    border: 1px solid black;
    color: black;
    text-align: center;
    border: 10px solid #FFFCED;
    min-height: 80vh;
    border: 1px solid black;
`

const Main = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    background-color: #333D44; //background da tela
    height: 80vh;
    /* background-image: url("https://img.icons8.com/dotty/80/000000/tape-drive.png"); //icones do tape */
`

export default class Cart extends React.Component {

    componentDidMount() {
        this.props.calculateTotalPrice()
    }

    render() {
      let cartList = this.props.cart.map((product) => {
            return(
                <ProductBox>
                    <h2>{product.name}</h2>
                    <h2>R$ {product.price}</h2>
                    <Button onClick={() => this.props.deleteProductCart(product)} size="small" variant="outlined" color="secondary">Remover</Button>
                </ProductBox>
            )})
        return(
            <Main>
                <Box>
                <img src="https://img.icons8.com/pastel-glyph/50/000000/shopping-cart--v2.png"/>
                <h1>Produtos no carrinho:</h1>
                {cartList}
                <hr/>
                <h2>Preço total: R$ {this.props.totalPrice}</h2>
                <Button size="small" variant="outlined" color="disabled">Finalizar Compra</Button>
                </Box>
            </Main>
        )
    }
}

