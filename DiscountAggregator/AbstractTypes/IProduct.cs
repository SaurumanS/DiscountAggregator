namespace DiscountAggregator.AbstractTypes
{
    public interface IProduct : ICommonInfo, IPhoto
    {
        int AmountOfDiscount { get; set; }
        double NewPrice { get; set; }
        double OldPrice { get; set; }
        string ProductType { get; set; }
        string ProductVariety { get; set; }
        string Store { get; set; }
    }
}