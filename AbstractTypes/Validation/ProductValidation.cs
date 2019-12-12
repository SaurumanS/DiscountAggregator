using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public class ProductValidation : AbstractValidation, IProduct, IValidatableObject
    {
        public int AmountOfDiscount { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public double NewPrice { get; set; }
        public double OldPrice { get; set; }
        public string Photo { get; set; }
        public string ProductType { get; set; }
        public string ProductVariety { get; set; }
        public string Store { get; set; }

        public override bool IsValid()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            List<ValidationResult> errors = new List<ValidationResult>();

            bool idIsNull = stringIsNullOrEmpty(Id);
            if (idIsNull)
                errors.Add(new ValidationResult("Id is null or empty"));
            bool nameIsNull = stringIsNullOrEmpty(Name);
            if (nameIsNull)
                errors.Add(new ValidationResult("Name is null or empty"));
            bool photoIsNull = stringIsNullOrEmpty(Photo);
            if (photoIsNull)
                errors.Add(new ValidationResult("Photo path is null or empty"));
            bool productVarietyIsNull = stringIsNullOrEmpty(ProductVariety);
            if (productVarietyIsNull)
                errors.Add(new ValidationResult("Product Variety is null or empty"));
            bool productTypeIsNull = stringIsNullOrEmpty(ProductType);
            if (productTypeIsNull)
                errors.Add(new ValidationResult("Product Type is null or empty"));
            bool storeIsNull = stringIsNullOrEmpty(Store);
            if (storeIsNull)
                errors.Add(new ValidationResult("Store is null or empty"));

            bool idIsValid = IdIsValid(Id);
            if (idIsValid)
                errors.Add(new ValidationResult("Id is not valid"));
            bool productVarietyIsValid = IdIsValid(ProductVariety);
            if (productVarietyIsValid)
                errors.Add(new ValidationResult("Product Variety ID is not correct"));
            bool productTypeIsValid = IdIsValid(ProductType);
            if (productTypeIsValid)
                errors.Add(new ValidationResult("Product Type ID is not correct"));
            bool storeIsValid = IdIsValid(Store);
            if (storeIsValid)
                errors.Add(new ValidationResult("Store ID is not correct"));

            return errors;
        }
    }
}
