using BLL;
using BLL.Abstractions;
using CORE.Entities;
using DAL.Abstractions;
using DAL.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

string? connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,

                    ValidIssuer = "https://localhost:7274",
                    ValidAudience = "https://localhost:7274",
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                    .GetBytes("superSecretKey@123"))
                };
            });

// Add services to the container.

builder.Services.AddTransient<IAuthService, AuthService>();
builder.Services.AddTransient<IUserIdentityRepository<UserIdentity>, UserIdentityRepository>(provider => new UserIdentityRepository(connectionString));
builder.Services.AddTransient<IGenericRepository<Product>, ProductRepository>(provider => new ProductRepository(connectionString));
builder.Services.AddTransient<IGenericRepository<User>, UserRepository>(provider => new UserRepository(connectionString));
builder.Services.AddTransient<IUserWishListRepository, UserWishListRepository>(provider => new UserWishListRepository(connectionString));


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "GasStationWebApi", Version = "v1" });
});

var app = builder.Build();

app.UseCors(polisy => polisy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
