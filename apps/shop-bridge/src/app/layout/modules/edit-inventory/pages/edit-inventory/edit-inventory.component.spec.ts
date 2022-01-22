import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditInventoryComponent} from './edit-inventory.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DataService} from '../../../../../data/services/data.service';
import {SharedModule} from '../../../../../shared/shared.module';
import {CoreModule} from '../../../../../core/core.module';

describe('EditInventoryComponent', () => {
    let component: EditInventoryComponent;
    let fixture: ComponentFixture<EditInventoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditInventoryComponent],
            imports: [RouterTestingModule, SharedModule, CoreModule],
            providers: [DataService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditInventoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
