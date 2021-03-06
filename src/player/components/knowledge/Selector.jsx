import React, { Component } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class Selector extends Component {
	constructor(props) {
		super(props);

		this.options = props.data.map(object => ({
			label: object.name,
			value: object.id.toString(),
		}));
	}

	getValue() {
		const knowledge = this.props.knowledge.reduce((acc, item) => (
			[...acc, this.options.find(option => option.value === item.toString())]
		), []);

		return knowledge.map(item => item.value);
	}

	handleSelectChange = values => {
		if (values.length) {
			const result = values.split(",").map(value => parseInt(value, 10))
			this.props.updateData(result);
		} else {
			this.props.updateData([]);
		}
	}

	render () {
		return (
			<div className="section">
				<p className="title">{this.props.title}</p>
				<Select
					multi
					simpleValue
					value={this.getValue()}
					placeholder={this.props.title}
					options={this.options}
					onChange={this.handleSelectChange}
				/>
			</div>
		);
	}
}

export default Selector;
