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
    background-color: white;
    color: black;
    text-align: center;
`

// const DivTest = styled.div`
//     background-color: #333D44;
// `

export default class Consumidor extends React.Component {
    state = {
        inputName: "",
        imputImage: [],
        inputDescription: "",
        inputPrice: "",
        inputCategory: "",
        inputPaymentMethod: "",
        inputInstallments: 1,
        todosDados: []
    };

    // ****************************************************** POST *************************************************

    createProduct = () => {
        const body = {
            name: this.state.inputName,
            description: this.state.inputDescription,
            price: this.state.inputPrice,
            paymentMethod: this.state.inputPaymentMethod,
            category: this.state.inputCategory,
            photos: ["https://picsum.photos/300/200"],
            installments: this.state.inputInstallments,
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products", body)
            .then((resposta) => {
                alert("Produto cadastrado com suceso!")
                this.getProducts()
            })
            .catch((erro) => {
                alert("Não foi possivel cadastrar o produto!")

            })
    }

    // ****************************************************** GET *************************************************

    getProducts = () => {
        const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products")
            .then((respondeu) => {
                // alert('pegou tudo com sucesso')
                this.setState({ todosDados: respondeu.data.products })
                // console.log(respondeu.data)
            })
            .catch((error) => {
                alert('trouxe nada familia')
            })
    }

    componentDidMount = () => {
        this.getProducts()
    }

    // ****************************************************** DELETE *************************************************

    deleteProduct = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products/${id}`)
            .then((respondeu) => {
                this.getProducts()
            }).catch((error) => {
                alert('nao deletou')
            })
    }

    // ****************************************************** EVENT *************************************************

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
        console.log(event.target.value)
    }

    render() {
        const checaMetodoPag = () => {
            if (this.state.inputPaymentMethod === "Cartao") {
                return (
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
            <div>
                <DivMain className="Produto">
                    <h1>Cadastre seu produto:</h1>
                    <p>Insira o nome do produto:</p>
                    <input onChange={this.getName} value={this.state.inputName} type="text" />
                    <p>insira uma descrição do produto:</p>
                    <input onChange={this.getDescription} value={this.state.inputDescription} type="text" />
                    <p>insira o preço de venda:</p>
                    <input onChange={this.getPrice} value={this.state.inputPrice} type="number" />
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
                        <option value="Boleto">Boleto bancário</option>
                        <option value="Paypal">Paypal</option>
                        <option value="Pix">Pix</option>
                    </select>
                    {checaMetodoPag()}
                    <button onClick={this.createProduct}>Salvar</button>
                    <h1>Lista dos produtos</h1>
                    {this.state.todosDados.map(p => {
                        return (
                            <div>
                                <p>{p.name}</p>
                                <button onClick={() => {this.deleteProduct(p.id)}}>Deletar produto</button>
                            </div>
                        )
                    })}
                </DivMain>
            </div>
        )
    }
}
