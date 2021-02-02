import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private contentService:ContentService,
              private router : Router) { }
    name = new FormControl('');
    private content: any= {};

  ngOnInit(): void {
    this.name = new FormControl(this.contentService.editItem['name']);
  }
  
  onUpdate(){
    var self = this;
    console.log(`name = ${this.name.value}`);
    this.contentService.updateContent(this.contentService.editItem['id'],
    {id:this.contentService.editItem['id'], name:this.name.value}
    ).subscribe({
      next(item){
        self.router.navigate(['/home']);
      }
    })

  }
}
