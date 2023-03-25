import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUs } from 'src/app/models/contactUs';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactus: ContactUs[] = [];

  constructor(private _router: Router, private _contactus: ContactusService) { }

  submitForm(form: NgForm): void {
    this._contactus.addMessage(form.value['email'], form.value['message']);
    this._router.navigate(['/']);
    form.reset();
  }
}
