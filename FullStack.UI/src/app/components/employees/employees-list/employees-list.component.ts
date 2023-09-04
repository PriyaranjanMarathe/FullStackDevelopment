import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{

  employees: Employee[] = [];

  // employees: Employee[] = [
  //   { id: '1', name: 'Ranjan Marathe1', email: 'a@b.com', phone: 1,salary: 1,department:'IT1'},
  //   { id: '2', name: 'Ranjan Marathe2', email: 'a@b.com', phone: 2,salary: 2,department:'IT2'},
  //   { id: '3', name: 'Ranjan Marathe3', email: 'a@b.com', phone: 3,salary: 3,department:'IT3'},
  //   { id: '4', name: 'Ranjan Marathe4', email: 'a@b.com', phone: 4,salary: 4,department:'IT4'},
  //   { id: '5', name: 'Ranjan Marathe5', email: 'a@b.com', phone: 5,salary: 5,department:'IT5'}
  // ]
  
  constructor(private employeeService: EmployeesService) { 
    
  }
  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        console.log(this.employees);
      },
      error : (employees) => {
        console.log(this.employees);
      }
    });

  }



}
