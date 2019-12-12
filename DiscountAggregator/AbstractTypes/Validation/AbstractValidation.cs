using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public abstract class AbstractValidation
    {
        protected bool IdIsValid(string id)
        {
            ObjectId objectId;
            bool check = ObjectId.TryParse(id,out objectId);
            return check;
        }
        bool IsPageExists(string url)
        {
            try
            {
                WebClient client = new WebClient();
                client.DownloadString(url);
            }
            catch (WebException ex)
            {
                HttpWebResponse response = ex.Response != null ? ex.Response as HttpWebResponse : null;
                if (response != null && response.StatusCode == HttpStatusCode.NotFound)
                {
                    return false;
                }
            }

            return true;
        }
        protected bool stringIsNullOrEmpty(string line) => string.IsNullOrEmpty(line);
        public abstract bool IsValid();
    }
}
