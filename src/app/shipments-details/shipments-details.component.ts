import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { TimelineItem } from 'ngx-horizontal-timeline'

@Component({
  selector: 'app-shipments-details',
  templateUrl: './shipments-details.component.html',
  styleUrls: ['./shipments-details.component.css']
})
export class ShipmentsDetailsComponent implements OnInit {

  id: number;
  private sub: any;
  public shippment : any;
  public timelineItems : TimelineItem[] = []



  constructor(private appService : AppService ,private http : HttpClient , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.appService.getShipmentById(this.id).subscribe(data => {
        this.shippment = data ; 
        data.sea_shipments[0].statuses.reverse().map((element) => {
          console.log(element)
          this.timelineItems.push( 
            {
              title : element.event_date,
              label : element.message,
              icon : 'fa fa-plus',
              active : true,
              color : '#333',
            }
          )
        });
      });

    });


    
    
    
  }

}
