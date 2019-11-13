using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Product = DiscountAggregator.AbstractTypes.Product;
using IProductDB = DiscountAggregator.DataBase.IProductDB;


namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductDB _productDB;

        public ProductController(IProductDB productDB)
        {
            _productDB = productDB;
        }

        private readonly ILogger<ProductController> _logger;
        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }




        // GET: api/Product
        [HttpGet]
        public ActionResult<List<Product>> Get() =>
            _productDB.Get();


        // GET: api/Product/5
        [HttpGet("{id}", Name = "GetProduct")]
        public ActionResult<Product> Get(string id)
        {
            var product = _productDB.Get(id);

            if (product == null)
            {
                return NotFound();
            }
            return product;
        }

        // POST: api/Product
        [HttpPost]
        public ActionResult<Product> Create(Product product)
        {
            _productDB.Add(product);
            return CreatedAtRoute("GetProduct", new { id = product.Id.ToString() }, product);
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, Product productIn)
        {
            var product = _productDB.Get(id);

            if (product == null)
            {
                return NotFound();
            }
            _productDB.Update(id, productIn);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var product = _productDB.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            _productDB.Remove(product.Id);

            return NoContent();
        }
    }
}
