using CORE.NewFolder;
using CORE.Response;
using DAL.Abstractions;

namespace DAL.Repositories
{
    public class UserIdentityRepository : IGenericRepository<UserIdentity>
    {
        private readonly string? _connectingString;

        public UserIdentityRepository(string? connectingString)
        {
            _connectingString = connectingString;
        }

        public Response<UserIdentity> Add(string tableName, UserIdentity entity)
        {
            throw new NotImplementedException();
        }

        public Response<UserIdentity> Delete(string tableName, int id)
        {
            throw new NotImplementedException();
        }

        public Response<UserIdentity> Get(string tableName, int id)
        {
            throw new NotImplementedException();
        }

        public Response<List<UserIdentity>> GetAll(string tableName)
        {
            throw new NotImplementedException();
        }

        public Response<UserIdentity> Update(string tableName, UserIdentity entity)
        {
            throw new NotImplementedException();
        }
    }
}
