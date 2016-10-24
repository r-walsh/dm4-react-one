import React from "react";

import "./NewPost.css";

export default class NewPost extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			  postContent: ""
			, postTitle: ""
		}
	}

	static get propTypes() {
		return {
			// postContent: React.PropTypes.string.isRequired
			savePost: React.PropTypes.func.isRequired
		};
	}

	handleChange( field, event ) {
		this.setState( {
			[ field ]: event.target.value
		} );
	}

	savePost() {
		this.props.savePost( {
			  title: this.state.postTitle
			, content: this.state.postContent
		} );
	}

	render() {
		return (
			<section>
				<input
					className="post-title"
					onChange={ this.handleChange.bind( this, "postTitle" ) }
					type="text"
					value={ this.state.postTitle }
				/>
				<textarea
					cols="30"
					onChange={ this.handleChange.bind( this, "postContent" ) }
					rows="10"
					value={ this.state.postContent }
				/>
				<button onClick={ this.savePost.bind( this ) }>Save Post</button>
			</section>
		);
	}
}
