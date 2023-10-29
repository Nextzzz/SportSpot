using CORE.Abstractions;

namespace CORE.Entities
{
    public class Product : BaseEntity
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? PhotoUrl { get; set; }
        public decimal Price { get; set; }
    }
}
