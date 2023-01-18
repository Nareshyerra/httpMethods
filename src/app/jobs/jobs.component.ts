import { Component, OnInit } from '@angular/core';
import { JobsdetailsService } from '../jobsdetails.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(private jobsint:JobsdetailsService) { }
jobsList:any
istrue = false
  ngOnInit(): void {
this.jobsint.getmethod().subscribe(data=>{
  this.jobsList=data
})


  }

  postcontact(data:any){
    this.jobsint.postmethod(data).subscribe(result=>{
      this.istrue=true
      console.log(result)
    })




























    
  }



}
