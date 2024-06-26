import { Pipe, PipeTransform } from '@angular/core';

import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: any) {
    if(url==undefined){
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }else{
       return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  
  }

}
