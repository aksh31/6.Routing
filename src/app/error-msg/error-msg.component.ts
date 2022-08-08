import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {
  errorMsg!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMsg = this.route.snapshot.data['msg'];

    this.route.data
                .subscribe((data : Data) => {
                  this.errorMsg = data['msg'];
                })
  }

}
