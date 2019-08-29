import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './TodoItem.css'

export class TodoItem extends Component {

    render() {
        let className = 'item-title';
        if (this.props.todo.completed) className += ' completed-item';

        const { id, title, completed } = this.props.todo;
        return (
            <div>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} defaultChecked={ completed }/>
                <h2 className={className}>{title}</h2>
                <button onClick={this.props.deleteTodo.bind(this, id)}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
