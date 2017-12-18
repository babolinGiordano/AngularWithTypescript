import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
	selector: 'courses', // <courses>
	template: `
		<h2>{{ title }}</h2>
		<!-- <img src='{{ imageUrl }}' /> -->
		<button class='btn btn-primary' [class.active]='isActive'>SAVE</button>
		<!--<button [style.backgroundColor]='isActive ? "blue" : "red" '>UPDATE</button>-->
		<button (click)='onSave()'>SAVE</button>
		<br />
		<app-favorite></app-favorite>
		<br />
		<input type="text" [(ngModel)]="textPipe"/>
		<br />
		<span>{{textPipe | uppercase}}</span>
		<br />
		<ul>
			<li *ngFor='let course of courses'>
				{{course}}
			</li>
		</ul>
	`
})
export class CoursesComponent {
	title = 'List of courses';
	imageUrl = 'http://lorempixel.com/400/200';
	isActive = false;
	courses;
	textPipe: string;

	constructor(service: CoursesService) {
		this.courses = service.getCourses();
	}

	onSave() {
		window.alert('Button was clicked');
	}
}