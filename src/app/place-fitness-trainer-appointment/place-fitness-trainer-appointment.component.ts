import { Component, OnInit, ElementRef} from '@angular/core';
import {  FormGroup, Validators, FormBuilder, FormControl } from "@angular/forms";
import { UserService } from "../_services";
import { allfriends} from "../_services/allfriends";


export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: number,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  

  fitnessForm: FormGroup;
  submitted = false;
  public inr:any;
  public paisa:any;
  constructor(private service : UserService) { }
  

  ngOnInit() {
    // this.fitnessForm = this.formBuilder.group({
    //   firstname: ['',Validators.required],
    //   lastname:['',Validators.required],
    //   pincode : ['',Validators.minLength(6)],
    //   age:['',[Validators.required,Validators.min(18),Validators.max(60)]],
    //   email:['',[Validators.required,Validators.email]],
    //   phonenumber:['',Validators.required],
    //   streetaddress:['',Validators.required],
    //   city:['',Validators.required]
    // });

    this.fitnessForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      age: new FormControl('',[Validators.min(18),Validators.max(60)]),
      phonenumber: new FormControl(''),
      email: new FormControl('',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
      streetaddress: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      pincode: new FormControl('',[Validators.minLength(6),Validators.maxLength(6)]),
      trainerpreference: new FormControl(''),
      physiotherapist: new FormControl(''),
      packages: new FormControl(''),
      inr: new FormControl(''),
      paisa: new FormControl('')
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.fitnessForm.invalid) {
      return;
    
    }

    let data = new allfriends(this.fitnessForm.value.firstname, this.fitnessForm.value.lastname,this.fitnessForm.value.packages,
            this.fitnessForm.value.physiotherapist,this.fitnessForm.value.trainerpreference,this.fitnessForm.value.age,
            this.fitnessForm.value.email,this.fitnessForm.value.phonenumber,this.fitnessForm.value.pincode,
            this.fitnessForm.value.country,this.fitnessForm.value.state,this.fitnessForm.value.city,this.fitnessForm.value.streetaddress,
            this.fitnessForm.value.inr,this.fitnessForm.value.paisa);
    console.log(data);

    this.service.postfitnessdata(data).subscribe();
    console.log("Done");
  }

  calculateInr(e){
    var x = e.target.value;
    console.log(Number(x));
    console.log(Number(x) % 1);
    this.inr = Number(x);
    this.paisa = Number(x) % 1;

    this.fitnessForm.patchValue({
      inr : this.inr,
      paisa : this.paisa
    });
  }
    
}
