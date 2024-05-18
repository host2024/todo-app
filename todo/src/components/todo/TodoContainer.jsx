import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
    const [todos, setTodos] = useState([]);

    const workingTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);

    return (
        <section>
            <div className="main">
                <h1 className="home">Todo List</h1>
                <span className="logo">React</span>
            </div>
            <TodoForm setTodos={setTodos} />
            <div className="working-background">
                <TodoList title="Working" todos={workingTodos} setTodos={setTodos} />
            </div>
            <div className="money-background">
                <TodoList title="Done" todos={doneTodos} setTodos={setTodos} />
            </div>
        </section>
    );
};

export default TodoContainer;
