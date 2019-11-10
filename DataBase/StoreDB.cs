using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiscountAggregator.AbstractTypes;
using MongoDB.Driver;
using Store = DiscountAggregator.AbstractTypes.Store;
using IDBSetting = DiscountAggregator.DataBase.DataBaseApi.IDBSetting;

namespace DiscountAggregator.DataBase
{
    public class StoreDB : IStoreDB
    {
        private readonly IMongoCollection<Store> _stores;
        
        public StoreDB(IDBSetting settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _stores = database.GetCollection<Store>(settings.CollectionName);
        }
        public void Add(Store newStore)
        {
            _stores.InsertOne(newStore);
        }

        public List<Store> Get()
        {
           return _stores.Find(store => true).ToList();
        }

        public Store Get(string id)
        {
            return _stores.Find<Store>(store => store.Id == id).FirstOrDefault();
        }

        public void Remove(Store removableStore)
        {
            _stores.DeleteOne(store => removableStore.Id == store.Id);
        }

        public void Remove(string id)
        {
            _stores.DeleteOne(store => store.Id == id);
        }

        public void Update(string id, Store updatedStore)
        {
            _stores.DeleteOne(store => store.Id == id);
        }
    }
}
