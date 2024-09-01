import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private http: HttpClient) { }


  full_name = '';
  email_address = '';
  phone_number = '';
  comment = '';


  onSubmit(): void {
    //console.log(this.full_name)
    const formData = {
      name: this.full_name,
      email: this.email_address,
      phone: this.phone_number,
      message: this.comment
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Send form data to the backend 
    this.http.post('http://localhost:3000/send-email', formData, { headers }).subscribe((response) => {
      console.log('Email sent successfully', response);
      // Clear the form after success

    },
      (error) => {
        console.error('Error sending email', error);
      });

      this.full_name = "";
      this.email_address="";
      this.phone_number="";
      this.comment="";
  }

  
}


