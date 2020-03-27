import React from 'react'
import Button from 'react-bootstrap/Button'
import './FoodItem.css'
import SelectQauntity from '../quantity-selector/SelectQuantity'

class FoodItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            quantity:0,
            name:this.props.item.name,
            checked:0,
            price:0
        }
        this.handlerequest = this.handlerequest.bind(this)
        this.quantitychange = this.quantitychange.bind(this)
        this.radiochange = this.radiochange.bind(this)
    }

    handlerequest(){
        if(!this.state.checked || !this.state.quantity){
            return alert('please select a quantity and size to proceed')
        }
        this.props.updatelist(this.state)
    }

    quantitychange(value){
        this.setState(prevState =>{
            return {
                quantity:value,
                name:prevState.name,
                checked:prevState.checked,
                price:prevState.price
            }
        })
    }

    radiochange(value){

        this.setState((prevState)=>{
            var cost=0
            if(value===1){
                cost=this.props.item.price.small
            }
            else if(value===2){
                cost  = this.props.item.price.medium
            }
            else{
                cost = this.props.item.price.large
            }
            return {
                quantity:prevState.quantity,
                name:prevState.name,
                checked:value,
                price: cost
            }
        })
    }


    render(){

        return(
            <>
                <h3 id="food-name">{this.props.item.name}</h3>
                    <div className="row">
                        <div className="col-4">
                            <label>Small</label>
                            <input type="radio" id="small"
                                    checked={this.state.checked===1} 
                                    onChange={()=>{
                                        this.radiochange(1)
                                    }}/>
                        </div>
                        <div className="col-4">
                            <label>Medium</label>
                            <input type="radio" id="medium" 
                                    checked={this.state.checked===2} 
                                    onChange={()=>{
                                        this.radiochange(2)
                                    }}/>
                        </div>
                        <div className="col-4">
                            <label>Large</label>
                            <input type="radio" id="large"
                                     checked={this.state.checked===3} 
                                     onChange={()=>{
                                        this.radiochange(3)
                                     }}/>
                        </div>
                    </div>
                    
                <div className="row">
                    <div className="col-4 price">&#8377; {this.props.item.price.small}</div>
                    <div className="col-4 price">&#8377; {this.props.item.price.medium}</div>
                    <div className="col-4 price">&#8377; {this.props.item.price.large}</div>
                </div>
                <SelectQauntity parent={this.quantitychange}/>
                <div>
                    <Button variant="success" id="addcart"
                            onClick={()=>{
                                this.handlerequest()
                                alert('item added to cart')
                            }}>
                        Add to cart
                    </Button>
                </div>
            </>
        )

    }
    
}

export default FoodItem
