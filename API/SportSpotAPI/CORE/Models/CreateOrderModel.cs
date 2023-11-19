using CORE.Entities;

namespace CORE.Models
{
    public class CreateOrderModel
    {
        public int ClientId { get; set; }
        public decimal Discount { get; set; } = 1;
        public List<CreateOrderItemModel> OrderItems { get; set; } = new List<CreateOrderItemModel>();
    }

    public class CreateOrderItemModel
    {
        public int ProductId { get; set; }
        public decimal Quantity { get; set; }
    }
}
