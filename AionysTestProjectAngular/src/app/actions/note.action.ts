import { Action } from '@ngrx/store';

export enum NoteActionTypes {
    Add = '[Note Component] Add',
    Edit = '[Note Component] Edit',
    Delete = '[Note Component] Delete'
}

export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class NoteAdd implements ActionEx {
    readonly type = NoteActionTypes.Add;

    constructor(public payload: any) {
    }
}

export class NoteEdit implements ActionEx {
    readonly type = NoteActionTypes.Edit;

    constructor(public payload: any) {
    }
}

export class NoteDelete implements ActionEx {
    readonly type = NoteActionTypes.Delete;

    constructor(public payload: any) {
    }
}