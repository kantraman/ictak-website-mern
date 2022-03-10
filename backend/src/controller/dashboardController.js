const PremiumMember = require('../model/AcademicMember');
const CorporateMember = require('../model/CorporateMember');
const Partnership = require('../model/PartnershipInfo');
const ContactMsg = require('../model/ContactUs');
const User = require('../model/courceRegisterModel');
const Course = require('../model/courceModel');


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

module.exports = {
    getStatsforGraph,
    getStatsforTiles
};