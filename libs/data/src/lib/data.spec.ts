import { InventoryItemPayloadModel } from './data';

describe('InventoryItemPayloadModel', () => {
    it('should construct payload model correctly', () => {
        const payload = new InventoryItemPayloadModel('Test Item', 'Test Desc', 100);
        expect(payload.name).toBe('Test Item');
        expect(payload.description).toBe('Test Desc');
        expect(payload.price).toBe(100);
    });
});
