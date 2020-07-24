import { Component, Input } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
    selector: "ns-navigation-button",
    templateUrl: "./navigation-button.component.html",
    styleUrls: ["./navigation-button.component.scss"],
})
export class NavigationButtonComponent {
    @Input() text: string;
    @Input() imgSrc: string;
    @Input() route: string;
    @Input() marginBottom: number;
    @Input() marginTop: number;

    constructor(private routerExtensions: RouterExtensions) {}

    onTap(): void {
        this.routerExtensions.navigate([this.route]);
    }
}
