namespace DiscountAggregator.DataBase.DataBaseApi
{
    public interface IDBSetting : IConnectionString
    {
        string CollectionName { get; set; }
        string DatabaseName { get; set; }
    }
}