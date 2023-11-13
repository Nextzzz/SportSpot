using CORE.Entities;
using DAL.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace SportSpotAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IGenericRepository<User> _userRepository;
        public UserController(IGenericRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult Get(int id)
        {
            var userResponse = _userRepository.Get(id);
            return Ok(userResponse.Data);
        }

        [HttpPut]
        [Route("{id:int}")]
        public IActionResult Update([FromRoute] int id, [FromBody] User user)
        {
            var responce = _userRepository.Update(user);

            return Ok(responce);
        }
    }
}
