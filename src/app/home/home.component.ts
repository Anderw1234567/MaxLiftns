import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {


 profileForm = this.fb.group({
    weight: [''],
    reps: ['']
  });
    constructor( ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
