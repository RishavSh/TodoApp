import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';




class Todo extends React.Component {

constructor(props) {
        super(props);
        this.state = {
          
          value: '',
    
          list :[],
        
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
     var r =this.state.list;
    
     r.splice(value,1)
    
    this.setState({list: r})
    }
    
    
    
    
    clickHandler(event)
    {
    this.setState(
      {
        list: this.state.list.concat(this.state.value)
      });
    event.preventDefault();
    }
    


  render() {
    return (
        <React.Fragment>
        <div className="container " style={{maxWidth:"500px",backgroundColor:"whitesmoke" }} >
        
              
 
         <form className="panel-body " onSubmit= {this.clickHandler}>
        
        
  <div className="container">
       <div className="row">
           
          <div className="col-9">  <b> Enter Task :</b>   
  <input type="text" value={this.state.value} onChange={this.handleChange}/>
  </div>
                <div className ="col-3">
           <button  type="submit" className=" btn btn-success">Add  Task</button>
           </div>
           </div>
                 </div>

         </form>



{this.state.list.map((item,index)=>
 <div className="col-md-12 pb-1">
  <li>
    <div className="col-md-6">
      {item}
    </div>
    <div className="col-md-6 d-flex justify-content-end ">
      <button type="button" className="btn btn-danger" value={index} onClick={()=>this.deleteHandler(index)}>Delete</button>
  </div>
     </li></div>)
           } 
           </div>
           </React.Fragment>
    );
  }
}

export default Todo;
