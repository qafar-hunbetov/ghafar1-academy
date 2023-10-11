import { Component } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  faMoneyBill=faMoneyBill
  faLayerGroup=faLayerGroup
  faUsers=faUsers
  faGear=faGear
  faWrench=faWrench
  faHeadset=faHeadset
}
