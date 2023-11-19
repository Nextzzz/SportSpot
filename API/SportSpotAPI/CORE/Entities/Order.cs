using CORE.Abstractions;

namespace CORE.Entities
{
    public class Order : BaseEntity
    {
        public DateTime DateTime { get; set; }
        public decimal Discount { get; set; } = 1;
        public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
        public UserIdentity Client { get; set; }
        public decimal TotalValue => OrderItems.Sum(oi => oi.Value);
    }
}
