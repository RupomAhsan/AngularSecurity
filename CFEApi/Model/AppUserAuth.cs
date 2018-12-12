// using System;
// using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

using System.Collections.Generic;

namespace CFEApi.Model
{
    public class AppUserAuth
    {
        public AppUserAuth() : base()
        {
        UserName = "Not authorized";
        BearerToken = string.Empty;
        }

        public string UserName { get; set; }
        public string BearerToken { get; set; }
        public bool IsAuthenticated { get; set; }
        public List<AppUserClaim> Claims { get; set; }
    }
}