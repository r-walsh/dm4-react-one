import React from "react";

export default function Post( props ) {
	return (
		<div>
			<h3 onClick={ () => props.getInfo( props.title ) }>{ props.title }</h3>
			<p>{ props.content }</p>
		</div>
	);
}

Post.propTypes = {
	title: React.PropTypes.string.isRequired
	, content: React.PropTypes.string.isRequired
	, getInfo: React.PropTypes.func.isRequired
};
