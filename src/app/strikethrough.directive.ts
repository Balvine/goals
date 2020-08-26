import { Directive } from '@angular/core';
import { ElementRef} from '@angular/core';
@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='line-below';
    this.elem.nativeElement.style.backgroundColor='yellow';
  //   this.elem.nativeElement.ownerDocument.body.style.backgroundColor = 'purple';
   }
  
  }


    
   { }


