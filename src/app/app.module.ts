import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';

import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import {RadioButtonModule} from '../../node_modules/primeng/components/radiobutton/radiobutton';

import {DataTableModule} from '../../node_modules/primeng/components/datatable/datatable';

import {InputMaskModule} from '../../node_modules/primeng/components/inputmask/inputmask';

import {ButtonModule} from '../../node_modules/primeng/components/button/button';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,

    ButtonModule,

    RadioButtonModule,

    DataTableModule,

    InputMaskModule,

    ReactiveFormsModule,

    HttpModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
