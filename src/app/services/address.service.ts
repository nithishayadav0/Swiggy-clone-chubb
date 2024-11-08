// address.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private addressSource = new BehaviorSubject<any>(null); // Store the address
  currentAddress = this.addressSource.asObservable(); // Observable for address data

  constructor() {}

  // Update the current address
  updateAddress(address: any) {
    this.addressSource.next(address);
  }
}
