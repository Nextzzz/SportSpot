using CORE.Entities;
using CORE.Response;
using DAL.Abstractions;
using System.Data.SqlClient;

namespace DAL.Repositories
{
    public class UserWishListRepository : IUserWishListRepository
    {
        private readonly string? _connectingString;

        public UserWishListRepository(string? connectingString)
        {
            _connectingString = connectingString;
        }

        public Response<UserWishListItem> Add(UserWishListItem entity)
        {
            Response<UserWishListItem> response = new Response<UserWishListItem>();
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"INSERT INTO [UserWishList] (UserId, ProductId) VALUES({entity.UserId}, {entity.ProductId})", connection);
                    command.ExecuteNonQuery();

                    response.Message = "UserWishListItem successfully added";
                    response.Status = true;

                    return response;
                }
                catch
                {
                    response.Message = "Error when adding a UserWishListItem!";
                    response.Status = false;

                    return response;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public Response<UserWishListItem> Delete(int userId, int productId)
        {
            Response<UserWishListItem> response = new Response<UserWishListItem>();
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"DELETE FROM UserWishList WHERE [UserId] = {userId} AND [ProductId] = {productId};", connection);

                    if (command.ExecuteNonQuery() == 0)
                    {
                        response.Message = "There is no such UserWishListItem!";
                        response.Status = true;

                        return response;
                    }

                    response.Message = "UserWishListItem successfully removed";
                    response.Status = true;

                    return response;
                }
                catch
                {
                    response.Message = "Error when deleting UserWishListItem!";
                    response.Status = false;

                    return response;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public Response<UserWishListItem> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Response<UserWishListItem> Get(int id)
        {
            throw new NotImplementedException();
        }

        public Response<List<UserWishListItem>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Response<List<UserWishListItem>> GetAll(int userId)
        {
            throw new NotImplementedException();
        }

        public Response<UserWishListItem> Update(UserWishListItem entity)
        {
            throw new NotImplementedException();
        }
    }
}
