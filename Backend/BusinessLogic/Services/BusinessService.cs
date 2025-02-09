using DataAccess.Repositories;
using Models;
using System;
using System.Collections.Generic;

namespace BusinessLogic.Services
{
    public class BusinessService : IBusinessService
    {
        private readonly IBusinessRepository _businessRepository;

        public BusinessService(IBusinessRepository businessRepository)
        {
            _businessRepository = businessRepository;
        }

        public IEnumerable<Business> GetAllBusinesses()
        {
            return _businessRepository.GetAllBusinesses();
        }

        public Business GetBusinessById(int id)
        {
            var business = _businessRepository.GetBusinessById(id);
            if (business == null)
            {
                throw new KeyNotFoundException("Business not found.");
            }
            return business;
        }

        public void AddBusiness(Business business)
        {
            if (string.IsNullOrEmpty(business.Name))
            {
                throw new ArgumentException("Business name is required.");
            }
            business.CreatedAt = DateTime.Now;
            business.UpdatedAt = DateTime.Now;
            _businessRepository.AddBusiness(business);
        }

        public void UpdateBusiness(Business business)
        {
            var existingBusiness = _businessRepository.GetBusinessById(business.BusinessID);
            if (existingBusiness == null)
            {
                throw new KeyNotFoundException("Business not found.");
            }

            business.UpdatedAt = DateTime.Now;
            _businessRepository.UpdateBusiness(business);
        }

        public void DeleteBusiness(int id)
        {
            var existingBusiness = _businessRepository.GetBusinessById(id);
            if (existingBusiness == null)
            {
                throw new KeyNotFoundException("Business not found.");
            }

            _businessRepository.DeleteBusiness(id);
        }
    }
}
