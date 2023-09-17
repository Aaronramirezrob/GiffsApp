import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  template: `
  <h5>Buscar:</h5>
  <input
  placeholder="Buscar Gifs..."
  type="text"
  class="form-control"
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `,

})
export class SearchBoxComponent {
  @ViewChild("txtTagInput")
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = "";
  }


}
