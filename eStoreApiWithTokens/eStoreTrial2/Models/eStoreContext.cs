using Microsoft.EntityFrameworkCore;

namespace eStoreTrial2.Models
{
    public class eStoreContext : DbContext
    {
        public eStoreContext()
        {
        }
        public eStoreContext(DbContextOptions options) : base(options)
        { }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductOrder> productOrders { get; set; }
        public DbSet<AccountUser> AccountUsers { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=eStoreApiDb;Integrated Security=True");
        }
    }
}
