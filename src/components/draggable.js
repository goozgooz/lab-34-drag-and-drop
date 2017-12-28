import React from 'react';

class Draggable extends React.Component{
  constructor(props){
    super(props);
    
    this.handleDragStart=this.handleDragStart.bind(this);
  }
  
  handleDragStart(e){
    console.log('__DRAGGING__', this.props.data); 
    e.dataTransfer.getData('application/json', JSON.stringify(this.props.data));
  }
  render(){
    return(
      <div draggable onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    );
  }
}

export default Draggable; 
