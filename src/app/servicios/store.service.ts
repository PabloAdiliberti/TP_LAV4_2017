import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';


interface AppState {

}

@Injectable()
export class StoreService {

  constructor(private store: Store<AppState>) { }


}
