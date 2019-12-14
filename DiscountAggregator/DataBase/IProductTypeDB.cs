using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductType = DiscountAggregator.AbstractTypes.ProductType;

namespace DiscountAggregator.DataBase
{
    public interface IProductTypeDB
    {
        IEnumerable<ProductType> Get();
        ProductType Get(ObjectId id);
        IEnumerable<ProductType> GetFromVariety(ObjectId varietyId);
        void Add(ProductType newProductType);
        void Update(ObjectId id, ProductType updatedProductType);
        void Remove(ProductType removableProductType);
        void Remove(ObjectId id);
        void Clear();
    }
}
