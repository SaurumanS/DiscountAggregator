using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Product = DiscountAggregator.AbstractTypes.Product;

namespace DiscountAggregator.DataBase
{
    public interface IProductDB
    {
        List<Product> Get();
        Product Get(string id);
        void Add(Product newStore);
        void Update(string id, Product updatedProduct);
        void Remove(Product removableProduct);
        void Remove(string id);
        void Clear();
    }
}
