CREATE TABLE [User] (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(255) NULL,
	LastName NVARCHAR(255) NULL,
    PhoneNumber NVARCHAR(255) NULL,
	[Address] NVARCHAR(1000) NULL
);

CREATE TABLE UserIdentity (
    Id INT PRIMARY KEY,
	[Password] NVARCHAR(255) NOT NULL,
    Email NVARCHAR(255) NULL,
	IsEmailVerified bit NOT NULL,
	IsAdmin bit NOT NULL,
    FOREIGN KEY (Id) REFERENCES [User](Id)
);

CREATE TABLE [Product] (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    [Name] NVARCHAR(255) NULL,
	[Description] NVARCHAR(MAX) NULL,
	PhotoUrl NVARCHAR(MAX) NULL,
    Price DECIMAL NULL,
	Rating INT NULL
);

