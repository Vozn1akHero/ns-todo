import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NavCreateButtonComponent } from "./nav-create-button/nav-create-button.component";
import { NavigationButtonComponent } from "./navigation-button/navigation-button.component";
import { NavigationComponent } from "./navigation.component";
import { NavigationRoutingModule } from "./navigation-routing.module";

@NgModule({
    imports: [NativeScriptCommonModule, NavigationRoutingModule],
    declarations: [
        NavCreateButtonComponent,
        NavigationButtonComponent,
        NavigationComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class NavigationModule {}
