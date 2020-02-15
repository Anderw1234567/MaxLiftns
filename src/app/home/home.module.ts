import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';


@NgModule({
    imports: [
        NativeScriptCommonModule,
	ReactiveFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
	ProfileEditorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
