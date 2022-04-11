using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace eStoreTrial2.Models
{
    public class ProductOrder
    {
        [Key]
        public int id { get; set; }
        
        public int? Quantity { get; set; }
        
        [Required]
        public int Price { get; set; }
        public DateTime Date { get; set; }

        [ForeignKey("Product")]
        public int Product_id { get; set; }
        [JsonIgnore]
        public virtual Product Product { get; set; }

        [ForeignKey("user")]
        public int user_id { get; set; }
        [JsonIgnore]
        public virtual AccountUser user { get; set; }
    }
}
