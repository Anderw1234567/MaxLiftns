import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
	selector: 'ns-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
	weight: any;
	reps: any;
	profileForm: FormGroup;
	constructor( private fb: FormBuilder) {

	this.profileForm = this.fb.group({
		weight: [''],
		reps: [''],
	});
	}

	ngOnInit(): void {
		this.weight = this.profileForm.controls['weight'];
		this.reps = this.profileForm.controls['reps'];
	}

	onButtonTap(){
		this.weight.value = 555;
		console.log('logging in onButtonTap:'+JSON.stringify(this.profileForm.value));
	}

}
