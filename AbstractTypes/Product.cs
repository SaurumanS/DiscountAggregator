using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public int ProductVariety { get; set; } //Alcohol, Milk Products, Fruits and Vegetables... (ID)
        public string ProductType { get; set; } //Milk, Beer, Tea, Coffee ...
        public int OldPrice { get; set; } //Without discount
        public int NewPrice { get; set; } //With discount
        public int AmountOfDiscount { get; set; }
        public string Photo { get; set; }
        public string Store { get; set; }

    }
}
