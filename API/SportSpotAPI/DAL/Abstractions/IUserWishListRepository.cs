using CORE.Entities;
using CORE.Response;

namespace DAL.Abstractions
{
    public interface IUserWishListRepository : IGenericRepository<UserWishListItem>
    {
        Response<UserWishListItem> Delete(int userId, int productId);
    }
}
