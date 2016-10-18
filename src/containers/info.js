import React, { Component} from 'react';
import {connect} from 'react-redux';

class Info extends Component {
	render () {

		if (!this.props.item){ 
			return <div className='details'>
						<h1>Select Item for information!</h1>
					</div>;
		}

		return (
			<div className='details'>
				<h3>Details for: </h3>
				<div><h2>{this.props.item.name}</h2></div>
				<div>{this.props.item.piece}</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		item: state.activeItem
	};
}

export default connect(mapStateToProps)(Info);