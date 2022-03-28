using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WordsLibruary.Domain
{
    public class LessonModel
    {
        public string Id { get; set; }
        public Dictionary<string,string> WordsList { get; set; }
    }
}
