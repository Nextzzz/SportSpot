using CORE.Entities;
using CORE.Response;

namespace DAL.Abstractions
{
    public interface IUserIdentityRepository<T> : IGenericRepository<T>
    {
        Response<T> GetByEmail(string email);
        Response<UserIdentity> ActivateUser(int id);
    }
}
