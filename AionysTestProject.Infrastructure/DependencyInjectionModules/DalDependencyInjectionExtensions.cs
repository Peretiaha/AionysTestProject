using AionysTestProject.DAL.Context;
using AionysTestProject.DAL.Interfaces;
using AionysTestProject.DAL.Repository;
using AionysTestProject.Model.Entities;
using Microsoft.Extensions.DependencyInjection;

namespace AionysTestProject.Infrastructure.DependencyInjectionModules
{
    public static class DalDependencyInjectionExtensions
    {
        public static IServiceCollection ResolveDalDependencies(this IServiceCollection services)
        {
            services.AddScoped(c => MockDbContext.GetInstance());
            services.AddScoped<IRepository<Note>, NoteRepository>();

            return services;
        }
    }
}
