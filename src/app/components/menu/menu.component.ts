import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuI, MenuListResponseI } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: MenuI[];

  constructor(private menuService: MenuService) {
    this.menus = [];
  }

  ngOnInit() {
    this.menuService.getMenuList()
      .subscribe((data: MenuListResponseI) => {
        const menus = data.menus.map(({ name }) => ({ name }));
        this.menus = menus;
      });
  }

}
