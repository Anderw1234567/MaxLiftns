import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RadioOption } from "./radio-option";
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
	currentCheck = 'none';
	@ViewChild('maleCheckBox',{static:false}) maleCheck;
	@ViewChild('femaleCheckBox',{static:false}) femaleCheck;
	@ViewChild('otherCheckBox',{static:false}) otherCheck;


	//TODO: Add Radiogroup for KG/Lbs too.


	constructor( private fb: FormBuilder) {
		this.profileForm = this.fb.group({
			weight: [''],
			reps: [''],
			gender: [''],//, Validators.required]
		});
	}

	ngOnInit(): void {
		
		this.profileForm.controls['weight'].valueChanges.subscribe(value =>{
			this.weight = value;
		});
		this.profileForm.controls['reps'].valueChanges.subscribe(value =>{
			this.reps = value;
		});

	}
	
	checkMale(){
		this.femaleCheck.nativeElement.checked = false;
		this.otherCheck.nativeElement.checked = false;
		this.currentCheck = 'male';
		
		this.calcResult = this.currentCheck;
	}

	checkFemale(){
		this.maleCheck.nativeElement.checked = false;
		this.otherCheck.nativeElement.checked = false;
		this.currentCheck = 'female';
		this.calcResult = this.currentCheck;
	}
	checkOther(){
		this.femaleCheck.nativeElement.checked = false;
		this.maleCheck.nativeElement.checked = false;
		this.currentCheck = 'other';
		this.calcResult = this.currentCheck;
	}

	onButtonTap(){
		
		//this.weight = 555;
		//this.calcResult = 'You can lift X amount Y times.';
		

		console.log('logging in onButtonTap:'+JSON.stringify(this.profileForm.value));
	

		//console.log('here is our weight:'+this.weight);
		//console.log('here is our calcResult:'+this.calcResult);
	}

}
