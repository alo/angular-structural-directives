Las "structural directives" son las encargadas del diseño del DOM (manipulando, poniendo o quitando elementos). Son las que empiezan por *.

Una de las más típicas es ***ngIf**

¿Qué pasa cuando usamos *ngIf?

Que esto:

```html
<div *ngIf="flag">
  Content
</div>
```

Se convierte en esto:

```html
<ng-template [ngIf]="flag">
  <div>
    Content
  </div>
</ng-template>
```


Error típico:

```html
<a mat-icon-button [cdtyRequireRol]="rol" >Link</a>
```

Error: More than one component matched on this element

*Nota: no sabemos cómo está implementada esta directiva


¿Cuál sería la manera correcta de implementar esto?

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RolesService } from 'app/coderty-core-front/shared/providers/roles/roles.service';

@Directive({
  selector: '[cdtyRequireRol]'
})
export class CdtyRequireRolDirective {
  @Input()
  set cdtyRequireRol(rol) {
    console.log
    if (this.rolesService.requireRol(rol)) {
      this.entry.createEmbeddedView(this.template);
    }else{
      this.entry.clear();
    }
  }

  constructor(private template: TemplateRef<any>, 
              private entry: ViewContainerRef, 
              private rolesService: RolesService) {}
}

```

y para usarlo...


```html
<a mat-icon-button *cdtyRequireRol="'rol'" >Link</a>
```
