import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm | undefined;

  defaultSubscription: string = 'Advanced';
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  formSubmitted: boolean = false;
  formData: { name: string, value: string }[] = [];

  onSubmit() {
    if (this.form?.value) {
      this.formData = [];
      console.log(this.form.value)
      Object.keys(this.form.value).forEach((name: string) => {
        this.formData.push({ name, value: this.form?.value[name]})
      });
      this.formSubmitted = true;
      this.form.reset();
      this.form.form.patchValue({
        subscription: this.defaultSubscription
      })
    }
  }
}
