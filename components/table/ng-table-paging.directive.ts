import {Directive, EventEmitter, HostListener, Input, Output, Renderer} from '@angular/core';

@Directive({ selector: '[ngTablePaging]' })
export class NgTablePaging {
  @Input() public ngTablePaging: boolean = true;
  @Output() public tableChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  public get config(): any {
    return this.ngTablePaging;
  }

  public set config(value:any) {
    this.ngTablePaging = value;
  }

  @HostListener('pagechanged', ['$event'])
  public onChangePage(event:any):void {
    // Object.assign(this.config, event);
    if (this.ngTablePaging) {
      this.tableChanged.emit({paging: event});
    }
  }
}
