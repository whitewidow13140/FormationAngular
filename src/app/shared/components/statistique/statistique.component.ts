import { Component, OnInit, Input } from '@angular/core';
import { Statistique } from 'app/shared/models/Statistique';
import { Appreciation } from 'app/shared/models/Appreciation';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  public revenue: Statistique;
  public capacity: Statistique;
  public followers: Statistique;
  public errors: Statistique;

  getAppreciationClass(stat: Statistique) {
    switch (stat.getAppreciation()) {
      case Appreciation.SUCCES:
        return "success"
      case Appreciation.WARNING:
        return "warning";
      case Appreciation.ERROR:
        return "danger";
    }
  }


  @Input()
  public stat:Statistique;
  
  constructor() { }

  ngOnInit() {
  }

}
