using CORE.Entities;
using CORE.Response;
using DAL.Abstractions;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class ProductRepository : IGenericRepository<Product>
    {
        private readonly string? _connectingString;

        public ProductRepository(string? connectingString)
        {
            _connectingString = connectingString;
        }

        public Response<Product> Add(Product entity)
        {
            throw new NotImplementedException();
        }

        public Response<Product> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Response<Product> Get(int id)
        {
            Response<Product> response = new Response<Product>();
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"SELECT * FROM [Product] WHERE Id = {id}", connection);

                    var reader = command.ExecuteReader();

                    Product product = new Product();

                    if (reader.Read())
                    {

                        product.Id = reader.GetInt32(0);

                        try
                        {
                            product.Name = reader.GetString(1);
                        }
                        catch 
                        {
                            product.Name = null;
                        }

                        try
                        {
                            product.Description = reader.GetString(2);
                        }
                        catch
                        {
                            product.Description = null;
                        }

                        try
                        {
                            product.PhotoUrl = reader.GetString(3);
                        }
                        catch
                        {
                            product.PhotoUrl = null;
                        }

                        product.Price = reader.GetDecimal(4);

                        try
                        {
                            product.Rating = reader.GetInt32(5);
                        }
                        catch
                        {
                            product.Rating = 0;
                        }

                        reader.Close();

                        response.Data = product;
                        response.Message = "Product is found";
                        response.Status = true;

                        return response;
                    }

                    else
                    {
                        response.Message = "This Product does not exist!";
                        response.Status = true;

                        return response;
                    }

                }
                catch
                {
                    response.Message = "Error finding Product!";
                    response.Status = false;

                    return response;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public Response<List<Product>> GetAll()
        {
            Response<List<Product>> response = new Response<List<Product>>() { Data = new List<Product>() };
            using (var connection = new SqlConnection(_connectingString))
            {
                try
                {
                    connection.Open();

                    var command = new SqlCommand($"SELECT * FROM [Product]", connection);
                    var reader = command.ExecuteReader();

                    while (reader.Read())
                    {
                        Product product = new Product()
                        {
                            Id = reader.GetInt32(0),
                            Price = reader.GetDecimal(4),
                        };

                        try
                        {
                            product.Rating = reader.GetInt32(5);
                        }
                        catch
                        {
                            product.Rating = 0;
                        }

                        try
                        {
                            product.Name = reader.GetString(1);
                        }
                        catch
                        {
                            product.Name = null;
                        }

                        try
                        {
                            product.Description = reader.GetString(2);
                        }
                        catch
                        {
                            product.Description = null;
                        }

                        try
                        {
                            product.PhotoUrl = reader.GetString(3);
                        }
                        catch
                        {
                            product.PhotoUrl = null;
                        }

                        response.Data.Add(product);
                    }

                    if (response.Data.Count == 0)
                    {
                        response.Message = "There are no records in the database!";
                    }
                    else
                    {
                        response.Message = "Products successfully found";
                    }

                    response.Status = true;

                    return response;
                }
                catch
                {
                    response.Message = "Error when finding products!";
                    response.Status = false;

                    return response;
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public Response<Product> Update(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}
