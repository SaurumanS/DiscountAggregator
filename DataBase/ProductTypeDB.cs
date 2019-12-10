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
            throw new NotImplementedException();
        }

        public IEnumerable<ProductType> Get()
        {
            return _productTypes.Find(ProductType => true).ToList();
        }

        public ProductType Get(string id)
        {
            if (string.IsNullOrEmpty(id)) throw new ArgumentException("id is null or empty");
            return _productTypes.Find(ProductType => ProductType.Id == id).FirstOrDefault();
        }

        public IEnumerable<ProductType> GetFromVariety(string varietyId)
        {
            if (string.IsNullOrEmpty(varietyId)) throw new ArgumentException("VatietyID is null or empty");
            return _productTypes.Find(ProductType => ProductType.VarietyID == varietyId).ToList();
        }

        public void Remove(ProductType removableProductType)
        {
            if(removableProductType == null) throw new ArgumentException("removableProductType is null or empty");
            _productTypes.DeleteOne(ProductVariety => removableProductType.Id == ProductVariety.Id);
        }

        public void Remove(string id)
        {
            if (string.IsNullOrEmpty(id)) throw new ArgumentException("id is null or empty");
            _productTypes.DeleteOne(ProductType => ProductType.Id == id);
        }

        public void Update(string id, ProductType updatedProductType)
        {
            throw new NotImplementedException();
        }
    }
}
