export const validatePremiumMember = (formValues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.institution)
        errors.institution = "Institution name is required";
    if (!formValues.category)
        errors.category = "Category is required";
    if (!formValues.dateOfEstablishment)
        errors.dateOfEstablishment = "Date of establishment is required";
    if (!formValues.university)
        errors.university = "University is required";
    if (!formValues.address)
        errors.address = "Address is required";
    
    if (!formValues.principalName)
        errors.principalName = "Principal's name is required";
    if (!formValues.principalEmail)
        errors.principalEmail = "Principal's email id is required";
    else if (!regex.test(formValues.principalEmail))
        errors.principalEmail = "Principal's email id is invalid";
    if (!formValues.principalPhone)
        errors.principalPhone = "Principal's contact number is required";
        
    if (!formValues.pocName)
        errors.pocName = "Contact person's name is required";
    if (!formValues.pocEmail)
        errors.pocEmail = "Contact person's email id is required";
    else if (!regex.test(formValues.pocEmail))
        errors.pocEmail = "Contact person's email id is invalid";
    if (!formValues.pocPhone)
        errors.pocPhone = "Contact person's contact number is required";
    
    if (Number(formValues.totalEligibleIntake.yr1) === 0 ||
        Number(formValues.totalEligibleIntake.yr2) === 0 ||
        Number(formValues.totalEligibleIntake.yr3) === 0)
        errors.totalEligibleIntake = "All values required";
    if (Number(formValues.actualIntake.yr1) === 0 ||
        Number(formValues.actualIntake.yr2) === 0 ||
        Number(formValues.actualIntake.yr3) === 0)
        errors.actualIntake = "All values required";
    if (Number(formValues.passPercent.yr1) === 0 ||
        Number(formValues.passPercent.yr2) === 0)
        errors.passPercent = "All values required";
    
    if (Number(formValues.totalNoOfFaculty) === 0)
        errors.totalNoOfFaculty = "Total number of faculty is required";
    if (Number(formValues.percentPHD) === 0)
        errors.percentPHD = "% of faculty with PHD is required";
    if (Number(formValues.percent3YrIE) === 0)
        errors.percent3YrIE = "% of faculty with 3 yr or more experience is required";
    if (!formValues.internetSpeed)
        errors.internetSpeed = "Dedicated network bandwidth is required";
    if (Number(formValues.totalComputers) === 0)
        errors.totalComputers = "Total number of computers in biggest lab is required";
    
    if (!formValues.accreditation)
        errors.accreditation = "Accreditation status is required";
    if (!formValues.prizesAwards)
        errors.prizesAwards = "Prize/Awards details is required";
    if (!formValues.papersPublished)
        errors.papersPublished = "Details about papers published in international magazine by students is required";
    if (!formValues.uniqueness)
        errors.uniqueness = "Uniqueness / excellency of the institution is required";
    if (!formValues.reason)
        errors.reason = "Reason/expectations for ICTAK membership is required";
    
    return errors;
}