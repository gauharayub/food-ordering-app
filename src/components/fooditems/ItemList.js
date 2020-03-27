import React from 'react'
import FoodItem from './FoodItem'
import './FoodItem.css'

//list of food items to be displayed...
var fooditems = [
    {name:'Sushi',price:{small:120,medium:150,large:200}},
    {name:'Burger',price:{small:80,medium:100,large:150}},
    {name:'Noodles',price:{small:50,medium:100,large:120}},
    {name:'Pizza',price:{small:120,medium:150,large:200}},
    {name:'Chicken',price:{small:120,medium:150,large:200}},
    {name:'Mutton',price:{small:120,medium:150,large:200}},
    {name:'Biryani',price:{small:120,medium:150,large:200}},
    {name:'Italian Soup',price:{small:120,medium:150,large:200}},
    {name:'Nuggets',price:{small:120,medium:150,large:200}},
    {name:'Veggies',price:{small:120,medium:150,large:200}},
    {name:'Bread',price:{small:120,medium:150,large:200}},
    {name:'Salad',price:{small:120,medium:150,large:200}},
    {name:'Sambar',price:{small:120,medium:150,large:200}},
]
//functional component for food-item list.....
function ItemList(props){
    return(
        <div className="row">
            {fooditems.map(item =>
                <div className="col-md-6">
                <FoodItem item={item} updatelist = {props.update}/>
                </div>
            )}

        </div>
    )
}

export default ItemList