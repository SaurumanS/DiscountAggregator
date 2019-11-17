﻿using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductVariety = DiscountAggregator.AbstractTypes.ProductVariety;
using IProductVarietyDBSetting = DiscountAggregator.DataBase.DataBaseApi.IProductVarietyDBSetting;

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
            throw new NotImplementedException();
        }

        public List<ProductVariety> Get()
        {
            return _productVarieties.Find(ProductVariety => true).ToList();
        }

        public ProductVariety Get(string id)
        {
            return _productVarieties.Find<ProductVariety>(ProductVariety => ProductVariety.Id == id).FirstOrDefault();
        }

        public void Remove(ProductVariety removableProductVariety)
        {
            _productVarieties.DeleteOne(ProductVariety => removableProductVariety.Id == ProductVariety.Id);
        }

        public void Remove(string id)
        {
            _productVarieties.DeleteOne(ProductVariety => ProductVariety.Id == id);
        }

        public void Update(string id, ProductVariety updatedProductVariety)
        {
            _productVarieties.DeleteOne(ProductVariety => ProductVariety.Id == id);
        }
    }
}
