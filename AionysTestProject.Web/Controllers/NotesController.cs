using System.Collections.Generic;
using AionysTestProject.BLL.Interfaces;
using AionysTestProject.Model.Entities;
using Microsoft.AspNetCore.Mvc;

namespace AionysTestProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INoteService _noteService;

        public NotesController(INoteService noteService)
        {
            _noteService = noteService;
        }

        [HttpGet("{noteId}")]
        public IActionResult Get(int noteId)
        {
            var note = _noteService.GetById(noteId);

            if (note != null)
            {
                return new ObjectResult(note);
            }

            return NotFound(noteId);
        }

        [HttpGet]
        public IEnumerable<Note> GetAll()
        {
            var notes = _noteService.GetAll();

            return notes;
        }

        [HttpPost]
        public IActionResult Create([FromBody] Note note)
        {
            if (ModelState.IsValid)
            {
                _noteService.Create(note);
                return Ok();
            }

            return BadRequest();
        }

        [HttpPut("{noteId}")]
        public IActionResult Update(int noteId, [FromBody] Note note)
        {
            if (ModelState.IsValid)
            {
                note.NoteId = noteId;
                _noteService.Edit(note);
                return Ok();
            }

            return BadRequest();
        }

        [HttpDelete("{noteId}")]
        public IActionResult Delete(int noteId)
        {
            if (noteId != 0)
            {
                _noteService.Delete(noteId);
                return Ok();
            }

            return BadRequest();
        }
    }
}
