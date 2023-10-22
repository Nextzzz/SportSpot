using System.ComponentModel.DataAnnotations;

namespace CORE.Models
{
    public class UserModel
    {
        [Key]
        public string Email { get; set; } = "";
        public bool IsAdmin { get; set; }
        public string Token { get; set; } = "";
        public string Password { get; set; } = "";

        public UserModel(string email, string password, bool isAdmin)
        {
            Email = email;
            Password = password;
            IsAdmin = isAdmin;
        }
    }

    public class LoginUser
    {
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
    }

    public class RegisterUser
    {
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
        public bool IsAdmin { get; set; }
    }
}
