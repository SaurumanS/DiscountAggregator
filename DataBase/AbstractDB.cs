using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IDBSetting = DiscountAggregator.DataBase.DataBaseApi.IDBSetting;

namespace DiscountAggregator.DataBase
{
    public abstract class AbstractDB
    {
        protected MongoClient Client { get; private set; }
        protected IMongoDatabase Database { get; private set; }
        public AbstractDB(IDBSetting settings)
        {
            Client = new MongoClient(settings.ConnectionString);
            Database = Client.GetDatabase(settings.DatabaseName);
        }
    }
}
