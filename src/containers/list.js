import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItem} from '../actions/index'; 
import {bindActionCreators} from 'redux'; 


class List extends Component {

	renderList() {
		return this.props.items.map((item) => { 
			return (	
				<li 
					onClick={ () => this.props.selectItem(item)}
					key={item.name} 
					className = "list-group-item">{item.name} 
				</li> 
			)
		})
	}
	render(){
		return (
			<ul className='list-group col-sm-4'>
				{this.renderList()} 
			</ul>

		)
	}
}

function mapStateToProps(state){
	return {
		items: state.items
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectItem: selectItem}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);