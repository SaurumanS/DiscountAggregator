using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Store = DiscountAggregator.AbstractTypes.Store;

namespace DiscountAggregator.DataBase
{
    public interface IStoreDB
    {
        List<Store> Get();
        Store Get(string id);
        void Add(Store newStore);
        void Update(string id, Store updatedStore);
        void Remove(Store removableStore);
        void Remove(string id);
    }
}
