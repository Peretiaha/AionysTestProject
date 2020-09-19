
using System.ComponentModel.DataAnnotations;

namespace AionysTestProject.Model.Entities
{
    public class Note
    {
        public int NoteId { get; set; }

        [Required]
        [MinLength(3)]
        public string Content { get; set; }
    }
}
