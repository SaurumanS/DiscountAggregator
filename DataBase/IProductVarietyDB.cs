using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductVariety = DiscountAggregator.AbstractTypes.ProductVariety;

namespace DiscountAggregator.DataBase
{
    interface IProductVarietyDB
    {
        List<ProductVariety> Get();
        ProductVariety Get(string id);
        void Add(ProductVariety newStore);
        void Update(string id, ProductVariety updatedVariety);
        void Remove(ProductVariety removableVariety);
        void Remove(string id);
    }
}
