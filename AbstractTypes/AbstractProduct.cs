using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes
{
    public abstract class AbstractProduct
    {
        public string DiscountCounter(string oldPrice, string newPrice)
        {
            var oldPriceIsNull = string.IsNullOrEmpty(oldPrice);
            var newPriceIsNull = string.IsNullOrEmpty(newPrice);
            if (!oldPriceIsNull && !newPriceIsNull)
            {
                double _old = double.Parse(oldPrice);
                double _new = double.Parse(newPrice);
                double result;
                if (_new <= _old) result = (_new / _old) * 100;
                else result = (_old / _new) * 100;
                return (-(Convert.ToInt32(100-result))).ToString();
            }
            return "0";
        }
    }
}
