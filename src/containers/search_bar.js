import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this); //always bind onInputChange to this specific version of "this"
		//now when we call onChange, it will refer to this as in this.state and not in reference to the input
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value); 
		this.setState({term: event.target.value});
		//This updates the this.state's term value to what is being put through it (seen in input)
	}

	onFormSubmit(event){
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term: ""}); //upon clicking Submit, it will call the action creator with search 
		//term then rerender the search bar as empty

	}

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
					placeholder="Get a five day forecase in your favorite cities" 
					className="form-control" 
					value={this.state.term} 
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className = "btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather}, dispatch);
}
//allows for this.props.fetchWeather

export default connect(null, mapDispatchToProps)(SearchBar);