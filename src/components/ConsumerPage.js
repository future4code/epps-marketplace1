import React from "react";
import axios from "axios";
import ContentCard from "./ContentCard";
import * as CS from "./styles/ConsumerStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Cart from './Cart';
import styled from 'styled-components';

const baseURL = `https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne`

const DivBotaoVoltar = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 50px;
`

class ConsumerPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayProductsSt: [],
            currentCategorySt: "",
            minFilter: -Infinity,
            maxFilter: Infinity,
            activeIdCard: "",
            order: "",
            cartOpen: true,
            cart: [],
            productSelected: {},
            totalPrice: 0,
        }
    }


    componentDidMount() {
        this.pickProducts()
    }

    pickProducts = async () => {
        try {
            const res = await axios.get(`${baseURL}/products`)
            const variedProductList = res.data.products
            this.setState({ arrayProductsSt: variedProductList })
        } catch (err) {
            console.log(err)
            alert("Erro na busca de produtos!")
        }
    }


    chooseCategory = (category) => {
        this.setState({ currentCategorySt: category})
    }


    updateCard = (id) => {
        this.setState({activeIdCard: id})
    }

    changeMaximumFilter = (e) => {
        this.setState({ maxFilter: e.target.value})
    }

    changeMinimumFilter = (e) => {
        this.setState({ minFilter: e.target.value})
    }

    changeOrder = (e) => {
        this.setState({order: e.target.value})
    }

    cartClose = () => {
        
        this.setState({cartOpen: true})
    }
    
    addProduct = (productAdd) => {

        this.setState({cartOpen: false})
        const copyCart = [...this.state.cart, productAdd]
        this.setState({cart: copyCart})
    }
    
    deleteProductCart = (product) => {

        if(window.confirm("tem certeza que deseja tirar " + product.name + " do carrinho?")){

            let newCart = [...this.state.cart]
            const cartIndex = newCart.findIndex((item) => item.id === product.id)
            newCart.splice(cartIndex, 1)
            this.setState({ cart: newCart }, () => {
                this.calculateTotalPrice()})

        }}

    calculateTotalPrice = () => {
        let finalPrice = 0

        if(this.state.cart.length !== 0){
        this.state.cart.map((product) => {
             finalPrice += Number(product.price)
            this.setState({totalPrice: finalPrice})
        })} else {
            this.setState({totalPrice: finalPrice})
        }}

        // condicional para carrinho vazio

    render() {
        let minimumFilter = this.state.arrayProductsSt.filter(element => (
            this.state.minFilter ? element.price >= Number(this.state.minFilter) : true
        ))

        let maximumFilter = minimumFilter.filter(element => (
            this.state.maxFilter ? element.price <= Number(this.state.maxFilter) : true
        ))

        let searchFilter = maximumFilter.filter(element => (
            this.props.inputSearch ? element.name.toLowerCase().normalize("NFD").replace(/[/\u0300-\u036f]/g, "").includes((this.props.inputSearch).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) : true
            // forma de normalizacao NFD(para remover os acentos)
        ))

        let categoryFilter = searchFilter.filter(element => (
            this.state.currentCategorySt ? element.category.includes(this.state.currentCategorySt) : true
        ))


        let orderedList = []
        // ordem alfabetica(nome/categoria)+preço
        switch(this.state.order) {
            case "nameA-Z":
                orderedList = categoryFilter.sort(function(x,y) {
                    return x.name.toLowerCase() < y.name.toLowerCase() ? -1 : x.name.toLowerCase() > y.name.toLowerCase() ? 1 : 0
                })
                break;
            case "nameZ-A":
                orderedList = categoryFilter.sort(function(x,y){
                    return x.name.toLowerCase() < y.name.toLowerCase() ? 1 : x.name.toLowerCase() > y.name.toLowerCase() ? -1 : 0
                })
                break;
            case "categoryA-Z":
                orderedList = categoryFilter.sort(function(x,y) {
                    return x.category < y.category ? -1 : x.category > y.category ? 1 : 0
                })
                break;
            case "categoryZ-A":
                orderedList = categoryFilter.sort(function(x,y) {
                    return x.category < y.category ? 1 : x.category > y.category ? -1 : 0
                })
                break;

            case "ascending":
                orderedList = categoryFilter.sort(function(x,y){
                    return Number(x.price) < Number(y.price) ? -1 : Number(x.price) > Number(y.price) ? 1 : 0
                })
                break;

            case "descending":
                orderedList = categoryFilter.sort(function(x,y) {
                    return Number(x.price) < Number(y.price) ? 1 : Number(x.price) > Number(y.price) ? -1 : 0
                })
                break;
            default:
                orderedList = categoryFilter
                break;
        }

        let shownProducts = orderedList.map((product, index) => (

            <div>

                <ContentCard
                id={product.id}
                key={index}
                price={product.price}
                category={product.category}
                paymentMethod={product.paymentMethod}
                installments={product.installments}
                eachProduct={product}
                description={product.description}
                image={product.photos}
                productName={product.name}
                activeCard={this.state.activeIdCard}
                functionCardActive={this.updateCard}
                addProduct={this.addProduct} 
                /> 
            </div>

        
        ))

        if(this.state.cartOpen) {
            return (
                // seleção de categoria e textfield com os filtros
                <CS.Wrapper>
                <CS.CategoryFilter>
                    
                </CS.CategoryFilter>
                <CS.Main>
                    <CS.Container>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            onChange={this.changeMaximumFilter}
                            value={this.state.maxFilter}
                            label="Valor Máximo:"
                            type="number"
                        />

                        <TextField
                            margin="normal"
                            variant="outlined"
                            onChange={this.changeMinimumFilter}
                            value={this.state.minFilter}
                            label="Valor Mínimo:"
                            type="number"
                        />

                        <TextField
                            select
                            onChange={this.changeOrder}
                            name="ordem"
                            label="Ordenar"
                            value={this.state.order}
                            variant="filled"
                            margin="normal"
                            SelectProps={{
                                native:true,
                          }}
                        >
                            <option hidden value=""></option>
                            <option value=""></option>
                            <option value={"nameA-Z"}>Nome de (A-Z)</option>
                            <option value={"nameZ-A"}>Nome de (Z-A)</option>
                            <option value={"categoryA-Z"}>Categoria de (A-Z)</option>
                            <option value={"categoryZ-A"}>Categoria de (Z-A)</option>
                            <option value={"ascending"}>Menor Preço</option>
                            <option value={"descending"}>Maior Preço</option>
                        </TextField>

                    </CS.Container>
                    <CS.Container2>
                        {shownProducts}
                    </CS.Container2>
                </CS.Main>
            </CS.Wrapper>
            )
        } else {
            return (
                <div>
                    <Cart
                    cart={this.state.cart}
                    deleteProductCart={this.deleteProductCart}
                    totalPrice={this.state.totalPrice}
                    calculateTotalPrice={this.calculateTotalPrice}
                    />
                    <DivBotaoVoltar>
                        <img src="https://img.icons8.com/wired/64/000000/double-left.png"/>
                        <Button onClick={this.cartClose} size="large" variant="contained" color="disabled">Continuar comprando</Button>
                    </DivBotaoVoltar>
                </div>
            )}}
}

export default ConsumerPage;


