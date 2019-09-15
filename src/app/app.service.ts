import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimelineItem } from 'ngx-horizontal-timeline';
// import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  constructor( private client : HttpClient ){ }

  

  getShipments() : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set("Authorization" , "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA3MmM1ZTFmNTdmMWQ3NzM4MzJkMzk3ODIwNGM5YTYyOWFjM2FjMTNiYTcwMzE5NTlhZDZiZDFiMjM0OTI4NThlNGRlNjZjNTNkNmE1YTlkIn0.eyJhdWQiOiIyNiIsImp0aSI6IjA3MmM1ZTFmNTdmMWQ3NzM4MzJkMzk3ODIwNGM5YTYyOWFjM2FjMTNiYTcwMzE5NTlhZDZiZDFiMjM0OTI4NThlNGRlNjZjNTNkNmE1YTlkIiwiaWF0IjoxNTY4NDYxOTY3LCJuYmYiOjE1Njg0NjE5NjcsImV4cCI6MTYwMDA4NDM2Nywic3ViIjoiMTQyNyIsInNjb3BlcyI6W119.1eAzj-yQR2vwlPsJyM0zdK9HljPYqtbbbldf3anRvCIIrs_232D-DZAAHiPPVVJYpTh0TPUWTntgRKPqNarvyEIWGmfv-_1-1pVdwQ0lgL1-kVgWms9pnrf63ZL_JftducLPEtHkMA2lAb1VCexPAmJqRoVs8qpD5KZVpj_cw_ORYqLJNTcZ69VT4vsJ-C1TGiqGQnQzyZzu77hBn0bYsLUtCGPwksattWhp5bJP-rLsWox5lSCut99wjwUV-EcTGy9wjZB7X2ERIrgVJDbk1w_THYWYtlXGnbdYIGNsciGVjrR7ISSr9pa3jUM7sqnEFOXtrKFjAyAgg4QVSeFJ3-O-rWhShDvQ48fTWzKCs-Ua3jSMXhf11GceIKWtqXXOMB5zJowfV9VkmTJW-Uq43gMdz1qi0ixBOeeoV_HnWhtde4ZR-DD0VtyrT3saO_uYwe3ssjBfCIcRN1hJfAkB0lnFT4hWl9645eLRi8oMetl-ax4HzfjK2SES0p1FaA8kctxj9dLub3zI9W_xxUk-LcLlc9NxGxXG4VMu-a3Rs0h6HRLK3xOcSxfx2t76OI9p3ViEsP1zX-UuRGGIGfgfTu-t1DO0w496hhsn-h11I5aB4wRF1UTW28arRzlBMe3jXa4lF61CQzl-l3n32J5EmDBGpcy0g2sa1JrbanEenNI");
    return this.client.get('https://run.dockflow.com/api/shipments/' , {headers})
                
  }

  getShipmentById(id) : Observable<any>{
    let headers : HttpHeaders = new HttpHeaders();
    headers = headers.set("Authorization" , "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA3MmM1ZTFmNTdmMWQ3NzM4MzJkMzk3ODIwNGM5YTYyOWFjM2FjMTNiYTcwMzE5NTlhZDZiZDFiMjM0OTI4NThlNGRlNjZjNTNkNmE1YTlkIn0.eyJhdWQiOiIyNiIsImp0aSI6IjA3MmM1ZTFmNTdmMWQ3NzM4MzJkMzk3ODIwNGM5YTYyOWFjM2FjMTNiYTcwMzE5NTlhZDZiZDFiMjM0OTI4NThlNGRlNjZjNTNkNmE1YTlkIiwiaWF0IjoxNTY4NDYxOTY3LCJuYmYiOjE1Njg0NjE5NjcsImV4cCI6MTYwMDA4NDM2Nywic3ViIjoiMTQyNyIsInNjb3BlcyI6W119.1eAzj-yQR2vwlPsJyM0zdK9HljPYqtbbbldf3anRvCIIrs_232D-DZAAHiPPVVJYpTh0TPUWTntgRKPqNarvyEIWGmfv-_1-1pVdwQ0lgL1-kVgWms9pnrf63ZL_JftducLPEtHkMA2lAb1VCexPAmJqRoVs8qpD5KZVpj_cw_ORYqLJNTcZ69VT4vsJ-C1TGiqGQnQzyZzu77hBn0bYsLUtCGPwksattWhp5bJP-rLsWox5lSCut99wjwUV-EcTGy9wjZB7X2ERIrgVJDbk1w_THYWYtlXGnbdYIGNsciGVjrR7ISSr9pa3jUM7sqnEFOXtrKFjAyAgg4QVSeFJ3-O-rWhShDvQ48fTWzKCs-Ua3jSMXhf11GceIKWtqXXOMB5zJowfV9VkmTJW-Uq43gMdz1qi0ixBOeeoV_HnWhtde4ZR-DD0VtyrT3saO_uYwe3ssjBfCIcRN1hJfAkB0lnFT4hWl9645eLRi8oMetl-ax4HzfjK2SES0p1FaA8kctxj9dLub3zI9W_xxUk-LcLlc9NxGxXG4VMu-a3Rs0h6HRLK3xOcSxfx2t76OI9p3ViEsP1zX-UuRGGIGfgfTu-t1DO0w496hhsn-h11I5aB4wRF1UTW28arRzlBMe3jXa4lF61CQzl-l3n32J5EmDBGpcy0g2sa1JrbanEenNI");
    return this.client.get(`https://run.dockflow.com/api/shipments/${id}?scopes=%5B%22TimelineData%22%5D` , {headers})
  }
  
  getTimeLineItems(){
    return [
      {
        label: 'Test 1',
        icon: 'fa fa-address-book-o',
        active: true,
        title: 'Example 1',
        color: '16a085',
        command() {
          console.log('Action 1');
        }
      }, 
      {
        label: 'Test 2',
        icon: 'fa fa-plus',
        title: 'Example 2',
        color: '2980b9',
        command() {
          console.log('Action 2');
        }
      },
      {
        label: 'Test 3',
        icon: 'fa fa-address-book-o',
        active: true,
        title: 'Example 1',
        color: '16a085',
        command() {
          console.log('Action 1');
        }
      },
      {
        label: 'Test 4',
        icon: 'fa fa-address-book-o',
        active: true,
        title: 'Example 1',
        color: '16a085',
        command() {
          console.log('Action 1');
        }
      }
  
    ]
        
  }

  errorHandler(error : HttpErrorResponse){

  }
}


export default AppService;
