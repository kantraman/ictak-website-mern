const express = require("express"); 
const Partnership = require("../model/PartnershipInfo");
const partnershipRouter = express.Router();

partnershipRouter.post("/partnerInfo", async (req, res) => {
    
    try {
        
        var item = {
            fullname: req.body.fullname,
            email: req.body.email,
            phone: req.body.phone,
            firm: req.body.firm,
            address: req.body.address,
            district: req.body.district,
            officeSpace: req.body.officeSpace,
            noOfEmployees: req.body.noOfEmployees,
            briefReport: req.body.briefReport,
            expects: req.body.expects,
            promoters: req.body.promoters
        }
        if (item.fullname !== "" && item.email !== "" && item.phone !== "" && item.firm !== "" && item.noOfEmployees > 0 ) {
            const partner = new Partnership(item);
            partner.save()
                .then(() => res.json({ status: "Success" }))
                .catch((er) => {
                    console.log(er)
                    res.sendStatus(500).json({ status: "Error" });
                });
        } else {
            res.json({ status: "Error", message: "Invalid inputs" });
        }} catch (error) {
        res.json({ status: "Error", message: error.message });
    }
   
})


module.exports = partnershipRouter;