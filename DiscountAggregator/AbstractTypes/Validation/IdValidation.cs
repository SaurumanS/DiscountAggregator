using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public class IdValidation
    {
        public static bool IsValid(string id)
        {
            ObjectId objectId;

            return ObjectId.TryParse(id, out objectId);
        }
    }
}
