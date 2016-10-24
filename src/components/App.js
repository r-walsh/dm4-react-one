import React from "react";

import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			  posts: []
			, showNewPostForm: false
		};

	}

	savePost( post ) {
		console.log( this.state.posts );
		this.setState( {
			  posts: [ ...this.state.posts, post ]
			, showNewPostForm: false
		} );
	}

	getPostInfo( post ) {
		alert( post );
	}

	toggleNewPostForm() {
		this.setState( { showNewPostForm: !this.state.showNewPostForm } );
	}

	render() {
		const posts = this.state.posts.map( ( post, index ) => <Post key={ index }
																	 getInfo={ this.getPostInfo }
																	 { ...post } /> );
		// const posts = this.state.posts.map( post => <Post content={ post.content } title={ post.title } />);

		return (
			<div>
				{ this.state.showNewPostForm
					?
						<NewPost savePost={ this.savePost.bind( this ) } />
					:
						<button onClick={ this.toggleNewPostForm.bind( this ) }>New Post</button>
				}
				{ posts }
			</div>
		);
	}
}
