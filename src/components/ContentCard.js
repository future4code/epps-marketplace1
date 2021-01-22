import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography, withStyles } from '@material-ui/core';
import CardActions from "@material-ui/core/CardActions";
// import Button from "@material-ui/core/Button";
import { PlayCircleFilledWhite } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "space-between",
        width: "10vw",
        height: "30vh",
        marginRight: "4%",
        marginBottom: "4%",
        transition: "height 1s, width 1s, translate 2s",
        backgroundColor: "white", //cor dentro do card
    },

    media: {
        objectFit: "cover",
        height: "10vh",
        transition: "height 1s, width 1s",
    },

    button: {
        justifyContent: "center",
        backgroundColor: "white", //cor do botao
    },

    cardDetails: {
        marginTop: "100px",
        height: "500px", //largura do card das fotos
        width: "300px", //tamanho do card das fotos
        objectFit: "cover",
        marginLeft: "20px",
        backgroundColor: "white",
    },

    mediaDetails: { //card das fotos
        height: "30vh",
        backgroundColor: "#333D44", //cor dentro do card
        border: "10px solid white"
    }
}

class ContentCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { shownDetails: true }


    }

    changeStatus = (id) => {
        if (this.state.shownDetails === false) {
            this.setState({ shownDetails: true })
            this.props.functionCardActive(id)
        } else {
            this.setState({ shownDetails: false })
            this.props.functionCardActive("")
        }
    }

    render() {
        const { classes } = this.props
        return (
            <Card
                style={{
                    ...styles.card,
                    ...(this.state.shownDetails ? styles.cardDetails : {}),
                }}>
                <CardActionArea on click={() => this.changeStatus(this.props.id)}>
                    <CardMedia
                        component="img"
                        alt="img"
                        image={this.props.image}
                        style={{
                            ...styles.media,
                            ...(this.state.shownDetails ? styles.mediaDetails : {}),
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">
                           {this.props.productName}
                           <hr/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Typography component="p">
                    {Number(this.props.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </Typography>

                {this.state.shownDetails &&
                    <span>
                        <Typography component="p"><strong>Formas de Pagamento: </strong>
                            {this.props.paymentMethod}
                        </Typography>
                        <Typography component="p"><strong>Descrição: </strong>
                            {this.props.description}
                        </Typography>
                        <Typography component="p"><strong>Parcelado em: </strong>
                            {this.props.installments}x
                        </Typography>
                    </span>
                }

                <CardActions className={classes.button} >
                    <div>
                        <Button onClick={() => this.props.addProduct(this.props.eachProduct)} size="size" variant="contained" color="disabled">Adicionar ao Carrinho</Button>
                        <img src="https://img.icons8.com/ios/26/000000/shopping-cart.png"/>
                    </div>
                </CardActions>
            </Card>

        )
    }
}

export default withStyles(styles)(ContentCard);

