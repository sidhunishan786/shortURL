
import { nanoid } from 'nanoid'

import { URL } from "../models/url.js";

async function handleGenerateshortUrl(req,res){
    let shortURL =  nanoid(7);
    //create record in DB
    if(!req.body.url) return res.status(400).json({error: "URL is required"});

    await URL.create({
        shortId : shortURL,
        redirectURL: req.body.url,
        visitHistory:[{}]
    })

    return res.json({shortid : shortURL});
}

async function handleGetUrl(req,res) {

    let sid = req.params.id;
    // console.log(sid);
    
    let url = await URL.findOneAndUpdate({shortId : sid},{
        $push :{
            visitHistory : {
                timestamp : Date.now()
            },
        }

    })
    
    return res.redirect('https://'+url?.redirectURL);

    
}
async function handleGetUrlClicks(req,res) {

    let sid = req.params.id;
    // console.log(sid);
    
    let url = await URL.findOne({shortId : sid})
    
    return res.json({clicks : url.visitHistory.length});

    
}



export {handleGenerateshortUrl,handleGetUrl, handleGetUrlClicks};