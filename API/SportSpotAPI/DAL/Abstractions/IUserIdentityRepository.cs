using CORE.Response;

namespace DAL.Abstractions
{
    public interface IUserIdentityRepository<T> : IGenericRepository<T>
    {
        Response<T> GetByEmail(string email);
    }
}
