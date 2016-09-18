// NG
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// APP
import { Partner } from './partner';
import { PartnerService } from './partner.service';

@Component({
  selector: 'partners',
  templateUrl: 'app/mast/partner-list.component.html',
  styleUrls:  ['app/mast/partner-list.component.css'],
  providers: [PartnerService]
})

export class PartnerListComponent implements OnInit {
  constructor(
    private router: Router,
    private partnerService: PartnerService) { }
  partners: Partner[];
  selectedPartner: Partner;
  errorMessage: string;

  ngOnInit() {
    this.getPartners();
  }

  getPartners() {
    this.partnerService.getPartners()
    .then(partners => this.partners = partners)
  }

  onSelect(partner: Partner) {
    this.selectedPartner = partner;
    let link = ['/mast/partner', this.selectedPartner.id];
    this.router.navigate(link);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    var p = new Partner();
    p.name = name;
    p.abbreviation = null;
    p.remark = null;

    this.partnerService.createPartner(p)
      .then(partner => {
        this.partners.push(partner);
        this.selectedPartner = null;
      });
}

delete(partner: Partner): void {
  this.partnerService
      .deletePartner(partner.id)
      .then(() => {
        this.partners = this.partners.filter(h => h !== partner);
        if (this.selectedPartner === partner) { this.selectedPartner = null; }
      });
}

/*
  gotoDetail(): void {
    let link = ['/mast/partner', this.selectedPartner.id];
    this.router.navigate(link);
  }
  */
}
