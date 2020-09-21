import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store'; 
import { Note } from 'src/models/note';
import { NoteDelete } from '../actions/note.action';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public translate: TranslateService,
    public store: Store<{notes: Note[] }>) { 
    }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close({ data: false });
  }

  onDeleteClick() {
    this.store.dispatch(new NoteDelete(this.data.note.noteId)); 
    this.dialogRef.close({ data: true });
  }
}
