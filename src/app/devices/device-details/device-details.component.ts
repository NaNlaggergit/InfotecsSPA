import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../models/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.less']
})
export class DeviceDetailsComponent implements OnInit {
  device?: Device;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.deviceService.getById(id).subscribe({
        next: (data) => this.device = data,
        error: () => alert('Устройство не найдено')
      });
    }
  }
}
