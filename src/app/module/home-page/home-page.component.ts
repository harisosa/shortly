import { Component } from '@angular/core';
import { DataModel } from 'src/app/core/model/data';
import { ShortlyService} from 'src/app/core/services/shortly-service.service';
import {
  ToastNotificationInitializer,
  DialogLayoutDisplay,
  ToastUserViewTypeEnum,
  ToastProgressBarEnum,
  DisappearanceAnimation,
  AppearanceAnimation,
  ToastPositionEnum,
  IToastCoreConfig,
} from '@costlydeveloper/ngx-awesome-popup';
const toast_config : IToastCoreConfig = {
  autoCloseDelay: 5000, // optional
  textPosition: 'right', // optional
  layoutType: DialogLayoutDisplay.CUSTOM_TWO,
  progressBar: ToastProgressBarEnum.DECREASE,
  toastUserViewType: ToastUserViewTypeEnum.SIMPLE,
  animationIn: AppearanceAnimation.BOUNCE_IN,
  toastPosition: ToastPositionEnum.TOP_FULL_WIDTH,
}
@Component({
  selector: 'shortly-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  constructor(private readonly shortService: ShortlyService){}
  links : DataModel[] =[];

  onSubmit(link : string){
    this.shortService.shorten(link).subscribe(result => {
      const link = new DataModel(result,this.links.length+1)
      this.links.push(link)
    },
    (err=>{
      const title : string = err.error.disallowed_reason || 'ERROR'
      this.openToast(title,err.error.error);
    }))
  }

  onCopy(id : number){
    const short_link = this.links.find(link => link.id === id)?.full_short_link ?? '';
    if(short_link){
      navigator.clipboard.writeText(short_link).then(() => {
        this.links.map(x=> {
          if(x.id === id)
          {
             x.copy = true
          }else{
            x.copy = false
          }
        });
      }).catch(err => {
        this.openToast("Copy Faild",err);
      });
    }

  }

  openToast(title:string , message : string){
    const newToastNotification = new ToastNotificationInitializer();

    newToastNotification.setTitle(title);
    newToastNotification.setMessage(message);
    newToastNotification.setConfig(toast_config)
    newToastNotification.openToastNotification$();
  }
}
