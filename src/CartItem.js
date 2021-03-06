import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Moblie Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        console.log('this.state', this.state);
    }
    render () {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} } >{title}</div>
                    <div style={ {color: '#777'} }>Price: Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                            alt="increase"
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;