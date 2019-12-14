using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Product = DiscountAggregator.AbstractTypes.Product;

namespace DiscountAggregator.DataBase
{
    public interface IProductDB
    {
        IEnumerable<Product> Get();
        Product Get(ObjectId id);
        IEnumerable<Product> GetFromName(string name);
        void Add(Product newStore);
        void Update(ObjectId id, Product updatedProduct);
        void Remove(Product removableProduct);
        void Remove(ObjectId id);
        void Clear();
    }
}
