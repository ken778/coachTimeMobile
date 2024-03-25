import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent  implements OnInit {

  selectedRoute!: string
  menu = [
      {name:'news', icon: 'newspaper-outline', route:'news',id:1},
      {name:'video', icon: 'play-outline', route:'landing', id:0},
      {name:'scores', icon: 'football-outline', route:'score',id:3},
      {name:'profile', icon: 'person-outline', route:'profile',id:2},
    
    
  ]
  constructor() { }

  ngOnInit() {}


  selectedTabIndex: number | null = null;
  selectTab(index: number): void {
    this.selectedTabIndex = index;
    // this.consoleRoute(route)
    //  console.log(this.selectedTabIndex)

  }
}
