import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age=10;
  public checkDel: boolean = false;

  public search_title: string ='';
  public search_content: string ='';
  constructor() { }
}
