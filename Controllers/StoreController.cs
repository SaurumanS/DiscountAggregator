using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Store = DiscountAggregator.AbstractTypes.Store;

namespace DiscountAggregator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly IStoreDB _storeDB;

        public StoreController (IStoreDB storeDB)
        {
            _storeDB = storeDB;
        }

        
            
        //IStoreDB storeDB = new IStoreDB();

        private readonly ILogger<StoreController> _logger;
        public StoreController(ILogger<StoreController> logger)
        {
            _logger = logger;
        }


        // GET: api/Store
        [HttpGet]
        public ActionResult<List<Store>> Get() =>
            _storeDB.Get();
        

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

        // POST: api/Store
        [HttpPost]
        public ActionResult<Store> Create(Store store)
        {
            _storeDB.Create(store);
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
