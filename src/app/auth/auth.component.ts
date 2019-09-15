import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private AppService :AppService) { }

  public users;

  ngOnInit() {
   
  }

}
