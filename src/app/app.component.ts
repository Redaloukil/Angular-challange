import { Component , OnInit , Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent implements OnInit {
  constructor( private appService : AppService){}

  public users;

  title = 'Dockflow-test';
  url = 'https://run.dockflow.com/api/shipments/';

  


  ngOnInit(){
        
  }
  getData(){
    
  }




}
