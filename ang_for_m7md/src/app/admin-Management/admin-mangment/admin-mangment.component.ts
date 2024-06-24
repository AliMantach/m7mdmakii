import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Admin } from '../../../shared/models/admin';
import { AdminManagementService } from '../../../shared/Services/admin-service';


@Component({
  selector: 'app-admin-mangment',
  standalone: true,
  imports: [NgFor],
  templateUrl: './admin-mangment.component.html',
  styleUrl: './admin-mangment.component.scss'
})
export class AdminMangmentComponent {
  admins :Admin []=[];
  constructor(private adminService: AdminManagementService) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.admins=this.adminService.adminsarray;



  }

  

}
