import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { NavigationComponent } from "./navigation.component";

const routes: Routes = [{ path: "", component: NavigationComponent }];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class NavigationRoutingModule {}
