import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { CommonModule } from '@angular/common';
import { AddressService } from '../services/address.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-modal.component.html',
  styleUrl: './address-modal.component.scss'
})


export class AddressModalComponent {
  @Input() showModal: boolean = false;

  address = {
    street: '',
    city: '',
    state: '',
    zip: ''
  };

  constructor(private addressService: AddressService) {}

  // Submit the address and close the modal
  submitAddress() {
    this.addressService.updateAddress(this.address); 
    this.closeModal(); 
  }

  closeModal() {
    this.showModal = false;
    
  }
}
