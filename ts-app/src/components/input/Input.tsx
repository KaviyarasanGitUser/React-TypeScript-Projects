import "./Input.css";
import { todoStore } from "../../store/TodoStore";
import { observer } from "mobx-react-lite";

const Input = observer(() => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (todoStore.value !== "") todoStore.setTodoList(todoStore.value);
    todoStore.setValue("");
  };

  return (
    <div className="form-div">
      <form className="form-css" autoComplete="off">
        <label className="input-label" htmlFor="task">
          Task
        </label>
        <input
          value={todoStore.value}
          className="input-field"
          type="text"
          name="task"
          id="task"
          maxLength={50}
          onChange={(e) => todoStore.setValue(e.target.value)}
        />
        <button
          type="reset"
          className="submit-button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
});

export default Input;
