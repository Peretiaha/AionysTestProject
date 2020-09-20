import { ActionEx, NoteActionTypes } from '../actions/note.action';

export const initialState = [];

export function NoteReduser(state = initialState, action: ActionEx) {
    switch (action.type) {
        case NoteActionTypes.Add:
            return [...state, action.payload];
        case NoteActionTypes.Edit:
            return [...state, action.payload];
        case NoteActionTypes.Delete:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];

        default:
            return state;
    }
}