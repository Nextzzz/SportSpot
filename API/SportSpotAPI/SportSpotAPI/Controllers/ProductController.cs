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
        private readonly IUserWishListRepository _userWishListRepository;
        public ProductController(IGenericRepository<Product> productRepository, IUserWishListRepository userWishListRepository)
        {
            _productRepository = productRepository;
            _userWishListRepository = userWishListRepository;
        }

        [HttpGet]
        [Route("{userId:int}")]
        public IActionResult GetAll(int userId) 
        {
            var productResponse = _productRepository.GetAll(userId);
            return Ok(productResponse.Data);
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

        [HttpPost("{userId:int}/{productId:int}")]
        public IActionResult SetFavourite(int userId, int productId)
        {
            var productResponse = _userWishListRepository.Add(new UserWishListItem() { ProductId = productId, UserId = userId });
            return Ok(productResponse.Data);
        }

        [HttpPost("{userId:int}/{productId:int}")]
        public IActionResult DeleteFavourite(int userId, int productId)
        {
            var productResponse = _userWishListRepository.Delete(userId, productId);
            return Ok(productResponse.Data);
        }
    }
}
