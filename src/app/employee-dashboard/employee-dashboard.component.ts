import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dashboard model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
formvalue : FormGroup;
employeeobj : EmployeeModel = new EmployeeModel();
employeeData : any;
  constructor(private formbuilder:FormBuilder , private api:ApiService) { }
  

  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      mobile:[''],
      salary:['']

    })
    this.getAllEmployee();
  }
  postEmployeeDetails()
  {
    this.employeeobj.firstName = this.formvalue.value.firstName;
    this.employeeobj.lastName = this.formvalue.value.lastName;
    this.employeeobj.mobile = this.formvalue.value.mobile;
    this.employeeobj.salary = this.formvalue.value.salary;

   this.api.postEmployee(this.employeeobj).subscribe((Response)=>{
     console.log(Response);
     alert("Employee Added Success");
     let ref= document.getElementById("cancel")
     ref?.click();//cancel button
     this.formvalue.reset();
     this.getAllEmployee();
   },
   error=>{
     alert("Something want wrong");
   })
  }
getAllEmployee()
{
  this.api.getEmploye().subscribe((Response)=>{
this.employeeData=Response;
  })
}
deleteEmployee(emp:any)
{
 this.api.deleteEmployee(emp.id).subscribe((Response)=>
 {
   console.log(Response);
   alert("Employee Deleted");
   this.getAllEmployee();
 })
}

}
