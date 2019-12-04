using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiscountAggregator.AbstractTypes;
using MongoDB.Driver;
using IProductTypeDBSetting = DiscountAggregator.DataBase.DataBaseApi.IProductTypeDBSetting;

namespace DiscountAggregator.DataBase
{
    public class ProductTypeDB : AbstractDB, IProductTypeDB
    {
        private readonly IMongoCollection<ProductVariety> _productVarieties;

        public ProductTypeDB(IProductTypeDBSetting settings) : base(settings)
        {
            _productVarieties = Database.GetCollection<ProductVariety>(settings.CollectionName);
        }
        public void Add(ProductType newProductType)
        {
            throw new NotImplementedException();
        }

        public void Clear()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ProductType> Get()
        {
            throw new NotImplementedException();
        }

        public ProductType Get(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ProductType> GetFromVariety(string varietyId)
        {
            throw new NotImplementedException();
        }

        public void Remove(ProductType removableProductType)
        {
            throw new NotImplementedException();
        }

        public void Remove(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(string id, ProductType updatedProductType)
        {
            throw new NotImplementedException();
        }
    }
}
