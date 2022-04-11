using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace eStoreTrial2.Models
{
    public class AccountUser
    {
        [Key]
        public int User_id { set; get; }
        
        [DataType("email")]
        public string User_Email { get; set; }

        [DataType("Password")]
        public string User_Password { get; set; }

        public string User_Name { get; set; }
        [JsonIgnore]
        public virtual List<ProductOrder> ProductOrders { get; set; }
    }
}
