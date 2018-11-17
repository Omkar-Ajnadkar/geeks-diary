import { NgModule } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { BaseVcsItemFactory } from './base-vcs-item/base-vcs-item-factory';
import { BaseVcsItemComponent } from './base-vcs-item/base-vcs-item.component';
import { VcsItemListManager } from './vcs-item-list-manager';
import { VcsItemMaker } from './vcs-item-maker';


@NgModule({
    imports: [
        UiModule,
    ],
    declarations: [
        BaseVcsItemComponent,
    ],
    entryComponents: [
        BaseVcsItemComponent,
    ],
    providers: [
        BaseVcsItemFactory,
        VcsItemMaker,
        VcsItemListManager,
    ],
    exports: [
        BaseVcsItemComponent,
    ],
})
export class VcsViewModule {
}
