import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/models/note';
import { INoteDialogData } from 'src/models/note-dialog-model';
import { NoteService } from 'src/services/note.service';
import { TranslateService } from '@ngx-translate/core';
import {select, Store} from '@ngrx/store'; 
import {Observable} from 'rxjs'; 
import { NoteAdd, NoteEdit } from 'src/app/actions/note.action';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent implements OnInit {

  note: Note = new Note();
  noteId: number;
  formGroup: FormGroup;
  notes: Observable<Note[]>;
  
  constructor(public dialogRef: MatDialogRef<Note>,
    @Inject(MAT_DIALOG_DATA) public data: INoteDialogData,
    private noteService: NoteService,
    private popUp: MatSnackBar,
    public translate: TranslateService,
    private store: Store<{ notes: Note[] }>) {
      this.createForm();
      this.notes = store.pipe(select('notes'))
     }

  ngOnInit(): void {
    if (this.data.note !== undefined) {
      this.note = { ... this.data.note };
    } else {
      this.note.noteId = 0;
    }
  }

  createForm() {
    this.formGroup = new FormGroup({
      content: new FormControl('', [Validators.required, Validators.minLength(3)])      
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  submit(note: Note): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    if (this.note.noteId === 0) {
      this.noteService.createNote(this.note).subscribe(
        () => {
          this.store.dispatch(new NoteAdd(note)); 
          this.dialogRef.close();
          this.popUp.open('Note created successfully!', 'Ok',
            { duration: 2000, horizontalPosition: 'end', verticalPosition: 'top' });
        }
      );
    } else {
      this.noteService.editNote(this.note).subscribe(
        () => {
          this.store.dispatch(new NoteEdit(note)); 
          this.dialogRef.close();
          this.popUp.open('Note edited successfully!', 'Ok',
            { duration: 2000, horizontalPosition: 'end', verticalPosition: 'top' });
        }
      );
    }
  }

  getContentErrorMessage() {
    if (this.translate.currentLang == 'ru') {
      return this.formGroup.controls.content.hasError('required') ? 'Поле должно быть заполнено' :
        this.formGroup.controls.content.hasError('minlength') ? 'Поле должно содержать минимум 3 символа' : '';
    }

    return this.formGroup.controls.content.hasError('required') ? 'Content is required' :
      this.formGroup.controls.content.hasError('minlength') ? 'Content must be more than 3 characters' : '';
  }
}
