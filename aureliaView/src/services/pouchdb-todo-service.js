import _ from 'lodash';
import { Todo } from '../models/todo';
import PouchDB from 'pouchdb';


export class PouchDBTodoService {
    constructor() {
        this.db = new PouchDB('todos-db', { adapter: 'websql' });
        this.todos = [];
        this.latency = 100;
        this.isRequesting = false;
        this.todos = _.times(10, (i) => new Todo(`Task ${i}`));
    }

    getAllTodos() {
        this.isRequesting = true;
        return new Promise((resolve, reject) => {
            this.db.allDocs({ include_docs: true }).then(result => {
                this.todos = [];
                result.rows.forEach(todo => {
                    this.todos.push(todo.doc);
                });
                resolve(true);
                this.isRequesting = false;
            }).catch(err => {
                this.isRequesting = false;
                console.log(err);
                reject(err);
            });
        });
    }

    getTodoById(id) {
        this.isRequesting = true;
        return new Promise((resolve, reject) => {
            this.db.get(id).then(found => {
                resolve.apply(JSON.parse(JSON.stringify(found)));
                this.isRequesting = false;
            }).catch(err => {
                this.isRequesting = false;
                console.log(err);
                reject(err);
            });
        });
    }

    addTodo(todo) {
        this.isRequesting = true;
        return new Promise((resolve, reject) => {
            todo.id = (this.todos.length > 0) ? (this.todos[this.todos.length - 1].id + 1) : 1;
            todo._id = todo.id.toString();
            let instance = JSON.parse(JSON.stringify(todo));
            this.db.put(instance).then(response => {
                this.isRequesting = false;
                this.todos.push(instance);
                resolve(instance);
            }).catch(err => {
                this.isRequesting = false;
                console.log(err);
                reject(err);
            });
        });
    }

    deleteTodoById(id) {
        this.isRequesting = true;
        return new Promise((resolve, reject) => {
            this.db.get(id.toString()).then(todoToDelete => {
                return this.db.remove(todoToDelete);
            }).then(deletedTodo => {
                this.isRequesting = false;
                this.todos = this.todos.filter(todo => todo.id !== id);
                resolve(deletedTodo);
            }).catch(err => {
                this.isRequesting = false;
                console.log(err);
                reject(err);
            });
        });
    }

    updateTodoById(id, values = {}) {
        this.isRequesting = true;
        let valueTodo = new Todo();
        Object.assign(valueTodo, values);
        delete valueTodo.rev;
        delete valueTodo._id;


        return new Promise((resolve, reject) => {
            this.db.get(id.toString()).then(todo => {
                Object.assign(todo, valueTodo);
                return this.db.put(todo);
            }).then(updatedTodo => {
                this.isRequesting = false;
                resolve(updatedTodo);
            }).catch(err => {
                this.isRequesting = false;
                console.log(err);
                reject(err);
            });
        });
    }
}
