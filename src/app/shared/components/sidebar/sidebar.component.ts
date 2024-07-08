import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';



@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor( private gifsService:GifsService){

  }

  get array_item():string[]{
    
    const {tagsHistory}=this.gifsService;
    
    return [...tagsHistory]

    
  }

 


  

}
