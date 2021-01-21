import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";

@Component({
  selector: "leaky",
  template: "<div #child><ng-content></ng-content></div>"
})
export class LeakyComponent implements AfterViewInit, OnDestroy {
  private timeoutId: number;

  ngAfterViewInit(): void {
    this.timeoutId = setTimeout(() => {
      // do some work
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }
}
