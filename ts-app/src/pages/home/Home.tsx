import "./Home.css";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import { todoStore } from "../../store/TodoStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import NavBar from "../../components/navBar/NavBar";
import { AiOutlineDelete } from "react-icons/ai";

const Home = observer(() => {
  console.log(toJS(todoStore.todoList));

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <>
      <div className="nav-bar-container">
        <NavBar active={1} />
      </div>
      <div className="home-container">
        <div className="header-container">
          <Header />
        </div>
      </div>
      <div className="todo-input-container">
        <Input />
      </div>
      <div className="todo-container">
        {todoStore.todoList.map((todo) => {
          return (
            <div className="single-todo" key={todo.id}>
              <input
                className="check-box"
                type="checkbox"
                onChange={() => todoStore.handleToggle(todo)}
              />
              <p className="todo">{todo.todo}</p>
              <AiOutlineDelete
                style={{ fontSize: 24, margin: 12 }}
                onClick={() => todoStore.handleDelete(todo)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
});

export default Home;
