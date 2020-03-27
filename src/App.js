import React from 'react'
import './css/App.css'
import Header from './components/Header'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemList from './components/fooditems/ItemList'

//return inside of render method will be converted to user-fefined html tag <App></App>
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          items:[]
        }
        this.additems = this.additems.bind(this)
    }
    additems(item){
      const newlist = this.state.items
        newlist.push(item)
      this.setState((prevState)=>{
          return {
            items:newlist
          }
      })
    }

  render(){

    return (
      <div>
        <Header list={this.state.items}/>
        <div className="heading container">
          <h1 id="title">FOOD MENU</h1>
          <ItemList update={this.additems}/>
        </div>  
        <Footer/>
      </div>
    );

  }
  
}

export default App;
