import React from "react";
import axios from "axios";
import styled from 'styled-components'
import AppBar from './AppBar/AppBar' //header

const DivMain = styled.div`
    width: 500px;
    margin: auto;
    border: 1px solid black;
    padding: 50px;
    margin-top: 100px;
`

export default class Consumidor extends React.Component {
    state = {
        inputName: "",
        imputImage: [],
        inputDescription: "",
        inputPrice: "",
        inputCategory: "",
        inputPaymentMethod: "",
        inputinstallments: 1
    };

    createProduct = () => {
        const body = {
            name: this.state.inputName,
            description: this.state.inputDescription,
            price: this.state.inputPrice,
            paymentMethod: this.state.inputPaymentMethod,
            category: this.state.inputCategory,
            photos: "https://picsum.photos/300/200",
            installments: this.inputInstallments
        }

        const axiosConfig = {
            // headers: {
            //     Content-Type: 'application/json'
            // }
        };

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products", body)
        .then((resposta) => {
            alert("Produto cadastrado com suceso!")
            
        })
        .catch((erro) => {
            alert("Não foi possivel cadastrar o produto!")
        })
    }

    getName = (event) => {
            this.setState({
            inputName: event.target.value
         })
    }
    
    getImage = (event) => {
            this.setState({
            inputImage: event.target.value
        })
    }
        
    getDescription = (event) => {
            this.setState({
            inputDescription: event.target.value
        })
    }
        
    getPrice = (event) => {
            this.setState({
            inputPrice: event.target.value
        })
    }    

    getCategory = (event) => {
            this.setState({
            inputCategory: event.target.value
        })
    }

    getPayment = (event) => {
            this.setState({
            inputPaymentMethod: event.target.value
        })
    }

    getInstallments = (event) => {
        this.setState({
            inputInstallments: event.target.value
        })
    }

    render() {
            const checaMetodoPag = () => {
                if (this.state.inputPaymentMethod === "Cartao") {
                    return(
                    <select onChange={this.getInstallments}>
                    <option value="1">1 parcela a vista</option>
                    <option value="2">2x sem juros</option>
                    <option value="3">3x sem juros</option>
                    <option value="4">4x sem juros</option>
                    <option value="5">5x sem juros</option>
                    </select>
                    )
                } else { 
                    return null
            }
        }
        
        return (
            <DivMain className="Produto">
            <AppBar/>
            <h1>Cadastre seu produto:</h1>
            <p>Insira o nome do produto:</p>
            <input onChange={this.getName} value={this.state.inputName} type="text"/>
            <p>insira uma descrição do produto:</p>
            <input onChange={this.getDescription} value={this.state.inputDescription} type="text"/>
            <p>insira o preço de venda:</p>
            <input onChange={this.getPrice} value={this.state.inputPrice} type="number"/>
            <p>Selecione a categoria do produto:</p>
                <select onChange={this.getCategory}>
                <option value="">Selecione uma opção abaixo:</option>
                <option value="Roupas">Roupas</option>
                <option value="Artigos de decoração">Artigos de decoração</option>
                <option value="Calçados">Calçados</option>
                <option value="Eletrônicos">Eletrônicos</option>
                <option value="Móveis">Móveis</option>
            </select>
            <p>Selecione o metodo de pagamento aceito:</p>
            <select onChange={this.getPayment}>
                <option value="">Selecione uma opção abaixo:</option>
                <option value="Cartao">Cartao</option>
                <option value="Roupas">Boleto bancário</option>
                <option value="Paypal">Paypal</option>
                <option value="Pix">Pix</option>
            </select>
            {checaMetodoPag()}
            <button onClick={this.createProduct}>Salvar</button>
            </DivMain>
        )
    }
}
