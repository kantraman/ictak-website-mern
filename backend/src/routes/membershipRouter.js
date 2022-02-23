const express = require("express");
const membershipRouter = express.Router();
const sendEmail = require("../helpers/sendmail");
const premiumMember = require("../model/AcademicMember");
const corporateMember = require("../model/CorporateMember");

//Premium Member Registration
membershipRouter.post("/academic-member", (req, res) => {
    try {
        var item = {
            institution: req.body.institution,
            category: req.body.category,
            dateOfEstablishment: req.body.dateOfEstablishment,
            university: req.body.university,
            address: req.body.address,
            principalName: req.body.principalName,
            principalEmail: req.body.principalEmail,
            principalPhone: req.body.principalPhone,
            pocName: req.body.pocName,
            pocEmail: req.body.pocEmail,
            pocPhone: req.body.pocPhone,
            totalEligibleIntake: req.body.totalEligibleIntake,
            actualIntake: req.body.actualIntake,
            passPercent: req.body.passPercent,
            totalNoOfFaculty: req.body.totalNoOfFaculty,
            percentPHD: req.body.percentPHD,
            percent3YrIE: req.body.percent3YrIE,
            internetSpeed: req.body.internetSpeed,
            totalComputers: req.body.totalComputers,
            accreditation: req.body.accreditation,
            prizesAwards: req.body.prizesAwards,
            papersPublished: req.body.papersPublished,
            uniqueness: req.body.uniqueness,
            reason: req.body.reason
        }
        if (item.institution !== "" && item.pocEmail !== "" && item.pocPhone !== "" && item.principalName !== "" && item.principalPhone  !== "") {
            const member = new premiumMember(item);
            member.save()
                .then(() => {
                    res.json({ status: "Success" });
                    sendEmail(item.pocEmail,
                        "ICTAK Membership Application Confirmation",
                        "This email message is a computer generated message to confirm the receipt of your membership application." +
                        "<br/><br/> Thanks & Regards, <br/> <b>ICT Academy of Kerala</b>"
                    );
                })
                .catch((er) => {
                    console.log(er)
                    res.sendStatus(500).json({ status: "Error" });
                });
        } else {
            res.json({ status: "Error", message: "Invalid inputs" });
        }
    } catch (error) {
        res.json({ status: "Error", message: error.message });
    }
})

//Corporate Membership Registration
membershipRouter.post("/corporate-member", (req, res) => {
    try {
        var item = {
            organisation: req.body.organisation,
            address: req.body.address,
            website: req.body.website,
            orgHead: req.body.orgHead,
            orgNature: req.body.orgNature,
            companyType: req.body.companyType,
            corpID: req.body.corpID,
            GSTN: req.body.GSTN,
            dateOfIncorp: req.body.dateOfIncorp,
            pocName: req.body.pocName,
            pocEmail: req.body.pocEmail,
            pocPhone: req.body.pocPhone,
            skilset: req.body.skilset,
            noOfEmployees: req.body.noOfEmployees,
            avgYrFrHiring: req.body.avgYrFrHiring,
            noOfPatents: req.body.noOfPatents,
            collaborate: req.body.collaborate,
            details: req.body.details
        }
        if (item.organisation !== "" && item.pocEmail !== "" && item.pocPhone !== "" && item.orgHead !== "" && item.orgNature  !== "") {
            const member = new corporateMember(item);
            member.save()
                .then(() => {
                    res.json({ status: "Success" });
                    sendEmail(item.pocEmail,
                        "ICTAK Membership Application Confirmation",
                        "This email message is a computer generated message to confirm the receipt of your membership application." +
                        "<br/><br/> Thanks & Regards, <br/> <b>ICT Academy of Kerala</b>"
                    );
                })
                .catch((er) => {
                    console.log(er)
                    res.sendStatus(500).json({ status: "Error" });
                });
        } else {
            res.json({ status: "Error", message: "Invalid inputs" });
        }
    } catch (error) {
        res.json({ status: "Error", message: error.message });
    }
})

module.exports = membershipRouter;
