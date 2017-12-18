import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	post = {
		title: 'Angular app',
		isFavorite: true
	}

	tweet = {
		body: '...',
		isLiked: true,
		likesCount: 10
	}

	courses = [1, 2];

	course = [
		{ id: 1, name: 'course1' },
		{ id: 2, name: 'course2' },
		{ id: 3, name: 'course3' }
	];

	viewMode = 'map';

	onAdd() {
		this.course.push({ id: 4, name: 'course4' });
	}

	onRemove(course) {
		let index = this.course.indexOf(course);
		this.course.splice(index, 1);
	}

	onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
		console.log('Favorite changed: ', eventArgs);
	}

}
