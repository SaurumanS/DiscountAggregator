namespace DiscountAggregator.AbstractTypes
{
    public interface IProduct
    {
        string AmountOfDiscount { get; set; }
        string Id { get; set; }
        string Name { get; set; }
        string NewPrice { get; set; }
        string OldPrice { get; set; }
        string Photo { get; set; }
        string ProductType { get; set; }
        string ProductVariety { get; set; }
        string Store { get; set; }
    }
}