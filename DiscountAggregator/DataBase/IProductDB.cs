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
        Product Get(string id);
        IEnumerable<Product> GetFromName(string name);
        void Add(Product newStore);
        void Update(string id, Product updatedProduct);
        void Remove(Product removableProduct);
        void Remove(string id);
        void Clear();
    }
}
