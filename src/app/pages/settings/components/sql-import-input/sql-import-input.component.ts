import { Component, OnInit } from "@angular/core";
import { ModalService } from "@app/common/services/modal.service";

@Component({
    selector: "ns-sql-import-input",
    template: ``,
})
export class SqlImportInputComponent implements OnInit {
    id: string = "bluetooth-modal";

    constructor(private modalService: ModalService) {}

    ngOnInit() {}

    openModal() {
        this.modalService.open(this.id);
    }

    closeModal() {
        this.modalService.close(this.id);
    }
}
