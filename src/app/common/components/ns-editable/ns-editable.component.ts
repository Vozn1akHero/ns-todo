import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-ns-editable",
    templateUrl: "./ns-editable.component.html",
    styleUrls: ["./ns-editable.component.scss"],
})
export class NsEditableComponent implements OnInit {
    editable: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}
