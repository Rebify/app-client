import { Injectable } from '@angular/core';
import { MenuI } from '../interfaces/menu.interface';
import { HttpClient } from '@angular/common/http';

const mockMenuList = [{
  name: 'menu a',
  dishes: []
}, {
  name: 'menu a',
  dishes: []
}];

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseURL: string;
  serviceURL: string;
  menuList: MenuI[];

  constructor(
    private http: HttpClient,
  ) {
    this.baseURL = 'http://localhost:3000';
    this.serviceURL = 'menu';
    this.menuList = mockMenuList;
   }

  getMenuList(): MenuI[] {
    return this.menuList;
  }
  postMenu(name: string, price: number, ingredients: string[], section: string) {
    const url = `${this.baseURL}/${this.serviceURL}/menu`;
    const body = { name, price, ingredients, section };

    return this.http.post(url, body);
  }
}
