import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-apply-page',
  templateUrl: './job-apply-page.component.html',
  styleUrls: ['./job-apply-page.component.css']
})
export class JobApplyPageComponent implements OnInit {
  jobId:number;
  job:any;

  constructor(private dataService:DataService,
              private routeInfo:ActivatedRoute
              ) { }

  ngOnInit() {
    this.jobId = this.routeInfo.snapshot.params["id"];

    console.log(this.jobId);
    this.job = this.dataService.getJob(this.jobId);
    console.log(this.job);
  }

}
