import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'oxe-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  public form: FormGroup;

  constructor (private _fb: FormBuilder) {
    this.form = this._fb.group({
      login: ['', [Validators.minLength(6)]],
      password: ['', [Validators.minLength(6), Validators.maxLength(8)]]
    }); 
  }

  public handleSubmit () {
    console.log(this.form.value)
  }
}
