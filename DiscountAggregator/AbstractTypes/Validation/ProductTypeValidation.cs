using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public class ProductTypeValidation : IProductType
    {
        public string Id { get; set; }

        [Required(ErrorMessage ="Name is null")]
        public string Name { get; set; }

        [Required(ErrorMessage = "VarietyID is null")]
        [IdValidation(ErrorMessage = "Product Variety Id is incorrect. Check him.")]
        public string VarietyID { get; set; } //Product Variety ID

        public static explicit operator ProductType(ProductTypeValidation productTypeValidation)
        {
            ProductType productType = new ProductType();
            productType.Name = productTypeValidation.Name;
            productType.VarietyID = productTypeValidation.VarietyID;

            return productType;
        }
    }
}
