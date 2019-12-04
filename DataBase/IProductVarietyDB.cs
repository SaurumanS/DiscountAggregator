using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductVariety = DiscountAggregator.AbstractTypes.ProductVariety;

namespace DiscountAggregator.DataBase
{
    public interface IProductVarietyDB
    {
        IEnumerable<ProductVariety> Get();
        ProductVariety Get(string id);
        IEnumerable<ProductVariety> GetFromName(string name);
        void Add(ProductVariety newStore);
        void Update(string id, ProductVariety updatedVariety);
        void Remove(ProductVariety removableVariety);
        void Remove(string id);
        void Clear();
    }
}
