using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WordsLibruary.Domain.Services
{
    public class LessonService : ILessonService
    {
        public LessonModel Create(LessonModel lesson)
        {
            if (string.IsNullOrEmpty(lesson.Id))
            {
                return null;
            }
            return lesson;
        }
    }
}
