import "./Header.css";
import { todoStore } from "../../store/TodoStore";

function Header() {
  return (
    <>
      <div className="header-button">
        <span>All Todos</span>
        <span>{todoStore.todoList.length}</span>
      </div>
      <div className="header-button">
        <span>Pending</span>
        <span>
          {todoStore.todoList.filter((obj) => obj.isCompleted === false).length}
        </span>
      </div>
      <div className="header-button">
        <span>Completed</span>
        <span>
          {todoStore.todoList.filter((obj) => obj.isCompleted === true).length}
        </span>
      </div>
    </>
  );
}

export default Header;
