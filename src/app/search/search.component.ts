import {Component, Injectable, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {PanelService} from '../panel.service';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: []
})



export class SearchComponent implements OnInit {
  searchString = '';
  searchType = 'Repositories';
  searchLang = 'Javascript';

  constructor(
    private dataService: DataService, private panelService: PanelService) {

  }

  ngOnInit() {
  }
}
