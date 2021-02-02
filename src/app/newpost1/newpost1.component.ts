import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-newpost1',
  templateUrl: './newpost1.component.html',
  styleUrls: ['./newpost1.component.scss']
})
export class Newpost1Component implements OnInit {

  constructor(private contentService: ContentService,
              private router: Router) { }
    myForm = new FormGroup({
      id : new FormControl(''),
      name : new FormControl('')
    })

    public contentList:Observable<any>;

  ngOnInit(): void {
    this.updateList();
  }
  updateList(){
    this.contentList = this.contentService.getContent();
  }

  onDelete(id){
    //console.log(`hello is ${id}`);
    var self = this;
    this.contentService.deleteContent(id).subscribe({
      next(item){
        self.updateList();
      }
    })
  }

  onUpdate(id,name){
    console.log(`hello is ${id}`);
    this.contentService.editItem = {id:id,name:name};
    this.router.navigate(['/update']);
    
  }

  onSubmit(){
    console.log(`Form ID is : ${JSON.stringify(this.myForm.value)}`);
    var self = this;
    this.contentService.addContent(this.myForm.value).subscribe({
      next(item){
        self.updateList();
        //console.log(item);
      },
      error(msg){
        //console.error(msg);
      }
    })
  }

}
