import { Injectable } from "@angular/core";
import { ERes } from "@app/enums/res.enum";
import Todo from "@app/model/todo.model";
import { TodoSqliteService } from "@app/sqlite/todo.sqlite.service";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class TodoStore {
    changeStatusById(id: number, done: boolean): Promise<ERes> {
        return this.todoSqliteService
            .changeStatusById(id, done)
            .then((res: ERes) => {
                if (res === ERes.OK) {
                    this._todos.next([
                        ...this._todos.getValue().map((val) => {
                            if (val.id === id) {
                                val.done = done;
                            }
                            return val;
                        }),
                    ]);
                }
                return res;
            });
    }

    private _todos: BehaviorSubject<Array<Todo>> = new BehaviorSubject([]);

    constructor(private todoSqliteService: TodoSqliteService) {
        this._todos.next(this.todoSqliteService.getAll());
    }

    getAll(): Observable<Array<Todo>> {
        return this._todos.asObservable();
    }

    deleteById(id: number): Promise<ERes> {
        return this.todoSqliteService.deleteById(id).then((val) => {
            if (val === ERes.OK) {
                this._todos.next([
                    ...this._todos.getValue().filter((e) => e.id !== id),
                ]);
            }
            return val;
        });
    }

    create(title: string, date: string): Promise<ERes> {
        return this.todoSqliteService.create(title, date);
    }
}
