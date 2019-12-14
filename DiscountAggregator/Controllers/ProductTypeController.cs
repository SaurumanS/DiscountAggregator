using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DiscountAggregator.AbstractTypes.Converters; //extension method : ToObjectId
using ProductType = DiscountAggregator.AbstractTypes.ProductType;
using ProductTypeValidation = DiscountAggregator.AbstractTypes.Validation.ProductTypeValidation;
using ProductTypeDB = DiscountAggregator.DataBase.ProductTypeDB;
using MongoDB.Bson;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        private readonly ProductTypeDB _ProductTypeDB;
        private Func<string, bool> IdIsValid;

        public ProductTypeController(ProductTypeDB ProductTypeDB)
        {
            IdIsValid = DiscountAggregator.AbstractTypes.Validation.IdValidation.IsValid;
            _ProductTypeDB = ProductTypeDB;
        }



        // GET: api/ProductType
        [HttpGet]
        public ActionResult<IEnumerable<ProductType>> Get() =>
            _ProductTypeDB.Get().ToList();


        // GET: api/ProductType/5
        [HttpGet("{id}", Name = "GetProductType")]
        public ActionResult<ProductType> Get(string id)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();
            var productType = _ProductTypeDB.Get(objectId);

            if (productType == null)
            {
                return NotFound();
            }
            return productType;
        }
        [HttpGet("GetFromId/{varietyId}")]
        public ActionResult<IEnumerable<ProductType>> GetFromId(string varietyId)
        {
            if (!IdIsValid(varietyId))
                return BadRequest("Id is incorrect");
            ObjectId objectId = varietyId.ToObjectId();
            var productType = _ProductTypeDB.GetFromVariety(ObjectId.Parse(varietyId)).ToList();

            if (productType == null || productType.Count == 0)
            {
                return NotFound();
            }
            return productType;
        }

        // POST: api/ProductType
        [HttpPost]
        public ActionResult<ProductTypeValidation> Create(ProductTypeValidation productType)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _ProductTypeDB.Add((ProductType) productType);
            return Ok();
        }

        // PUT: api/ProductType/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, ProductType ProductTypeIn)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();
            var ProductType = _ProductTypeDB.Get(objectId);

            if (ProductType == null)
            {
                return NotFound();
            }
            _ProductTypeDB.Update(objectId, ProductTypeIn);

            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();

            var ProductType = _ProductTypeDB.Get(objectId);

            if (ProductType == null)
            {
                return NotFound();
            }

            _ProductTypeDB.Remove(ProductType);

            return Ok();
        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            _ProductTypeDB.Clear();
            return NoContent();
        }
    }
}
