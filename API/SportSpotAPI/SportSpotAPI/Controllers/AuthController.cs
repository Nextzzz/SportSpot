using BLL.Abstractions;
using CORE.Models;
using Microsoft.AspNetCore.Mvc;

namespace SportSpotAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        // POST: auth/login
        [HttpPost]
        public IActionResult Login([FromBody] LoginUser loginUser)
        {
            if (String.IsNullOrEmpty(loginUser.Email))
            {
                return BadRequest(new { message = "Email address needs to entered" });
            }
            else if (String.IsNullOrEmpty(loginUser.Password))
            {
                return BadRequest(new { message = "Password needs to entered" });
            }

            UserModel? loggedInUser = _authService.LoginUser(loginUser.Email, loginUser.Password);


            if (loggedInUser != null)
            {
                return Ok(loggedInUser);
            }

            return BadRequest(new { message = "User login unsuccessful" });
        }

        

        // POST: auth/register
        [HttpPost]
        public IActionResult Register([FromBody] RegisterUser user)
        {
            if (String.IsNullOrEmpty(user.Email))
            {
                return BadRequest(new { message = "Name needs to entered" });
            }
            else if (String.IsNullOrEmpty(user.Password))
            {
                return BadRequest(new { message = "Password needs to entered" });
            }

            _authService.RegisterUser(user);

            try
            {
                UserModel? loggedInUser = _authService.LoginUser(user.Email, user.Password);
                if (loggedInUser != null)
                {
                    return Ok(loggedInUser);
                }
            }
            catch(Exception ex) 
            {
                return BadRequest(new { message = ex.Message });
            }

            return BadRequest(new { message = "User registration unsuccessful" });
        }

        // PUT: auth/activate/id:int
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult Activate(int id)
        {
            if (id <= 0)
            {
                return BadRequest(new { message = "Wrong id" });
            }

            var status = _authService.ActivateUser(id);

            return Ok(new { status });
        }
    }
}
