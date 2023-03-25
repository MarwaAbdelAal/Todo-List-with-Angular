import { Injectable } from '@angular/core';
import { ContactUs } from '../models/contactUs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }

  contactus: ContactUs[] = [];

  addMessage(email: string, msg: string): void {
    let messageId = 0;
    this.contactus = this.getAllMsgs();
    if (!this.contactus.length) {
      messageId = 1;
    }
    else {
      messageId = this.contactus[this.contactus.length - 1].id + 1
    }

    const newMsg: ContactUs = {
      "id": messageId,
      "email": email,
      "message": msg,
    }
    this.contactus.push(newMsg);
    localStorage.setItem('contactus', JSON.stringify(this.contactus))
  }
  
  getAllMsgs(): ContactUs[] {
    this.contactus = JSON.parse(localStorage.getItem('contactus') || '[]');
    return this.contactus;
  }
}
