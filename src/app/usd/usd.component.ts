import {Component, OnInit} from '@angular/core';
import {ConvertService} from '../service/convertService.service';

@Component({
  selector : 'app-usd',
  templateUrl : './usd.component.html',
  styleUrls : ['./usd.component.css']
})

export class UsdComponent implements OnInit {
   usdValue;

constructor(private convertService : ConvertService) {
      this.convertService.jpnToUSD.subscribe( (data) =>
      this.usdValue = data ? data :  '' );
  }

  ngOnInit() {
    console.log("shklslkfsd", this.convertService);
// 
  }
  onUsdChange() {
    console.log("value vhanged", this.usdValue);
    this.convertService.convertToJPN(Number(this.usdValue));
  }
}