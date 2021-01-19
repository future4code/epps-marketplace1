import React from 'react'
import styled from 'styled-components'


const Title = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    font-size: 3.5rem;
    margin: 4vh;
`

const ProductBox = styled.div`
    display: flex;
    width: 50vw;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const Item = styled.p`
    margin-right: 4vw;
    font-weight: bold;
`

const Quantity = styled.p`
    margin-right: 2vw;
`

const Button = styled.button`
    height: 1rem;
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2vw;
    cursor: pointer;
`

const Delete = styled.button`
    color: red;
    border: none;
    background-color: white;
    cursor: pointer;
`

const Price = styled.p`
    margin: auto;
    display: flex;
    justify-content: center;
    margin: 4vh;
`

const Final = styled.button`
    margin: auto;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export default class Cart extends React.Component {
    state={
        cartProduct: [{
            name: "Calça Jeans",
            price: 20,
            quantity: 0,
            id: 1,
        },
        {
            name: "Camiseta preta",
            price: 12,
            quantity: 0,
            id: 2,
        }],
        totalPrice: 0
    }
    componentDidMont= () => {
        this.calculateTotalPrice()
    }
    calculateTotalPrice = () => {
        let finalPrice = 0
        this.state.cartProduct.map((product) => {
             finalPrice += product.price * product.quantity
            this.setState({totalPrice: finalPrice})
        })
    }
    addQuantity = (product) => {
        let add = product.quantity ++
        this.setState({quantity: add})
        this.calculateTotalPrice()
    }
    decreaseQuantity = (product) => {
        if(product.quantity > 0) {
            let sub = product.quantity --
            this.setState({quantity: sub})
            this.calculateTotalPrice()
        }}

    deleteProductCart = (product) => {

        if(window.confirm("tem certeza que deseja tirar " + product.name + " do carrinho?")){

            let newCart = [...this.state.cartProduct]
            const cartIndex = newCart.findIndex((item) => item.id === product.id)
            newCart.splice(cartIndex, 1)
            this.setState({ cartProduct: newCart })
        }

    }

    render() {
      let cartList = this.state.cartProduct.map((product) => {
            return(
                <ProductBox>
                    <Item>{product.name}</Item>
                    <Item>R$ {product.price}</Item>
                    <Button onClick={() => this.addQuantity(product)}>+</Button>
                    <Quantity>Quantidade: {product.quantity}</Quantity>
                    <Button onClick={() => this.decreaseQuantity(product)}>-</Button>
                    <Delete onClick={() => this.deleteProductCart(product)}> Retirar item do carrinho</Delete>
                </ProductBox>
            )})
        return(
            <div>
                <Title>Produtos do carrinho:</Title>
                {cartList}
                <Price>Preço total: {this.state.totalPrice} </Price>
                <Final>Finalizar Compra</Final>
            </div>
        )
    }
}