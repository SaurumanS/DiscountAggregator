﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes
{
    interface IProductType : ICommonInfo
    {
        string VarietyID { get; set; }
    }
}
