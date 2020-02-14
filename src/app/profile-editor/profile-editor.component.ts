import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/cli';

@Component({
	selector: 'ns-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
	profileForm = this.fb.group({
		weight: [''],
		reps: [''],
	});
	constructor( private fb: FormBuilder) { }

	ngOnInit(): void {
	}

}
