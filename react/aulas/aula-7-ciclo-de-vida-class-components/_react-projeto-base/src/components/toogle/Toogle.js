import React, { Component } from 'react'

export default class Toogle extends Component {
    handleChange = (event) =>{
        const {enable, onToggle} = this.props;
        const isChecked = event.target.checked;
        onToggle(isChecked);

    }
    render() {
        const {enable, onToggle} = this.props;
        return (
            <div className="switch">
          <label>
            Mostrar usuários
              <input 
                type="checkbox" 
                checked = {enable}
                onChange = {this.handleChange}/>
              <span className="lever"></span>
          </label>
        </div>
        )
    }
}
