import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
	moduleId: module.id,
	selector: `profile`,
	templateUrl: `profile.component.html`
})
export class ProfileComponent implements OnInit {
	profile: any;

	constructor(private auth: AuthService) {
		this.profile = localStorage.getItem('profile');
	}
	ngOnInit() {
		this.profile = JSON.parse(localStorage.getItem('profile'));
	}
}
