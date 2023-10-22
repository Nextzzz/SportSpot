using CORE.Abstractions;

namespace CORE.NewFolder
{
    public class UserIdentity : BaseEntity
    {
        public string Password { get; set; } = string.Empty;

        public string? Email { get; set; }

        public bool IsEmailVerified { get; set; }

        public bool IsAdmin { get; set; }
    }
}
