using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiscountAggregator.AbstractTypes;
using MongoDB.Bson;
using MongoDB.Driver;
using IProductTypeDBSetting = DiscountAggregator.DataBase.DataBaseApi.IProductTypeDBSetting;

namespace DiscountAggregator.DataBase
{
    public class ProductTypeDB : AbstractDB, IProductTypeDB
    {
        private readonly IMongoCollection<ProductType> _productTypes;

        public ProductTypeDB(IProductTypeDBSetting settings) : base(settings)
        {
            _productTypes = Database.GetCollection<ProductType>(settings.CollectionName);
        }
        public void Add(ProductType newProductType)
        {
            if (newProductType == null) throw new ArgumentException("newProductType is null");
            _productTypes.InsertOne(newProductType);
        }

        public void Clear()
        {
            _productTypes.DeleteMany(ProductType => true);
        }

        public IEnumerable<ProductType> Get()
        {
            return _productTypes.Find(ProductType => true).ToList();
        }

        public ProductType Get(ObjectId id)
        {
            if (id == null) throw new ArgumentException("id is null or empty");
            return _productTypes.Find(ProductType => ObjectId.Equals(id, ProductType.Id)).FirstOrDefault();
        }

        public IEnumerable<ProductType> GetFromVariety(ObjectId varietyId)
        {
            if (varietyId == null) throw new ArgumentException("VatietyID is null or empty");
            return _productTypes.Find(ProductType => ObjectId.Equals(ProductType.VarietyID, varietyId)).ToList();
        }

        public void Remove(ProductType removableProductType)
        {
            if(removableProductType == null) throw new ArgumentException("removableProductType is null or empty");
            _productTypes.DeleteOne(ProductVariety => ObjectId.Equals(removableProductType.Id, ProductVariety.Id));
        }

        public void Remove(ObjectId id)
        {
            if (id == null) throw new ArgumentException("id is null or empty");
            _productTypes.DeleteOne(ProductType => ObjectId.Equals(ProductType.Id, id));
        }

        public void Update(ObjectId id, ProductType updatedProductType)
        {
            throw new NotImplementedException();
        }
    }
}
