import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services";
import{allfriends, editfriends} from "../_services/allfriends";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {
  list: allfriends[] = [];
  public inr:any;
  public paisa:any;
  displayData = true;
  viewData = false;
  public id : number;

  constructor(private service : UserService) { }

  

  ngOnInit() {
    document.getElementById("user-table").style.display = "block";
    this.getfitness();
  }
  
  getfitness() {
    this.service.getfitnessdata().subscribe(
      (response)=>{
        this.list = response;
      },
      (error)=>
      {
        console.log("Error :"+error);
      }
    )
  }

  deleteAppointment(id){
    this.service.deletefitnessdata(id).subscribe(
      (data : allfriends) =>{
        this.getfitness();
      }
    );
  }
  editForm(data){
    this.displayData = false;
    this.viewData = true;
    this.id = data.id;
    this.service.viewAppointment = Object.assign({},data);
    document.getElementById("user-table").style.display = "none";
  }

  calculateInr(e){
    var x = e.target.value;
    console.log(Number(x));
    console.log(Number(x) % 1);
    this.inr = Number(x);
    this.paisa = Number(x) % 1;
    this.service.viewAppointment.inr = this.inr;
    this.service.viewAppointment.paisa = this.paisa;
  }

  onSubmit(data : editfriends){
    this.service.editfitnessData(data).subscribe();
    location.reload();
  }
}
