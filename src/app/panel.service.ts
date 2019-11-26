import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  showType = 'list';
  constructor() { }
  toggleGrid(type) {
    this.showType = type;
  }
}
