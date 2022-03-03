import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransfertService } from 'src/app/service/transfert.service';

@Component({
  selector: 'app-remplissage-silos',
  templateUrl: './remplissage-silos.component.html',
  styleUrls: ['./remplissage-silos.component.css']
})
export class RemplissageSilosComponent implements OnInit {

  formGroup!: FormGroup;

  arrayOptions!: any[];
  
  constructor(private fb: FormBuilder, private trq: TransfertService) {
    this.formGroup = this.fb.group({
      date:['', Validators.required],
      shift:['', Validators.required],
      valide:[false, Validators.required],
      options:this.fb.array([])
    }); 
   }

  ngOnInit(): void {   
    this.arrayOptions = [];
    this.AddQuantite();  
  }
 
  AddQuantite(){ 
    /*if(this.quantiteTransfereFormGroup.invalid){
      return ;
    }*/
    const control = <FormArray>this.formGroup.get("options");
    const newGroup = this.fb.group({
      'unite':['', Validators.required], 
      'heureDebut':['', Validators.required], 
      'heureFin':['', Validators.required], 
      'silo':['', Validators.required], 
      'quantite':['', Validators.required]
    });

    control.push(newGroup);
    this.arrayOptions.push(this.formGroup.controls['options'].value);
  }

  onSubmit(questionData: any) {
    console.log(questionData);
    if(this.formGroup.controls['valide'].value){
      this.trq.AddNewquantiteTr(questionData).subscribe(
        data=>{
          alert('Succeded added')
        }
      );
    }else{
      alert('Check validity')
    }
  } 

}
