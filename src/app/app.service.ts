import { HttpHeaders , HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor(){ }
  users = [
    {
      "name" : "Reda",
      "age" : 23
    },
    {
      "name" : "Mohamed",
      "age" : 28
    },
    {
      "name" : "Loukil",
      "age" : 20
    }
  ]
}


export default AppService;
