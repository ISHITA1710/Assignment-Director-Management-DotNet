using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public interface IBusinessRepository
    {
        IEnumerable<Business> GetAllBusinesses();
        Business GetBusinessById(int id);
        void AddBusiness(Business business);
        void UpdateBusiness(Business business);
        void DeleteBusiness(int id);
    }
}
