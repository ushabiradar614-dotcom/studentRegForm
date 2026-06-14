import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  studentObj = {
  fullName: "Usha Biradar",
  email: "usha@gmail.com",
  mobileNumber: "9876543210",
  gender: "Female",
  course: "Angular",
  address: "Bidar, karnataka",
  termsAccepted: true
};
    title = 'studentRegForm';
  @ViewChild('StudentForm') StudentForm !: NgForm

  onsubmit(){
  if(this.StudentForm.invalid){
    return this.StudentForm.control.markAllAsTouched()
  }
  console.log(this.StudentForm.value);
  this.StudentForm.reset()
  
}
}




