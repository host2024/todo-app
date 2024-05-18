import TodoItem from './TodoItem';

const TodoList = ({ title, todos, setTodos }) => {
    return (
        <div className="todo-list-container">
            <h2 className="todo-list-title">{title}</h2>
            <div className="todo-card-container">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
