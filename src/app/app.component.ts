import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {TaskService} from './task.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasktracker';
 collection:any=[];
submitForm= new FormGroup({

id:new FormControl(''),
name:new FormControl(''),
task:new FormControl(''),
dateline:new FormControl('')

})
constructor(private task:TaskService){}
ngOnInit():void{

}

collectData(){
console.log("sucessfull");
console.log(this.submitForm.value);
this.task.createTask(this.submitForm.value).subscribe((result)=>{
  console.warn("working........", result)
})

this.submitForm.reset({})

this.task.getTask().subscribe((result)=>{

  console.warn(result)
  this.collection=result
})

}


}