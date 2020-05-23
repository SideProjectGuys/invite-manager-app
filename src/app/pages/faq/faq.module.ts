import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';

import { FaqPageRoutingModule } from './faq-routing.module';
import { FaqPage } from './faq.page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, FaqPageRoutingModule, MatExpansionModule],
	declarations: [FaqPage]
})
export class FaqPageModule {}
