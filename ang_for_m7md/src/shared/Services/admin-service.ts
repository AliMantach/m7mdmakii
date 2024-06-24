import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Trainee } from '../models/trainee';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class AdminManagementService {
  constructor() {}
   adminsarray: Admin[] = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
        role: "superadmin",
        image: "johndoe.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "password456",
        role: "admin",
        image: "janesmith.jpg"
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bobjohnson@example.com",
        password: "password789",
        role: "admin",
        image: "bobjohnson.jpg"
    }
];
}