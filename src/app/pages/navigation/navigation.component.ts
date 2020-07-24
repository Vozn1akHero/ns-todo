import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "tns-core-modules/ui/page";
import { isAndroid } from "tns-core-modules/platform";

@Component({
    selector: "ns-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        if (isAndroid) {
            this.page.actionBarHidden = true;
        }
    }

    ngOnInit(): void {}

    navigateToAddTodoPage(): void {
        this.routerExtensions.navigate(["create"]);
    }
}
