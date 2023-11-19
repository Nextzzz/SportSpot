using CORE.Entities;
using CORE.Response;
using DAL.Abstractions;
using System.Data.SqlClient;

namespace DAL.Repositories
{
    public class OrderRepository : IGenericRepository<Order>
    {
        private readonly string? _connectingString;

        public OrderRepository(string? connectingString)
        {
            _connectingString = connectingString;
        }

        public Response<Order> Add(Order entity)
        {
            Response<Order> response = new Response<Order>();
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"INSERT INTO [Order] ([Discount], [DateTime], ClientId) VALUES({entity.Discount.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture)}, '{DateTime.Now:yyyy-MM-dd HH:mm:ss}', {entity.Client.Id})", connection);
                    command.ExecuteNonQuery();

                    command = new SqlCommand($"SELECT TOP 1 * FROM [Order] ORDER BY [Id] DESC ", connection);
                    var reader = command.ExecuteReader();

                    reader.Read();
                    int orderId = reader.GetInt32(0);
                    reader.Close();

                    foreach(var orderItem in entity.OrderItems)
                    {
                        command = new SqlCommand($"INSERT INTO OrderItem (Quantity, ProductId, OrderId) VALUES({orderItem.Quantity.ToString("0.00", System.Globalization.CultureInfo.InvariantCulture)}, {orderItem.Product.Id}, {orderId})", connection);
                        command.ExecuteNonQuery();
                    }

                    response.Message = "Order successfully added";
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

        public Response<Order> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Response<Order> Get(int id)
        {
            throw new NotImplementedException();
        }

        public Response<List<Order>> GetAll()
        {
            return null;

            //Response<List<Order>> response = new Response<List<Order>>() { Data = new List<Order>() };
            //using (var connection = new SqlConnection(_connectingString))
            //{
            //    try
            //    {
            //        connection.Open();

            //        var command = new SqlCommand($"SELECT * FROM [Product]", connection);
            //        var reader = command.ExecuteReader();

            //        while (reader.Read())
            //        {
            //            Product product = new Product()
            //            {
            //                Id = reader.GetInt32(0),
            //                Price = reader.GetDecimal(4),
            //            };

            //            try
            //            {
            //                product.Rating = reader.GetInt32(5);
            //            }
            //            catch
            //            {
            //                product.Rating = 0;
            //            }

            //            try
            //            {
            //                product.Name = reader.GetString(1);
            //            }
            //            catch
            //            {
            //                product.Name = null;
            //            }

            //            try
            //            {
            //                product.Description = reader.GetString(2);
            //            }
            //            catch
            //            {
            //                product.Description = null;
            //            }

            //            try
            //            {
            //                product.PhotoUrl = reader.GetString(3);
            //            }
            //            catch
            //            {
            //                product.PhotoUrl = null;
            //            }

            //            response.Data.Add(product);
            //        }

            //        if (response.Data.Count == 0)
            //        {
            //            response.Message = "There are no records in the database!";
            //        }
            //        else
            //        {
            //            response.Message = "Products successfully found";
            //        }

            //        response.Status = true;

            //        return response;
            //    }
            //    catch
            //    {
            //        response.Message = "Error when finding products!";
            //        response.Status = false;

            //        return response;
            //    }
            //    finally
            //    {
            //        connection.Close();
            //    }
            //}
        }

        public Response<List<Order>> GetAll(int userId)
        {
            throw new NotImplementedException();
        }

        public Response<Order> Update(Order entity)
        {
            throw new NotImplementedException();
        }
    }
}
