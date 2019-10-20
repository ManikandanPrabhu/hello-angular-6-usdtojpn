import {Component} from '@angular/core';

import {ConvertService} from '../service/convertService.service';

@Component({
  selector: 'app-jpn',
  templateUrl: './jpn.component.html',
  styleUrls : ['./jpn.component.css']
})

export class JpnComponent {
   jpnValue: number;


  constructor(private convertService : ConvertService) {
      this.convertService.usdToJPN.subscribe( (data) =>
      this.jpnValue = data ? data : '' );
  }

  onJPNChange() {
    this.convertService.convertToUSD(Number(this.jpnValue));
  }
}