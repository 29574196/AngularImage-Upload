import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/image.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: ImageService) { }

  ngOnInit(): void {
    //will return the details from the database back to the application
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item =>{return item.payload.val();} );
        this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length / 3)).keys());
      }
    )
  }

}
