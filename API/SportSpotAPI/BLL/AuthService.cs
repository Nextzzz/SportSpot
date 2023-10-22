using BLL.Abstractions;
using CORE.Models;
using CORE.NewFolder;
using DAL.Abstractions;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace BLL
{
    public class AuthService : IAuthService
    {
        private readonly IUserIdentityRepository<UserIdentity> _userIdentityRepository;

        public AuthService(IUserIdentityRepository<UserIdentity> userIdentityRepository)
        {
            _userIdentityRepository = userIdentityRepository;
        }

        public UserModel? LoginUser(string email, string password)
        {
            var response = _userIdentityRepository.GetByEmail(email);
            UserIdentity? userIdentity = response.Data;

            if (userIdentity == null || password != userIdentity.Password)
            {
                return null;
            }

            var userModel = new UserModel(userIdentity.Email ?? "", userIdentity.Password, userIdentity.IsAdmin);

            if (userIdentity.IsEmailVerified) 
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = new SymmetricSecurityKey(
                        Encoding.UTF8
                        .GetBytes("superSecretKey@123"));

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Email, userIdentity.Email ?? ""),
                    new Claim(ClaimTypes.Role, userIdentity.IsAdmin.ToString())
                    }),
                    IssuedAt = DateTime.UtcNow,
                    Issuer = "https://localhost:7274",
                    Audience = "https://localhost:7274",
                    Expires = DateTime.UtcNow.AddMinutes(30),
                    SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature),
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                userModel.Token = tokenHandler.WriteToken(token);
            }

            return userModel;
        }

        public void RegisterUser(RegisterUser user)
        {

            var userIdentity = new UserIdentity()
            {
                Email = user.Email,
                Password = user.Password,
                IsAdmin = user.IsAdmin,
                IsEmailVerified = user.IsAdmin
            };

            _userIdentityRepository.Add(userIdentity);
        }
    }
}
