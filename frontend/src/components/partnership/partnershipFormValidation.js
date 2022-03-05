export const validateRegistration = (formValues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.fullname) {
        errors.fullname = "Full Name is required";
    }
    if (!formValues.email) {
        errors.email = "Email is required";
    } else if (!regex.test(formValues.email)) {
        errors.email = "Email is invalid";
    }
    if (Number( formValues.phone ) === 0) {
        errors.phone = "Phone number is required";
    } else if (formValues.phone.length < 10) {
        errors.phone = "Invalid phone number";
    }
    if (!formValues.firm)
        errors.firm = "Provide firm establishment date"
    if (!formValues.address)
        errors.address = "Address is required"
    if (!formValues.district)
        errors.district = "District name is required"
    if (Number(formValues.officeSpace) === 0)
        errors.officeSpace = "Office space area is required"
    if (Number(formValues.noOfEmployees) === 0 )
        errors.noOfEmployees = "Number of employees is required"
    if (!formValues.briefReport)
        errors.briefReport = "Contributions and its outcomes in training is required"
    if (!formValues.expects)
        errors.expects = "Your expectations from ICTAK is required"
    if (!formValues.promoters)
        errors.promoters = "Promoter profile is required"
    
    return errors;
}

