import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewspaperCatalogue } from './Class/newspaper_cataloge';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {

  catalogueForm!:FormGroup;
  catalogue!:NewspaperCatalogue;
  releaseDataPattern = "^[0-9]{2}-[0-9]{2}-[0-9]{4}$";
  
  constructor(private fb: FormBuilder) { 
    this.catalogueForm = this.fb.group({
      newspaperName:['',[Validators.required]],
      newspaperNumber:['',[Validators.required]],
      newspaperReleaseDate:['',[Validators.pattern(this.releaseDataPattern)]],
      newspaperPageNum:[''],
      articles:new FormArray([new FormControl()])
    })
  }
  addArticle()
  {
    console.log('Add');
    (this.catalogueForm.controls['articles'] as FormArray).push(new FormControl());
  }

  deleteArticle(i:any)
  {
    console.log('Delete');
    (this.catalogueForm.controls['articles'] as FormArray).removeAt(i);
  }
  getControles(){
    return (this.catalogueForm.get('articles') as FormArray).controls;
  }
  onSubmit()
  {
    console.log('Submit');

  }
  ngOnInit() {}
}
