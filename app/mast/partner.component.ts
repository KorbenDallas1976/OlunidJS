import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Partner } from './partner';
import { PartnerService } from './partner.service';

@Component({
  selector: 'olu-partner',
  templateUrl: 'app/mast/partner.component.html',
  //directives: [],
  providers: [PartnerService]
})


export class PartnerComponent implements OnInit {
  /*
  @Input()
  partner: Partner = null;
*/
  constructor(
    private partnerService: PartnerService,
    private route: ActivatedRoute,
  ) {
  }

  partner: Partner = null;
  errorMessage: string;

  title = 'Partner details';

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = +params['id'];
       this.partnerService.getPartner(id)
         .then(partner => this.partner = partner);
     });
    //let id = +this.routeParams.get('id');
    /*
    this.partnerService.getPartners()
      .subscribe(
        partners => this.partners = partners,
        error => this.errorMessage = <any>error
    )
    */
    //this.partner = this.partners.filter(c => c.id == id)[0];
  }

  goBack() {
    window.history.back();
  }

  onSave() {
    this.partnerService.updatePartner(this.partner)
       .then(this.goBack);
    //
  }
}
