import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-rule-page',
  templateUrl: './rule-page.component.html'
})
export class RulePageComponent {
  constructor() {}

  // loaded lazily
  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  // background
  links = ['', '', ''];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
}
