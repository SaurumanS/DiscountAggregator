using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductVariety = DiscountAggregator.AbstractTypes.ProductVariety;
using ProductVarietyDB = DiscountAggregator.DataBase.ProductVarietyDB;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductVarietyController : ControllerBase
    {

        private readonly ProductVarietyDB _productvarietyDB;

        public ProductVarietyController(ProductVarietyDB productvarietyDB)
        {
            _productvarietyDB = productvarietyDB;
        }


        // GET: api/ProductVariety
        [HttpGet]
        public ActionResult<IEnumerable<ProductVariety>> Get() =>
            _productvarietyDB.Get().ToList();

        // GET: api/ProductVariety/5
        [HttpGet("{id}", Name = "GetProductVariety")]
        public ActionResult<ProductVariety> Get(string id)
        {
            var productvariety = _productvarietyDB.Get(id);

            if (productvariety == null)
            {
                return NotFound();
            }
            return productvariety;
        }
        [HttpGet("GetFromName/{name}")]
        public ActionResult<IEnumerable<ProductVariety>> GetFromName(string name)
        {
            var productvariety = _productvarietyDB.GetFromName(name).ToList();

            if (productvariety == null || productvariety.Count == 0)
            {
                return NotFound();
            }
            return productvariety;
        }

        // POST: api/ProductVariety
        [HttpPost]
        public ActionResult<ProductVariety> Create(ProductVariety productvariety)
        {
            _productvarietyDB.Add(productvariety);
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
