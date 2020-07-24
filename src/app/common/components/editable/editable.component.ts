import { DOCUMENT } from "@angular/common";
import {
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Inject,
    OnDestroy,
    OnInit,
    Output,
} from "@angular/core";
import { EditModeDirective } from "@app/common/components/editable/edit-mode.directive";
import { ViewModeDirective } from "@app/common/components/editable/view-mode.directive";
import { fromEvent, Subject } from "rxjs";
import { filter, switchMapTo, take } from "rxjs/operators";
import { SubscriptionManager } from "./../../../helpers/subscription-manager";

@Component({
    selector: "editable",
    templateUrl: "./editable.component.html",
    styleUrls: ["./editable.component.scss"],
})
export class EditableComponent implements OnDestroy, OnInit {
    @ContentChild(ViewModeDirective) viewModeTpl: ViewModeDirective;
    @ContentChild(EditModeDirective) editModeTpl: EditModeDirective;
    @Output() update = new EventEmitter();

    editMode = new Subject();
    editMode$ = this.editMode.asObservable();

    mode: "view" | "edit" = "view";

    constructor(
        @Inject(DOCUMENT) private document: any,
        private host: ElementRef,
        private subscriptionManager: SubscriptionManager
    ) {}

    ngOnInit() {
        this.viewModeHandler();
        this.editModeHandler();
    }

    toViewMode() {
        this.update.emit();
        this.mode = "view";
    }

    private get element() {
        return this.host.nativeElement;
    }

    private viewModeHandler() {
        this.subscriptionManager.add(
            fromEvent(this.element, "tap")
                .pipe()
                .subscribe(() => {
                    this.mode = "edit";
                    this.editMode.next(true);
                })
        );
    }

    private editModeHandler() {
        const clickOutside$ = fromEvent(this.document, "click").pipe(
            filter(({ target }) => this.element.contains(target) === false),
            take(1)
        );

        // this.document.body.addEventListener("click", (e) => {
        //     if (!this.element.contains(e.target)) {
        //         this.toViewMode();
        //     }
        // });

        this.subscriptionManager.add(
            this.editMode$
                .pipe(switchMapTo(clickOutside$))
                .subscribe((event) => this.toViewMode())
        );
    }

    get currentView() {
        return this.mode === "view"
            ? this.viewModeTpl.tpl
            : this.editModeTpl.tpl;
    }

    ngOnDestroy() {
        this.subscriptionManager.destroy();
    }
}
