using System;

namespace MakeMeFamous.API.Model
{
    public class Session
    {
        public int AccountId { get; set; }
        public string Email { get; set; }
        public DateTime SessionStartTime { get; set; }
    }
}