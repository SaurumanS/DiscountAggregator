using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Product = DiscountAggregator.AbstractTypes.Product;
using IProductDBSetting = DiscountAggregator.DataBase.DataBaseApi.IProductDBSetting;
using DiscountAggregator.AbstractTypes;
using MongoDB.Bson;

namespace DiscountAggregator.DataBase
{
    public class ProductDB : AbstractDB, IProductDB
    {
        private readonly IMongoCollection<Product> _products;

        public ProductDB(IProductDBSetting settings):base(settings)
        {
            _products = Database.GetCollection<Product>(settings.CollectionName);
        }
        public void Add(Product newProduct)
        {
            _products.InsertOne(newProduct);
        }
        public void Clear()
        {
            _products.DeleteMany(Product => true);
        }

        public IEnumerable<Product> Get()
        {
            return _products.Find(Product => true).ToList();
        }

        public Product Get(ObjectId id)
        {
            if(id == null) throw new ArgumentException("id is null or empty");
            return _products.Find<Product>(Product => ObjectId.Equals(id, Product.Id)).FirstOrDefault();
        }

        public IEnumerable<Product> GetFromName(string name)
        {
            return _products.Find(Product => Product.Name == name).ToEnumerable();
        }

        public IEnumerable<Product> GetFromVarietyID(ObjectId id)
        {
            return _products.Find(Product => ObjectId.Equals(id,Product.ProductVariety)).ToEnumerable();
        }
        public IEnumerable<Product> GetFromStoreID(ObjectId id)
        {
            return _products.Find(Product => ObjectId.Equals(id, Product.Store)).ToEnumerable();
        }

        public IEnumerable<Product> GetFromTypeID(ObjectId id)
        {
            return _products.Find(Product => ObjectId.Equals(id, Product.ProductType)).ToEnumerable();
        }

        public void Remove(Product removableProduct)
        {
            _products.DeleteOne(Product =>  ObjectId.Equals(removableProduct.Id, Product.Id));
        }

        public void Remove(ObjectId id)
        {
            if (id == null) throw new ArgumentException("id is null or empty");
            _products.DeleteOne(Product => ObjectId.Equals(id, Product.Id));
        }

        public void Update(ObjectId id, Product updatedProduct)
        {
            _products.DeleteOne(Product => ObjectId.Equals(id, Product.Id));
        }
    }
}
