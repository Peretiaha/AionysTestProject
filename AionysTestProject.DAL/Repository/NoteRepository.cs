using AionysTestProject.DAL.Context;
using AionysTestProject.DAL.Interfaces;
using AionysTestProject.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AionysTestProject.DAL.Repository
{
    public class NoteRepository : IRepository<Note>
    {
        private readonly MockDbContext _context;

        public NoteRepository(MockDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Note> GetMany(Func<Note, bool> filter = null)
        {
            //ability to make filtration to collection
            if (filter != null)
            {
                return _context.Notes.Where(filter);
            }

            return _context.Notes;
        }

        public Note GetSingle(int entityId)
        {
            return _context.Notes.Where(x => x.NoteId == entityId)?.FirstOrDefault();
        }

        public void Insert(Note entity)
        {
            //Get last added noteId to set Id for new Note
            var lastAddedId = _context.Notes.Max(x => x.NoteId);
            entity.NoteId = ++lastAddedId;
            _context.Notes.Add(entity);
        }

        public void Remove(int entityId)
        {
            var entity = _context.Notes?.Where(x => x.NoteId == entityId)?.FirstOrDefault();
            _context.Notes.Remove(entity);
        }

        public void Update(Note entity)
        {
            _context.Notes.Where(x => x.NoteId == entity.NoteId).FirstOrDefault().Content = entity.Content;
        }
    }
}
