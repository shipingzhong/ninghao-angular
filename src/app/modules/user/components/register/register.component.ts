import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // registerForm = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  // });
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe((value) => {
      console.log('Register: ', value);
    });
    // this.registerForm.setValue({
    //   username: 'aaaa',
    //   password: '1111',
    // });
    // this.registerForm.statusChanges.subscribe((status) => {
    //   console.log('Status', status);
    // });
  }
  onSubmit() {
    console.log('submit: ', this.registerForm.value);
  }
}
