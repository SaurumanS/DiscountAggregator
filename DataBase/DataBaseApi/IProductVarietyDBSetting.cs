namespace DiscountAggregator.DataBase.DataBaseApi
{
    public interface IProductVarietyDBSetting
    {
        string CollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}