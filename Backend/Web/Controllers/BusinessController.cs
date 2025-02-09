using BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;
using Models;
using System.Collections.Generic;

namespace Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BusinessController : ControllerBase
    {
        private readonly IBusinessService _businessService;

        public BusinessController(IBusinessService businessService)
        {
            _businessService = businessService;
        }

        // Get all businesses
        [HttpGet]
        public ActionResult<IEnumerable<Business>> GetBusinesses()
        {
            var businesses = _businessService.GetAllBusinesses();
            return Ok(businesses);
        }

        // Get business by ID
        [HttpGet("{id}")]
        public ActionResult<Business> GetBusinessById(int id)
        {
            var business = _businessService.GetBusinessById(id);
            if (business == null)
                return NotFound();

            return Ok(business);
        }

        // Add a new business
        [HttpPost]
        public ActionResult AddBusiness([FromBody] Business business)
        {
            if (business == null)
                return BadRequest("Invalid business data.");

            _businessService.AddBusiness(business);
            return CreatedAtAction(nameof(GetBusinessById), new { id = business.BusinessID }, business);
        }

        // Update an existing business
        [HttpPut("{id}")]
        public ActionResult UpdateBusiness(int id, [FromBody] Business business)
        {
            if (id != business.BusinessID)
                return BadRequest("Mismatched business ID.");

            _businessService.UpdateBusiness(business);
            return NoContent();
        }

        // Delete a business
        [HttpDelete("{id}")]
        public ActionResult DeleteBusiness(int id)
        {
            _businessService.DeleteBusiness(id);
            return NoContent();
        }
    }
}
