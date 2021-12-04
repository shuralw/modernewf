'use strict';

const e = React.createElement;

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }

    render() {
        const todoItems = this.state.todos.map((t) =>  ( 
            <Todo todo={t}/>
        ));
        
        return (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Titel</th>
                    <th>Ablaufdatum</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {todoItems}
                </tbody>
              </table>
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(TodoForm), domContainer);