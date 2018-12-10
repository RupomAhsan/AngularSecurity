using Microsoft.EntityFrameworkCore;

namespace CFEApi.Model
{
  public class CFEDbContext : DbContext
  {
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    public DbSet<AppUser> Users { get; set; }
    public DbSet<AppUserClaim> Claims { get; set; }

    // private const string CONN =
    //               @"Server=Localhost;
    //                 Database=PTC-Pluralsight;
    //                 Trusted_Connection=True;
    //                 MultipleActiveResultSets=true";

    private const string CONN = @"Data Source=SSMY0099\DEV_MY_APPS;Initial Catalog=LoyaltyPlus; Integrated Security=true; MultipleActiveResultSets=true";

    protected override void OnConfiguring(
                DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer(CONN);
    }
  }
}
