
    function validateForm() {
    var id = document.getElementById("id").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var department = document.getElementById("department").value;
    var salary = document.getElementById("salary").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;

    var valid = true;

    if (!validateId(id)) {
        valid = false;
    document.getElementById("idError").innerHTML = "ID must be alphanumeric.";
            } else {
        document.getElementById("idError").innerHTML = "";
            }

    if (!validateFirstName(firstName)) {
        valid = false;
    document.getElementById("firstNameError").innerHTML = "Invalid first name.";
            } else {
        document.getElementById("firstNameError").innerHTML = "";
            }

    if (!validateLastName(lastName)) {
        valid = false;
    document.getElementById("lastNameError").innerHTML = "Invalid last name.";
            } else {
        document.getElementById("lastNameError").innerHTML = "";
            }

    if (function () {
            $("#dob").datepicker({
                dateFormat: "yy-mm-dd",
                changeMonth: true,
                changeYear: true,
                yearRange: "1900:2022"
            });
        });

    if (!validateDepartment(department)) {
        valid = false;
    document.getElementById("departmentError").innerHTML = "Invalid department.";
            } else {
        document.getElementById("departmentError").innerHTML = "";
            }

    if (!validateSalary(salary)) {
        valid = false;
    document.getElementById("salaryError").innerHTML = "Invalid salary.";
            } else {
        document.getElementById("salaryError").innerHTML = "";
            }

    if (!validateCity(city)) {
        valid = false;
    document.getElementById("cityError").innerHTML = "Invalid city.";
            } else {
        document.getElementById("cityError").innerHTML = "";
            }

    if (!validateCountry(country)) {
        valid = false;
    document.getElementById("countryError").innerHTML = "Invalid country.";
            } else {
        document.getElementById("countryError").innerHTML = "";
            }

    if (valid) {
        document.getElementById("myForm").submit();
            }
        }
