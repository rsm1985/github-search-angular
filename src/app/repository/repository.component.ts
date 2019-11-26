import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ListService } from '../list.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  providers: []
})
export class RepositoryComponent {
@Input () repository: any;
@Input () grid: any;
  constructor(private dataService: DataService, private listService: ListService) {

  }
  toggleRepository(item) {
    if (item.addedToList) {
      item.addedToList = false;
      let indexToDelete = null;
      this.listService.list.forEach((repo: any, index: number) => {
        if (repo.id === item.id) {
          indexToDelete = index;
        }
      });
      this.listService.list.splice(indexToDelete, 1);
    } else {
      this.repository.addedToList = !this.repository.addedToList;
      this.listService.list.push(item);
    }
  }
}
