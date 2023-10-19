using CORE.Abstractions;

namespace CORE.NewFolder
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; } = string.Empty;

        public string LastName { get; set; } = string.Empty;

        public string? Address { get; set; }

        public string? PhoneNumber { get; set; }
    }
}
