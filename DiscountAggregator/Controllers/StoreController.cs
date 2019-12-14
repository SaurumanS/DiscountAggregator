using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DiscountAggregator.AbstractTypes.Converters; //extension method : ToObjectId
using Store = DiscountAggregator.AbstractTypes.Store;
using StoreValidation = DiscountAggregator.AbstractTypes.Validation.StoreValidation;
using StoreDB = DiscountAggregator.DataBase.StoreDB;
using MongoDB.Bson;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly StoreDB _storeDB;
        private Func<string, bool> IdIsValid;

        public StoreController (StoreDB storeDB)
        {
            IdIsValid = DiscountAggregator.AbstractTypes.Validation.IdValidation.IsValid;
            _storeDB = storeDB;
        }

        

        // GET: api/Store
        [HttpGet]
        public ActionResult<IEnumerable<Store>> Get() =>
            _storeDB.Get().ToList();
        

        // GET: api/Store/5
        [HttpGet("{id}", Name = "GetStore")]
        public ActionResult<Store> Get(string id)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();

            var store = _storeDB.Get(objectId);

            if(store == null)
            {
                return NotFound();
            }
            return store;
        }
        [HttpGet("GetFromName/{name}")]
        public ActionResult<IEnumerable<Store>> GetFromName(string name)
        {
            var store = _storeDB.GetFromName(name).ToList();

            if (store == null || store.Count == 0)
            {
                return NotFound();
            }
            return store;
        }

        // POST: api/Store
        [HttpPost]
        public ActionResult<StoreValidation> Create(StoreValidation store)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _storeDB.Add((Store)store);
            return Ok();
        }

        // PUT: api/Store/5
        [HttpPut("{id}")]
        public IActionResult Update (string id, Store storeIn)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();

            var store = _storeDB.Get(objectId);

            if (store == null)
            {
                return NotFound();
            }
            _storeDB.Update(objectId, storeIn);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            if (!IdIsValid(id))
                return BadRequest("Id is incorrect");
            ObjectId objectId = id.ToObjectId();

            var store = _storeDB.Get(objectId);

            if(store == null)
            {
                return NotFound();
            }

            _storeDB.Remove(store);

            return NoContent();
        }

        //DELETE: api/Store/DeleteAll
        [HttpDelete("DeleteAll")]
        public IActionResult DeleteAll()
        {
            _storeDB.Clear();
            return NoContent();
        }
    }
}
