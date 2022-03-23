import { Component, OnInit } from '@angular/core';
import { JsonService } from '../shared/service/json.service';

@Component({
  selector: 'bosch-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstContentSec: any;
  secondContentSec:any;
  thirdContentSec: any;

  constructor(public service: JsonService) {
  }

  ngOnInit(): void {
    this.service.getData().subscribe((data: any) => {
      console.log(data);
      this.firstContentSec = data.firstSection;
      this.secondContentSec = data.secondSection;
      this.thirdContentSec = data.thirdSection;
    });
  }

}
