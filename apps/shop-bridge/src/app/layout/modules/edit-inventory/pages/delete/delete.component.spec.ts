import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteComponent} from './delete.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DataService} from '../../../../../data/services/data.service';
import {SharedModule} from '../../../../../shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DeleteComponent', () => {
    let component: DeleteComponent;
    let fixture: ComponentFixture<DeleteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DeleteComponent],
            imports: [
                RouterTestingModule,
                SharedModule,
                HttpClientTestingModule,
            ],
            providers: [DataService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
