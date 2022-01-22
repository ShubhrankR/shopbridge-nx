import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InventoryItemDataModel} from '@thinkbridge/data';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private httpClient: HttpClient) {}

    /**
     *
     */
    getWholeInventory(): Observable<InventoryItemDataModel[]> {
        return this.httpClient.get<InventoryItemDataModel[]>(
            '/api/inventory/list'
        );
    }

    /**
     *
     * @param itemId
     */
    getItemFromInventory(itemId: number): Observable<InventoryItemDataModel> {
        return this.httpClient.get<InventoryItemDataModel>(
            '/api/inventory/get/' + itemId
        );
    }

    /**
     *
     * @param payload
     */
    addItemToInventory(
        payload: InventoryItemDataModel
    ): Observable<InventoryItemDataModel> {
        return this.httpClient.post<InventoryItemDataModel>(
            '/api/inventory/add',
            payload
        );
    }

    /**
     *
     * @param itemId
     * @param payload
     */
    updateItemInInventory(
        itemId: number,
        payload: InventoryItemDataModel
    ): Observable<InventoryItemDataModel> {
        return this.httpClient.put<InventoryItemDataModel>(
            '/api/inventory/update/' + itemId,
            payload
        );
    }

    /**
     *
     * @param itemId
     */
    deleteItemFromInventory(itemId: number): Observable<any> {
        return this.httpClient.delete('/api/inventory/del/' + itemId);
    }
}
