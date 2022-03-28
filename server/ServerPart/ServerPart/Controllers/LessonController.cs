using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WordsLibruary.Domain;
using WordsLibruary.Domain.Services;

namespace ServerPart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController : ControllerBase
    {
        private readonly ILessonService _lessonService;  
        public LessonController(ILessonService LessonService)
        {
            _lessonService = LessonService;
        }

        // GET: api/<LessonController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<LessonController>/5
        [HttpGet("{id}")]
        public string Get(string id)
        {
            return "value";
        }

        // POST api/<LessonController>
        [HttpPost]
        public ActionResult<LessonModel> Post(LessonModel lesson)//добавить в метод создания: вход(id dictionary) выход(LessonModel)
        {
            var result=_lessonService.Create(lesson );
            if (result == null)
            {
                BadRequest("Result is null");
            }
            return Ok(result);
        }

        // PUT api/<LessonController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LessonController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
