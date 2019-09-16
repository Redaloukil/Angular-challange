import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {

  public shippments:any;
  public title:string = "Shipments";

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.appService.getShipments().subscribe((data) => {this.shippments = data ; console.log(data)} )
  }

}
