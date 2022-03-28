using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WordsLibruary.Domain.Services
{
    public interface ILessonService
    {
       public LessonModel Create(LessonModel lesson);
    }
}
