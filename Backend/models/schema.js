const mongoose=require('mongoose')

const data=new mongoose.Schema({
    end_year: 
    { 
        type: Number, 
        default: null 
    },
    intensity: 
    {
        type: Number, 
        default: null 
    },
    sector:
    {
        type: String,
        default: null 
    },
    topic: 
    { 
        type: String, 
        default: null 
    },
    insight:
    { 
        type: String, 
        default: null 
    },
    url: 
    { 
        type: String, 
        default: null 
    },
    region: 
    { 
        type: String, 
        default: null 
    },
    start_year: 
    { 
        type: Number, 
        default: null 
    },
    impact: 
    { 
        type: Number, 
        default: null 
    },
    added: 
    { 
        type: String, 
        default: null 
    },
    published: 
    { 
        type: Date, 
        default: null 
    },
    country: 
    { 
        type: String, 
        default: null 
    },
    relevance: 
    { 
        type: Number, 
        default: null 
    },
    pestle: 
    { 
        type: String, 
        default: null 
    },
    source: 
    { 
        type: String, 
        default: null 
    },
    title: 
    { 
        type: String, 
        default: null 
    },
    likelihood: 
    { 
        type: Number, 
        default: null 
    }
});

const Data=mongoose.model('Data',data);
module.exports=Data;