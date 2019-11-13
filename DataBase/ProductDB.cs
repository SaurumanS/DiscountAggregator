using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Product = DiscountAggregator.AbstractTypes.Product;
using IProductDBSetting = DiscountAggregator.DataBase.DataBaseApi.IProductDBSetting;

namespace DiscountAggregator.DataBase
{
    public class ProductDB : IProductDB
    {
        private readonly IMongoCollection<Product> _products;

        public ProductDB(IProductDBSetting settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.CollectionName);
        }
        public void Add(Product newProduct)
        {
            _products.InsertOne(newProduct);
        }

        public List<Product> Get()
        {
            return _products.Find(Product => true).ToList();
        }

        public Product Get(string id)
        {
            return _products.Find<Product>(Product => Product.Id == id).FirstOrDefault();
        }

        public void Remove(Product removableProduct)
        {
            _products.DeleteOne(Product => removableProduct.Id == Product.Id);
        }

        public void Remove(string id)
        {
            _products.DeleteOne(Product => Product.Id == id);
        }

        public void Update(string id, Product updatedProduct)
        {
            _products.DeleteOne(Product => Product.Id == id);
        }
    }
}
