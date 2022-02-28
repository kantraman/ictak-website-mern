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

export const validateCorpMemApplication = (formValues) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.organisation)
        errors.organisation = "Organisation name is required";
    if (!formValues.address)
        errors.address = "Address is required";
    if (!formValues.website)
        errors.website = "Website is required";
    if (!formValues.orgHead)
        errors.orgHead = "Head of organisation is required";
    if (!formValues.orgNature)
        errors.orgNature = "Nature of organisation is required";
    if (!formValues.companyType)
        errors.companyType = "Type of the company is required";
    if (!formValues.corpID)
        errors.corpID = "Corporate identity number is required";
    if (!formValues.GSTN)
        errors.GSTN = "GSTN is required";
    if (!formValues.dateOfIncorp)
        errors.dateOfIncorp = "Date of incorporation is required";
    
    if (!formValues.pocName)
        errors.pocName = "Point of contact name is required";
    if (!formValues.pocPhone)
        errors.pocPhone = "Point of contact phone number is required";
    if (!formValues.pocEmail)
        errors.pocEmail = "Point of contact email ID is required";
    else if (!regex.test(formValues.pocEmail))
        errors.pocEmail = "Point of contact email ID is invalid";
    
    if (!formValues.skilset)
        errors.skilset = "Technical skill set is required";
    if (Number(formValues.noOfEmployees) === 0)
        errors.noOfEmployees = "Number of employees is required";
    if (!formValues.avgYrFrHiring)
        errors.avgYrFrHiring = "Average yearly fresher hiring is required";
    if (!formValues.noOfPatents)
        errors.noOfPatents = "Number of patents filed is required";
    if (!formValues.collaborate.experts4SkillSessions &&
        !formValues.collaborate.fresherHiring &&
        !formValues.collaborate.internships &&
        !formValues.collaborate.employeeTraining &&
        !formValues.collaborate.projectAssistance)
        errors.collaborate = "Collaboration plan with ICTAK is required";
    if (!formValues.details)
        errors.details = "Details about academic interface programme is required";

    return errors;
}