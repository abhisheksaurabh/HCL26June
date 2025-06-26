import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-attendance',
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.scss'
})
export class AttendanceComponent implements OnInit{
  protected staffs:any[]=[];
  selectedRow: any;
  allotedShiftTime:string;
  private modalRef: any;
  protected IsPresent: boolean;
  constructor(private http:HttpClient, private authService:AuthService){

  }
  ngOnInit(): void {
    this.authService.staffdata().subscribe(res=>{
      this.staffs = res;
    });
  }
  openModalStaff(staff){
    this.selectedRow = staff;
    const modalElement = document.getElementById('detailModal');
    if (modalElement) {
      this.modalRef = new bootstrap.Modal(modalElement);
      this.allotedShiftTime = staff.preferredShift;
      this.modalRef.show();
    }
  }
  saveData(){
    if (this.modalRef) {
      this.selectedRow.allotedShiftTime = this.allotedShiftTime;
      this.selectedRow.IsPresent = this.IsPresent;
      this.modalRef.hide();
    }
  }
  
}
