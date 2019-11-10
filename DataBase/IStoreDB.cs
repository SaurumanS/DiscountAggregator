using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Store = DiscountAggregator.AbstractTypes.Store;

namespace DiscountAggregator.DataBase
{
    interface IStoreDB
    {
        Store GetAll();
        
    }
}
