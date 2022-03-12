const PremiumMember = require('../model/AcademicMember');
const CorporateMember = require('../model/CorporateMember');
const Partnership = require('../model/PartnershipInfo');
const ContactMsg = require('../model/ContactUs');
const User = require('../model/courceRegisterModel');
const Course = require('../model/courceModel');
const convertJsonToExcel = require('../helpers/convertToExcel');


const getStatsforGraph = async (req, res) => {
    try {
        const graphData = {
            datasets: [{
                data: [],
                backgroundColor: [
                    'green',
                    'blue',
                    'red',
                    'grey',
                    'yellow'
                ]
            },
            ],
            labels: [
                'Partnership Registration',
                'Student Registrations',
                'Premium Member Registration',
                'Corporate Member Registration',
                'Contact us Messages'
            ],
        };
        //Get statistics from db for last month
        let fromDate = new Date(Date.now());
        let toDate = new Date(Date.now());
        fromDate.setDate(fromDate.getMonth() - 1);
        toDate.setDate(toDate.getDate() + 1);

        let filter = {
            date: {
                $gte: fromDate,
                $lt: toDate
            }
        }
        let partnerReg = await Partnership.find({}, filter).count();
        let studentReg = await User.find({}, {
            createdAt: {
                $gte: fromDate,
                $lt: toDate
            }
        }).count();;
        let academicReg = await PremiumMember.find({}, filter).count();
        let corpReg = await CorporateMember.find({}, filter).count();
        let msgs = await ContactMsg.find({}, filter).count();

        graphData.datasets[0].data.push(partnerReg, studentReg, academicReg, corpReg, msgs);

        res.json(graphData);


    } catch {
        res.status(500).json({ msg: "Error occurred" });
    }
}
//Stats for filling tiles
const getStatsforTiles = async (req, res) => {
    try {
        let fromDate = new Date(Date.now());
        let toDate = new Date(Date.now());
        fromDate.setDate(fromDate.getMonth() - 1);
        toDate.setDate(toDate.getDate() + 1);

        let filter = {
            date: {
                $gte: fromDate,
                $lt: toDate
            }
        }
        let studentReg = await User.find({}, {
            createdAt: {
                $gte: fromDate,
                $lt: toDate
            }
        }).count();;
        let academicReg = await PremiumMember.find({}, filter).count();
        let msgs = await ContactMsg.find({}, filter).count();
        let courses = await Course.find({}).count();

        const tiles = {
            courses: courses,
            msgs: msgs,
            courseReg: studentReg,
            academicReg: academicReg
        }
        res.json(tiles);
        
    } catch {
        res.status(500).json({ msg: "Error occurred" });
    }
}

//Export and view student registration
const studentRegData = async (req, res, type) => {
    try {
        let fromDate = new Date(req.query.fromDate);
        let toDate = new Date(req.query.toDate);
        toDate.setDate(toDate.getDate() + 1);

        let filter = {
            createdAt: {
                $gte: fromDate,
                $lt: toDate
            }
        }
        let projection = {
            _id: 0,
            name: 1,
            "Email ID": "$email",
            "Mobile No": "$mobile_number",
            "Date of Birth": "$date_of_birth",
            "Course Name": "$cource_name"
        };
        let academicAppl = await User.find(filter, projection);
        if (academicAppl.length > 0) {
            if (type === "E")
                convertJsonToExcel(academicAppl, "Student Reg. Applications", res);
            else
                res.json(academicAppl);
        } else {
            res.json({ status: "Error", message: "No records found" });
        }
    
    } catch (err) {
        console.log(err);
        if (!res.headersSent)
            res.json({ status: "Error", message: err.message });
    }
}

module.exports = {
    getStatsforGraph,
    getStatsforTiles,
    studentRegData
};