import React from "react";
import axios from "axios";
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const Box = styled.div`
    margin: auto;
    width: 600px;
    padding: 50px;
    background-color: #FFFCED; //cor dentro do fornecedor
    font-family: 'Abel', sans-serif;
    color: black;
    text-align: center;
    
`

const Main = styled.div` //div background do fornecedor
    background-color: #333D44;
    font-family: 'Abel', sans-serif;
    /* background-image: url("https://img.icons8.com/ios-filled/50/000000/lo-fi.png"); //icones do tape */
`

export default class Consumidor extends React.Component {
    state = {
        inputName: "",
        inputImage: [],
        inputDescription: "",
        inputPrice: "",
        inputCategory: "",
        inputPaymentMethod: "",
        inputInstallments: 1,
        todosDados: [],
    };

    // ****************************************************** POST *************************************************

    createProduct = () => {
        const body = {
            name: this.state.inputName,
            description: this.state.inputDescription,
            price: this.state.inputPrice,
            paymentMethod: this.state.inputPaymentMethod,
            category: this.state.inputCategory,
            photos: [this.state.inputImage],
            installments: this.state.inputInstallments,
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products", body)
            .then((resposta) => {
                alert("Produto cadastrado com suceso!")
                this.getProducts()
                this.setState({inputName: '', inputImage: '', inputDescription: '', inputPrice: '', inputCategory: '', inputPaymentMethod: '', inputInstallments: ''})
            })
            .catch((erro) => {
                alert("Não foi possivel cadastrar o produto!" + erro.message)

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
            <Main>
                <Box className="Produto">
                    <h1>Cadastre o produto:</h1>
                    <hr></hr>
                    <h2>Nome do produto:</h2>
                    <input onChange={this.getName} value={this.state.inputName} type="text" placeholder="insira o nome do produto"/>
                    <h2>Descrição do produto:</h2>
                    <input onChange={this.getDescription} value={this.state.inputDescription} type="text" placeholder="insira a descrição"/>
                    <h2>Preço de venda:</h2>
                    <input onChange={this.getPrice} value={this.state.inputPrice} type="number" placeholder="insira preço do produto"/>
                    <h2>URL do produto</h2>
                    <input value={this.state.inputImage} onChange={this.getImage} placeholder="URL"/>
                    <h2>Categoria do produto:</h2>
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
                    <br/>
                    <br/>
                    <Button onClick={this.createProduct} size="medium" variant="contained" color="default">Salvar</Button>
                    <hr/>
                    <h1>Lista dos produtos</h1>
                    <hr></hr>
                        {this.state.todosDados.map(p => {
                            return (
                                <div>
                                    <h2>Produto: {p.name}</h2>
                                    <Button onClick={() => { this.deleteProduct(p.id) }} size="small" variant="outlined" color="secondary">Deletar produto</Button>
                                </div>
                            )
                        })}
                </Box>
            </Main>
        )
    }
}
