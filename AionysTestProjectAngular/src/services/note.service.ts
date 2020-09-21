import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from 'src/models/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.appUrl + environment.apiNotes;
  }

  featchNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  deleteById(noteId: number): Observable<Note> {
    return this.http.delete<Note>(this.apiUrl + noteId);
  }

  createNote(note: Note) {
    return this.http.post(this.apiUrl, note).pipe();
  }

  editNote(note: Note) {
    return this.http.put(this.apiUrl + note.noteId, note).pipe();
  }
}
