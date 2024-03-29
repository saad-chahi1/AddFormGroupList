import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,
  FormGroup,
  FormArray,
  Validators } from '@angular/forms';
  import { faFileSignature, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Quantite } from 'src/app/interface/quantite';
import { TransfertService } from 'src/app/service/transfert.service';

@Component({
  selector: 'app-quantite-transferees',
  templateUrl: './quantite-transferees.component.html',
  styleUrls: ['./quantite-transferees.component.css']
})

export class QuantiteTransfereesComponent implements OnInit {
 
  quantiteTransfereFormGroup!: FormGroup; 
  faTimesCircle = faTimesCircle;
  faFileSignature = faFileSignature;

  arrayOptions!: any[];
  
  constructor(private fb: FormBuilder, private trq: TransfertService) {
    this.quantiteTransfereFormGroup = this.fb.group({
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
    
    const control = <FormArray>this.quantiteTransfereFormGroup.get("options");
    const newGroup = this.fb.group({
      'unite':['', Validators.required], 
      'heureDebut':['', Validators.required], 
      'heureFin':['', Validators.required], 
      'silo':['', Validators.required], 
      'quantite':['', Validators.required]
    });
    

    control.push(newGroup);
    this.arrayOptions.push(this.quantiteTransfereFormGroup.controls['options'].value);
  }

  onSubmit(questionData: any) {
    console.log(questionData);
    if(this.quantiteTransfereFormGroup.controls['valide'].value){
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
