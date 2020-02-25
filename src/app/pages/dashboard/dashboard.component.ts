import { Component, OnInit, HostListener } from '@angular/core';
import Chart from 'chart.js';
import { Statistique } from 'app/shared/models/Statistique';
import { Appreciation } from 'app/shared/models/Appreciation';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  public statistiques : Statistique[];

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

  ngOnInit() {

    this.statistiques = [
      new Statistique(null, "Revenue", "1450$", "money-coins", Appreciation.SUCCES),
      new Statistique(null, "Capacity", "150GB", "globe", Appreciation.WARNING),
      new Statistique(null, "Followers", "1450$", "favourite-28", Appreciation.WARNING),
      new Statistique(null, "Errors", "23", "vector", Appreciation.ERROR)
    ]

  }

}

// statList = [
//   {
//     id = null,
//     intitule = "Revenue",
//     valeur = "1450$",
//     icone = "money-coins",
//     appreciation = Appreciation.SUCCES,
//     dateDernierRefresh = new Date()
//   }

// ];
