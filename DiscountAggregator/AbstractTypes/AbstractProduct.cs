using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes
{
    public abstract class AbstractProduct
    {
        public int DiscountCounter(double oldPrice, double newPrice)
        {
            double _old = oldPrice;
            double _new = newPrice;
            double result;
                if (_new <= _old) result = (_new / _old) * 100;
                else result = (_old / _new) * 100;
                return -(Convert.ToInt32(100-result));
        }
    }
}
