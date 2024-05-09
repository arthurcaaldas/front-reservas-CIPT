import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '@shared/services/api.service';

@Component({
  selector: 'oxe-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  public form: FormGroup;

  constructor (
    private _fb: FormBuilder,
    private _api: ApiService,
    private _router: Router) {
    this.form = this._fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phoneNumber: [null, [Validators.minLength(11), Validators.maxLength(11)]],
      password: [null, [Validators.minLength(6), Validators.maxLength(8)]],
      tokenPass: [null, [Validators.minLength(50), Validators.maxLength(50)]]
    }); 
  }

  public handleSubmit () {
    this._api.createUser(this.form.value)
      .subscribe({
        next: () => this._router.navigate(['/auth', 'sign-in']),
        error: (error) => console.error(error),
      })
  }
}
