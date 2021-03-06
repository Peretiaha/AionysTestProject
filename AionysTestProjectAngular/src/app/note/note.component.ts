import { Component, OnInit } from '@angular/core';
import { Note } from 'src/models/note';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { NoteService } from '../../services/note.service';
import { MatDialog } from '@angular/material/dialog';
import { NoteModalComponent } from './note-modal/note-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  private noteId: number;
  public displayedColumns: string[] = ['noteId', 'content', 'edit', 'delete'];
  public selection = new SelectionModel<Note>(true, []);
  notes: Observable<Note[]>;

  constructor(private noteService: NoteService,
    public createDialog: MatDialog,
    private snackbar: MatSnackBar,
    public translate: TranslateService,
    private store: Store<{ notes: Note[] }>) {
    this.notes = store.pipe(select('notes'));
  }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.notes = this.noteService.featchNotes();
  }

  onDelete(noteId: number) {
    let note = new Note;
    note.noteId = noteId;
    const dialogRef = this.createDialog.open(DeleteModalComponent, {
      width: '500px',
      data: { action: 'delete', note },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(x => {
      if (x != undefined && x.data == true) {
        this.noteService.deleteById(noteId).subscribe(_ => {
          this.loadNotes();
          this.showInfoWindow('Delete successful')
        }
        )
      }
    })
  }

  onCreate() {
    const dialogRef = this.createDialog.open(NoteModalComponent, {
      width: '500px',
      data: { action: '+ Create New Note' },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(() =>
      this.notes = this.noteService.featchNotes()
    );
  }

  onEdit(note: Note) {
    const dialogRef = this.createDialog.open(NoteModalComponent, {
      width: '500px',
      data: { action: 'Edit', collinsListId: this.noteId, note },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(() =>
      this.notes = this.noteService.featchNotes());
  }

  showInfoWindow(text: string) {
    this.snackbar.open(text, 'ok', {
      duration: 1000,
      verticalPosition: 'top'
    });
  }


}
