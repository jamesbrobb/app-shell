import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {NavItemNode, NavTreeComponent, openClose, rotate} from "@jamesbenrobb/ui";
import {SideMenuComponentIO} from "../../directives/side-menu-loader/side-menu-loader.directive";



@Component({
  selector: 'jbr-app-shell-default-side-menu',
  standalone: true,
  imports: [
    NavTreeComponent

  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    openClose({timings: '0.3s'}),
    rotate()
  ]
})
export class SideMenuComponent implements SideMenuComponentIO {

  @Input() menuNodes?: NavItemNode[];
  @Input() currentNodes?: NavItemNode[];

  @Output() nodeSelected = new EventEmitter<NavItemNode>();
}
