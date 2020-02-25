import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlockBorder]'
})
export class BlockBorderDirective {

  @Input() bStyle: string ;
  @Input() bRadius: number = 10;
  @Input() bPadding: number = 10;
  @Input() bMargin: number = 10;
  @Input() bColor: string;
  @Input() bWidth: number = 2;

  @HostBinding('style.borderStyle')
  get style() {
    return this.bStyle;
  }

  @HostListener('mouseover', ['$event'])
  onMouseEnter(event: any) {
    console.log(event.target.id);
    this.bStyle='dotted';
    this.bColor="#ff0000";
    this.bRadius=20;
    this.bPadding=20;
    this.bMargin=20;
    this.bWidth=5;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bStyle = '';
  }

  constructor() { 
    console.log("Création de la directive BlockBorderDirective !")
  }

}
