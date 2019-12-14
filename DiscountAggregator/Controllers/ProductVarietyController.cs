using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DiscountAggregator.AbstractTypes.Converters; //extension method : ToObjectId
using ProductVariety = DiscountAggregator.AbstractTypes.ProductVariety;
using ProductVarietyValidation = DiscountAggregator.AbstractTypes.Validation.ProductVarietyValidation;
using ProductVarietyDB = DiscountAggregator.DataBase.ProductVarietyDB;
using MongoDB.Bson;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductVarietyController : ControllerBase
    {

        private readonly ProductVarietyDB _productvarietyDB;
        private Func<string, bool> IdIsValid;

        public ProductVarietyController(ProductVarietyDB productvarietyDB)
        {
            IdIsValid = DiscountAggregator.AbstractTypes.Validation.IdValidation.IsValid;
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
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();
            var productvariety = _productvarietyDB.Get(objectId);

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
        public ActionResult<ProductVarietyValidation> Create(ProductVarietyValidation productVariety)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _productvarietyDB.Add((ProductVariety) productVariety);
            return Ok();
        }

        // PUT: api/ProductVariety/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, ProductVariety productvarietyIn)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();
            var productvariety = _productvarietyDB.Get(objectId);

            if (productvariety == null)
            {
                return NotFound();
            }
            _productvarietyDB.Update(objectId, productvarietyIn);

            return NoContent();
        }

        // DELETE: api/ProductVariety/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();
            var productvariety = _productvarietyDB.Get(objectId);

            if (productvariety == null)
            {
                return NotFound();
            }

            _productvarietyDB.Remove(productvariety);

            return NoContent();
        }

        // DELETE: api/DeleteAll
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            _productvarietyDB.Clear();
            return NoContent();
        }
    }
}
