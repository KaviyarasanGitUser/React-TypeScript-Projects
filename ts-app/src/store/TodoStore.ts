import { action, makeObservable, observable, toJS } from "mobx"

type task = {
    id: string;
    todo: string;
    isCompleted: boolean
}

export class TodoStore{

    todoList: task[] = []
    value: string = '';

    constructor(){
        makeObservable(this, {
            todoList: observable,
            value: observable,
            setTodoList: action,
            setValue: action,
            handleToggle: action,
            handleDelete: action,
            findObjectIndex: action
        })
    }

    setTodoList = (todo: string): void => {
        const singleTodo: task = {
            id: Math.random().toString(16).slice(2),
            todo: todo,
            isCompleted: false
        }
        this.todoList.push(singleTodo)
    }

    setValue = (value: string): void => {
        console.log(value);        
        this.value = value
    }

    findObjectIndex = (todo: task): number => {
        return this.todoList.findIndex((obj) => obj.id === todo.id)
    }

    handleToggle = (todo: task) => {
        const index = this.findObjectIndex(todo);
        this.todoList[index].isCompleted = !this.todoList[index].isCompleted;
    }
    handleDelete = (todo: task) => {
        const index = this.findObjectIndex(todo);
        this.todoList.splice(index,1);
    }
}

export const todoStore = new TodoStore();