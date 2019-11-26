import {Component, Injectable, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {PanelService} from '../panel.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: []
})
export class PanelComponent implements OnInit {
  @Input () repositories: any;
  constructor(private dataService: DataService, private panelService: PanelService) {}

  ngOnInit() {
  }

}
