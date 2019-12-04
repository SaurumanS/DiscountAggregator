using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Product = DiscountAggregator.AbstractTypes.Product;
using IProductDBSetting = DiscountAggregator.DataBase.DataBaseApi.IProductDBSetting;
using DiscountAggregator.AbstractTypes;

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
            throw new NotImplementedException();
        }

        public IEnumerable<Product> Get()
        {
            return _products.Find(Product => true).ToList();
        }

        public Product Get(string id)
        {
            return _products.Find<Product>(Product => Product.Id == id).FirstOrDefault();
        }

        public IEnumerable<Product> GetFromName(string name)
        {
            return _products.Find(Product => Product.Name == name).ToEnumerable();
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
