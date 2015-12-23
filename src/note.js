var Note = React.createClass({
	edit: function() {
		alert('whoa editing note dude');
	},

	remove: function() {
		alert('whoa... deleting this forever!');
	},

	render: function() {
		return (
				<div className="rectangularNote">
					<span>
						<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
						<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
					</span>
					<p>{this.props.children}</p>
				</div>
			);
	}
});

React.render(<Note>Hello World</Note>, document.getElementById('react-container'));