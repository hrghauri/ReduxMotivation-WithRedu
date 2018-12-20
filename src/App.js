import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';
import Number from './components/Number';
import { connect} from 'react-redux';


class App extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //   names: []
    // }

    // this.addName = this.addName.bind(this);
    this.removeName = this.removeName.bind(this);
  }

  // addName(name){
  //   console.log(name);
  //   let names = this.state.names;
  //   names.push(name);
  //   this.setState({
  //     names: names
  //   })
  // }


  removeName(index){
    let names = this.props.names;
    names.splice(index,1);
    this.setState({names: names})
  }

  render() {

    console.log(this.prop)
    if (this.props.names.length === 0)
    return (
      <Form addNameToApp={this.props.addName}>
      </Form>
    )

    console.log(this.prop)




    const renderedContent = <div>
      <Form initialName={""}  addNameToApp={this.addName}>
      </Form>

       
       <List names={this.prop.names} removeNameFromApp = {this.removeName}></List> 
       <Number length = {this.prop.names.length}></Number>
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
    addName: (name) => {dispatch({type: "ADD_NAME", name: name})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
