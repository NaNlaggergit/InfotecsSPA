import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../models/device';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.less']
})
export class DevicesListComponent implements OnInit {
  devices: Device[] = [];

  constructor(
    private deviceService: DeviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.deviceService.getAll().subscribe(devices => {
      this.devices = devices;
    });
  }

  deleteDevice(id: string) {
    if (confirm('Удалить устройство?')) {
      this.deviceService.delete(id).subscribe(() => {
        this.devices = this.devices.filter(d => d.id !== id);
      });
    }
  }

  viewDetails(id: string) {
    this.router.navigate(['/details', id]);
  }
  saveBackup() {
    this.deviceService.backupSave().subscribe({
      next: () => alert('Бэкап сохранён'),
      error: () => alert('Ошибка при сохранении бэкапа')
    });
  }

  loadBackup() {
    this.deviceService.backupLoad().subscribe({
      next: (res) => {
        alert(res.message);
        this.refreshList();
      },
      error: () => alert('Ошибка при загрузке бэкапа')
    });
  }

  refreshList() {
    this.deviceService.getAll().subscribe(devices => {
      this.devices = devices;
    });
  }

}
