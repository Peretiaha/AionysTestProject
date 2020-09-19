using AionysTestProject.BLL.Interfaces;
using AionysTestProject.DAL.Interfaces;
using AionysTestProject.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace AionysTestProject.BLL.Services
{
    public class NoteService : INoteService
    {
        private readonly IRepository<Note> _noteRepository;

        public NoteService(IRepository<Note> noteRepository)
        {
            _noteRepository = noteRepository;
        }

        public void Create(Note entity)
        {
            _noteRepository.Insert(entity);
        }

        public void Delete(int entityId)
        {
            _noteRepository.Remove(entityId);
        }

        public void Edit(Note entity)
        {
            _noteRepository.Update(entity);
        }

        public IEnumerable<Note> GetAll()
        {
            return _noteRepository.GetMany();
        }

        public Note GetById(int noteId)
        {
            return _noteRepository.GetSingle(noteId);
        }
    }
}
