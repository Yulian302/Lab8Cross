import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewspaperCatalogue } from './Class/newspaper_cataloge';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { AlertController } from '@ionic/angular';
import dateValidator from './service/dateValidator';
import { ValidatorDateServiceService } from '../services/validator-date-service.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {

  catalogueForm!: FormGroup;
  catalogue!: NewspaperCatalogue;
  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.catalogueForm = this.fb.group({
      newspaperName: ['', [Validators.required]],
      newspaperNumber: ['', [Validators.required, Validators.min(0)]],
      newspaperReleaseDate: ['', [dateValidator()]],
      newspaperPageNum: ['', [Validators.required, Validators.min(1)]],
      articles: new FormArray([new FormControl()])
    })
  }
  addArticle() {
    console.log('Add');
    (this.catalogueForm.controls['articles'] as FormArray).push(new FormControl());
  }

  deleteArticle(i: any) {
    console.log('Delete');
    (this.catalogueForm.controls['articles'] as FormArray).removeAt(i);
  }
  getControles() {
    return (this.catalogueForm.get('articles') as FormArray).controls;
  }
  onSubmit() {
    let date = this.catalogueForm.value.newspaperReleaseDate;
    let dateValidator = new ValidatorDateServiceService();
    if (dateValidator.validate_date(date)) {
      this.catalogue = new NewspaperCatalogue(
        this.catalogueForm.value.newspaperName,
        this.catalogueForm.value.newspaperNumber,
        this.catalogueForm.value.newspaperReleaseDate,
        this.catalogueForm.value.newspaperPageNum,
        this.catalogueForm.value.articles
      );
      console.log(this.catalogue);
    }
    else if (date === '') {
      this.dateAlert("Date can't be empty!");
    }
    else {
      this.dateAlert("The release date can't be future!");
    }

  }
  ngOnInit() { }

  async dateAlert(message: string) {
    const alert = await this.alertController.create(
      {
        header: 'Error',
        subHeader: '',
        message: message,
        buttons: ['OK']
      }
    );
    await alert.present();
  }
}
