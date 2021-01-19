import React from "react";
import StyleItemList from "../ItemList/StyleItemList.css";

export default class ItemList extends React.Component {
    render() {
        return (
            <div>
                <div className="container-item">
                    <div className="container-item-image">
                        <img src="https://picsum.photos/300/400"></img>
                    </div>
                    <div className="container-item-description">
                        <h2>Tenis Preto</h2>
                        {/* <h2>{this.props.itemSelect.name}</h2> */}
                        <p>Descrição do Produto Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error porro veniam vitae maiores saepe maxime a natus assumenda. Quo ut, assumenda error accusantium hic ab quis excepturi tempore dicta.</p>
                        {/* <p>{this.props.itemSelect.description}</p> */}
                        <p>Cartão de Credito</p>
                        {/* <p>{this.props.itemSelect.paymentMethod}</p> */}
                        <p>Parcelas 4</p>
                        {/* <p>{this.props.itemSelect.installments}</p> */}
                        <p>R$ 250,00</p>
                        {/* <h3>{this.props.itemSelect.price}</h3> */}
                        <button>Adicionar no Carrinho</button>
                    </div>
                </div>

            </div>

        )
    }
}

