using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace AionysTestProject.DAL.Interfaces
{
    public interface IRepository<T> where T : class
    {
        void Insert(T entity);

        void Update(T entity);

        void Remove(int entityId);

        IEnumerable<T> GetMany(Func<T, bool> filter = null);

        T GetSingle(int entityId);
    }
}
