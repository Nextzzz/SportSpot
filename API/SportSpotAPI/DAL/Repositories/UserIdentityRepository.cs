using CORE.NewFolder;
using CORE.Response;
using DAL.Abstractions;
using System.Data.SqlClient;

namespace DAL.Repositories
{
    public class UserIdentityRepository : IUserIdentityRepository<UserIdentity>
    {
        private readonly string? _connectingString;

        public UserIdentityRepository(string? connectingString)
        {
            _connectingString = connectingString;
        }

        public Response<UserIdentity> GetByEmail(string email)
        {
            Response<UserIdentity> response = new Response<UserIdentity>();
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"SELECT * FROM {nameof(UserIdentity)} UI WHERE UI.[Email] = '{email}'", connection);
                    var reader = command.ExecuteReader();

                    if (reader.Read())
                    {

                        UserIdentity userIdentity = new UserIdentity()
                        {
                            Id = reader.GetInt32(0),
                            Password = reader.GetString(1),
                            Email = reader.GetString(2),
                            IsEmailVerified = reader.GetBoolean(3),
                            IsAdmin = reader.GetBoolean(4)
                        };

                        reader.Close();

                        response.Data = userIdentity;
                        response.Message = "UserIdentity is found";
                        response.Status = true;

                        return response;
                    }

                    response.Message = "No such UserIdentity exists";
                    response.Status = true;

                    return response;
                }
                catch
                {
                    response.Message = "Error when finding a UserIdentity!";
                    response.Status = false;

                    return response;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public Response<UserIdentity> Add(UserIdentity entity)
        {
            Response<UserIdentity> response = new Response<UserIdentity>();
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"INSERT INTO [User] (FirstName, LastName, PhoneNumber, [Address]) VALUES(NULL, NULL, NULL, NULL)", connection);
                    command.ExecuteNonQuery();

                    command = new SqlCommand($"SELECT TOP 1 * FROM [User] ORDER BY [Id] DESC ", connection);
                    var reader = command.ExecuteReader();

                    reader.Read();
                    int id = reader.GetInt32(0);
                    reader.Close();

                    command = new SqlCommand($"INSERT INTO UserIdentity (Id, Email, [Password], IsAdmin, IsEmailVerified) VALUES({id}, '{entity.Email}', '{entity.Password}', {Convert.ToInt32(entity.IsAdmin)}, {Convert.ToInt32(entity.IsEmailVerified)})", connection);
                    command.ExecuteNonQuery();

                    response.Message = "User successfully added";
                    response.Status = true;

                    return response;
                }
                catch
                {
                    response.Message = "Error when adding a User!";
                    response.Status = false;

                    return response;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public Response<UserIdentity> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Response<UserIdentity> Get(int id)
        {
            throw new NotImplementedException();
        }

        public Response<List<UserIdentity>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Response<UserIdentity> Update(UserIdentity entity)
        {
            throw new NotImplementedException();
        }
    }
}
