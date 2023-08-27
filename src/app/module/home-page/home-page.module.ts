import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FormModule } from 'src/app/shared/components/form/form.module';
import { ListModule } from 'src/app/shared/components/list/list.module';
import { ShortlyService} from 'src/app/core/services/shortly-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BannerModule } from 'src/app/features/banner/banner.module';
import { ContentModule } from 'src/app/features/content/content.module';
import { ActionModule } from 'src/app/features/action/action.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormModule,
    ListModule,
    HttpClientModule,
    BannerModule,
    ContentModule,
    ActionModule
  ],
  providers:[ShortlyService],
  exports : [HomePageComponent]
})
export class HomePageModule { }
