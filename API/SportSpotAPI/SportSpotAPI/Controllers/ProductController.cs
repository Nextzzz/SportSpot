using CORE.Entities;
using DAL.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace SportSpotAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productRepository;
        public ProductController(IGenericRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult GetAll() 
        {
            var productResponse = _productRepository.GetAll();
            return Ok(productResponse.Data);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult Get(int id)
        {
            var productResponse = _productRepository.Get(id);
            return Ok(productResponse.Data);
        }
    }
}
