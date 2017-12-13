import {Component, OnChanges} from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import {DirecttvApiService} from './directtv-api.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],

  providers: [DirecttvApiService],
})
export class AppComponent implements OnChanges {
  title = 'app';

  directTvForm: FormGroup;

  searchkeyradio: string = 'mobile';

  helpapiradio: string = 'profiledetails';

  ourres: any;

  ourObj: any;

  tableData: any[] = [];

  cols: any[] = [];

  constructor(private fb: FormBuilder, private dtvService: DirecttvApiService) {
    this.createForm();
  }

  createForm() {
    this.directTvForm = this.fb.group({
      dtv_mobilenumber: ['', Validators.required],

      dtv_email: ['', Validators.required],

      searchkey: ['', Validators.required],

      searchkeydata: ['', Validators.required],

      helpwithapi: ['', Validators.required],
    });
  }

  searchData(formData: any) {
    this.cols = [];
    this.tableData = [];
    if (
      ((formData.controls.searchkey.value == 'mobile' &&
        formData.controls.dtv_mobilenumber.value != '') ||
        (formData.controls.searchkey.value == 'email' &&
          formData.controls.dtv_email.value != '')) &&
      formData.controls.helpwithapi.value != ''
    ) {
      //API CALLS

      //PROFILE CALL
      if (formData.controls.helpwithapi.value === 'profiledetails') {
        this.dtvService.GETPROFILE_DATA().subscribe(
          response => {
            this.ourres = response.json();
            this.ourObj = this.ourres.length > 0 ? this.ourres[0] : null;
            for (var props in this.ourObj) {
              let head = props.charAt(0).toUpperCase() + props.slice(1);
              this.cols.push({field: props + '', header: head});
            }
            this.tableData = this.ourres.slice(0);
          },
          error => {
            console.log('Error in Profile data.');
          }
        );
      } else if (formData.controls.helpwithapi.value === 'accountdetails') {
        //ACCOUNT CALL
        this.dtvService.GETACCOUNT_DATA().subscribe(
          response => {
            this.ourres = response.json();
            this.ourObj = this.ourres.length > 0 ? this.ourres[0] : null;
            for (var props in this.ourObj) {
              let head = props.charAt(0).toUpperCase() + props.slice(1);
              this.cols.push({field: props + '', header: head});
            }
            this.tableData = response.json();
          },
          error => {
            console.log('Error in Profile data.');
          }
        );
      } else if (formData.controls.helpwithapi.value === 'agreement') {
        //AGREEMENT CALL
        this.dtvService.GETAGREEMENT_DATA().subscribe(
          response => {
            this.ourres = response.json();
            this.ourObj = this.ourres.length > 0 ? this.ourres[0] : null;
            for (var props in this.ourObj) {
              let head = props.charAt(0).toUpperCase() + props.slice(1);
              this.cols.push({field: props + '', header: head});
            }
            this.tableData = response.json();
          },
          error => {
            console.log('Error in Profile data.');
          }
        );
      }
    }
  }

  ngOnChanges() {
    console.log('chna');
  }
}
