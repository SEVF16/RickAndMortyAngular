import { Component, Inject, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Episode } from 'src/app/models/episode.interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalContent: Episode[];
  idData: any;
  constructor(protected modalService: ModalService,  ) {
    this.modalContent = [];
   }

  ngOnInit(): void {
    this.modalService.getDataPop().subscribe((datosEpisodio) => {
      this.modalContent = [datosEpisodio];

      // Realiza cualquier acción adicional con los datos del episodio
    });
  }



  closeModal() {
    this.modalService.closeModal();
  }

}
