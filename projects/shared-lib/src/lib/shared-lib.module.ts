import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [SharedLibComponent, CustomerComponent],
  imports: [],
  exports: [SharedLibComponent, CustomerComponent],
})
export class SharedLibModule {}
