import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Injectable } from '@angular/core';
import { PanelService } from '../panel.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: []
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private panelService: PanelService) {

  }

  ngOnInit() {
  }

}
