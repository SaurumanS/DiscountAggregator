using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes
{
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Logo { get; set; } //Path to photo
    }
}
