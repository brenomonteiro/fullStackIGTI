import React, { Component } from 'react'

import MathSalary from './MathSalary.js';
import Bar from './Bar.js';
//import { formatNumber } from './helpers/format-helpers';
export default class InputFullSalary extends Component {
    constructor() {
        super();

        this.state = {
            fsalary: null

        }
    }



    handleNameChange = event => {
        const salary = event.target.value;

        this.setState({ fsalary: salary });

    };


    render() {
        const { fsalary } = this.state;
        return (
            <h1>React Salário</h1>
            <div>
  
                <input
                    type="text"
                    value={fsalary}
                    onChange={this.handleNameChange}
                    placeholder="digite seu salário"
                />

                <MathSalary fullSalary={fsalary} />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Bar />
                    <Bar />
                    <Bar />
                </div>

            </div>
        )
    }
}
