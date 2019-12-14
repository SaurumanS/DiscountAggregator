using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes
{
    public class Product : IProduct
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string ProductVariety { get; set; } //Alcohol, Milk Products, Fruits and Vegetables... (ID)

        [BsonRepresentation(BsonType.ObjectId)]
        public string ProductType { get; set; } //Milk, Beer, Tea, Coffee ...

        public double OldPrice { get; set; } //Without discount

        public double NewPrice { get; set; } //With discount

        public int AmountOfDiscount { get; set; }

        public string Photo { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string Store { get; set; }

    }
}
