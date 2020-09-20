import { Component, OnInit } from '@angular/core';
import { INote } from 'src/models/note';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  private noteId: number;
  public dataSource = new MatTableDataSource<INote>();
  public displayedColumns: string[] = ['noteId', 'content', 'edit', 'delete'];
  public selection = new SelectionModel<INote>(true, []);
  constructor() { }

  ngOnInit(): void {
    let list: INote[] = [{'noteId': 1, 'content': 'note1'}, {'noteId': 2, 'content': 'note2'}];
    this.dataSource = new MatTableDataSource(list);
  }

  onDelete(noteId: number) {
    console.log(noteId);
  }

  onEdit(note: INote){
    console.log(note);
  }
}
