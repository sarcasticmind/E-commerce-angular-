using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace eStoreTrial2.Models
{
    public class Product
    {
        public int id { get; set; }
        
        [Required]
        public string Name { get; set; }
        [Required]
        public string Image { get; set; }       

        [Required]
        public int Price { get; set; }

    }
}
