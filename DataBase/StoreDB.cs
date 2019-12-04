using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiscountAggregator.AbstractTypes;
using MongoDB.Driver;
using Store = DiscountAggregator.AbstractTypes.Store;
using IStoreDBSetting = DiscountAggregator.DataBase.DataBaseApi.IStoreDBSetting;

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
            throw new NotImplementedException();
        }

        public IEnumerable<Store> Get()
        {
           return _stores.Find(store => true).ToList();
        }

        public Store Get(string id)
        {
            return _stores.Find<Store>(store => store.Id == id).FirstOrDefault();
        }

        public IEnumerable<Store> GetFromName(string name)
        {
            return _stores.Find(Product => Product.Name == name).ToEnumerable();
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
