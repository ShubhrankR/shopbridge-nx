import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListInventoryComponent} from './list-inventory.component';
import {CoreModule} from '../../../core/core.module';
import {SharedModule} from '../../../shared/shared.module';
import {DataService} from '../../../data/services/data.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ListInventoryComponent', () => {
    let component: ListInventoryComponent;
    let fixture: ComponentFixture<ListInventoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListInventoryComponent],
            imports: [CoreModule, SharedModule, RouterTestingModule],
            providers: [DataService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListInventoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
