import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent {
constructor(private formbulder:FormBuilder){
this.bookedform()
}

isbooked:boolean=false
form!:FormGroup
private bookedform(){
  this.form=this.formbulder.group({
  name:[''],
  email:['',Validators.required,Validators.email],
  phone:['',Validators.required],
  time:['',Validators.required],
  date:['',Validators.required],
  numberOfPeople:['',Validators.required],
  message:['',Validators.required]
  })
}

confirmBooking(){
  this.isbooked=true
  setTimeout(() => {
    this.isbooked=false
  }, 4000);
this.form.reset()

}
}
