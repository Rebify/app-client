import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';
import { MenuI } from '../interfaces/menu.interface';

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
    private authService: AuthService,
  ) {
    this.baseURL = 'http://localhost:3000';
    this.serviceURL = 'menu';
    this.menuList = mockMenuList;
  }

  getMenuList() {
    const authHeaders = this.authService.getAuthHeaders();

    return this.http.get(`${this.baseURL}/${this.serviceURL}`, authHeaders);
  }

  postMenu(name: string, price: number, ingredients: string[], section: string) {
    const url = `${this.baseURL}/${this.serviceURL}/menu`;
    const body = { name, price, ingredients, section };

    return this.http.post(url, body);
  }
}
