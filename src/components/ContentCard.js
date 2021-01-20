import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Typography, withStyles } from '@material-ui/core';
import CardActions from "@material-ui/core/CardActions";





const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justficyContent: "space-between",
        margin: "auto",
        width: "12vw",
        height: "30vh",
        transition: "height 1s, width 1s, translate 2s"
    },

    media: {
        objectFit: "cover",
        height: "12vh",
        transition: "height 1s, width 1s"
    },

    button: {
        justficyContent: "center"
    },

    cardDetails: {
        height: "65vh",
        width: "25vw"
    },

    mediaDetails: {
        height: "30vh"
    }
}

class ContentCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {shownDetails: false}
            
    }

    componentDidUpdate() {
        this.changeShownDetails()
    }

    changeShownDetails = () => {
        if (this.props.id !== this.props.activeCard && this.state.shownDetails === true) {
            this.setState ({ shownDetails: false})
        }
    }

    changeStatus = (id) => {
        if (this.state.shownDetails === false) {
            this.setState({shownDetails:true})
            this.props.functionCardActive(id)
        } else {
            this.setState({shownDetails:false})
            this.props.functionCardActive("")
        }
    }

    render(){
        const {classes} = this.props
        return (
            <Card
                style={{
                    ...styles.card,
                    ...(this.state.shownDetails ? styles.cardDetails : {}),
                }}>
                <CardActionArea on click={() => this.changeStatus(this.props.id)}>
                    <CardMedia>
                        component="img"
                        alt="img"
                        image={this.props.image}
                        style={{
                            ...styles.media,
                            ...(this.state.shownDetails ? styles.mediaDetails : {}),
                        }}
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="h3">
                            {this.props.productName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Typography component="p">
                        {Number(this.props.price).toLocaleString("pt-BR", {style: "currency",currency: "BRL"})}
                </Typography>

                {this.state.shownDetails &&
                    <span>
                        <Typography component="p"><strong>Descrição:</strong>
                            {this.props.paymentMethod}
                        </Typography>
                        <Typography component="p"><strong>Formas de Pagamento:</strong>
                            {this.props.description}
                        </Typography>
                        <Typography component="p"><strong>Parcelado em:</strong>
                            {this.props.installments}x
                        </Typography>
                    </span>   
                }

                <CardActions className={classes.button} >
                <Button onClick={() => this.props.addProduct(this.props.eachProduct)} size="small" color="secundary">
                    Adicionar ao Carrinho
                </Button>
                </CardActions>
             </Card>


        )  
    }
}

export default withStyles(styles(ContentCard));