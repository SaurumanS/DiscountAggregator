using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductType = DiscountAggregator.AbstractTypes.ProductType;
using ProductTypeDB = DiscountAggregator.DataBase.ProductTypeDB;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        private readonly ProductTypeDB _ProductTypeDB;

        public ProductTypeController(ProductTypeDB ProductTypeDB)
        {
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
            var productType = _ProductTypeDB.Get(id);

            if (productType == null)
            {
                return NotFound();
            }
            return productType;
        }
        [HttpGet("GetFromName/{varietyId}")]
        public ActionResult<IEnumerable<ProductType>> GetFromName(string varietyId)
        {
            var productType = _ProductTypeDB.GetFromVariety(varietyId).ToList();

            if (productType == null || productType.Count == 0)
            {
                return NotFound();
            }
            return productType;
        }

        // POST: api/ProductType
        [HttpPost]
        public ActionResult<ProductType> Create(ProductType ProductType)
        {
            _ProductTypeDB.Add(ProductType);
            return CreatedAtRoute("GetProductType", new { id = ProductType.Id.ToString() }, ProductType);
        }

        // PUT: api/ProductType/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, ProductType ProductTypeIn)
        {
            var ProductType = _ProductTypeDB.Get(id);

            if (ProductType == null)
            {
                return NotFound();
            }
            _ProductTypeDB.Update(id, ProductTypeIn);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var ProductType = _ProductTypeDB.Get(id);

            if (ProductType == null)
            {
                return NotFound();
            }

            _ProductTypeDB.Remove(ProductType.Id);

            return NoContent();
        }
    }
}
