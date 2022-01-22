import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';

import {AppService} from './app.service';
import {InventoryItemDataModel} from '@thinkbridge/data';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('inventory/list')
    getInventory(): Array<InventoryItemDataModel> {
        return this.appService.getWholeInventory();
    }

    @Get('inventory/get/:id')
    getItem(@Param('id', ParseIntPipe) id: number): InventoryItemDataModel {
        return this.appService.getItemFromInventory(id);
    }

    @Post('inventory/add')
    addItem(@Body() item: InventoryItemDataModel): InventoryItemDataModel {
        return this.appService.addItemToInventory(item);
    }

    @Delete('inventory/del/:id')
    deleteItem(@Param('id', ParseIntPipe) id: number) {
        this.appService.deleteItemFromInventory(id);
    }

    @Put('inventory/update/:id')
    updateItem(
        @Param('id', ParseIntPipe) id: number,
        @Body() item: InventoryItemDataModel
    ): InventoryItemDataModel {
        return this.appService.updateItemInInventory(id, item);
    }
}
