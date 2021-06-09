import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Draggable, {DraggableCore} from 'react-draggable';
import Todo from './todo.jsx';




export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      

      todolist :[],
    
       };

       

    this.handleChange = this.handleChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
      }


handleChange = event =>


{

this.setState({value:event.target.value});

}

deleteHandler(value)
{ 

 var r =this.state.todolist;

 r.splice(value,1)

console.log(value)


this.setState({todolist: r})
}




clickHandler(event)
{
  
event.preventDefault();

  
  let {todolist} = this.state;

  let length  =  todolist.length>0?todolist.length+1:1;


  this.setState({todolist:todolist.concat(length)})

  
}

  render()
   {
  
    return (
  
  <React.Fragment>

<div className="container.fluid">

<button className="btn btn-primary" onClick={this.clickHandler}><h1>New Task Manager</h1></button>
</div>


{this.state.todolist.map((item,index)=>
    <Draggable key={item}>
      
      <div className="container" style={{maxWidth:"viewport",backgroundColor:"whitesmoke" }}>
  
      
  <div className="row bg-primary">
      
            <div className="col-md-6 lef">
             
             
               <h1 >
                Task Manager {item}
               </h1>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
                 <button className="btn btn-danger" onClick={()=>this.deleteHandler(index)}>X</button>
            </div>
          </div>
        <div className="container gx-5  padding-top margin-top">  
    <div className=" padding-top  margin-top">
      <Todo/>
    </div>
      </div>
     </div>
  </Draggable>
     
     )
           } 

          </React.Fragment>
    )
  }
}


export default App;
