using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CFEApi.Model
{
    [Table("UserClaim",Schema="Security")]
    public partial class AppUserClaim
    {
        [Required()]
        [Key()]
        public Guid ClaimId { get; set; }

        [Required()]
        public Guid UserId { get; set; }

        [Required()]
        public string ClaimType { get; set; }

        [Required()]
        public string ClaimValue { get; set; }
    }
}