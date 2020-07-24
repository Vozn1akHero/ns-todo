import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { SqlImportInputComponent } from "./components/sql-import-input/sql-import-input.component";
import { SettingsComponent } from "./settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";

@NgModule({
    declarations: [SettingsComponent, SqlImportInputComponent],
    imports: [NativeScriptCommonModule, SettingsRoutingModule],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SettingsModule {}
