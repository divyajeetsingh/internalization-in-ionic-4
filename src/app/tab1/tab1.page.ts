import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHandlerService } from '../translate-handler.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  arrayData: any;

  selectData  :  string;
  constructor(   public  translate: TranslateService ,  
     public  translateHadlerServices :  TranslateHandlerService) {
 
  this.tralateHandler() 
  }
  tralateHandler(){

    this.translate.get('TESTINGLANG').subscribe((data)=>{
      console.log(data  ,   "data for testing lang");
      this.arrayData  =  data ;
  })
    
  }
  manageSelection(){

console.log(this.selectData);
// this.translate.use(this.selectData)
 
this.translateHadlerServices.getSelectionData( this.selectData)


  }
}
