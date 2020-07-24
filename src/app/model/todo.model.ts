export default class Todo {
    id: number;
    title: string;
    done: boolean;
    date: Date;

    constructor(id: number, title: string, done: boolean, date: Date) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.date = date;
    }
}
