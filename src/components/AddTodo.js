import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (event) => {
        this.setState({title: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default AddTodo
