using AionysTestProject.DAL.StaticData;
using AionysTestProject.Model.Entities;
using System.Collections.Generic;

namespace AionysTestProject.DAL.Context
{
    public class MockDbContext
    {
        public List<Note> Notes { get; set; }

        private static MockDbContext _instance;

        private MockDbContext()
        {
            Notes = new List<Note>(StaticDb.Notes);
        }

        public static MockDbContext GetInstance()
        {
            if (_instance == null)
            {
                _instance = new MockDbContext();
            }

            return _instance;
        }
    }
}
