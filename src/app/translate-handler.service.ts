import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TranslateHandlerService {
  selectTransData: any;

  constructor(  public  translate  :  TranslateService)  {
    this.getSelectionData(this.translate.getBrowserLang())
   }



getSelectionData ( data) {
  this.translate.use( data)

  // this.translate.get('GOOGLE').subscribe((data)=>{
  //   console.log(data  ,   "$data for testing lang");
  //   this.selectTransData  =  data 
  // })
  this.translate.get('TESTINGLANG').subscribe((data)=>{
    console.log(data  ,   "$data for testing lang");
    this.selectTransData  =  data 
  })
}
  
}
