using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public class ProductVarietyValidation : IProductVariety
    {
        public string Id { get; set; }
        [Required(ErrorMessage ="Name is null")]
        public string Name { get; set; }

        public static explicit operator ProductVariety(ProductVarietyValidation productVarietyValidation)
        {
            ProductVariety productVariety = new ProductVariety();

            productVariety.Name = productVarietyValidation.Name;

            return productVariety;
        }
    }
}
