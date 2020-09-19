using AionysTestProject.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace AionysTestProject.DAL.StaticData
{
    public static class StaticDb
    {
        public static readonly List<Note> Notes = new List<Note>
        {
            new Note
            {
                NoteId = 1,
                Content = "Note1"
            },
            new Note
            {
                NoteId = 2,
                Content = "Note2"
            },
            new Note
            {
                NoteId = 3,
                Content = "Note3"
            },
            new Note
            {
                NoteId = 4,
                Content = "Note4"
            },
            new Note
            { 
                NoteId = 5,
                Content = "Note5"
            },
            new Note
            {
                NoteId = 6,
                Content = "Note6"
            },
            new Note
            {
                NoteId = 7,
                Content = "Note7"
            }
        };
    }
}
