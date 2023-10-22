
using CORE.Models;

namespace BLL.Abstractions
{
    public interface IAuthService
    {
        UserModel? LoginUser(string email, string password);

        void RegisterUser(RegisterUser user);

        bool ActivateUser(int id);
    }
}
