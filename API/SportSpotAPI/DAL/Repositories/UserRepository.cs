using CORE.Entities;
using CORE.Response;
using DAL.Abstractions;
using System.Data.SqlClient;

namespace DAL.Repositories
{
    public class UserRepository : IGenericRepository<User>
    {
        private readonly string? _connectingString;

        public UserRepository(string? connectingString)
        {
            _connectingString = connectingString;
        }

        public Response<User> Add(User entity)
        {
            throw new NotImplementedException();
        }

        public Response<User> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Response<User> Get(int id)
        {
            Response<User> response = new Response<User>();
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"SELECT * FROM [User] WHERE Id = {id}", connection);

                    var reader = command.ExecuteReader();

                    User user = new User();

                    if (reader.Read())
                    {

                        user.Id = reader.GetInt32(0);

                        try
                        {
                            user.FirstName = reader.GetString(1);
                        }
                        catch
                        {
                            user.FirstName = null;
                        }

                        try
                        {
                            user.LastName = reader.GetString(2);
                        }
                        catch
                        {
                            user.LastName = null;
                        }

                        try
                        {
                            user.PhoneNumber = reader.GetString(3);
                        }
                        catch
                        {
                            user.PhoneNumber = null;
                        }

                        try
                        {
                            user.Address = reader.GetString(4);
                        }
                        catch
                        {
                            user.Address = null;
                        }

                        reader.Close();

                        response.Data = user;
                        response.Message = "User is found";
                        response.Status = true;

                        return response;
                    }

                    else
                    {
                        response.Message = "This User does not exist!";
                        response.Status = true;

                        return response;
                    }

                }
                catch
                {
                    response.Message = "Error finding User!";
                    response.Status = false;

                    return response;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public Response<List<User>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Response<User> Update(User entity)
        {
            throw new NotImplementedException();
        }
    }
}
