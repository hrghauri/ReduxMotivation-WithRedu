import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import Number from './components/Number';
import { connect} from 'react-redux';


class App extends Component {



  render() {
    console.log(this.props)

    if (this.props.names.length === 0)
    return (
      <Form addNameToApp={this.props.addName}>
      </Form>
    )



    const renderedContent = <div>
      <Form   addNameToApp={this.props.addName}>
      </Form>

       
       <List names={this.props.names} removeNameFromApp = {this.props.removeName}></List> 
       <Number ></Number>
    </div>

    return (
      <div>
      {renderedContent}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    names: state.names
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addName: (name) => {dispatch({type: "ADD_NAME", name})},
    removeName: (index) => {dispatch({type:"REMOVE_NAME", index})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
