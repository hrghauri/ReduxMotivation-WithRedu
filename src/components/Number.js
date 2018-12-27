import React from 'react'
import Color from './Color'
import { connect} from 'react-redux';


const Number = (props) => {

  return (
      <div>
       <p>Current name count {props.length}</p>
       <Color length = {props.length}></Color>          
      </div>
  )
}


const mapStateToProps = (state) => {
  return {
    length: state.names.length
  }
}



export default  connect(mapStateToProps)(Number)
