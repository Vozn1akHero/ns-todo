import { Injectable } from "@angular/core";
//import { readFileSync, existsSync, writeFileSync } from "fs";
const Sqlite = require("nativescript-sqlite");
//const fs = require("fs");

@Injectable()
export class SqliteProvider {
    private _db: any;
    public get db(): any {
        return this._db;
    }
    init() {
        let db: any = null;
        Promise.resolve(
            new Sqlite("TodoDb", function (err, database) {
                if (err) {
                    console.error("We failed to open database", err);
                } else {
                    //const path = "./script.sql";
                    //const script: string = fs.readFileSync(path, "utf8").toString();
                    const script: string = `
                    CREATE TABLE IF NOT EXISTS Todo (
                        Id INTEGER PRIMARY KEY AUTOINCREMENT,
                        Title TEXT NOT NULL,
                        Done INTEGER NOT NULL DEFAULT 0,
                        Date TEXT NOT NULL
                    )`;
                    database
                        .execSQL(script)
                        .then(() => {
                            db = database;
                            database.execSQL("DELETE FROM Todo").then(() => {
                                database.execSQL(
                                    `INSERT INTO Todo(Title, Done, Date) VALUES('Todo 1',1,'08/07/2020 10:00:15')`
                                );
                                database.execSQL(
                                    `INSERT INTO Todo(Title, Done, Date) VALUES('Todo 2',0,'08/07/2020 12:00:15')`
                                );
                                database.execSQL(
                                    `INSERT INTO Todo(Title, Done, Date) VALUES('Todo 3',1,'08/07/2020 13:00:15')`
                                );
                            });
                        })
                        .catch((err) => {
                            console.log("blad incjalizacji bazy: ", err);
                        });
                }
            })
        ).then(() => {
            this._db = db;
        });
    }
}
