using MongoDB.Bson;
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
        ProductVariety Get(ObjectId id);
        IEnumerable<ProductVariety> GetFromName(string name);
        void Add(ProductVariety newStore);
        void Update(ObjectId id, ProductVariety updatedVariety);
        void Remove(ProductVariety removableVariety);
        void Remove(ObjectId id);
        void Clear();
    }
}
