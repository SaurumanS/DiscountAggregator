using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductType = DiscountAggregator.AbstractTypes.ProductType;

namespace DiscountAggregator.DataBase
{
    interface IProductTypeDB
    {
        IEnumerable<ProductType> Get();
        ProductType Get(string id);
        IEnumerable<ProductType> GetFromVariety(string varietyId);
        void Add(ProductType newProductType);
        void Update(string id, ProductType updatedProductType);
        void Remove(ProductType removableProductType);
        void Remove(string id);
        void Clear();
    }
}
