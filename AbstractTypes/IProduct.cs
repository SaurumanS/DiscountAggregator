namespace DiscountAggregator.AbstractTypes
{
    public interface IProduct
    {
        int AmountOfDiscount { get; set; }
        string Id { get; set; }
        string Name { get; set; }
        int NewPrice { get; set; }
        int OldPrice { get; set; }
        string Photo { get; set; }
        string ProductType { get; set; }
        int ProductVariety { get; set; }
        string Store { get; set; }
    }
}