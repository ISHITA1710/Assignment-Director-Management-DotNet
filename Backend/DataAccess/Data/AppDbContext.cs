using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;

namespace YourNamespace.DataAccess
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Business> Businesses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed Categories
            modelBuilder.Entity<Category>().HasData(
                new Category { CategoryID = 1, Name = "Restaurant" },
                new Category { CategoryID = 2, Name = "Retail" },
                new Category { CategoryID = 3, Name = "Health & Wellness" },
                new Category { CategoryID = 4, Name = "Education" },
                new Category { CategoryID = 5, Name = "Technology" }
            );

            // Seed Businesses
            modelBuilder.Entity<Business>().HasData(
                new Business
                {
                    BusinessID = 1,
                    Name = "Tasty Bites",
                    Address = "123 Main Street",
                    City = "Mumbai",
                    State = "Maharashtra",
                    ZipCode = "400001",
                    PhoneNumber = "9876543210",
                    Category = "Restaurant",
                    Website = "https://tastybites.com",
                    Rating = 4.5M,
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                },
                new Business
                {
                    BusinessID = 2,
                    Name = "Tech Solutions",
                    Address = "456 IT Park",
                    City = "Bangalore",
                    State = "Karnataka",
                    ZipCode = "560001",
                    PhoneNumber = "9123456789",
                    Category = "Technology",
                    Website = "https://techsolutions.com",
                    Rating = 4.8M,
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                }
            );
        }
    }
}
