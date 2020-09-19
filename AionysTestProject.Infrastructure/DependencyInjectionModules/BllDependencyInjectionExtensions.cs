using AionysTestProject.BLL.Interfaces;
using AionysTestProject.BLL.Services;
using Microsoft.Extensions.DependencyInjection;

namespace AionysTestProject.Infrastructure.DependencyInjectionModules
{
    public static class BllDependencyInjectionExtensions
    {
        public static IServiceCollection ResolveBllDependencies(this IServiceCollection services)
        {
            services.AddScoped<INoteService, NoteService>();

            return services;
        }
    }
}
