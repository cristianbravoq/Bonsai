import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ACTIONS } from 'src/app/shared/constants/constant';
import { ToastrService } from 'ngx-toastr';

export interface OptionsForm{
  id: string;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  authForm !: FormGroup;
  signIn = ACTIONS.signIn;
  @Input() options!: OptionsForm;

  constructor(
    private readonly authSvc: AuthService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly toastSvc: ToastrService,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

   async onSubmit(): Promise<void> {
    let actionToCall;

    if(this.options.id === ACTIONS.signIn){

      // actionToCall = this.authSvc.login(this.authForm.value.email, this.authForm.value.password);
        const { email, password } = this.authForm.value;
        this.authSvc.login(email, password).then(user => {
          console.log("Bienvenido ", user);
          if(!user) {
            alert("Datos incorrectos, si no tenes cuenta registrate!");
            return;
          };
          this.router.navigate(['/dashboard'])
        }).catch(err=>{
          console.log(err)
        })

    }else {

      const { email, password } = this.authForm.value;
      this.authSvc.register(email, password).then(user => {
      // console.log("se registro: ", user);
      }
    )}
  }

  private initForm(): void{
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private redirectUser(): void {
    this.router.navigate(['/dashboard']);
  }

  IngresarConGoogle() {
    console.log("Estoy dentro");
    const { email, password } = this.authForm.value;
    this.authSvc.loginWithGoogle(email, password).then(user => {
      // this.router.navigate(['/dashboard'])
      // console.log("Se registro: ", user);
      // console.log(user?.user?.displayName);
  }
  )}

}
