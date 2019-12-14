using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Converters
{
    public static class ObjectIdConverter
    {
        public static ObjectId ToObjectId(this string id)
        {
            bool isValid = AbstractTypes.Validation.IdValidation.IsValid(id);
            if (isValid)
                return ObjectId.Parse(id);
            else
                throw new ArgumentException("Id has not correct form. Check him");
        }
    }
}
