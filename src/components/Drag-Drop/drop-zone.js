import React from 'react';

class DropZone extends React.Component {
  constructor(props){
    super(props);
    
    this.handleDragOver=this.handleDragOver.bind(this);
    this.handleDrop=this.handleDrop.bind(this);
  }
  
  handleDragOver(e){
    e.preventDefault();
  }
  
  handleDrop(e){
    try{
      let data = JSON.parse(e.dataTransfer.getData('application/json'));
      this.props.onComplete(data, this.props.id);
    }
    catch(e){
      console.log('bad data received', e);
    }
  }
  
  render(){
    return(
      <div onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
        {this.props.children}
      </div>
    );
  }
}

export default DropZone;