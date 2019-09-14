import { Component , OnInit , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Inject({})
export class AppComponent implements OnInit {
  constructor( private appService : AppService){

  }

  title = 'Dockflow-test';
  url = 'https://run.dockflow.com/api/shipments/';

  


  ngOnInit(){
        
  }
  getData(){
    
  }




}
