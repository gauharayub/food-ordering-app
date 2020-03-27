import React from "react"
import './SelectQuantity.css'

//class component for selecting quantity button.......
class SelectQuantity extends React.Component{
    constructor(props){
        super(props)
        this.state={
            quantity:0
        }
        //bind functions to the class component to make state changes....
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    //increase the quantity of selected product...
    increment(){
    
        this.setState(prevState =>{
            this.props.parent(prevState.quantity+1)
            return {
                quantity:prevState.quantity+1
            }
        })
    }

    //decrease the quantity of selected product...
    decrement(){
        this.setState(prevState =>{
            if(prevState.quantity===0){
                return {
                    quantity:prevState.quantity
                }
            }
            else{
                this.props.parent(prevState.quantity-1)
                return {
                    quantity:prevState.quantity-1
                }
            }
            
        })

    }
    render(){
        return(
            <div class="increment-quantity">
                    <h5>Select Quantity</h5>
                     <button onClick = {this.increment} class="plusminus">
                        <i class="fa fa-plus-square fa-lg" aria-hidden="true"></i>
                     </button>
                     <span id="quantity">{this.state.quantity}</span>
                     <button onClick = {this.decrement} class="plusminus">
                        <i class="fa fa-minus-square fa-lg" aria-hidden="true"></i>
                     </button>
            </div>
        )

    }
}

export default SelectQuantity