import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="branding">
      <a style=" text-decoration: none;" *ngIf="options.theme === 'light'" href="/" >
      <h2 style=" 
      font-size: 24px;
      font-weight: bold;
      color: #5d87ff;
      font-family: 'Pacifico', cursive;
      margin-top:5px;
      letter-spacing: 0px;"  *ngIf="options.theme === 'light'"> WebCraft  Academy</h2>
      </a>
      <a href="/" *ngIf="options.theme === 'dark'">
      <h2 style=" 
      font-size: 34px;
      font-weight: bold;
      color: #5d87ff;
      font-family: 'Pacifico', cursive;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);      
      letter-spacing: 1px;" class="logo-text" *ngIf="options.theme === 'dark'"> WebCraft  Academy</h2>
      </a>
    </div>
  `,
})
export class BrandingComponent {
  options = this.settings.getOptions();
 
  constructor(private settings: CoreService) {}
}
