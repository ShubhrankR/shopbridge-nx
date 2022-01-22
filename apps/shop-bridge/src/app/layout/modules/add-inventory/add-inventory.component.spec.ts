import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddInventoryComponent} from './add-inventory.component';
import {DataService} from '../../../data/services/data.service';
import {CoreModule} from '../../../core/core.module';

describe('AddInventoryComponent', () => {
    let component: AddInventoryComponent;
    let fixture: ComponentFixture<AddInventoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddInventoryComponent],
            imports: [CoreModule],
            providers: [DataService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddInventoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
