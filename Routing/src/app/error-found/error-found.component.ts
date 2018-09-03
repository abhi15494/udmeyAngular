import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-found',
  templateUrl: './error-found.component.html',
  styleUrls: ['./error-found.component.css']
})
export class ErrorFoundComponent implements OnInit {

  errormsg: string;
  constructor(
    // private route : ActivatedRoute
  ) { }
  ngOnInit() {
    // this.errormsg = this.route.snapshot.data['message'];
    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.errormsg = data['message'];
    //     console.log(this.errormsg);
    //   }
    // );
    this.errormsg = "notFound";
  }
}
