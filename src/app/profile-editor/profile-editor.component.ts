import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@Component({
	selector: 'ns-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
	weight: any;
	reps: any;
	calcResult: any;
	profileForm: FormGroup;


	//TODO: Add Radiogroup for KG/Lbs too.


	constructor( private fb: FormBuilder) {

		this.profileForm = this.fb.group({
			weight: [''],
			reps: [''],
			gender: [''],//, Validators.required]
		});
	}

	ngOnInit(): void {
		//this.weight = this.profileForm.controls['weight'];
		this.profileForm.controls['weight'].valueChanges.subscribe(value =>{
			this.weight = value;
		});
		this.profileForm.controls['reps'].valueChanges.subscribe(value =>{
			this.reps = value;
		});
		//this.reps = this.profileForm.controls['reps'];
		//this.calcResult = "hi lol";

	}

	onButtonTap(){
		//this.weight = 555;
		this.calcResult = 'You can lift X amount Y times.';
		console.log('logging in onButtonTap:'+JSON.stringify(this.profileForm.value));
		//console.log('here is our weight:'+this.weight);
		//console.log('here is our calcResult:'+this.calcResult);
	}

}
