using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiscountAggregator.AbstractTypes;
using MongoDB.Driver;
using Store = DiscountAggregator.AbstractTypes.Store;
using IStoreDBSetting = DiscountAggregator.DataBase.DataBaseApi.IStoreDBSetting;
using MongoDB.Bson;

namespace DiscountAggregator.DataBase
{
    public class StoreDB : AbstractDB, IStoreDB
    {
        private readonly IMongoCollection<Store> _stores;
        
        public StoreDB(IStoreDBSetting settings): base(settings)
        {
            _stores = Database.GetCollection<Store>(settings.CollectionName);
        }
        public void Add(Store newStore)
        {
            _stores.InsertOne(newStore);
        }

        public void Clear()
        {
            _stores.DeleteMany(Product => true);
        }

        public IEnumerable<Store> Get()
        {
           return _stores.Find(store => true).ToList();
        }

        public Store Get(ObjectId id)
        {
            return _stores.Find<Store>(store => ObjectId.Equals(id, store.Id)).FirstOrDefault();
        }

        public IEnumerable<Store> GetFromName(string name)
        {
            return _stores.Find(Product => Product.Name == name).ToEnumerable();
        }

        public void Remove(Store removableStore)
        {
            _stores.DeleteOne(store => ObjectId.Equals(removableStore.Id, store.Id));
        }

        public void Remove(ObjectId id)
        {
            _stores.DeleteOne(store => ObjectId.Equals(id, store.Id));
        }

        public void Update(ObjectId id, Store updatedStore)
        {
            _stores.DeleteOne(store => ObjectId.Equals(id, store.Id));
        }
    }
}
