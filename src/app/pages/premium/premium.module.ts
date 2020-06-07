import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PremiumPageRoutingModule } from './premium-routing.module';
import { PremiumPage } from './premium.page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, PremiumPageRoutingModule],
	declarations: [PremiumPage]
})
export class PremiumPageModule {}
