import {Test} from '@nestjs/testing';
import {AppService} from './app.service';

describe('AppService', () => {
    let service: AppService;

    beforeEach(async () => {
        const app = await Test.createTestingModule({
            providers: [AppService],
        }).compile();

        service = app.get<AppService>(AppService);
    });

    describe('getWholeInventory', () => {
        it('should return initial inventory items', () => {
            const inventory = service.getWholeInventory();
            expect(inventory).toHaveLength(2);
            expect(inventory[0].name).toBe('Item1 - Monitor');
        });
    });

    describe('addItemToInventory', () => {
        it('should add a new item with auto-incremented ID', () => {
            const newItem = service.addItemToInventory({
                name: 'New Test Item',
                description: 'Test Description',
                price: 500,
            });
            expect(newItem.id).toBe(1003);
            expect(service.getWholeInventory()).toHaveLength(3);
        });
    });
});
