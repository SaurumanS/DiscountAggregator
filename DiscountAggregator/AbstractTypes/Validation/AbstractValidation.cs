using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public abstract class AbstractValidation
    {
        public static int DiscountCounter(double? oldPrice, double? newPrice)
        {
            if (oldPrice == null || newPrice == null)
                throw new ArgumentException("Input arguments is null. How you did this?");
            double _old = Convert.ToDouble(oldPrice);
            double _new = Convert.ToDouble(newPrice);
            double result;
            if (_new <= _old) result = (_new / _old) * 100;
            else result = (_old / _new) * 100;
            return -(Convert.ToInt32(100 - result));
        }
    }
}
