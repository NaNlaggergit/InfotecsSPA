import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private apiUrl = 'https://localhost:7165/api/devices';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  getById(id: string): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${id}`);
  }

  create(device: Device): Observable<any> { //Не используется
    return this.http.post(this.apiUrl, device);
  }

  update(device: Device): Observable<any> { //Не используется
    return this.http.put(`${this.apiUrl}/${device.id}`, device);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  backupSave(): Observable<any> {
  return this.http.post('https://localhost:7165/api/backup/save', {});
  }

  backupLoad(): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('https://localhost:7165/api/backup/load', {});
  }
}