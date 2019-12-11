namespace DiscountAggregator.AbstractTypes
{
    public interface IProduct
    {
        int AmountOfDiscount { get; set; }
        string Id { get; set; }
        string Name { get; set; }
        double NewPrice { get; set; }
        double OldPrice { get; set; }
        string Photo { get; set; }
        string ProductType { get; set; }
        string ProductVariety { get; set; }
        string Store { get; set; }
    }
}