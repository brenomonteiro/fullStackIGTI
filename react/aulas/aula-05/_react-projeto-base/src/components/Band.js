import React, { Component } from 'react'

export default class Band extends Component {
   
    constructor(){
        super();
        this.state = {
            bandName:'bandanome',
            bandMembers:[
                {
                    id:1,
                    name:'breno',
                    instrument:'baixo'
                },
                {
                    id:2,
                    name:'bruno',
                    instrument:'baixo'
                }
            ]
        }
    }
   
    render() {
        const {bandName, bandMembers} = this.state;
        return (
            <div>
                <h4>{bandName}</h4>
                <ul>
                {bandMembers.map(({id, name,instrument}) => {
                    return (
                    <li  key={id}>
                            {name}-{instrument}
                    </li>)
                })}
              </ul>
            </div>
        )
    }
}
