using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public class IdValidationAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            string id = value.ToString();
            bool result = IdValidation.IsValid(id);
            return result;
        }
    }
}
