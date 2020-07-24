import { ResultWrapper } from "@app/model/result-wrapper.model";
import { ERes } from "@app/enums/res.enum";
import { Injectable } from "@angular/core";
import { SqliteProvider } from "./sqlite-provider";
import Todo from "@app/model/todo.model";

@Injectable({ providedIn: "root" })
export class TodoSqliteService {
    getAll(): Array<Todo> {
        let todos: Array<Todo> = [];
        this.sqliteProvider.db.all("SELECT * FROM Todo").then(
            (rows) => {
                console.log(rows);
                for (let row in rows) {
                    todos.push(
                        new Todo(
                            rows[row][0],
                            rows[row][1],
                            rows[row][2],
                            rows[row][3]
                        )
                    );
                }
            },
            (err) => console.log(err)
        );
        return todos;
    }

    constructor(private sqliteProvider: SqliteProvider) {}

    getById(id: number) {
        let todo: Todo;
        const query: string = `SELECT * FROM Todo WHERE Id = ${id}`;
        this.sqliteProvider.db.all(query).then(
            (rows) => {
                todo = new Todo(rows[0][0], rows[0][1], rows[0][2], rows[0][3]);
            },
            (err) => console.log(err)
        );
        return todo;
    }

    create(title: string, date: string): Promise<ERes> {
        const query: string =
            "INSERT INTO Todo(Title, Done, Date) VALUES(?,?,?)";
        return this.sqliteProvider.db
            .execSQL(query, [title, date])
            .then(() => {
                return ERes.CREATED;
            })
            .catch((err) => {
                console.log(err);
                return ERes.ERROR;
            });
    }

    deleteById(id: number): Promise<ERes> {
        return this.sqliteProvider.db
            .execSQL("DELETE FROM Todo WHERE Id = ?", [id])
            .then(() => {
                return ERes.OK;
            })
            .catch((err) => {
                console.log(err);
                return ERes.ERROR;
            });
    }

    changeStatusById(id: number, done: boolean): Promise<ERes> {
        const newVal = done ? 1 : 0;
        return this.sqliteProvider.db
            .execSQL("UPDATE Todo SET done = ? WHERE Id = ?", [newVal, id])
            .then(() => {
                return ERes.OK;
            })
            .catch((err) => {
                console.log(err);
                return ERes.ERROR;
            });
    }
}
