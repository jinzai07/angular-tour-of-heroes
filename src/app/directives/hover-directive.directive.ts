import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appHoverDirective]"
})
export class HoverDirectiveDirective {
  @HostBinding("style.backgroundColor") backgroundColor: string = "#343a40";
  constructor() {}
  @HostListener("mouseenter") mouseover() {
    this.backgroundColor = '#343a40b8';
  }
  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = '#343a40';
  }
}
