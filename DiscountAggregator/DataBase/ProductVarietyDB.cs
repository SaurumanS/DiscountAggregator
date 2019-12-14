using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductVariety = DiscountAggregator.AbstractTypes.ProductVariety;
using IProductVarietyDBSetting = DiscountAggregator.DataBase.DataBaseApi.IProductVarietyDBSetting;
using DiscountAggregator.AbstractTypes;
using MongoDB.Bson;

namespace DiscountAggregator.DataBase
{
    public class ProductVarietyDB : AbstractDB, IProductVarietyDB
    {
        private readonly IMongoCollection<ProductVariety> _productVarieties;

        public ProductVarietyDB(IProductVarietyDBSetting settings): base(settings)
        {
            _productVarieties = Database.GetCollection<ProductVariety>(settings.CollectionName);
        }
        public void Add(ProductVariety newProductVariety)
        {
            _productVarieties.InsertOne(newProductVariety);
        }

        public void Clear()
        {
            _productVarieties.DeleteMany(ProductVariety => true);
        }

        public IEnumerable<ProductVariety> Get()
        {
            return _productVarieties.Find(ProductVariety => true).ToList();
        }

        public ProductVariety Get(ObjectId id)
        {
            return _productVarieties.Find<ProductVariety>(ProductVariety => ObjectId.Equals(id, ProductVariety.Id)).FirstOrDefault();
        }

        public IEnumerable<ProductVariety> GetFromName(string name)
        {
            return _productVarieties.Find(Product => Product.Name == name).ToEnumerable();
        }

        public void Remove(ProductVariety removableProductVariety)
        {
            _productVarieties.DeleteOne(ProductVariety => ObjectId.Equals(removableProductVariety.Id, ProductVariety.Id));
        }

        public void Remove(ObjectId id)
        {
            _productVarieties.DeleteOne(ProductVariety => ObjectId.Equals(id, ProductVariety.Id));
        }

        public void Update(ObjectId id, ProductVariety updatedProductVariety)
        {
            throw new NotImplementedException();
        }
    }
}
