using CORE.Abstractions;

namespace CORE.Entities
{
    public class OrderItem : BaseEntity
    {
        public Order Order { get; set; }
        public Product Product { get; set; }
        public decimal Quantity { get; set; } = 0;
        public decimal Value => Quantity * Product?.Price ?? 1 - (Quantity * Product?.Price ?? 1 * Order?.Discount) ?? 1;
    }
}
