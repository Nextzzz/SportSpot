using CORE.Entities;
using CORE.Response;

namespace DAL.Abstractions
{
    public interface IGenericRepository<T>
    {
        Response<T> Add(T entity);

        Response<T> Delete(int id);

        Response<T> Update(T entity);

        Response<T> Get(int id);

        Response<List<T>> GetAll();

        Response<List<T>> GetAll(int userId);
    }
}
