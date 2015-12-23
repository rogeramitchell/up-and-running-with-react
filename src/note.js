var Note = React.createClass({
	getInitialState: function() {
		return {editing: false}
	},

	edit: function() {
		this.setState({editing: true});
	},

	save: function() {
		var val = this.refs.newText.getDOMNode().value;

		alert("TODO: Save note value -- " + val);

		this.setState({editing: false});
	},

	remove: function() {
		alert('whoa... deleting this forever!');
	},

	renderDisplay: function() {
		return (
				<div className="rectangularNote">
					<span>
						<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
						<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
					</span>
					<p>{this.props.children}</p>
				</div>
			);
	},

	renderForm: function() {
		return (
				<div className="note">
					<span>
						<textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
						<button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
					</span>
				</div>
			);
	},

	render: function() {
		if(this.state.editing) {
			return this.renderForm();
		} else {
			return this.renderDisplay();
		}
	}
});

var Board = React.createClass({
	propTypes: {
		count: function(props, propName) {
			if(typeof props[propName] !== "number") {
				return new Error('The count property must be a number');
			}
			if(props[propName] > 100) {
				return new Error("Creating " + props[propName] + " notes is ridiculous!");
			}
		}
	},

	getInitialState: function() {
		return {
			notes: [
			'Call Person',
			'Blah blah blah',
			'More blah blah blah'
			]
		};
	},

	render: function() {
		return (
				<div className="board">
					{this.state.notes.map(function(note, i){
						return (
							<Note key={i}>{note}</Note>
							);
					})}
				</div>
			);
	}
});

React.render(<Board count={10}/>, document.getElementById('react-container'));