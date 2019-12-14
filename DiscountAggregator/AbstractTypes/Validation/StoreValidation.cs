using System.ComponentModel.DataAnnotations;

namespace DiscountAggregator.AbstractTypes.Validation
{
    public class StoreValidation : IStore
    {
        public string Id { get; set; }

        [Required(ErrorMessage ="Name is null")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Photo url is null")]
        [Url(ErrorMessage ="Url is not correct")]
        public string Photo { get; set; }

        public static explicit operator Store(StoreValidation storeValidation)
        {
            Store store = new Store();

            store.Name = storeValidation.Name;
            store.Photo = storeValidation.Photo;

            return store;
        }
    }
}
