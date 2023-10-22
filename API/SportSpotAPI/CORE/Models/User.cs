using System.ComponentModel.DataAnnotations;

namespace CORE.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string Email { get; set; } = "";
        public bool IsAdmin { get; set; }
        public string Token { get; set; } = "";
        public string Password { get; set; } = "";
        public string ConfirmationCode { get; set; } = "";
        public bool IsEmailVerified { get; set; }

        public UserModel(int id, string email, string password, bool isAdmin)
        {
            Id = id;
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
