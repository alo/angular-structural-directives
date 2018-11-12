import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  @Input()
  set appIf(flag) {
    console.log;
    if (flag) {
      this.entry.createEmbeddedView(this.template);
    } else {
      this.entry.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private entry: ViewContainerRef
  ) {}
}
