using AionysTestProject.Model.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace AionysTestProject.BLL.Interfaces
{
    public interface INoteService : IService<Note>
    {
        public IEnumerable<Note> GetAll();

        public Note GetById(int noteId);
    }
}
