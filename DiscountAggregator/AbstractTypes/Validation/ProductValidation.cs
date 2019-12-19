using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Product = DiscountAggregator.AbstractTypes.Product;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public class ProductValidation : AbstractValidation
    {

        [Required(ErrorMessage = "Name is null")]
        public string Name { get; set; }

        [Required(ErrorMessage = "ProductVariety Id is null")]
        [IdValidation(ErrorMessage = "Product Variety Id is incorrect. Check him.")]
        public string ProductVariety { get; set; } //Alcohol, Milk Products, Fruitc:\Users\Saurumans\source\repos\DiscountAggregator\DiscountAggregator\AbstractTypes\Validation\ProductValidation.css and Vegetables... (ID)

        
        [Required(ErrorMessage = "ProductType Id is null")]
        [IdValidation(ErrorMessage = "Product Type Id is incorrect. Check him.")]
        public string ProductType { get; set; } //Milk, Beer, Tea, Coffee ... (ID)

        private double? oldPrice;
        [Required(ErrorMessage = "OldPrice is null")]
        public double? OldPrice //Without discount
        {
            get => oldPrice;
            set
            {
                oldPrice = value;
                if(NewPrice != null)
                    AmountOfDiscount = DiscountCounter(oldPrice, NewPrice);
            }
        }

        private double? newPrice;
        [Required(ErrorMessage = "NewPrice is null")]
        public double? NewPrice //With discount
        {
            get => newPrice;
            set
            {
                newPrice = value;
                if (OldPrice != null)
                    AmountOfDiscount = DiscountCounter(OldPrice, newPrice);
            }
        }
        public int AmountOfDiscount { get; set; }

        [Required(ErrorMessage = "Photo url is null")]
        [Url(ErrorMessage = "Url is not correct")]
        public string Photo { get; set; }

        [Required(ErrorMessage = "Store Id is null")]
        [IdValidation(ErrorMessage ="Store Id is incorrect. Check him.")]
        public string Store { get; set; } //ID

        public static explicit operator Product(ProductValidation productValidation)
        {
            Product product = new Product();
            product.Name = productValidation.Name;
            product.NewPrice = Convert.ToDouble(productValidation.NewPrice);
            product.OldPrice = Convert.ToDouble(productValidation.OldPrice);
            product.Photo = productValidation.Photo;
            product.ProductType = productValidation.ProductType;
            product.ProductVariety = productValidation.ProductVariety;
            product.Store = productValidation.Store;
            product.AmountOfDiscount = productValidation.AmountOfDiscount;

            return product;
        }
    }
}
