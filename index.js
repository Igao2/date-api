const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment'); 
const port = process.env.PORT || 8000;
app.use(express.static('www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

function calculardif(datai,dataf,format){
    const diffMs = Math.abs(new Date(dataf) - new Date(datai));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays/30);
    const diffYears = Math.floor(diffDays/365);
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMs % (100*60)/100));
    let result = {};
    switch (format) {
      case 'YMdhm':
        result = {
          years: diffYears,
          months: diffMonths,
          days: diffDays,
          hours: diffHours,
          minutes: diffMinutes
        };
        break;
        case 'YMdhms':
        result = {
          years: diffYears,
          months: diffMonths,
          days: diffDays,
          hours: diffHours,
          minutes: diffMinutes,
          seconds: diffSeconds
        };
        break;
      case 'YMd':
        result = { years: diffYears, months: diffMonths, days: diffDays };
        break;
      case 'YMdh':
        result = { years:diffYears, months: diffMonths, days: diffDays, hours: diffHours };
        break;
      case 'Y':
        result = { years: diffYears };
        break;
      case 'M':
        result = { months: diffMonths };
        break;
      case 'd':
        result = { days: diffDays };
        break;
      case 'h':
        result = { hours: diffHours };
        break;
      case 'm':
        result = { minutes: diffMinutes };
        break;
      case 's':
        result = { seconds: diffSeconds };
      case 'dhm':
        result = { days: diffDays, hours: diffHours, minutes: diffMinutes };
        break;
      case 'dhms':
        result = { days: diffDays, hours: diffHours, minutes: diffMinutes, seconds: diffSeconds };
        break;
      case 'dh':
        result = { days: diffDays, hours: diffHours };
        break;
      case 'dm':
        result = { days: diffDays, minutes: diffMinutes };
        break;
      case 'hm':
        result = { hours: diffHours, minutes: diffMinutes };
        break;
      case 'hms':
        result = { hours: diffHours, minutes: diffMinutes, seconds: diffSeconds };
        break;
      default:
        result = { error: 'Formato não reconhecido' };
    }
  
    return result;
  
    
}
app.get("/diferencadatas",(req,res)=>{
    const {datai,h1,dataf,h2,format="dhm"} = req.query;
    const dateFormat = 'DD/MM/YYYY';
    const timeFormat = 'HH:mm';
  
    const dateTime1 = moment(`${datai} ${h1}`, `${dateFormat} ${timeFormat}`);
    const dateTime2 = moment(`${dataf} ${h2}`, `${dateFormat} ${timeFormat}`);
    if (!datai || !dataf) {
        return res.status(400).send('Parâmetros date1 e date2 são obrigatórios.');
      }
    if (!dateTime1.isValid() || !dateTime2.isValid()) {
            return res.status(400).json({ error: 'Formato de data ou hora inválido. Use DD/MM/YYYY para a data e HH:mm para a hora.' });
     }
        
    var result = calculardif(dateTime1,dateTime2,format)
    return res.json({ result })
    })
app.listen(port,()=>{
    console.log("AAA")
})
