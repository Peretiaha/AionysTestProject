import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/models/note';
import { INoteDialogData } from 'src/models/note-dialog-model';
import { NoteService } from 'src/services/note.service';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent implements OnInit {

  note: Note = new Note();
  noteId: number;
  formGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<Note>,
    @Inject(MAT_DIALOG_DATA) public data: INoteDialogData,
    private noteService: NoteService,
    private popUp: MatSnackBar) {
      this.createForm();
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
      console.log("create");
      this.noteService.createNote(this.note).subscribe(
        (respondBook: Note) => {
          this.dialogRef.close();
          this.popUp.open('Note created successfully!', 'Ok',
            { duration: 2000, horizontalPosition: 'end', verticalPosition: 'top' });
        }
      );
    } else {
      console.log("edit");
      this.noteService.editNote(this.note).subscribe(
        (respondBook: Note) => {
          this.dialogRef.close();
          this.popUp.open('Note edited successfully!', 'Ok',
            { duration: 2000, horizontalPosition: 'end', verticalPosition: 'top' });
        }
      );
    }
  }

  getContentErrorMessage() {
    return this.formGroup.controls.content.hasError('required') ? 'Title is required' :
      this.formGroup.controls.content.hasError('minlength') ? 'Title must be more than 3 characters' : '';
  }
}
