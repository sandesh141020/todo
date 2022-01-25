import React from 'react';
import './App.css';
import Todo from "./todo"
import {library} from "@fortawesome/fontawesome-svg-core"
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);
class App extends React.Component{
  constructor(props){
    super(props)
      this.state={
        Todo:[],
        currenttodo:{
          
          value:"",
          key:""


        }
        

      }

      
    
    this.handleSubmit=this.handleSubmit.bind(this)
    this.addItem=this.addItem.bind(this)
    this.deletetodo=this.deletetodo.bind(this)
    }
    handleSubmit(event){
      this.setState({
        currenttodo:{
        key:Math.floor(Math.random()*100),
        value:event.target.value
        }
      })
    }
    addItem(event){
      event.preventDefault()
      const rad=this.state.currenttodo
      console.log(rad)
      if(rad.text!==""){
        const newTodo=[...this.state.Todo,rad]
      
        this.setState({
          Todo:newTodo,
          currenttodo:{
            value:"",

            key:""
            
          }
        })


      }
    
    }


    deletetodo(key){
      const filtertodo=this.state.Todo.filter((item)=> item.key!==key)
      this.setState({
        Todo:filtertodo
      })
    }
  render(){
    
    
    return(
      <div className='App'onSubmit={this.addItem}>
        
          <header >
          <h1 id="Title">To-Do App</h1>
          <form id='To-Do'>
            <input type="text" placeholder='Enter the text'
              value={this.state.currenttodo.value} onChange={this.handleSubmit}/>
            <button type="submit">Add</button>
            </form>
          </header>
          <Todo todo={this.state.Todo} deletetodo={this.deletetodo}/>
        
        
      </div>
    )
  }
}



export default App;
