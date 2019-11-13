namespace DiscountAggregator.DataBase.DataBaseApi
{
    public interface IProductDBSetting
    {
        string CollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}