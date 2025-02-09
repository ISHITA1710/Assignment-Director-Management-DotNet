using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YourNamespace.DataAccess;

namespace DataAccess.Repositories
{
    public class BusinessRepository : IBusinessRepository
    {
        private readonly AppDbContext _context;

        public BusinessRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Business> GetAllBusinesses()
        {
            return _context.Businesses;
        }

        public Business GetBusinessById(int id)
        {
            return _context.Businesses.Find(id);
        }

        public void AddBusiness(Business business)
        {
            _context.Businesses.Add(business);
            _context.SaveChanges();
        }

        public void UpdateBusiness(Business business)
        {
            _context.Businesses.Update(business);
            _context.SaveChanges();
        }

        public void DeleteBusiness(int id)
        {
            var business = _context.Businesses.Find(id);
            if (business != null)
            {
                _context.Businesses.Remove(business);
                _context.SaveChanges();
            }
        }

    }
}
