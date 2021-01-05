import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {

  public cards = [
    { title: "commandes", number: 30, fontIcon: "fas fa-chart-bar", arrow: "fa fa-arrow-up" },
    { title: "ventes", number: 1000, fontIcon: "fas fa-chart-pie", arrow: "fa fa-arrow-down" },
    { title: "abonnées", number: 100000, fontIcon: "fas fa-user", arrow: "fa fa-arrow-down" },
    { title: "produits", number: 100, fontIcon: "fas fa-percent", arrow: "fa fa-arrow-up" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
