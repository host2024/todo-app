const TodoForm = ({ setTodos }) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const content = formData.get('content');

        if (!title.trim() || !content.trim()) {
            if (!title.trim() && !content.trim()) {
                return alert('제목과 내용을 입력해주세요.');
            } else if (!title.trim()) {
                return alert('제목을 입력해주세요.');
            } else if (!content.trim()) {
                return alert('내용을 입력해주세요.');
            }
        }

        const nextTodo = {
            id: crypto.randomUUID(),
            title,
            content,
            isDone: false,
        };
        setTodos((prevTodos) => [...prevTodos, nextTodo]);

        e.target.reset();
    };
    return (
        <div className="contents">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <label htmlFor="todo-title">제목:</label>
                    <input type="text" id="todo-title" placeholder="제목을 입력하세요" name="title" />
                </div>
                <div className="input-group">
                    <label htmlFor="todo-content">내용:</label>
                    <input type="text" id="todo-content" placeholder="내용을 입력하세요" name="content" />
                </div>
                <button type="submit">추가하기</button>
            </form>
        </div>
    );
};

export default TodoForm;
