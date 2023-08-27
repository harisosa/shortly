import { Component } from '@angular/core';
import { DataModel } from 'src/app/core/model/data';
import { ShortlyService} from 'src/app/core/services/shortly-service.service';

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
    })
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
        console.error('Error in copying text: ', err);
      });
    }

  }
}
