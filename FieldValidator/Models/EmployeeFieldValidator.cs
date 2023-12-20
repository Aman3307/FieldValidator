using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FieldValidator.Models
{
    public class EmployeeFieldValidator
    {
        public string Id { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public DateTime DOB { get; set; }
        public string Department { get; set; }
        public int Salary { get; set; }
        public String City { get; set; }
        public string Country { get; set; }
    }
}