using CORE.Response;

namespace DAL.Abstractions
{
    public interface IGenericRepository<T>
    {
        Response<T> Add(string tableName, T entity);

        Response<T> Delete(string tableName, int id);

        Response<T> Update(string tableName, T entity);

        Response<T> Get(string tableName, int id);

        Response<List<T>> GetAll(string tableName);
    }
}
