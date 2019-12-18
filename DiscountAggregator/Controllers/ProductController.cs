using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DiscountAggregator.AbstractTypes.Converters; //extension method : ToObjectId
using Product = DiscountAggregator.AbstractTypes.Product;
using ProductValidation = DiscountAggregator.AbstractTypes.Validation.ProductValidation;
using ProductDB = DiscountAggregator.DataBase.ProductDB;
using MongoDB.Bson;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductDB _productDB;
        private Func<string, bool> IdIsValid;

        public ProductController(ProductDB productDB)
        {
            IdIsValid = DiscountAggregator.AbstractTypes.Validation.IdValidation.IsValid;
            _productDB = productDB;
        }


        // GET: api/Product
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return _productDB.Get().ToList();
        }


        // GET: api/Product/5
        [HttpGet("{id}", Name = "GetProduct")]
        public ActionResult<Product> Get(string id)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();

            var product = _productDB.Get(objectId);

            if (product == null)
            {
                return NotFound();
            }
            return product;
        }
        [HttpGet("GetFromName/{name}")]
        [DiscountAggregator.AbstractTypes.Validation.IdValidation(ErrorMessage ="Id is not correct. Check him")]
        public ActionResult<IEnumerable<Product>> GetFromName(string name)
        {

            var product = _productDB.GetFromName(name).ToList();

            if (product == null || product.Count==0)
            {
                return NotFound();
            }
            return product;
        }

        [HttpGet("GetFromVarietyID/{id}")]
        [DiscountAggregator.AbstractTypes.Validation.IdValidation(ErrorMessage = "Id is not correct. Check him")]
        public ActionResult<IEnumerable<Product>> GetFromVarietyID(string id)
        {
            ObjectId objectId = id.ToObjectId();

            var product = _productDB.GetFromVarietyID(objectId).ToList();

            if (product == null || product.Count == 0)
            {
                return NotFound();
            }
            return product;
        }

        [HttpGet("GetFromTypeID/{id}")]
        [DiscountAggregator.AbstractTypes.Validation.IdValidation(ErrorMessage = "Id is not correct. Check him")]
        public ActionResult<IEnumerable<Product>> GetFromTypeID(string id)
        {
            ObjectId objectId = id.ToObjectId();

            var product = _productDB.GetFromTypeID(objectId).ToList();

            if (product == null || product.Count == 0)
            {
                return NotFound();
            }
            return product;
        }

        // POST: api/Product
        [HttpPost]
        public ActionResult<ProductValidation> Create(ProductValidation product)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            _productDB.Add((Product) product);
            return Ok();
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, Product productIn)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();

            var product = _productDB.Get(objectId);

            if (product == null)
            {
                return NotFound();
            }
            _productDB.Update(objectId, productIn);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();

            var product = _productDB.Get(objectId);

            if (product == null)
            {
                return NotFound();
            }

            _productDB.Remove(product);

            return NoContent();
        }
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            _productDB.Clear();
            return NoContent();
        }
    }
}
