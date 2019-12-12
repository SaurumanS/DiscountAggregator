﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Product = DiscountAggregator.AbstractTypes.Product;
using ProductValidation = DiscountAggregator.AbstractTypes.Validation.ProductValidation;
using ProductDB = DiscountAggregator.DataBase.ProductDB;


namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductDB _productDB;

        public ProductController(ProductDB productDB)
        {
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
            var product = _productDB.Get(id);

            if (product == null)
            {
                return NotFound();
            }
            return product;
        }
        [HttpGet("GetFromName/{name}")]
        public ActionResult<IEnumerable<Product>> GetFromName(string name)
        {
            var product = _productDB.GetFromName(name).ToList();

            if (product == null || product.Count==0)
            {
                return NotFound();
            }
            return product;
        }

        // POST: api/Product
        [HttpPost]
        public ActionResult<Product> Create(ProductValidation product)
        {
            var results = new List<ValidationResult>();
            var context = new ValidationContext(product);
            if (!Validator.TryValidateObject(product, context, results, true))
            {
                foreach (var error in results)
                {
                    Console.WriteLine(error.ErrorMessage);
                }
            }
            else
            {
                Console.WriteLine("Пользователь прошел валидацию");
            }
            //_productDB.Add(product);
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
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            _productDB.Clear();
            return NoContent();
        }
    }
}
