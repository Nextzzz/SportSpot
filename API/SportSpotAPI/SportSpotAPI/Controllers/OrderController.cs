using CORE.Entities;
using CORE.Models;
using DAL.Abstractions;
using DAL.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace SportSpotAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IGenericRepository<Order> _orderRepository;
        public OrderController(IGenericRepository<Order> orderRepository)
        {
            _orderRepository = orderRepository;
        }

        //[HttpGet]
        //public IActionResult GetAll()
        //{
        //    var orderResponse = _orderRepository.GetAll();
        //    return Ok(orderResponse.Data);
        //}

        [HttpPost]
        public IActionResult Create([FromBody]CreateOrderModel orderModel) 
        {
            var order = new Order() { Client = new UserIdentity { Id = orderModel.ClientId }, Discount = orderModel.Discount, DateTime = DateTime.Now };
            orderModel.OrderItems.ForEach((oi) => 
            { 
                order.OrderItems.Add(new OrderItem() { Product = new Product() { Id = oi.ProductId }, Quantity = oi.Quantity });
            });

            var orderResponse = _orderRepository.Add(order);
            return Ok(orderResponse);
        }
    }
}
