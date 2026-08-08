import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InventoryItemDataModel } from '@thinkbridge/data';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private localKey = 'shopbridge_inventory';

    private defaultInventory: InventoryItemDataModel[] = [
        { id: 1001, name: 'Item1 - Monitor', description: 'Dell FHD Monitor', price: 6000 },
        { id: 1002, name: 'Item2 - Logi MX mouse 3', description: 'Logitech Master series ergonomic mouse 3', price: 8000 },
    ];

    constructor(private httpClient: HttpClient) {}

    private getLocalInventory(): InventoryItemDataModel[] {
        const stored = localStorage.getItem(this.localKey);
        if (!stored) {
            localStorage.setItem(this.localKey, JSON.stringify(this.defaultInventory));
            return [...this.defaultInventory];
        }
        try {
            return JSON.parse(stored);
        } catch {
            return [...this.defaultInventory];
        }
    }

    private setLocalInventory(items: InventoryItemDataModel[]): void {
        localStorage.setItem(this.localKey, JSON.stringify(items));
    }

    getWholeInventory(): Observable<InventoryItemDataModel[]> {
        return this.httpClient.get<InventoryItemDataModel[]>('/api/inventory/list').pipe(
            catchError(() => of(this.getLocalInventory()))
        );
    }

    getItemFromInventory(itemId: number): Observable<InventoryItemDataModel> {
        return this.httpClient.get<InventoryItemDataModel>('/api/inventory/get/' + itemId).pipe(
            catchError(() => {
                const items = this.getLocalInventory();
                const found = items.find((i) => i.id === Number(itemId));
                return of(found || items[0]);
            })
        );
    }

    addItemToInventory(payload: InventoryItemDataModel): Observable<InventoryItemDataModel> {
        return this.httpClient.post<InventoryItemDataModel>('/api/inventory/add', payload).pipe(
            catchError(() => {
                const items = this.getLocalInventory();
                const newItem = {
                    ...payload,
                    id: payload.id || Math.floor(1000 + Math.random() * 9000),
                };
                items.push(newItem);
                this.setLocalInventory(items);
                return of(newItem);
            })
        );
    }

    updateItemInInventory(itemId: number, payload: InventoryItemDataModel): Observable<InventoryItemDataModel> {
        return this.httpClient.put<InventoryItemDataModel>('/api/inventory/update/' + itemId, payload).pipe(
            catchError(() => {
                const items = this.getLocalInventory();
                const index = items.findIndex((i) => i.id === Number(itemId));
                if (index !== -1) {
                    items[index] = { ...items[index], ...payload };
                    this.setLocalInventory(items);
                    return of(items[index]);
                }
                return of(payload);
            })
        );
    }

    deleteItemFromInventory(itemId: number): Observable<any> {
        return this.httpClient.delete('/api/inventory/del/' + itemId).pipe(
            catchError(() => {
                let items = this.getLocalInventory();
                items = items.filter((i) => i.id !== Number(itemId));
                this.setLocalInventory(items);
                return of({ success: true });
            })
        );
    }
}
