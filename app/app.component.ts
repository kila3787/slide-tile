import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <kendo-scrollview
    [data]="items"
    [width]="width"
    [height]="height"
    [arrows]="true"
    [pageable]="true">
      <ng-template let-item="item">
          <h2 class="demo-title">{{item.title}}</h2>
          <img src='{{item.url}}' [ngStyle]="{height: 'auto'}" draggable="false" />
      </ng-template>
  </kendo-scrollview>
  `,
  styles: [`
    .k-scrollview-wrap {
      margin: 0 auto;
      background: #FAF9F5;
    }
    .demo-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      padding: 10px;
      color: #fff;
      background-color: rgba(32,55,70, . 20);
      text-align: center;
      font-size: 14px;
      font-family: "Nunito Sans",sans-serif;
    }
   .kendo-scrollview.k-scrollview-wrap .k-scrollview-pageable>li.k-button.k-primary, kendo-scrollview.k-scrollview-wrap .k-scrollview-nav>li.k-link.k-primary, div.k-scrollview .k-scrollview-pageable>li.k-button.k-primary, div.k-scrollview .k-scrollview-nav>li.k-link.k-primary {
    border-color: #fffff;
    background-color: #fffff;
}
  `]
})
export class AppComponent {
  public items: any[] = [
    { url: 'https://bit.ly/2cJjYuB' },
    { url: 'https://bit.ly/2cTBNaL' },
    { url: 'https://bit.ly/2cJl3Cx' }
  ];
  public width = '100%';
  public height = '300px';
}

