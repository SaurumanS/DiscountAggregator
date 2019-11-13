namespace DiscountAggregator.DataBase.DataBaseApi
{
    public interface IStoreDBSetting
    {
        string CollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}