import { Injectable } from "@angular/core";
import { IDecor } from "./decor";


@Injectable({
  providedIn: 'root'
})

export class DecorService{
  private decorUrl = "api/decor/decor-list.json";
}
