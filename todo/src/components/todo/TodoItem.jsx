const TodoItem = ({ todo, setTodos }) => {
    const { id, title, content, isDone } = todo;
    const deleteTodo = () => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleTodo = () => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const restoreTodo = () => {
        setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    return (
        <div className="todo-card">
            <h3 className="todo-title">{title}</h3>
            <p>{content}</p>

            <div className="button-container">
                {isDone ? (
                    <button onClick={restoreTodo} className="restore-button">
                        복구
                    </button>
                ) : (
                    <>
                        <button onClick={toggleTodo} className="complete-button">
                            완료
                        </button>
                        <button onClick={deleteTodo} className="delete-button">
                            삭제
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
