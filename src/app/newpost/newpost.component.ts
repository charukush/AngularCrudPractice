import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  constructor() { }
  
  profileForm = new FormGroup({
    title: new FormControl(''),
    id: new FormControl('')
  });

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(`Title is ${this.profileForm.value.title}`);
  }

}

