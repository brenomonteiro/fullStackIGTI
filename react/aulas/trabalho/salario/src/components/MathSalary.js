import React, { Component } from 'react'
import { calculateSalaryFrom } from './salary.js';
export default class MathSalary extends Component {

    percent = (salario, desconto) => {
        let porcentagem = (desconto / salario) * 100;
        if (isNaN()) {
            return '0%';
        } else {
            return `${porcentagem.toFixed(2)}%`;
        }

    }

    render() {
        const calc = calculateSalaryFrom(this.props.fullSalary)
        console.log('calc aqui' + calc)

        let formatter = new Intl.NumberFormat([], {
            style: 'currency',
            currency: 'BRL'
        })

        return (
            <div>
                <input
                    type="text"
                    value={formatter.format(calc.baseINSS)}
                    //onChange={this.handleNameChange}
                    placeholder="base inss"
                /> <input
                    type="text"
                    value={`${formatter.format(calc.discountINSS)}(${this.percent(this.props.fullSalary, calc.discountINSS)})`}
                    //onChange={this.handleNameChange}
                    placeholder="desconto inss"
                /> <input
                    type="text"
                    value={formatter.format(calc.baseIRPF)}
                    onChange={this.handleNameChange}
                    placeholder="base irpf"
                /> <input
                    type="text"
                    value={`${formatter.format(calc.discountIRPF)}(${this.percent(this.props.fullSalary, calc.netSalary)})`}                    onChange={this.handleNameChange}
                    placeholder="salario liquido"
                />

                <input
                    type="text"
                    value={`${formatter.format(calc.netSalary)}(${this.percent(this.props.fullSalary, calc.netSalary)})`}
                    onChange={this.handleNameChange}
                    placeholder="salario liquido"
                />
            </div>
        )
    }
}
