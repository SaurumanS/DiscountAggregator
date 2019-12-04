using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Store = DiscountAggregator.AbstractTypes.Store;
using StoreDB = DiscountAggregator.DataBase.StoreDB;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly StoreDB _storeDB;

        public StoreController (StoreDB storeDB)
        {
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
            var store = _storeDB.Get(id);

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
        public ActionResult<Store> Create(Store store)
        {
            _storeDB.Add(store);
            return CreatedAtRoute("GetStore", new { id = store.Id.ToString() }, store);
        }

        // PUT: api/Store/5
        [HttpPut("{id}")]
        public IActionResult Update (string id, Store storeIn)
        {
            var store = _storeDB.Get(id);

            if (store == null)
            {
                return NotFound();
            }
            _storeDB.Update(id, storeIn);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var store = _storeDB.Get(id);

            if(store == null)
            {
                return NotFound();
            }

            _storeDB.Remove(store.Id);

            return NoContent();
        }
    }
}
