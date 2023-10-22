using CORE.Abstractions;

namespace CORE.NewFolder
{
    public class User : BaseEntity
    {
        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Address { get; set; }

        public string? PhoneNumber { get; set; }
    }
}
