import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';
import {AppService} from './app.service';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('getInventory', () => {
        it('should return initial inventory items', () => {
            const inventory = appController.getInventory();
            expect(inventory.length).toBeGreaterThan(0);
        });
    });
});
