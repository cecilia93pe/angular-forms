import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  name: string
  checkAdult: boolean
  comment: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  model = {
    name: "",
    checkAdult: false,
    department: "",
    comment: "Something..."
  }
  onSubmit = (form: NgForm) => {
    console.log('Form values', form)
  }
}
