import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age:number;
	email:string;
	address:Address;
	hobbies:any[];
	posts: Post[];
	isEdit:boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  	this.name = "Abhilash";
  	this.age = 28;
  	this.email = "abhilash@outlook.com";
  	this.address = {
  		street: '555 mission street',
  		city: 'San Francisco',
  		state: 'CA'
  	}
  	this.hobbies = ['Write Code', 'Watch Movies', 'Listen to Music'];

  	this.dataService.getPosts().subscribe((posts) => {
  		this.posts = posts;
  	});
  }

  onClick() {
  	this.name='Dharam';
  	this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
  	this.hobbies.unshift(hobby);
  	return false;
  }

  deleteHobby(hobby) {
  	for(let i=0; i<this.hobbies.length; i++) {
  		if(this.hobbies[i] == hobby) {
  			this.hobbies.splice(i, 1);
  		}
  	}
  }

  toggleEdit() {
 	this.isEdit = !this.isEdit;
  }

}


interface Address {
	street:string,
	city:string,
	state:string
}

interface Post {
	id: number,
	title:string,
	body:string,
	userid:number
}