const Data = require('../models/schema.js');

exports.get_data= async (req, res) => {
    try {
        const data = await Data.find({});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.add_data= async (req, res) => {
    try {
        const new_data = new Data(req.body);
        const saved_data = await new_data.save();
        console.log(saved_data);
        res.status(201).json(saved_data);
    } catch (error) {
        console.error(error);
        if (error.name==="Validation Error"){
            res.status(400).json({
                message:"Invalid Data"
            });
        }
        else{
        res.status(500).json({ 
            message: 'Failed to save data' 
        });
        }
    }
};