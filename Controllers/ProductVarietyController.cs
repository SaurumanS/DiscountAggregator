using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductVariety = DiscountAggregator.AbstractTypes.ProductVariety;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductVarietyController : ControllerBase
    {

        private readonly IProductVarietyDB _productvarietyDB;

        public ProductVarietyController(IProductVarietyDB productvarietyDB)
        {
            _productvarietyDB = productvarietyDB;
        }

        private readonly ILogger<ProductVarietyController> _logger;
        public ProductVarietyController(ILogger<ProductVarietyController> logger)
        {
            _logger = logger;
        }


        // GET: api/ProductVariety
        [HttpGet]
        public ActionResult<List<ProductVariety>> Get() =>
            _productvarietyDB.Get();

        // GET: api/ProductVariety/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<ProductVariety> Get(string id)
        {
            var productvariety = _productvarietyDB.Get(id);

            if (productvariety == null)
            {
                return NotFound();
            }
            return productvariety;
        }

        // POST: api/ProductVariety
        [HttpPost]
        public ActionResult<ProductVariety> Create(ProductVariety productvariety)
        {
            _productvarietyDB.Create(productvariety);
            return CreatedAtRoute("GetProductVariety", new { id = productvariety.Id.ToString() }, productvariety);
        }

        // PUT: api/ProductVariety/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, ProductVariety productvarietyIn)
        {
            var productvariety = _productvarietyDB.Get(id);

            if (productvariety == null)
            {
                return NotFound();
            }
            _productvarietyDB.Update(id, productvarietyIn);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var productvariety = _productvarietyDB.Get(id);

            if (productvariety == null)
            {
                return NotFound();
            }

            _productvarietyDB.Remove(productvariety.Id);

            return NoContent();
        }
    }
}
