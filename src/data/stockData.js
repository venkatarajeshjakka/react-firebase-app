
import { grouped , nseData } from '../utility/utility'


export function getStockInfo (portfolioStockList) 
{
  return grouped(portfolioStockList);
}

export function nseStockMapping(input)
{
   return nseData(input);
}

export function matchStocks(state, value) {
  return (
    state.stockName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.stockCode.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}
export function getStocks() {
    return [
      {
        "stockCode": "20MICRONS",
        "stockName": "20 Microns Limited",
        "Series": "EQ",
        "date_of_listing": "06-OCT-2008",
        "paid_up_value": 5,
        "isis_number": "INE144J01027",
        "face_value": 5
      },
      {
        "stockCode": "21STCENMGM",
        "stockName": "21st Century Management Services Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE253B01015",
        "face_value": 10
      },
      {
        "stockCode": "3IINFOTECH",
        "stockName": "3i Infotech Limited",
        "Series": "EQ",
        "date_of_listing": "22-APR-2005",
        "paid_up_value": 10,
        "isis_number": "INE748C01020",
        "face_value": 10
      },
      {
        "stockCode": "3MINDIA",
        "stockName": "3M India Limited",
        "Series": "EQ",
        "date_of_listing": "13-AUG-2004",
        "paid_up_value": 10,
        "isis_number": "INE470A01017",
        "face_value": 10
      },
      {
        "stockCode": "3PLAND",
        "stockName": "3P Land Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-1995",
        "paid_up_value": 2,
        "isis_number": "INE105C01023",
        "face_value": 2
      },
      {
        "stockCode": "5PAISA",
        "stockName": "5Paisa Capital Limited",
        "Series": "EQ",
        "date_of_listing": "16-NOV-2017",
        "paid_up_value": 10,
        "isis_number": "INE618L01018",
        "face_value": 10
      },
      {
        "stockCode": "63MOONS",
        "stockName": "63 moons technologies limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2005",
        "paid_up_value": 2,
        "isis_number": "INE111B01023",
        "face_value": 2
      },
      {
        "stockCode": "8KMILES",
        "stockName": "8K Miles Software Services Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2014",
        "paid_up_value": 5,
        "isis_number": "INE650K01021",
        "face_value": 5
      },
      {
        "stockCode": "A2ZINFRA",
        "stockName": "A2Z Infra Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "23-DEC-2010",
        "paid_up_value": 10,
        "isis_number": "INE619I01012",
        "face_value": 10
      },
      {
        "stockCode": "AARTIDRUGS",
        "stockName": "Aarti Drugs Limited",
        "Series": "EQ",
        "date_of_listing": "19-SEP-2003",
        "paid_up_value": 10,
        "isis_number": "INE767A01016",
        "face_value": 10
      },
      {
        "stockCode": "AARTIIND",
        "stockName": "Aarti Industries Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 5,
        "isis_number": "INE769A01020",
        "face_value": 5
      },
      {
        "stockCode": "AARVEEDEN",
        "stockName": "Aarvee Denims & Exports Limited",
        "Series": "EQ",
        "date_of_listing": "21-NOV-2006",
        "paid_up_value": 10,
        "isis_number": "INE273D01019",
        "face_value": 10
      },
      {
        "stockCode": "AAVAS",
        "stockName": "Aavas Financiers Limited",
        "Series": "EQ",
        "date_of_listing": "08-OCT-2018",
        "paid_up_value": 10,
        "isis_number": "INE216P01012",
        "face_value": 10
      },
      {
        "stockCode": "ABAN",
        "stockName": "Aban Offshore Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 2,
        "isis_number": "INE421A01028",
        "face_value": 2
      },
      {
        "stockCode": "ABB",
        "stockName": "ABB India Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE117A01022",
        "face_value": 2
      },
      {
        "stockCode": "ABBOTINDIA",
        "stockName": "Abbott India Limited",
        "Series": "EQ",
        "date_of_listing": "08-JAN-2010",
        "paid_up_value": 10,
        "isis_number": "INE358A01014",
        "face_value": 10
      },
      {
        "stockCode": "ABCAPITAL",
        "stockName": "Aditya Birla Capital Limited",
        "Series": "EQ",
        "date_of_listing": "01-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE674K01013",
        "face_value": 10
      },
      {
        "stockCode": "ABFRL",
        "stockName": "Aditya Birla Fashion and Retail Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUL-2013",
        "paid_up_value": 10,
        "isis_number": "INE647O01011",
        "face_value": 10
      },
      {
        "stockCode": "ABMINTLTD",
        "stockName": "ABM International Limited",
        "Series": "BE",
        "date_of_listing": "14-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE251C01017",
        "face_value": 10
      },
      {
        "stockCode": "ACC",
        "stockName": "ACC Limited",
        "Series": "EQ",
        "date_of_listing": "20-NOV-1996",
        "paid_up_value": 10,
        "isis_number": "INE012A01025",
        "face_value": 10
      },
      {
        "stockCode": "ACCELYA",
        "stockName": "Accelya Solutions India Limited",
        "Series": "EQ",
        "date_of_listing": "01-DEC-1999",
        "paid_up_value": 10,
        "isis_number": "INE793A01012",
        "face_value": 10
      },
      {
        "stockCode": "ACE",
        "stockName": "Action Construction Equipment Limited",
        "Series": "EQ",
        "date_of_listing": "26-SEP-2006",
        "paid_up_value": 2,
        "isis_number": "INE731H01025",
        "face_value": 2
      },
      {
        "stockCode": "ADANIENT",
        "stockName": "Adani Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUN-1997",
        "paid_up_value": 1,
        "isis_number": "INE423A01024",
        "face_value": 1
      },
      {
        "stockCode": "ADANIGAS",
        "stockName": "Adani Gas Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-2018",
        "paid_up_value": 1,
        "isis_number": "INE399L01023",
        "face_value": 1
      },
      {
        "stockCode": "ADANIGREEN",
        "stockName": "Adani Green Energy Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUN-2018",
        "paid_up_value": 10,
        "isis_number": "INE364U01010",
        "face_value": 10
      },
      {
        "stockCode": "ADANIPORTS",
        "stockName": "Adani Ports and Special Economic Zone Limited",
        "Series": "EQ",
        "date_of_listing": "27-NOV-2007",
        "paid_up_value": 2,
        "isis_number": "INE742F01042",
        "face_value": 2
      },
      {
        "stockCode": "ADANIPOWER",
        "stockName": "Adani Power Limited",
        "Series": "EQ",
        "date_of_listing": "20-AUG-2009",
        "paid_up_value": 10,
        "isis_number": "INE814H01011",
        "face_value": 10
      },
      {
        "stockCode": "ADANITRANS",
        "stockName": "Adani Transmission Limited",
        "Series": "EQ",
        "date_of_listing": "31-JUL-2015",
        "paid_up_value": 10,
        "isis_number": "INE931S01010",
        "face_value": 10
      },
      {
        "stockCode": "ADFFOODS",
        "stockName": "ADF Foods Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-2010",
        "paid_up_value": 10,
        "isis_number": "INE982B01019",
        "face_value": 10
      },
      {
        "stockCode": "ADHUNIK",
        "stockName": "Adhunik Metaliks Limited",
        "Series": "EQ",
        "date_of_listing": "05-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE400H01019",
        "face_value": 10
      },
      {
        "stockCode": "ADHUNIKIND",
        "stockName": "Adhunik Industries Limited",
        "Series": "EQ",
        "date_of_listing": "01-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE452L01012",
        "face_value": 10
      },
      {
        "stockCode": "ADLABS",
        "stockName": "Adlabs Entertainment Limited",
        "Series": "EQ",
        "date_of_listing": "06-APR-2015",
        "paid_up_value": 10,
        "isis_number": "INE172N01012",
        "face_value": 10
      },
      {
        "stockCode": "ADORWELD",
        "stockName": "Ador Welding Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE045A01017",
        "face_value": 10
      },
      {
        "stockCode": "ADROITINFO",
        "stockName": "Adroit Infotech Limited",
        "Series": "EQ",
        "date_of_listing": "13-AUG-1997",
        "paid_up_value": 10,
        "isis_number": "INE737B01033",
        "face_value": 10
      },
      {
        "stockCode": "ADSL",
        "stockName": "Allied Digital Services Limited",
        "Series": "EQ",
        "date_of_listing": "25-JUL-2007",
        "paid_up_value": 5,
        "isis_number": "INE102I01027",
        "face_value": 5
      },
      {
        "stockCode": "ADVANIHOTR",
        "stockName": "Advani Hotels & Resorts (India) Limited",
        "Series": "EQ",
        "date_of_listing": "25-JUN-2007",
        "paid_up_value": 2,
        "isis_number": "INE199C01026",
        "face_value": 2
      },
      {
        "stockCode": "ADVENZYMES",
        "stockName": "Advanced Enzyme Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "01-AUG-2016",
        "paid_up_value": 2,
        "isis_number": "INE837H01020",
        "face_value": 2
      },
      {
        "stockCode": "AEGISCHEM",
        "stockName": "Aegis Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 1,
        "isis_number": "INE208C01025",
        "face_value": 1
      },
      {
        "stockCode": "AGARIND",
        "stockName": "Agarwal Industrial Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAY-2014",
        "paid_up_value": 10,
        "isis_number": "INE204E01012",
        "face_value": 10
      },
      {
        "stockCode": "AGCNET",
        "stockName": "AGC Networks Limited",
        "Series": "EQ",
        "date_of_listing": "22-JUL-2003",
        "paid_up_value": 10,
        "isis_number": "INE676A01019",
        "face_value": 10
      },
      {
        "stockCode": "AGLSL",
        "stockName": "Artemis Global Life Sciences Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUL-2017",
        "paid_up_value": 2,
        "isis_number": "INE517U01013",
        "face_value": 2
      },
      {
        "stockCode": "AGRITECH",
        "stockName": "Agri-Tech (India) Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-2014",
        "paid_up_value": 10,
        "isis_number": "INE449G01018",
        "face_value": 10
      },
      {
        "stockCode": "AGROPHOS",
        "stockName": "Agro Phos India Limited",
        "Series": "BE",
        "date_of_listing": "08-MAR-2019",
        "paid_up_value": 10,
        "isis_number": "INE740V01019",
        "face_value": 10
      },
      {
        "stockCode": "AHLEAST",
        "stockName": "Asian Hotels (East) Limited",
        "Series": "EQ",
        "date_of_listing": "11-AUG-2010",
        "paid_up_value": 10,
        "isis_number": "INE926K01017",
        "face_value": 10
      },
      {
        "stockCode": "AHLUCONT",
        "stockName": "Ahluwalia Contracts (India) Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2009",
        "paid_up_value": 2,
        "isis_number": "INE758C01029",
        "face_value": 2
      },
      {
        "stockCode": "AHLWEST",
        "stockName": "Asian Hotels (West) Limited",
        "Series": "EQ",
        "date_of_listing": "05-AUG-2010",
        "paid_up_value": 10,
        "isis_number": "INE915K01010",
        "face_value": 10
      },
      {
        "stockCode": "AIAENG",
        "stockName": "AIA Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2005",
        "paid_up_value": 2,
        "isis_number": "INE212H01026",
        "face_value": 2
      },
      {
        "stockCode": "AIFL",
        "stockName": "Ashapura Intimates Fashion Limited",
        "Series": "BZ",
        "date_of_listing": "02-DEC-2015",
        "paid_up_value": 10,
        "isis_number": "INE428O01016",
        "face_value": 10
      },
      {
        "stockCode": "AIONJSW",
        "stockName": "Monnet Ispat & Energy Limited",
        "Series": "EQ",
        "date_of_listing": "12-SEP-2018",
        "paid_up_value": 10,
        "isis_number": "INE743C01021",
        "face_value": 10
      },
      {
        "stockCode": "AIRAN",
        "stockName": "Airan Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAY-2019",
        "paid_up_value": 2,
        "isis_number": "INE645W01026",
        "face_value": 2
      },
      {
        "stockCode": "AJANTPHARM",
        "stockName": "Ajanta Pharma Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAY-2000",
        "paid_up_value": 2,
        "isis_number": "INE031B01049",
        "face_value": 2
      },
      {
        "stockCode": "AJMERA",
        "stockName": "Ajmera Realty & Infra India Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2009",
        "paid_up_value": 10,
        "isis_number": "INE298G01027",
        "face_value": 10
      },
      {
        "stockCode": "AKSHARCHEM",
        "stockName": "AksharChem India Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAR-2017",
        "paid_up_value": 10,
        "isis_number": "INE542B01011",
        "face_value": 10
      },
      {
        "stockCode": "AKSHOPTFBR",
        "stockName": "Aksh Optifibre Limited",
        "Series": "EQ",
        "date_of_listing": "18-AUG-2000",
        "paid_up_value": 5,
        "isis_number": "INE523B01011",
        "face_value": 5
      },
      {
        "stockCode": "AKZOINDIA",
        "stockName": "Akzo Nobel India Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2001",
        "paid_up_value": 10,
        "isis_number": "INE133A01011",
        "face_value": 10
      },
      {
        "stockCode": "ALANKIT",
        "stockName": "Alankit Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUN-2015",
        "paid_up_value": 1,
        "isis_number": "INE914E01040",
        "face_value": 1
      },
      {
        "stockCode": "ALBERTDAVD",
        "stockName": "Albert David Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE155C01010",
        "face_value": 10
      },
      {
        "stockCode": "ALBK",
        "stockName": "Allahabad Bank",
        "Series": "EQ",
        "date_of_listing": "29-NOV-2002",
        "paid_up_value": 10,
        "isis_number": "INE428A01015",
        "face_value": 10
      },
      {
        "stockCode": "ALCHEM",
        "stockName": "Alchemist Limited",
        "Series": "BE",
        "date_of_listing": "31-JUL-2007",
        "paid_up_value": 10,
        "isis_number": "INE964B01033",
        "face_value": 10
      },
      {
        "stockCode": "ALEMBICLTD",
        "stockName": "Alembic Limited",
        "Series": "EQ",
        "date_of_listing": "22-SEP-1999",
        "paid_up_value": 2,
        "isis_number": "INE426A01027",
        "face_value": 2
      },
      {
        "stockCode": "ALICON",
        "stockName": "Alicon Castalloy Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2006",
        "paid_up_value": 5,
        "isis_number": "INE062D01024",
        "face_value": 5
      },
      {
        "stockCode": "ALKALI",
        "stockName": "Alkali Metals Limited",
        "Series": "EQ",
        "date_of_listing": "06-NOV-2008",
        "paid_up_value": 10,
        "isis_number": "INE773I01017",
        "face_value": 10
      },
      {
        "stockCode": "ALKEM",
        "stockName": "Alkem Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "23-DEC-2015",
        "paid_up_value": 2,
        "isis_number": "INE540L01014",
        "face_value": 2
      },
      {
        "stockCode": "ALKYLAMINE",
        "stockName": "Alkyl Amines Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "26-NOV-2007",
        "paid_up_value": 5,
        "isis_number": "INE150B01021",
        "face_value": 5
      },
      {
        "stockCode": "ALLCARGO",
        "stockName": "Allcargo Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "23-JUN-2006",
        "paid_up_value": 2,
        "isis_number": "INE418H01029",
        "face_value": 2
      },
      {
        "stockCode": "ALLSEC",
        "stockName": "Allsec Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2005",
        "paid_up_value": 10,
        "isis_number": "INE835G01018",
        "face_value": 10
      },
      {
        "stockCode": "ALMONDZ",
        "stockName": "Almondz Global Securities Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2008",
        "paid_up_value": 6,
        "isis_number": "INE326B01027",
        "face_value": 6
      },
      {
        "stockCode": "ALOKTEXT",
        "stockName": "Alok Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE270A01011",
        "face_value": 10
      },
      {
        "stockCode": "ALPA",
        "stockName": "Alpa Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "06-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE385I01010",
        "face_value": 10
      },
      {
        "stockCode": "ALPHAGEO",
        "stockName": "Alphageo (India) Limited",
        "Series": "EQ",
        "date_of_listing": "11-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE137C01018",
        "face_value": 10
      },
      {
        "stockCode": "ALPSINDUS",
        "stockName": "Alps Industries Limited",
        "Series": "BE",
        "date_of_listing": "24-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE093B01015",
        "face_value": 10
      },
      {
        "stockCode": "AMARAJABAT",
        "stockName": "Amara Raja Batteries Limited",
        "Series": "EQ",
        "date_of_listing": "05-SEP-2003",
        "paid_up_value": 1,
        "isis_number": "INE885A01032",
        "face_value": 1
      },
      {
        "stockCode": "AMBER",
        "stockName": "Amber Enterprises India Limited",
        "Series": "EQ",
        "date_of_listing": "30-JAN-2018",
        "paid_up_value": 10,
        "isis_number": "INE371P01015",
        "face_value": 10
      },
      {
        "stockCode": "AMBIKCO",
        "stockName": "Ambika Cotton Mills Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE540G01014",
        "face_value": 10
      },
      {
        "stockCode": "AMBUJACEM",
        "stockName": "Ambuja Cements Limited",
        "Series": "EQ",
        "date_of_listing": "18-FEB-1998",
        "paid_up_value": 2,
        "isis_number": "INE079A01024",
        "face_value": 2
      },
      {
        "stockCode": "AMDIND",
        "stockName": "AMD Industries Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE005I01014",
        "face_value": 10
      },
      {
        "stockCode": "AMJLAND",
        "stockName": "Amj Land Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE606A01024",
        "face_value": 2
      },
      {
        "stockCode": "AMRUTANJAN",
        "stockName": "Amrutanjan Health Care Limited",
        "Series": "EQ",
        "date_of_listing": "02-JAN-2015",
        "paid_up_value": 1,
        "isis_number": "INE098F01031",
        "face_value": 1
      },
      {
        "stockCode": "ANANTRAJ",
        "stockName": "Anant Raj Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-2006",
        "paid_up_value": 2,
        "isis_number": "INE242C01024",
        "face_value": 2
      },
      {
        "stockCode": "ANDHRABANK",
        "stockName": "Andhra Bank",
        "Series": "EQ",
        "date_of_listing": "04-APR-2001",
        "paid_up_value": 10,
        "isis_number": "INE434A01013",
        "face_value": 10
      },
      {
        "stockCode": "ANDHRACEMT",
        "stockName": "Andhra Cements Limited",
        "Series": "EQ",
        "date_of_listing": "08-NOV-2010",
        "paid_up_value": 10,
        "isis_number": "INE666E01012",
        "face_value": 10
      },
      {
        "stockCode": "ANDHRSUGAR",
        "stockName": "The Andhra Sugars Limited",
        "Series": "EQ",
        "date_of_listing": "01-NOV-1995",
        "paid_up_value": 10,
        "isis_number": "INE715B01013",
        "face_value": 10
      },
      {
        "stockCode": "ANIKINDS",
        "stockName": "Anik Industries Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-2008",
        "paid_up_value": 10,
        "isis_number": "INE087B01017",
        "face_value": 10
      },
      {
        "stockCode": "ANKITMETAL",
        "stockName": "Ankit Metal & Power Limited",
        "Series": "BE",
        "date_of_listing": "14-MAR-2013",
        "paid_up_value": 10,
        "isis_number": "INE106I01010",
        "face_value": 10
      },
      {
        "stockCode": "ANSALAPI",
        "stockName": "Ansal Properties & Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "27-JAN-2006",
        "paid_up_value": 5,
        "isis_number": "INE436A01026",
        "face_value": 5
      },
      {
        "stockCode": "ANSALHSG",
        "stockName": "Ansal Housing Limited",
        "Series": "EQ",
        "date_of_listing": "06-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE880B01015",
        "face_value": 10
      },
      {
        "stockCode": "ANTGRAPHIC",
        "stockName": "Antarctica Limited",
        "Series": "BE",
        "date_of_listing": "31-DEC-1997",
        "paid_up_value": 1,
        "isis_number": "INE414B01021",
        "face_value": 1
      },
      {
        "stockCode": "ANUP",
        "stockName": "The Anup Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAR-2019",
        "paid_up_value": 10,
        "isis_number": "INE294Z01018",
        "face_value": 10
      },
      {
        "stockCode": "APARINDS",
        "stockName": "Apar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "12-JUL-2004",
        "paid_up_value": 10,
        "isis_number": "INE372A01015",
        "face_value": 10
      },
      {
        "stockCode": "APCL",
        "stockName": "Anjani Portland Cement Limited",
        "Series": "EQ",
        "date_of_listing": "10-APR-2017",
        "paid_up_value": 10,
        "isis_number": "INE071F01012",
        "face_value": 10
      },
      {
        "stockCode": "APCOTEXIND",
        "stockName": "Apcotex Industries Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 5,
        "isis_number": "INE116A01024",
        "face_value": 5
      },
      {
        "stockCode": "APEX",
        "stockName": "Apex Frozen Foods Limited",
        "Series": "EQ",
        "date_of_listing": "04-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE346W01013",
        "face_value": 10
      },
      {
        "stockCode": "APLAPOLLO",
        "stockName": "APL Apollo Tubes Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2011",
        "paid_up_value": 10,
        "isis_number": "INE702C01019",
        "face_value": 10
      },
      {
        "stockCode": "APLLTD",
        "stockName": "Alembic Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "20-SEP-2011",
        "paid_up_value": 2,
        "isis_number": "INE901L01018",
        "face_value": 2
      },
      {
        "stockCode": "APOLLO",
        "stockName": "Apollo Micro Systems Limited",
        "Series": "EQ",
        "date_of_listing": "22-JAN-2018",
        "paid_up_value": 10,
        "isis_number": "INE713T01010",
        "face_value": 10
      },
      {
        "stockCode": "APOLLOHOSP",
        "stockName": "Apollo Hospitals Enterprise Limited",
        "Series": "EQ",
        "date_of_listing": "10-JAN-1996",
        "paid_up_value": 5,
        "isis_number": "INE437A01024",
        "face_value": 5
      },
      {
        "stockCode": "APOLLOTYRE",
        "stockName": "Apollo Tyres Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAY-1995",
        "paid_up_value": 1,
        "isis_number": "INE438A01022",
        "face_value": 1
      },
      {
        "stockCode": "APOLSINHOT",
        "stockName": "Apollo Sindoori Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-2015",
        "paid_up_value": 5,
        "isis_number": "INE451F01024",
        "face_value": 5
      },
      {
        "stockCode": "APTECHT",
        "stockName": "Aptech Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-2002",
        "paid_up_value": 10,
        "isis_number": "INE266F01018",
        "face_value": 10
      },
      {
        "stockCode": "ARCHIDPLY",
        "stockName": "Archidply Industries Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUL-2008",
        "paid_up_value": 10,
        "isis_number": "INE877I01016",
        "face_value": 10
      },
      {
        "stockCode": "ARCHIES",
        "stockName": "Archies Limited",
        "Series": "EQ",
        "date_of_listing": "02-SEP-1998",
        "paid_up_value": 2,
        "isis_number": "INE731A01020",
        "face_value": 2
      },
      {
        "stockCode": "ARCOTECH",
        "stockName": "Arcotech Limited",
        "Series": "EQ",
        "date_of_listing": "16-APR-2014",
        "paid_up_value": 2,
        "isis_number": "INE574I01035",
        "face_value": 2
      },
      {
        "stockCode": "ARENTERP",
        "stockName": "Rajdarshan Industries Limited",
        "Series": "EQ",
        "date_of_listing": "18-OCT-1995",
        "paid_up_value": 10,
        "isis_number": "INE610C01014",
        "face_value": 10
      },
      {
        "stockCode": "ARIES",
        "stockName": "Aries Agro Limited",
        "Series": "EQ",
        "date_of_listing": "11-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE298I01015",
        "face_value": 10
      },
      {
        "stockCode": "ARIHANT",
        "stockName": "Arihant Foundations & Housing Limited",
        "Series": "EQ",
        "date_of_listing": "26-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE413D01011",
        "face_value": 10
      },
      {
        "stockCode": "ARIHANTSUP",
        "stockName": "Arihant Superstructures Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAR-2017",
        "paid_up_value": 10,
        "isis_number": "INE643K01018",
        "face_value": 10
      },
      {
        "stockCode": "ARMANFIN",
        "stockName": "Arman Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE109C01017",
        "face_value": 10
      },
      {
        "stockCode": "AROGRANITE",
        "stockName": "Aro Granite Industries Limited",
        "Series": "EQ",
        "date_of_listing": "24-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE210C01013",
        "face_value": 10
      },
      {
        "stockCode": "ARROWGREEN",
        "stockName": "Arrow Greentech Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-2015",
        "paid_up_value": 10,
        "isis_number": "INE570D01018",
        "face_value": 10
      },
      {
        "stockCode": "ARROWTEX",
        "stockName": "Arrow Textiles Limited",
        "Series": "EQ",
        "date_of_listing": "11-MAY-2009",
        "paid_up_value": 10,
        "isis_number": "INE933J01015",
        "face_value": 10
      },
      {
        "stockCode": "ARSHIYA",
        "stockName": "Arshiya Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2009",
        "paid_up_value": 2,
        "isis_number": "INE968D01022",
        "face_value": 2
      },
      {
        "stockCode": "ARSSINFRA",
        "stockName": "ARSS Infrastructure Projects Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE267I01010",
        "face_value": 10
      },
      {
        "stockCode": "ARVIND",
        "stockName": "Arvind Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE034A01011",
        "face_value": 10
      },
      {
        "stockCode": "ARVINDFASN",
        "stockName": "Arvind Fashions Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAR-2019",
        "paid_up_value": 4,
        "isis_number": "INE955V01021",
        "face_value": 4
      },
      {
        "stockCode": "ARVSMART",
        "stockName": "Arvind SmartSpaces Limited",
        "Series": "EQ",
        "date_of_listing": "26-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE034S01021",
        "face_value": 10
      },
      {
        "stockCode": "ASAHIINDIA",
        "stockName": "Asahi India Glass Limited",
        "Series": "EQ",
        "date_of_listing": "18-MAR-1998",
        "paid_up_value": 1,
        "isis_number": "INE439A01020",
        "face_value": 1
      },
      {
        "stockCode": "ASAHISONG",
        "stockName": "Asahi Songwon Colors Limited",
        "Series": "EQ",
        "date_of_listing": "29-AUG-2011",
        "paid_up_value": 10,
        "isis_number": "INE228I01012",
        "face_value": 10
      },
      {
        "stockCode": "ASAL",
        "stockName": "Automotive Stampings and Assemblies Limited",
        "Series": "EQ",
        "date_of_listing": "12-MAR-2002",
        "paid_up_value": 10,
        "isis_number": "INE900C01027",
        "face_value": 10
      },
      {
        "stockCode": "ASHAPURMIN",
        "stockName": "Ashapura Minechem Limited",
        "Series": "EQ",
        "date_of_listing": "20-SEP-1995",
        "paid_up_value": 2,
        "isis_number": "INE348A01023",
        "face_value": 2
      },
      {
        "stockCode": "ASHIANA",
        "stockName": "Ashiana Housing Limited",
        "Series": "EQ",
        "date_of_listing": "29-JUN-2011",
        "paid_up_value": 2,
        "isis_number": "INE365D01021",
        "face_value": 2
      },
      {
        "stockCode": "ASHIMASYN",
        "stockName": "Ashima Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE440A01010",
        "face_value": 10
      },
      {
        "stockCode": "ASHOKA",
        "stockName": "Ashoka Buildcon Limited",
        "Series": "EQ",
        "date_of_listing": "14-OCT-2010",
        "paid_up_value": 5,
        "isis_number": "INE442H01029",
        "face_value": 5
      },
      {
        "stockCode": "ASHOKLEY",
        "stockName": "Ashok Leyland Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-1995",
        "paid_up_value": 1,
        "isis_number": "INE208A01029",
        "face_value": 1
      },
      {
        "stockCode": "ASIANHOTNR",
        "stockName": "Asian Hotels (North) Limited",
        "Series": "EQ",
        "date_of_listing": "07-APR-2010",
        "paid_up_value": 10,
        "isis_number": "INE363A01022",
        "face_value": 10
      },
      {
        "stockCode": "ASIANPAINT",
        "stockName": "Asian Paints Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAY-1995",
        "paid_up_value": 1,
        "isis_number": "INE021A01026",
        "face_value": 1
      },
      {
        "stockCode": "ASIANTILES",
        "stockName": "Asian Granito India Limited",
        "Series": "EQ",
        "date_of_listing": "23-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE022I01019",
        "face_value": 10
      },
      {
        "stockCode": "ASPINWALL",
        "stockName": "Aspinwall and Company Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE991I01015",
        "face_value": 10
      },
      {
        "stockCode": "ASSAMCO",
        "stockName": "Assam Company India Limited",
        "Series": "BE",
        "date_of_listing": "29-SEP-2006",
        "paid_up_value": 1,
        "isis_number": "INE442A01024",
        "face_value": 1
      },
      {
        "stockCode": "ASTEC",
        "stockName": "Astec LifeSciences Limited",
        "Series": "EQ",
        "date_of_listing": "25-NOV-2009",
        "paid_up_value": 10,
        "isis_number": "INE563J01010",
        "face_value": 10
      },
      {
        "stockCode": "ASTERDM",
        "stockName": "Aster DM Healthcare Limited",
        "Series": "EQ",
        "date_of_listing": "26-FEB-2018",
        "paid_up_value": 10,
        "isis_number": "INE914M01019",
        "face_value": 10
      },
      {
        "stockCode": "ASTRAL",
        "stockName": "Astral Poly Technik Limited",
        "Series": "EQ",
        "date_of_listing": "20-MAR-2007",
        "paid_up_value": 1,
        "isis_number": "INE006I01046",
        "face_value": 1
      },
      {
        "stockCode": "ASTRAMICRO",
        "stockName": "Astra Microwave Products Limited",
        "Series": "EQ",
        "date_of_listing": "01-NOV-2004",
        "paid_up_value": 2,
        "isis_number": "INE386C01029",
        "face_value": 2
      },
      {
        "stockCode": "ASTRAZEN",
        "stockName": "AstraZeneca Pharma India Limited",
        "Series": "EQ",
        "date_of_listing": "04-MAY-2001",
        "paid_up_value": 2,
        "isis_number": "INE203A01020",
        "face_value": 2
      },
      {
        "stockCode": "ASTRON",
        "stockName": "Astron Paper & Board Mill Limited",
        "Series": "EQ",
        "date_of_listing": "29-DEC-2017",
        "paid_up_value": 10,
        "isis_number": "INE646X01014",
        "face_value": 10
      },
      {
        "stockCode": "ATFL",
        "stockName": "Agro Tech Foods Limited",
        "Series": "EQ",
        "date_of_listing": "06-DEC-2002",
        "paid_up_value": 10,
        "isis_number": "INE209A01019",
        "face_value": 10
      },
      {
        "stockCode": "ATLANTA",
        "stockName": "Atlanta  Limited",
        "Series": "EQ",
        "date_of_listing": "25-SEP-2006",
        "paid_up_value": 2,
        "isis_number": "INE285H01022",
        "face_value": 2
      },
      {
        "stockCode": "ATLASCYCLE",
        "stockName": "Atlas Cycles (Haryana) Limited",
        "Series": "BE",
        "date_of_listing": "23-OCT-1996",
        "paid_up_value": 5,
        "isis_number": "INE446A01025",
        "face_value": 5
      },
      {
        "stockCode": "ATUL",
        "stockName": "Atul Limited",
        "Series": "EQ",
        "date_of_listing": "06-MAY-1998",
        "paid_up_value": 10,
        "isis_number": "INE100A01010",
        "face_value": 10
      },
      {
        "stockCode": "ATULAUTO",
        "stockName": "Atul Auto Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUN-2013",
        "paid_up_value": 5,
        "isis_number": "INE951D01028",
        "face_value": 5
      },
      {
        "stockCode": "AUBANK",
        "stockName": "AU Small Finance Bank Limited",
        "Series": "EQ",
        "date_of_listing": "10-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE949L01017",
        "face_value": 10
      },
      {
        "stockCode": "AURIONPRO",
        "stockName": "Aurionpro Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "25-OCT-2005",
        "paid_up_value": 10,
        "isis_number": "INE132H01018",
        "face_value": 10
      },
      {
        "stockCode": "AUROPHARMA",
        "stockName": "Aurobindo Pharma Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-2000",
        "paid_up_value": 1,
        "isis_number": "INE406A01037",
        "face_value": 1
      },
      {
        "stockCode": "AUSOMENT",
        "stockName": "Ausom Enterprise Limited",
        "Series": "EQ",
        "date_of_listing": "17-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE218C01016",
        "face_value": 10
      },
      {
        "stockCode": "AUTOAXLES",
        "stockName": "Automotive Axles Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE449A01011",
        "face_value": 10
      },
      {
        "stockCode": "AUTOIND",
        "stockName": "Autoline Industries Limited",
        "Series": "EQ",
        "date_of_listing": "31-JAN-2007",
        "paid_up_value": 10,
        "isis_number": "INE718H01014",
        "face_value": 10
      },
      {
        "stockCode": "AUTOLITIND",
        "stockName": "Autolite (India) Limited",
        "Series": "BZ",
        "date_of_listing": "31-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE448A01013",
        "face_value": 10
      },
      {
        "stockCode": "AVADHSUGAR",
        "stockName": "Avadh Sugar & Energy Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE349W01017",
        "face_value": 10
      },
      {
        "stockCode": "AVANTIFEED",
        "stockName": "Avanti Feeds Limited",
        "Series": "EQ",
        "date_of_listing": "15-APR-2015",
        "paid_up_value": 1,
        "isis_number": "INE871C01038",
        "face_value": 1
      },
      {
        "stockCode": "AVTNPL",
        "stockName": "AVT Natural Products Limited",
        "Series": "EQ",
        "date_of_listing": "10-JAN-2007",
        "paid_up_value": 1,
        "isis_number": "INE488D01021",
        "face_value": 1
      },
      {
        "stockCode": "AXISBANK",
        "stockName": "Axis Bank Limited",
        "Series": "EQ",
        "date_of_listing": "16-NOV-1998",
        "paid_up_value": 2,
        "isis_number": "INE238A01034",
        "face_value": 2
      },
      {
        "stockCode": "AXISCADES",
        "stockName": "AXISCADES Engineering Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "21-DEC-2000",
        "paid_up_value": 5,
        "isis_number": "INE555B01013",
        "face_value": 5
      },
      {
        "stockCode": "AYMSYNTEX",
        "stockName": "AYM Syntex Limited",
        "Series": "EQ",
        "date_of_listing": "14-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE193B01039",
        "face_value": 10
      },
      {
        "stockCode": "BAFNAPHARM",
        "stockName": "Bafna Pharmaceuticals Limited",
        "Series": "BE",
        "date_of_listing": "12-NOV-2012",
        "paid_up_value": 10,
        "isis_number": "INE878I01014",
        "face_value": 10
      },
      {
        "stockCode": "BAGFILMS",
        "stockName": "B.A.G Films and Media Limited",
        "Series": "EQ",
        "date_of_listing": "17-OCT-2003",
        "paid_up_value": 2,
        "isis_number": "INE116D01028",
        "face_value": 2
      },
      {
        "stockCode": "BAJAJ-AUTO",
        "stockName": "Bajaj Auto Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAY-2008",
        "paid_up_value": 10,
        "isis_number": "INE917I01010",
        "face_value": 10
      },
      {
        "stockCode": "BAJAJCON",
        "stockName": "Bajaj Consumer Care Limited",
        "Series": "EQ",
        "date_of_listing": "18-AUG-2010",
        "paid_up_value": 1,
        "isis_number": "INE933K01021",
        "face_value": 1
      },
      {
        "stockCode": "BAJAJELEC",
        "stockName": "Bajaj Electricals Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-2007",
        "paid_up_value": 2,
        "isis_number": "INE193E01025",
        "face_value": 2
      },
      {
        "stockCode": "BAJAJFINSV",
        "stockName": "Bajaj Finserv Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAY-2008",
        "paid_up_value": 5,
        "isis_number": "INE918I01018",
        "face_value": 5
      },
      {
        "stockCode": "BAJAJHIND",
        "stockName": "Bajaj Hindusthan Sugar Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 1,
        "isis_number": "INE306A01021",
        "face_value": 1
      },
      {
        "stockCode": "BAJAJHLDNG",
        "stockName": "Bajaj Holdings & Investment Limited",
        "Series": "EQ",
        "date_of_listing": "15-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE118A01012",
        "face_value": 10
      },
      {
        "stockCode": "BAJFINANCE",
        "stockName": "Bajaj Finance Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2003",
        "paid_up_value": 2,
        "isis_number": "INE296A01024",
        "face_value": 2
      },
      {
        "stockCode": "BALAJITELE",
        "stockName": "Balaji Telefilms Limited",
        "Series": "EQ",
        "date_of_listing": "22-NOV-2000",
        "paid_up_value": 2,
        "isis_number": "INE794B01026",
        "face_value": 2
      },
      {
        "stockCode": "BALAMINES",
        "stockName": "Balaji Amines Limited",
        "Series": "EQ",
        "date_of_listing": "05-APR-2007",
        "paid_up_value": 2,
        "isis_number": "INE050E01027",
        "face_value": 2
      },
      {
        "stockCode": "BALAXI",
        "stockName": "Balaxi Ventures Limited",
        "Series": "BE",
        "date_of_listing": "30-NOV-2015",
        "paid_up_value": 10,
        "isis_number": "INE618N01014",
        "face_value": 10
      },
      {
        "stockCode": "BALKRISHNA",
        "stockName": "Balkrishna Paper Mills Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2015",
        "paid_up_value": 10,
        "isis_number": "INE875R01011",
        "face_value": 10
      },
      {
        "stockCode": "BALKRISIND",
        "stockName": "Balkrishna Industries Limited",
        "Series": "EQ",
        "date_of_listing": "27-JAN-2006",
        "paid_up_value": 2,
        "isis_number": "INE787D01026",
        "face_value": 2
      },
      {
        "stockCode": "BALLARPUR",
        "stockName": "Ballarpur Industries Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAR-2008",
        "paid_up_value": 2,
        "isis_number": "INE294A01037",
        "face_value": 2
      },
      {
        "stockCode": "BALMLAWRIE",
        "stockName": "Balmer Lawrie & Company Limited",
        "Series": "EQ",
        "date_of_listing": "06-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE164A01016",
        "face_value": 10
      },
      {
        "stockCode": "BALPHARMA",
        "stockName": "Bal Pharma Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-2006",
        "paid_up_value": 10,
        "isis_number": "INE083D01012",
        "face_value": 10
      },
      {
        "stockCode": "BALRAMCHIN",
        "stockName": "Balrampur Chini Mills Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 1,
        "isis_number": "INE119A01028",
        "face_value": 1
      },
      {
        "stockCode": "BANARBEADS",
        "stockName": "Banaras Beads Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE655B01011",
        "face_value": 10
      },
      {
        "stockCode": "BANARISUG",
        "stockName": "Bannari Amman Sugars Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE459A01010",
        "face_value": 10
      },
      {
        "stockCode": "BANCOINDIA",
        "stockName": "Banco Products (I) Limited",
        "Series": "EQ",
        "date_of_listing": "22-DEC-2006",
        "paid_up_value": 2,
        "isis_number": "INE213C01025",
        "face_value": 2
      },
      {
        "stockCode": "BANDHANBNK",
        "stockName": "Bandhan Bank Limited",
        "Series": "EQ",
        "date_of_listing": "27-MAR-2018",
        "paid_up_value": 10,
        "isis_number": "INE545U01014",
        "face_value": 10
      },
      {
        "stockCode": "BANG",
        "stockName": "Bang Overseas Limited",
        "Series": "EQ",
        "date_of_listing": "20-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE863I01016",
        "face_value": 10
      },
      {
        "stockCode": "BANKBARODA",
        "stockName": "Bank of Baroda",
        "Series": "EQ",
        "date_of_listing": "19-FEB-1997",
        "paid_up_value": 2,
        "isis_number": "INE028A01039",
        "face_value": 2
      },
      {
        "stockCode": "BANKINDIA",
        "stockName": "Bank of India",
        "Series": "EQ",
        "date_of_listing": "30-APR-1997",
        "paid_up_value": 10,
        "isis_number": "INE084A01016",
        "face_value": 10
      },
      {
        "stockCode": "BANSWRAS",
        "stockName": "Banswara Syntex Limited",
        "Series": "EQ",
        "date_of_listing": "11-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE629D01012",
        "face_value": 10
      },
      {
        "stockCode": "BARTRONICS",
        "stockName": "Bartronics India Limited",
        "Series": "EQ",
        "date_of_listing": "12-JAN-2006",
        "paid_up_value": 10,
        "isis_number": "INE855F01034",
        "face_value": 10
      },
      {
        "stockCode": "BASF",
        "stockName": "BASF India Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE373A01013",
        "face_value": 10
      },
      {
        "stockCode": "BASML",
        "stockName": "Bannari Amman Spinning Mills Limited",
        "Series": "EQ",
        "date_of_listing": "14-NOV-2005",
        "paid_up_value": 10,
        "isis_number": "INE186H01014",
        "face_value": 10
      },
      {
        "stockCode": "BATAINDIA",
        "stockName": "Bata India Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUN-2003",
        "paid_up_value": 5,
        "isis_number": "INE176A01028",
        "face_value": 5
      },
      {
        "stockCode": "BAYERCROP",
        "stockName": "Bayer Cropscience Limited",
        "Series": "EQ",
        "date_of_listing": "08-JAN-2010",
        "paid_up_value": 10,
        "isis_number": "INE462A01022",
        "face_value": 10
      },
      {
        "stockCode": "BBL",
        "stockName": "Bharat Bijlee Limited",
        "Series": "EQ",
        "date_of_listing": "21-NOV-2006",
        "paid_up_value": 10,
        "isis_number": "INE464A01028",
        "face_value": 10
      },
      {
        "stockCode": "BBTC",
        "stockName": "Bombay Burmah Trading Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 2,
        "isis_number": "INE050A01025",
        "face_value": 2
      },
      {
        "stockCode": "BCG",
        "stockName": "Brightcom Group Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-2015",
        "paid_up_value": 2,
        "isis_number": "INE425B01027",
        "face_value": 2
      },
      {
        "stockCode": "BDL",
        "stockName": "Bharat Dynamics Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2018",
        "paid_up_value": 10,
        "isis_number": "INE171Z01018",
        "face_value": 10
      },
      {
        "stockCode": "BEARDSELL",
        "stockName": "Beardsell Limited",
        "Series": "EQ",
        "date_of_listing": "13-JAN-2015",
        "paid_up_value": 2,
        "isis_number": "INE520H01022",
        "face_value": 2
      },
      {
        "stockCode": "BEDMUTHA",
        "stockName": "Bedmutha Industries Limited",
        "Series": "EQ",
        "date_of_listing": "14-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE844K01012",
        "face_value": 10
      },
      {
        "stockCode": "BEL",
        "stockName": "Bharat Electronics Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-2000",
        "paid_up_value": 1,
        "isis_number": "INE263A01024",
        "face_value": 1
      },
      {
        "stockCode": "BEML",
        "stockName": "BEML Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-2003",
        "paid_up_value": 10,
        "isis_number": "INE258A01016",
        "face_value": 10
      },
      {
        "stockCode": "BEPL",
        "stockName": "Bhansali Engineering Polymers Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAR-2005",
        "paid_up_value": 1,
        "isis_number": "INE922A01025",
        "face_value": 1
      },
      {
        "stockCode": "BERGEPAINT",
        "stockName": "Berger Paints (I) Limited",
        "Series": "EQ",
        "date_of_listing": "24-NOV-1999",
        "paid_up_value": 1,
        "isis_number": "INE463A01038",
        "face_value": 1
      },
      {
        "stockCode": "BFINVEST",
        "stockName": "BF Investment Limited",
        "Series": "EQ",
        "date_of_listing": "14-JAN-2011",
        "paid_up_value": 5,
        "isis_number": "INE878K01010",
        "face_value": 5
      },
      {
        "stockCode": "BFUTILITIE",
        "stockName": "BF Utilities Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAY-2007",
        "paid_up_value": 5,
        "isis_number": "INE243D01012",
        "face_value": 5
      },
      {
        "stockCode": "BGLOBAL",
        "stockName": "Bharatiya Global Infomedia Limited",
        "Series": "BE",
        "date_of_listing": "28-JUL-2011",
        "paid_up_value": 10,
        "isis_number": "INE224M01013",
        "face_value": 10
      },
      {
        "stockCode": "BGRENERGY",
        "stockName": "BGR Energy Systems Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE661I01014",
        "face_value": 10
      },
      {
        "stockCode": "BHAGERIA",
        "stockName": "Bhageria Industries Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2016",
        "paid_up_value": 5,
        "isis_number": "INE354C01027",
        "face_value": 5
      },
      {
        "stockCode": "BHAGYANGR",
        "stockName": "Bhagyanagar India Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-2017",
        "paid_up_value": 2,
        "isis_number": "INE458B01036",
        "face_value": 2
      },
      {
        "stockCode": "BHAGYAPROP",
        "stockName": "Bhagyanagar Properties Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUL-2017",
        "paid_up_value": 2,
        "isis_number": "INE363W01018",
        "face_value": 2
      },
      {
        "stockCode": "BHANDARI",
        "stockName": "Bhandari Hosiery Exports Limited",
        "Series": "EQ",
        "date_of_listing": "30-JAN-2017",
        "paid_up_value": 1,
        "isis_number": "INE474E01029",
        "face_value": 1
      },
      {
        "stockCode": "BHARATFIN",
        "stockName": "Bharat Financial Inclusion Limited",
        "Series": "EQ",
        "date_of_listing": "16-AUG-2010",
        "paid_up_value": 10,
        "isis_number": "INE180K01011",
        "face_value": 10
      },
      {
        "stockCode": "BHARATFORG",
        "stockName": "Bharat Forge Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2003",
        "paid_up_value": 2,
        "isis_number": "INE465A01025",
        "face_value": 2
      },
      {
        "stockCode": "BHARATGEAR",
        "stockName": "Bharat Gears Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE561C01019",
        "face_value": 10
      },
      {
        "stockCode": "BHARATRAS",
        "stockName": "Bharat Rasayan Limited",
        "Series": "EQ",
        "date_of_listing": "11-OCT-1995",
        "paid_up_value": 10,
        "isis_number": "INE838B01013",
        "face_value": 10
      },
      {
        "stockCode": "BHARATWIRE",
        "stockName": "Bharat Wire Ropes Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2016",
        "paid_up_value": 10,
        "isis_number": "INE316L01019",
        "face_value": 10
      },
      {
        "stockCode": "BHARTIARTL",
        "stockName": "Bharti Airtel Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-2002",
        "paid_up_value": 5,
        "isis_number": "INE397D01024",
        "face_value": 5
      },
      {
        "stockCode": "BHEL",
        "stockName": "Bharat Heavy Electricals Limited",
        "Series": "EQ",
        "date_of_listing": "11-NOV-2003",
        "paid_up_value": 2,
        "isis_number": "INE257A01026",
        "face_value": 2
      },
      {
        "stockCode": "BIGBLOC",
        "stockName": "Bigbloc Construction Limited",
        "Series": "EQ",
        "date_of_listing": "02-SEP-2016",
        "paid_up_value": 10,
        "isis_number": "INE412U01017",
        "face_value": 10
      },
      {
        "stockCode": "BIL",
        "stockName": "Bhartiya International Limited",
        "Series": "BE",
        "date_of_listing": "12-APR-2000",
        "paid_up_value": 10,
        "isis_number": "INE828A01016",
        "face_value": 10
      },
      {
        "stockCode": "BILENERGY",
        "stockName": "Bil Energy Systems Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-2011",
        "paid_up_value": 1,
        "isis_number": "INE607L01029",
        "face_value": 1
      },
      {
        "stockCode": "BINANIIND",
        "stockName": "Binani Industries Limited",
        "Series": "BZ",
        "date_of_listing": "27-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE071A01013",
        "face_value": 10
      },
      {
        "stockCode": "BINDALAGRO",
        "stockName": "Oswal Chemicals & Fertilizers Limited",
        "Series": "EQ",
        "date_of_listing": "28-AUG-1996",
        "paid_up_value": 10,
        "isis_number": "INE143A01010",
        "face_value": 10
      },
      {
        "stockCode": "BIOCON",
        "stockName": "Biocon Limited",
        "Series": "EQ",
        "date_of_listing": "07-APR-2004",
        "paid_up_value": 5,
        "isis_number": "INE376G01013",
        "face_value": 5
      },
      {
        "stockCode": "BIOFILCHEM",
        "stockName": "Biofil Chemicals & Pharmaceuticals Limited",
        "Series": "BE",
        "date_of_listing": "12-JUN-1996",
        "paid_up_value": 10,
        "isis_number": "INE829A01014",
        "face_value": 10
      },
      {
        "stockCode": "BIRLACABLE",
        "stockName": "Birla Cable Limited",
        "Series": "EQ",
        "date_of_listing": "06-DEC-1995",
        "paid_up_value": 10,
        "isis_number": "INE800A01015",
        "face_value": 10
      },
      {
        "stockCode": "BIRLACORPN",
        "stockName": "Birla Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE340A01012",
        "face_value": 10
      },
      {
        "stockCode": "BIRLAMONEY",
        "stockName": "Aditya Birla Money Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2008",
        "paid_up_value": 1,
        "isis_number": "INE865C01022",
        "face_value": 1
      },
      {
        "stockCode": "BKMINDST",
        "stockName": "Bkm Industries Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2015",
        "paid_up_value": 1,
        "isis_number": "INE831Q01016",
        "face_value": 1
      },
      {
        "stockCode": "BLBLIMITED",
        "stockName": "BLB Limited",
        "Series": "BE",
        "date_of_listing": "31-MAY-2000",
        "paid_up_value": 1,
        "isis_number": "INE791A01024",
        "face_value": 1
      },
      {
        "stockCode": "BLISSGVS",
        "stockName": "Bliss GVS Pharma Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUL-2010",
        "paid_up_value": 1,
        "isis_number": "INE416D01022",
        "face_value": 1
      },
      {
        "stockCode": "BLKASHYAP",
        "stockName": "B. L. Kashyap and Sons Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAR-2006",
        "paid_up_value": 1,
        "isis_number": "INE350H01032",
        "face_value": 1
      },
      {
        "stockCode": "BLS",
        "stockName": "BLS International Services Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-2016",
        "paid_up_value": 1,
        "isis_number": "INE153T01027",
        "face_value": 1
      },
      {
        "stockCode": "BLUEBLENDS",
        "stockName": "Blue Blends (I) Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE113O01014",
        "face_value": 10
      },
      {
        "stockCode": "BLUECOAST",
        "stockName": "Blue Coast Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "16-FEB-2000",
        "paid_up_value": 10,
        "isis_number": "INE472B01011",
        "face_value": 10
      },
      {
        "stockCode": "BLUEDART",
        "stockName": "Blue Dart Express Limited",
        "Series": "EQ",
        "date_of_listing": "12-DEC-2002",
        "paid_up_value": 10,
        "isis_number": "INE233B01017",
        "face_value": 10
      },
      {
        "stockCode": "BLUESTARCO",
        "stockName": "Blue Star Limited",
        "Series": "EQ",
        "date_of_listing": "15-JUN-2000",
        "paid_up_value": 2,
        "isis_number": "INE472A01039",
        "face_value": 2
      },
      {
        "stockCode": "BODALCHEM",
        "stockName": "Bodal Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "22-AUG-2011",
        "paid_up_value": 2,
        "isis_number": "INE338D01028",
        "face_value": 2
      },
      {
        "stockCode": "BOMDYEING",
        "stockName": "Bombay Dyeing & Mfg Company Limited",
        "Series": "EQ",
        "date_of_listing": "26-APR-1995",
        "paid_up_value": 2,
        "isis_number": "INE032A01023",
        "face_value": 2
      },
      {
        "stockCode": "BOROSIL",
        "stockName": "Borosil Glass Works Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-2018",
        "paid_up_value": 1,
        "isis_number": "INE666D01022",
        "face_value": 1
      },
      {
        "stockCode": "BOSCHLTD",
        "stockName": "Bosch Limited",
        "Series": "EQ",
        "date_of_listing": "12-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE323A01026",
        "face_value": 10
      },
      {
        "stockCode": "BPCL",
        "stockName": "Bharat Petroleum Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "13-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE029A01011",
        "face_value": 10
      },
      {
        "stockCode": "BPL",
        "stockName": "BPL Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-1995",
        "paid_up_value": 10,
        "isis_number": "INE110A01019",
        "face_value": 10
      },
      {
        "stockCode": "BRFL",
        "stockName": "Bombay Rayon Fashions Limited",
        "Series": "BE",
        "date_of_listing": "05-DEC-2005",
        "paid_up_value": 10,
        "isis_number": "INE589G01011",
        "face_value": 10
      },
      {
        "stockCode": "BRIGADE",
        "stockName": "Brigade Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "31-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE791I01019",
        "face_value": 10
      },
      {
        "stockCode": "BRITANNIA",
        "stockName": "Britannia Industries Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-1998",
        "paid_up_value": 1,
        "isis_number": "INE216A01030",
        "face_value": 1
      },
      {
        "stockCode": "BRNL",
        "stockName": "Bharat Road Network Limited",
        "Series": "EQ",
        "date_of_listing": "18-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE727S01012",
        "face_value": 10
      },
      {
        "stockCode": "BROOKS",
        "stockName": "Brooks Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "05-SEP-2011",
        "paid_up_value": 10,
        "isis_number": "INE650L01011",
        "face_value": 10
      },
      {
        "stockCode": "BSE",
        "stockName": "BSE Limited",
        "Series": "EQ",
        "date_of_listing": "03-FEB-2017",
        "paid_up_value": 2,
        "isis_number": "INE118H01025",
        "face_value": 2
      },
      {
        "stockCode": "BSELINFRA",
        "stockName": "BSEL Infrastructure Realty Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2001",
        "paid_up_value": 10,
        "isis_number": "INE395A01016",
        "face_value": 10
      },
      {
        "stockCode": "BSL",
        "stockName": "BSL Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE594B01012",
        "face_value": 10
      },
      {
        "stockCode": "BSOFT",
        "stockName": "BIRLASOFT LIMITED",
        "Series": "EQ",
        "date_of_listing": "24-NOV-1999",
        "paid_up_value": 2,
        "isis_number": "INE836A01035",
        "face_value": 2
      },
      {
        "stockCode": "BURNPUR",
        "stockName": "Burnpur Cement Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE817H01014",
        "face_value": 10
      },
      {
        "stockCode": "BUTTERFLY",
        "stockName": "Butterfly Gandhimathi Appliances Limited",
        "Series": "EQ",
        "date_of_listing": "28-APR-2014",
        "paid_up_value": 10,
        "isis_number": "INE295F01017",
        "face_value": 10
      },
      {
        "stockCode": "BVCL",
        "stockName": "Barak Valley Cements Limited",
        "Series": "BE",
        "date_of_listing": "23-NOV-2007",
        "paid_up_value": 10,
        "isis_number": "INE139I01011",
        "face_value": 10
      },
      {
        "stockCode": "BYKE",
        "stockName": "The Byke Hospitality Ltd",
        "Series": "EQ",
        "date_of_listing": "15-APR-2015",
        "paid_up_value": 10,
        "isis_number": "INE319B01014",
        "face_value": 10
      },
      {
        "stockCode": "CADILAHC",
        "stockName": "Cadila Healthcare Limited",
        "Series": "EQ",
        "date_of_listing": "18-APR-2000",
        "paid_up_value": 1,
        "isis_number": "INE010B01027",
        "face_value": 1
      },
      {
        "stockCode": "CALSOFT",
        "stockName": "California Software Company Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2000",
        "paid_up_value": 10,
        "isis_number": "INE526B01014",
        "face_value": 10
      },
      {
        "stockCode": "CAMLINFINE",
        "stockName": "Camlin Fine Sciences Limited",
        "Series": "EQ",
        "date_of_listing": "20-JAN-2015",
        "paid_up_value": 1,
        "isis_number": "INE052I01032",
        "face_value": 1
      },
      {
        "stockCode": "CANBK",
        "stockName": "Canara Bank",
        "Series": "EQ",
        "date_of_listing": "23-DEC-2002",
        "paid_up_value": 10,
        "isis_number": "INE476A01014",
        "face_value": 10
      },
      {
        "stockCode": "CANDC",
        "stockName": "C & C Constructions Limited",
        "Series": "BZ",
        "date_of_listing": "26-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE874H01015",
        "face_value": 10
      },
      {
        "stockCode": "CANFINHOME",
        "stockName": "Can Fin Homes Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 2,
        "isis_number": "INE477A01020",
        "face_value": 2
      },
      {
        "stockCode": "CANTABIL",
        "stockName": "Cantabil Retail India Limited",
        "Series": "EQ",
        "date_of_listing": "12-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE068L01016",
        "face_value": 10
      },
      {
        "stockCode": "CAPACITE",
        "stockName": "Capacit'e Infraprojects Limited",
        "Series": "EQ",
        "date_of_listing": "25-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE264T01014",
        "face_value": 10
      },
      {
        "stockCode": "CAPLIPOINT",
        "stockName": "Caplin Point Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "23-JUN-2014",
        "paid_up_value": 2,
        "isis_number": "INE475E01026",
        "face_value": 2
      },
      {
        "stockCode": "CAPTRUST",
        "stockName": "Capital Trust Limited",
        "Series": "EQ",
        "date_of_listing": "16-JAN-2017",
        "paid_up_value": 10,
        "isis_number": "INE707C01018",
        "face_value": 10
      },
      {
        "stockCode": "CARBORUNIV",
        "stockName": "Carborundum Universal Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 1,
        "isis_number": "INE120A01034",
        "face_value": 1
      },
      {
        "stockCode": "CAREERP",
        "stockName": "Career Point Limited",
        "Series": "EQ",
        "date_of_listing": "06-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE521J01018",
        "face_value": 10
      },
      {
        "stockCode": "CARERATING",
        "stockName": "CARE Ratings Limited",
        "Series": "EQ",
        "date_of_listing": "26-DEC-2012",
        "paid_up_value": 10,
        "isis_number": "INE752H01013",
        "face_value": 10
      },
      {
        "stockCode": "CASTEXTECH",
        "stockName": "Castex Technologies Limited",
        "Series": "BE",
        "date_of_listing": "27-JUN-2005",
        "paid_up_value": 2,
        "isis_number": "INE068D01021",
        "face_value": 2
      },
      {
        "stockCode": "CASTROLIND",
        "stockName": "Castrol India Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAR-2014",
        "paid_up_value": 5,
        "isis_number": "INE172A01027",
        "face_value": 5
      },
      {
        "stockCode": "CCHHL",
        "stockName": "Country Club Hospitality & Holidays Limited",
        "Series": "BE",
        "date_of_listing": "03-FEB-2015",
        "paid_up_value": 2,
        "isis_number": "INE652F01027",
        "face_value": 2
      },
      {
        "stockCode": "CCL",
        "stockName": "CCL Products (India) Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUN-2004",
        "paid_up_value": 2,
        "isis_number": "INE421D01022",
        "face_value": 2
      },
      {
        "stockCode": "CDSL",
        "stockName": "Central Depository Services (India) Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUN-2017",
        "paid_up_value": 10,
        "isis_number": "INE736A01011",
        "face_value": 10
      },
      {
        "stockCode": "CEATLTD",
        "stockName": "CEAT Limited",
        "Series": "EQ",
        "date_of_listing": "01-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE482A01020",
        "face_value": 10
      },
      {
        "stockCode": "CEBBCO",
        "stockName": "Commercial Engineers & Body Builders Co Limited",
        "Series": "EQ",
        "date_of_listing": "18-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE209L01016",
        "face_value": 10
      },
      {
        "stockCode": "CELEBRITY",
        "stockName": "Celebrity Fashions Limited",
        "Series": "EQ",
        "date_of_listing": "12-JAN-2006",
        "paid_up_value": 10,
        "isis_number": "INE185H01016",
        "face_value": 10
      },
      {
        "stockCode": "CELESTIAL",
        "stockName": "Celestial Biolabs Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUL-2007",
        "paid_up_value": 10,
        "isis_number": "INE221I01017",
        "face_value": 10
      },
      {
        "stockCode": "CENTENKA",
        "stockName": "Century Enka Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE485A01015",
        "face_value": 10
      },
      {
        "stockCode": "CENTEXT",
        "stockName": "Century Extrusions Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUL-2004",
        "paid_up_value": 1,
        "isis_number": "INE281A01026",
        "face_value": 1
      },
      {
        "stockCode": "CENTRALBK",
        "stockName": "Central Bank of India",
        "Series": "EQ",
        "date_of_listing": "21-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE483A01010",
        "face_value": 10
      },
      {
        "stockCode": "CENTRUM",
        "stockName": "Centrum Capital Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2018",
        "paid_up_value": 1,
        "isis_number": "INE660C01027",
        "face_value": 1
      },
      {
        "stockCode": "CENTUM",
        "stockName": "Centum Electronics Limited",
        "Series": "EQ",
        "date_of_listing": "05-OCT-2007",
        "paid_up_value": 10,
        "isis_number": "INE320B01020",
        "face_value": 10
      },
      {
        "stockCode": "CENTURYPLY",
        "stockName": "Century Plyboards (India) Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2006",
        "paid_up_value": 1,
        "isis_number": "INE348B01021",
        "face_value": 1
      },
      {
        "stockCode": "CENTURYTEX",
        "stockName": "Century Textiles & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUN-2003",
        "paid_up_value": 10,
        "isis_number": "INE055A01016",
        "face_value": 10
      },
      {
        "stockCode": "CERA",
        "stockName": "Cera Sanitaryware Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-2007",
        "paid_up_value": 5,
        "isis_number": "INE739E01017",
        "face_value": 5
      },
      {
        "stockCode": "CEREBRAINT",
        "stockName": "Cerebra Integrated Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUN-2013",
        "paid_up_value": 10,
        "isis_number": "INE345B01019",
        "face_value": 10
      },
      {
        "stockCode": "CESC",
        "stockName": "CESC Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE486A01013",
        "face_value": 10
      },
      {
        "stockCode": "CESCVENT",
        "stockName": "CESC Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "25-JAN-2019",
        "paid_up_value": 10,
        "isis_number": "INE425Y01011",
        "face_value": 10
      },
      {
        "stockCode": "CGCL",
        "stockName": "Capri Global Capital Limited",
        "Series": "EQ",
        "date_of_listing": "29-OCT-2010",
        "paid_up_value": 2,
        "isis_number": "INE180C01026",
        "face_value": 2
      },
      {
        "stockCode": "CGPOWER",
        "stockName": "CG Power and Industrial Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAR-1995",
        "paid_up_value": 2,
        "isis_number": "INE067A01029",
        "face_value": 2
      },
      {
        "stockCode": "CHALET",
        "stockName": "Chalet Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2019",
        "paid_up_value": 10,
        "isis_number": "INE427F01016",
        "face_value": 10
      },
      {
        "stockCode": "CHAMBLFERT",
        "stockName": "Chambal Fertilizers & Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-1995",
        "paid_up_value": 10,
        "isis_number": "INE085A01013",
        "face_value": 10
      },
      {
        "stockCode": "CHEMFAB",
        "stockName": "Chemfab Alkalis Limited",
        "Series": "EQ",
        "date_of_listing": "25-APR-2018",
        "paid_up_value": 10,
        "isis_number": "INE783X01023",
        "face_value": 10
      },
      {
        "stockCode": "CHENNPETRO",
        "stockName": "Chennai Petroleum Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUN-2000",
        "paid_up_value": 10,
        "isis_number": "INE178A01016",
        "face_value": 10
      },
      {
        "stockCode": "CHOLAFIN",
        "stockName": "Cholamandalam Investment and Finance Company Limited",
        "Series": "EQ",
        "date_of_listing": "15-MAY-1996",
        "paid_up_value": 2,
        "isis_number": "INE121A01024",
        "face_value": 2
      },
      {
        "stockCode": "CHOLAHLDNG",
        "stockName": "Cholamandalam Financial Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "25-SEP-2017",
        "paid_up_value": 1,
        "isis_number": "INE149A01033",
        "face_value": 1
      },
      {
        "stockCode": "CHROMATIC",
        "stockName": "Chromatic India Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAY-2012",
        "paid_up_value": 10,
        "isis_number": "INE662C01015",
        "face_value": 10
      },
      {
        "stockCode": "CIGNITITEC",
        "stockName": "Cigniti Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "13-OCT-2014",
        "paid_up_value": 10,
        "isis_number": "INE675C01017",
        "face_value": 10
      },
      {
        "stockCode": "CIMMCO",
        "stockName": "Cimmco Limited",
        "Series": "EQ",
        "date_of_listing": "08-SEP-2011",
        "paid_up_value": 10,
        "isis_number": "INE184C01028",
        "face_value": 10
      },
      {
        "stockCode": "CINELINE",
        "stockName": "Cineline India Limited",
        "Series": "EQ",
        "date_of_listing": "13-JUN-2012",
        "paid_up_value": 5,
        "isis_number": "INE704H01022",
        "face_value": 5
      },
      {
        "stockCode": "CINEVISTA",
        "stockName": "Cinevista Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAY-2000",
        "paid_up_value": 2,
        "isis_number": "INE039B01026",
        "face_value": 2
      },
      {
        "stockCode": "CIPLA",
        "stockName": "Cipla Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE059A01026",
        "face_value": 2
      },
      {
        "stockCode": "CKFSL",
        "stockName": "Cox & Kings Financial Service Limited",
        "Series": "EQ",
        "date_of_listing": "11-APR-2019",
        "paid_up_value": 10,
        "isis_number": "INE391Z01012",
        "face_value": 10
      },
      {
        "stockCode": "CLEDUCATE",
        "stockName": "CL Educate Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAR-2017",
        "paid_up_value": 10,
        "isis_number": "INE201M01011",
        "face_value": 10
      },
      {
        "stockCode": "CLNINDIA",
        "stockName": "Clariant Chemicals (India) Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-1995",
        "paid_up_value": 10,
        "isis_number": "INE492A01029",
        "face_value": 10
      },
      {
        "stockCode": "CMICABLES",
        "stockName": "CMI Limited",
        "Series": "EQ",
        "date_of_listing": "29-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE981B01011",
        "face_value": 10
      },
      {
        "stockCode": "CNOVAPETRO",
        "stockName": "CIL Nova Petrochemicals Limited",
        "Series": "EQ",
        "date_of_listing": "01-JAN-2014",
        "paid_up_value": 10,
        "isis_number": "INE672K01025",
        "face_value": 10
      },
      {
        "stockCode": "COALINDIA",
        "stockName": "Coal India Limited",
        "Series": "EQ",
        "date_of_listing": "04-NOV-2010",
        "paid_up_value": 10,
        "isis_number": "INE522F01014",
        "face_value": 10
      },
      {
        "stockCode": "COCHINSHIP",
        "stockName": "Cochin Shipyard Limited",
        "Series": "EQ",
        "date_of_listing": "11-AUG-2017",
        "paid_up_value": 10,
        "isis_number": "INE704P01017",
        "face_value": 10
      },
      {
        "stockCode": "COFFEEDAY",
        "stockName": "Coffee Day Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-2015",
        "paid_up_value": 10,
        "isis_number": "INE335K01011",
        "face_value": 10
      },
      {
        "stockCode": "COLPAL",
        "stockName": "Colgate Palmolive (India) Limited",
        "Series": "EQ",
        "date_of_listing": "17-DEC-2007",
        "paid_up_value": 1,
        "isis_number": "INE259A01022",
        "face_value": 1
      },
      {
        "stockCode": "COMPINFO",
        "stockName": "Compuage Infocom Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUL-2016",
        "paid_up_value": 2,
        "isis_number": "INE070C01037",
        "face_value": 2
      },
      {
        "stockCode": "COMPUSOFT",
        "stockName": "Compucom Software Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2012",
        "paid_up_value": 2,
        "isis_number": "INE453B01029",
        "face_value": 2
      },
      {
        "stockCode": "CONCOR",
        "stockName": "Container Corporation of India Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAY-1997",
        "paid_up_value": 5,
        "isis_number": "INE111A01025",
        "face_value": 5
      },
      {
        "stockCode": "CONFIPET",
        "stockName": "Confidence Petroleum India Limited",
        "Series": "EQ",
        "date_of_listing": "13-JUN-2019",
        "paid_up_value": 1,
        "isis_number": "INE552D01024",
        "face_value": 1
      },
      {
        "stockCode": "CONSOFINVT",
        "stockName": "Consolidated Finvest & Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-2005",
        "paid_up_value": 10,
        "isis_number": "INE025A01027",
        "face_value": 10
      },
      {
        "stockCode": "CONTROLPR",
        "stockName": "Control Print Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE663B01015",
        "face_value": 10
      },
      {
        "stockCode": "CORALFINAC",
        "stockName": "Coral India Finance & Housing Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAR-1996",
        "paid_up_value": 2,
        "isis_number": "INE558D01021",
        "face_value": 2
      },
      {
        "stockCode": "CORDSCABLE",
        "stockName": "Cords Cable Industries Limited",
        "Series": "EQ",
        "date_of_listing": "13-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE792I01017",
        "face_value": 10
      },
      {
        "stockCode": "COROMANDEL",
        "stockName": "Coromandel International Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAY-1995",
        "paid_up_value": 1,
        "isis_number": "INE169A01031",
        "face_value": 1
      },
      {
        "stockCode": "CORPBANK",
        "stockName": "Corporation Bank",
        "Series": "EQ",
        "date_of_listing": "01-DEC-1997",
        "paid_up_value": 2,
        "isis_number": "INE112A01023",
        "face_value": 2
      },
      {
        "stockCode": "COSMOFILMS",
        "stockName": "Cosmo Films Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE757A01017",
        "face_value": 10
      },
      {
        "stockCode": "COUNCODOS",
        "stockName": "Country Condo's Limited",
        "Series": "BE",
        "date_of_listing": "22-JAN-2009",
        "paid_up_value": 1,
        "isis_number": "INE695B01025",
        "face_value": 1
      },
      {
        "stockCode": "COX&KINGS",
        "stockName": "Cox & Kings Limited",
        "Series": "EQ",
        "date_of_listing": "11-DEC-2009",
        "paid_up_value": 5,
        "isis_number": "INE008I01026",
        "face_value": 5
      },
      {
        "stockCode": "CREATIVEYE",
        "stockName": "Creative Eye Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2000",
        "paid_up_value": 5,
        "isis_number": "INE230B01021",
        "face_value": 5
      },
      {
        "stockCode": "CREDITACC",
        "stockName": "CREDITACCESS GRAMEEN LIMITED",
        "Series": "EQ",
        "date_of_listing": "23-AUG-2018",
        "paid_up_value": 10,
        "isis_number": "INE741K01010",
        "face_value": 10
      },
      {
        "stockCode": "CREST",
        "stockName": "Crest Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "27-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE559D01011",
        "face_value": 10
      },
      {
        "stockCode": "CRISIL",
        "stockName": "CRISIL Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-1995",
        "paid_up_value": 1,
        "isis_number": "INE007A01025",
        "face_value": 1
      },
      {
        "stockCode": "CROMPTON",
        "stockName": "Crompton Greaves Consumer Electricals Limited",
        "Series": "EQ",
        "date_of_listing": "13-MAY-2016",
        "paid_up_value": 2,
        "isis_number": "INE299U01018",
        "face_value": 2
      },
      {
        "stockCode": "CTE",
        "stockName": "Cambridge Technology Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE627H01017",
        "face_value": 10
      },
      {
        "stockCode": "CUB",
        "stockName": "City Union Bank Limited",
        "Series": "EQ",
        "date_of_listing": "25-AUG-1998",
        "paid_up_value": 1,
        "isis_number": "INE491A01021",
        "face_value": 1
      },
      {
        "stockCode": "CUBEXTUB",
        "stockName": "Cubex Tubings Limited",
        "Series": "EQ",
        "date_of_listing": "24-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE144D01012",
        "face_value": 10
      },
      {
        "stockCode": "CUMMINSIND",
        "stockName": "Cummins India Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 2,
        "isis_number": "INE298A01020",
        "face_value": 2
      },
      {
        "stockCode": "CUPID",
        "stockName": "Cupid Limited",
        "Series": "EQ",
        "date_of_listing": "16-SEP-2016",
        "paid_up_value": 10,
        "isis_number": "INE509F01011",
        "face_value": 10
      },
      {
        "stockCode": "CURATECH",
        "stockName": "Cura Technologies Limited",
        "Series": "BE",
        "date_of_listing": "30-MAY-2000",
        "paid_up_value": 10,
        "isis_number": "INE117B01012",
        "face_value": 10
      },
      {
        "stockCode": "CYBERMEDIA",
        "stockName": "Cyber Media (India) Limited",
        "Series": "EQ",
        "date_of_listing": "10-JUN-2005",
        "paid_up_value": 10,
        "isis_number": "INE278G01037",
        "face_value": 10
      },
      {
        "stockCode": "CYBERTECH",
        "stockName": "Cybertech Systems And Software Limited",
        "Series": "EQ",
        "date_of_listing": "27-JAN-1999",
        "paid_up_value": 10,
        "isis_number": "INE214A01019",
        "face_value": 10
      },
      {
        "stockCode": "CYIENT",
        "stockName": "Cyient Limited",
        "Series": "EQ",
        "date_of_listing": "30-SEP-1998",
        "paid_up_value": 5,
        "isis_number": "INE136B01020",
        "face_value": 5
      },
      {
        "stockCode": "DAAWAT",
        "stockName": "LT Foods Limited",
        "Series": "EQ",
        "date_of_listing": "18-DEC-2006",
        "paid_up_value": 1,
        "isis_number": "INE818H01020",
        "face_value": 1
      },
      {
        "stockCode": "DABUR",
        "stockName": "Dabur India Limited",
        "Series": "EQ",
        "date_of_listing": "28-APR-1999",
        "paid_up_value": 1,
        "isis_number": "INE016A01026",
        "face_value": 1
      },
      {
        "stockCode": "DALBHARAT",
        "stockName": "Dalmia Bharat Limited",
        "Series": "EQ",
        "date_of_listing": "22-JAN-2019",
        "paid_up_value": 2,
        "isis_number": "INE00R701025",
        "face_value": 2
      },
      {
        "stockCode": "DALMIASUG",
        "stockName": "Dalmia Bharat Sugar and Industries Limited",
        "Series": "EQ",
        "date_of_listing": "17-JAN-1996",
        "paid_up_value": 2,
        "isis_number": "INE495A01022",
        "face_value": 2
      },
      {
        "stockCode": "DAMODARIND",
        "stockName": "Damodar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUL-2016",
        "paid_up_value": 5,
        "isis_number": "INE497D01022",
        "face_value": 5
      },
      {
        "stockCode": "DATAMATICS",
        "stockName": "Datamatics Global Services Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAY-2004",
        "paid_up_value": 5,
        "isis_number": "INE365B01017",
        "face_value": 5
      },
      {
        "stockCode": "DBCORP",
        "stockName": "D.B.Corp Limited",
        "Series": "EQ",
        "date_of_listing": "06-JAN-2010",
        "paid_up_value": 10,
        "isis_number": "INE950I01011",
        "face_value": 10
      },
      {
        "stockCode": "DBL",
        "stockName": "Dilip Buildcon Limited",
        "Series": "EQ",
        "date_of_listing": "11-AUG-2016",
        "paid_up_value": 10,
        "isis_number": "INE917M01012",
        "face_value": 10
      },
      {
        "stockCode": "DBREALTY",
        "stockName": "D B Realty Limited",
        "Series": "EQ",
        "date_of_listing": "24-FEB-2010",
        "paid_up_value": 10,
        "isis_number": "INE879I01012",
        "face_value": 10
      },
      {
        "stockCode": "DBSTOCKBRO",
        "stockName": "DB (International) Stock Brokers Limited",
        "Series": "BE",
        "date_of_listing": "29-FEB-2012",
        "paid_up_value": 2,
        "isis_number": "INE921B01025",
        "face_value": 2
      },
      {
        "stockCode": "DCAL",
        "stockName": "Dishman Carbogen Amcis Limited",
        "Series": "EQ",
        "date_of_listing": "21-SEP-2017",
        "paid_up_value": 2,
        "isis_number": "INE385W01011",
        "face_value": 2
      },
      {
        "stockCode": "DCBBANK",
        "stockName": "DCB Bank Limited",
        "Series": "EQ",
        "date_of_listing": "27-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE503A01015",
        "face_value": 10
      },
      {
        "stockCode": "DCM",
        "stockName": "DCM  Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE498A01018",
        "face_value": 10
      },
      {
        "stockCode": "DCMFINSERV",
        "stockName": "DCM Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-1997",
        "paid_up_value": 10,
        "isis_number": "INE891B01012",
        "face_value": 10
      },
      {
        "stockCode": "DCMSHRIRAM",
        "stockName": "DCM Shriram Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-1995",
        "paid_up_value": 2,
        "isis_number": "INE499A01024",
        "face_value": 2
      },
      {
        "stockCode": "DCW",
        "stockName": "DCW Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-1995",
        "paid_up_value": 2,
        "isis_number": "INE500A01029",
        "face_value": 2
      },
      {
        "stockCode": "DECCANCE",
        "stockName": "Deccan Cements Limited",
        "Series": "EQ",
        "date_of_listing": "02-AUG-2007",
        "paid_up_value": 5,
        "isis_number": "INE583C01021",
        "face_value": 5
      },
      {
        "stockCode": "DEEPAKFERT",
        "stockName": "Deepak Fertilizers and Petrochemicals Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "17-JAN-2003",
        "paid_up_value": 10,
        "isis_number": "INE501A01019",
        "face_value": 10
      },
      {
        "stockCode": "DEEPAKNTR",
        "stockName": "Deepak Nitrite Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2010",
        "paid_up_value": 2,
        "isis_number": "INE288B01029",
        "face_value": 2
      },
      {
        "stockCode": "DEEPIND",
        "stockName": "Deep Industries Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE677H01012",
        "face_value": 10
      },
      {
        "stockCode": "DELTACORP",
        "stockName": "Delta Corp Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-2007",
        "paid_up_value": 1,
        "isis_number": "INE124G01033",
        "face_value": 1
      },
      {
        "stockCode": "DELTAMAGNT",
        "stockName": "Delta Magnets Limited",
        "Series": "EQ",
        "date_of_listing": "18-OCT-1995",
        "paid_up_value": 10,
        "isis_number": "INE393A01011",
        "face_value": 10
      },
      {
        "stockCode": "DEN",
        "stockName": "Den Networks Limited",
        "Series": "EQ",
        "date_of_listing": "24-NOV-2009",
        "paid_up_value": 10,
        "isis_number": "INE947J01015",
        "face_value": 10
      },
      {
        "stockCode": "DENORA",
        "stockName": "De Nora India Limited",
        "Series": "EQ",
        "date_of_listing": "07-AUG-1997",
        "paid_up_value": 10,
        "isis_number": "INE244A01016",
        "face_value": 10
      },
      {
        "stockCode": "DFMFOODS",
        "stockName": "DFM Foods Limited",
        "Series": "EQ",
        "date_of_listing": "29-DEC-2016",
        "paid_up_value": 2,
        "isis_number": "INE456C01020",
        "face_value": 2
      },
      {
        "stockCode": "DGCONTENT",
        "stockName": "Digicontent Limited",
        "Series": "BE",
        "date_of_listing": "18-JUN-2019",
        "paid_up_value": 2,
        "isis_number": "INE03JI01017",
        "face_value": 2
      },
      {
        "stockCode": "DHAMPURSUG",
        "stockName": "Dhampur Sugar Mills Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE041A01016",
        "face_value": 10
      },
      {
        "stockCode": "DHANBANK",
        "stockName": "Dhanlaxmi Bank Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2004",
        "paid_up_value": 10,
        "isis_number": "INE680A01011",
        "face_value": 10
      },
      {
        "stockCode": "DHANUKA",
        "stockName": "Dhanuka Agritech Limited",
        "Series": "EQ",
        "date_of_listing": "29-JUN-2011",
        "paid_up_value": 2,
        "isis_number": "INE435G01025",
        "face_value": 2
      },
      {
        "stockCode": "DHARSUGAR",
        "stockName": "Dharani Sugars & Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "22-MAY-1996",
        "paid_up_value": 10,
        "isis_number": "INE988C01014",
        "face_value": 10
      },
      {
        "stockCode": "DHFL",
        "stockName": "Dewan Housing Finance Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "01-OCT-2002",
        "paid_up_value": 10,
        "isis_number": "INE202B01012",
        "face_value": 10
      },
      {
        "stockCode": "DHUNINV",
        "stockName": "Dhunseri Investments Limited",
        "Series": "EQ",
        "date_of_listing": "18-MAR-2011",
        "paid_up_value": 10,
        "isis_number": "INE320L01011",
        "face_value": 10
      },
      {
        "stockCode": "DIAMONDYD",
        "stockName": "Prataap Snacks Limited",
        "Series": "EQ",
        "date_of_listing": "05-OCT-2017",
        "paid_up_value": 5,
        "isis_number": "INE393P01035",
        "face_value": 5
      },
      {
        "stockCode": "DIAPOWER",
        "stockName": "Diamond Power Infra Ltd",
        "Series": "BZ",
        "date_of_listing": "29-SEP-2010",
        "paid_up_value": 10,
        "isis_number": "INE989C01012",
        "face_value": 10
      },
      {
        "stockCode": "DICIND",
        "stockName": "DIC India Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-1995",
        "paid_up_value": 10,
        "isis_number": "INE303A01010",
        "face_value": 10
      },
      {
        "stockCode": "DIGJAMLTD",
        "stockName": "Digjam Limited",
        "Series": "EQ",
        "date_of_listing": "13-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE731U01010",
        "face_value": 10
      },
      {
        "stockCode": "DISHTV",
        "stockName": "Dish TV India Limited",
        "Series": "EQ",
        "date_of_listing": "18-APR-2007",
        "paid_up_value": 1,
        "isis_number": "INE836F01026",
        "face_value": 1
      },
      {
        "stockCode": "DIVISLAB",
        "stockName": "Divi's Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "12-MAR-2003",
        "paid_up_value": 2,
        "isis_number": "INE361B01024",
        "face_value": 2
      },
      {
        "stockCode": "DIXON",
        "stockName": "Dixon Technologies (India) Limited",
        "Series": "EQ",
        "date_of_listing": "18-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE935N01012",
        "face_value": 10
      },
      {
        "stockCode": "DLF",
        "stockName": "DLF Limited",
        "Series": "EQ",
        "date_of_listing": "05-JUL-2007",
        "paid_up_value": 2,
        "isis_number": "INE271C01023",
        "face_value": 2
      },
      {
        "stockCode": "DLINKINDIA",
        "stockName": "D-Link (India) Limited",
        "Series": "EQ",
        "date_of_listing": "18-DEC-2009",
        "paid_up_value": 2,
        "isis_number": "INE250K01012",
        "face_value": 2
      },
      {
        "stockCode": "DMART",
        "stockName": "Avenue Supermarts Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAR-2017",
        "paid_up_value": 10,
        "isis_number": "INE192R01011",
        "face_value": 10
      },
      {
        "stockCode": "DNAMEDIA",
        "stockName": "Diligent Media Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "11-DEC-2017",
        "paid_up_value": 1,
        "isis_number": "INE016M01021",
        "face_value": 1
      },
      {
        "stockCode": "DOLLAR",
        "stockName": "Dollar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "21-APR-2017",
        "paid_up_value": 2,
        "isis_number": "INE325C01035",
        "face_value": 2
      },
      {
        "stockCode": "DOLPHINOFF",
        "stockName": "Dolphin Offshore Enterprises (India) Limited",
        "Series": "EQ",
        "date_of_listing": "06-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE920A01011",
        "face_value": 10
      },
      {
        "stockCode": "DONEAR",
        "stockName": "Donear Industries Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2006",
        "paid_up_value": 2,
        "isis_number": "INE668D01028",
        "face_value": 2
      },
      {
        "stockCode": "DPSCLTD",
        "stockName": "DPSC Limited",
        "Series": "EQ",
        "date_of_listing": "21-APR-2008",
        "paid_up_value": 1,
        "isis_number": "INE360C01024",
        "face_value": 1
      },
      {
        "stockCode": "DQE",
        "stockName": "DQ Entertainment (International) Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2011",
        "paid_up_value": 10,
        "isis_number": "INE656K01010",
        "face_value": 10
      },
      {
        "stockCode": "DREDGECORP",
        "stockName": "Dredging Corporation of India Limited",
        "Series": "EQ",
        "date_of_listing": "15-JAN-2004",
        "paid_up_value": 10,
        "isis_number": "INE506A01018",
        "face_value": 10
      },
      {
        "stockCode": "DRREDDY",
        "stockName": "Dr. Reddy's Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAY-2003",
        "paid_up_value": 5,
        "isis_number": "INE089A01023",
        "face_value": 5
      },
      {
        "stockCode": "DSSL",
        "stockName": "Dynacons Systems & Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "01-DEC-2011",
        "paid_up_value": 10,
        "isis_number": "INE417B01040",
        "face_value": 10
      },
      {
        "stockCode": "DTIL",
        "stockName": "Dhunseri Tea & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "20-JAN-2015",
        "paid_up_value": 10,
        "isis_number": "INE341R01014",
        "face_value": 10
      },
      {
        "stockCode": "DUCON",
        "stockName": "Ducon Infratechnologies Limited",
        "Series": "EQ",
        "date_of_listing": "09-OCT-2012",
        "paid_up_value": 1,
        "isis_number": "INE741L01018",
        "face_value": 1
      },
      {
        "stockCode": "DVL",
        "stockName": "Dhunseri Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "11-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE477B01010",
        "face_value": 10
      },
      {
        "stockCode": "DWARKESH",
        "stockName": "Dwarikesh Sugar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "31-DEC-2004",
        "paid_up_value": 1,
        "isis_number": "INE366A01041",
        "face_value": 1
      },
      {
        "stockCode": "DYNAMATECH",
        "stockName": "Dynamatic Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "14-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE221B01012",
        "face_value": 10
      },
      {
        "stockCode": "DYNPRO",
        "stockName": "Dynemic Products Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE256H01015",
        "face_value": 10
      },
      {
        "stockCode": "EASTSILK",
        "stockName": "Eastern Silk Industries Limited",
        "Series": "BE",
        "date_of_listing": "03-JUL-1996",
        "paid_up_value": 2,
        "isis_number": "INE962C01027",
        "face_value": 2
      },
      {
        "stockCode": "EASUNREYRL",
        "stockName": "Easun Reyrolle Limited",
        "Series": "EQ",
        "date_of_listing": "23-JUL-1997",
        "paid_up_value": 2,
        "isis_number": "INE268C01029",
        "face_value": 2
      },
      {
        "stockCode": "ECLERX",
        "stockName": "eClerx Services Limited",
        "Series": "EQ",
        "date_of_listing": "31-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE738I01010",
        "face_value": 10
      },
      {
        "stockCode": "EDELWEISS",
        "stockName": "Edelweiss Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "12-DEC-2007",
        "paid_up_value": 1,
        "isis_number": "INE532F01054",
        "face_value": 1
      },
      {
        "stockCode": "EDL",
        "stockName": "Empee Distilleries Limited",
        "Series": "BZ",
        "date_of_listing": "26-NOV-2007",
        "paid_up_value": 10,
        "isis_number": "INE180G01019",
        "face_value": 10
      },
      {
        "stockCode": "EDUCOMP",
        "stockName": "Educomp Solutions Limited",
        "Series": "BZ",
        "date_of_listing": "13-JAN-2006",
        "paid_up_value": 2,
        "isis_number": "INE216H01027",
        "face_value": 2
      },
      {
        "stockCode": "EICHERMOT",
        "stockName": "Eicher Motors Limited",
        "Series": "EQ",
        "date_of_listing": "07-SEP-2004",
        "paid_up_value": 10,
        "isis_number": "INE066A01013",
        "face_value": 10
      },
      {
        "stockCode": "EIDPARRY",
        "stockName": "EID Parry India Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 1,
        "isis_number": "INE126A01031",
        "face_value": 1
      },
      {
        "stockCode": "EIHAHOTELS",
        "stockName": "EIH Associated Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "08-APR-2008",
        "paid_up_value": 10,
        "isis_number": "INE276C01014",
        "face_value": 10
      },
      {
        "stockCode": "EIHOTEL",
        "stockName": "EIH Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE230A01023",
        "face_value": 2
      },
      {
        "stockCode": "EIMCOELECO",
        "stockName": "Eimco Elecon (India) Limited",
        "Series": "EQ",
        "date_of_listing": "17-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE158B01016",
        "face_value": 10
      },
      {
        "stockCode": "EKC",
        "stockName": "Everest Kanto Cylinder Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2005",
        "paid_up_value": 2,
        "isis_number": "INE184H01027",
        "face_value": 2
      },
      {
        "stockCode": "ELAND",
        "stockName": "E-Land Apparel Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE311H01018",
        "face_value": 10
      },
      {
        "stockCode": "ELECON",
        "stockName": "Elecon Engineering Company Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2006",
        "paid_up_value": 2,
        "isis_number": "INE205B01023",
        "face_value": 2
      },
      {
        "stockCode": "ELECTCAST",
        "stockName": "Electrosteel Castings Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2003",
        "paid_up_value": 1,
        "isis_number": "INE086A01029",
        "face_value": 1
      },
      {
        "stockCode": "ELECTHERM",
        "stockName": "Electrotherm (India) Limited",
        "Series": "EQ",
        "date_of_listing": "20-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE822G01016",
        "face_value": 10
      },
      {
        "stockCode": "ELGIEQUIP",
        "stockName": "Elgi Equipments Limited",
        "Series": "EQ",
        "date_of_listing": "22-NOV-1995",
        "paid_up_value": 1,
        "isis_number": "INE285A01027",
        "face_value": 1
      },
      {
        "stockCode": "ELGIRUBCO",
        "stockName": "Elgi Rubber Company Limited",
        "Series": "EQ",
        "date_of_listing": "10-AUG-2011",
        "paid_up_value": 1,
        "isis_number": "INE819L01012",
        "face_value": 1
      },
      {
        "stockCode": "EMAMILTD",
        "stockName": "Emami Limited",
        "Series": "EQ",
        "date_of_listing": "03-AUG-2006",
        "paid_up_value": 1,
        "isis_number": "INE548C01032",
        "face_value": 1
      },
      {
        "stockCode": "EMAMIPAP",
        "stockName": "Emami Paper Mills Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAY-2019",
        "paid_up_value": 2,
        "isis_number": "INE830C01026",
        "face_value": 2
      },
      {
        "stockCode": "EMAMIREAL",
        "stockName": "Emami Realty Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2010",
        "paid_up_value": 2,
        "isis_number": "INE778K01012",
        "face_value": 2
      },
      {
        "stockCode": "EMCO",
        "stockName": "Emco Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2005",
        "paid_up_value": 2,
        "isis_number": "INE078A01026",
        "face_value": 2
      },
      {
        "stockCode": "EMKAY",
        "stockName": "Emkay Global Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "28-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE296H01011",
        "face_value": 10
      },
      {
        "stockCode": "EMMBI",
        "stockName": "Emmbi Industries Limited",
        "Series": "EQ",
        "date_of_listing": "24-FEB-2010",
        "paid_up_value": 10,
        "isis_number": "INE753K01015",
        "face_value": 10
      },
      {
        "stockCode": "ENDURANCE",
        "stockName": "Endurance Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "19-OCT-2016",
        "paid_up_value": 10,
        "isis_number": "INE913H01037",
        "face_value": 10
      },
      {
        "stockCode": "ENERGYDEV",
        "stockName": "Energy Development Company Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-2007",
        "paid_up_value": 10,
        "isis_number": "INE306C01019",
        "face_value": 10
      },
      {
        "stockCode": "ENGINERSIN",
        "stockName": "Engineers India Limited",
        "Series": "EQ",
        "date_of_listing": "20-AUG-1997",
        "paid_up_value": 5,
        "isis_number": "INE510A01028",
        "face_value": 5
      },
      {
        "stockCode": "ENIL",
        "stockName": "Entertainment Network (India) Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-2006",
        "paid_up_value": 10,
        "isis_number": "INE265F01028",
        "face_value": 10
      },
      {
        "stockCode": "EON",
        "stockName": "Eon Electric Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUN-2012",
        "paid_up_value": 5,
        "isis_number": "INE076H01025",
        "face_value": 5
      },
      {
        "stockCode": "EQUITAS",
        "stockName": "Equitas Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "21-APR-2016",
        "paid_up_value": 10,
        "isis_number": "INE988K01017",
        "face_value": 10
      },
      {
        "stockCode": "ERIS",
        "stockName": "Eris Lifesciences Limited",
        "Series": "EQ",
        "date_of_listing": "29-JUN-2017",
        "paid_up_value": 1,
        "isis_number": "INE406M01024",
        "face_value": 1
      },
      {
        "stockCode": "EROSMEDIA",
        "stockName": "Eros International Media Limited",
        "Series": "EQ",
        "date_of_listing": "06-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE416L01017",
        "face_value": 10
      },
      {
        "stockCode": "ESABINDIA",
        "stockName": "Esab India Limited",
        "Series": "EQ",
        "date_of_listing": "01-NOV-1995",
        "paid_up_value": 10,
        "isis_number": "INE284A01012",
        "face_value": 10
      },
      {
        "stockCode": "ESCORTS",
        "stockName": "Escorts Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE042A01014",
        "face_value": 10
      },
      {
        "stockCode": "ESSARSHPNG",
        "stockName": "Essar Shipping Limited",
        "Series": "EQ",
        "date_of_listing": "15-NOV-2011",
        "paid_up_value": 10,
        "isis_number": "INE122M01019",
        "face_value": 10
      },
      {
        "stockCode": "ESSDEE",
        "stockName": "Ess Dee Aluminium Limited",
        "Series": "BZ",
        "date_of_listing": "28-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE825H01017",
        "face_value": 10
      },
      {
        "stockCode": "ESSELPACK",
        "stockName": "Essel Propack Limited",
        "Series": "EQ",
        "date_of_listing": "11-FEB-2002",
        "paid_up_value": 2,
        "isis_number": "INE255A01020",
        "face_value": 2
      },
      {
        "stockCode": "ESTER",
        "stockName": "Ester Industries Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2011",
        "paid_up_value": 5,
        "isis_number": "INE778B01029",
        "face_value": 5
      },
      {
        "stockCode": "EUROCERA",
        "stockName": "Euro Ceramics Limited",
        "Series": "BE",
        "date_of_listing": "09-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE649H01011",
        "face_value": 10
      },
      {
        "stockCode": "EUROMULTI",
        "stockName": "Euro Multivision Limited",
        "Series": "BE",
        "date_of_listing": "15-OCT-2009",
        "paid_up_value": 10,
        "isis_number": "INE063J01011",
        "face_value": 10
      },
      {
        "stockCode": "EUROTEXIND",
        "stockName": "Eurotex Industries and Exports Limited",
        "Series": "EQ",
        "date_of_listing": "31-JAN-1996",
        "paid_up_value": 10,
        "isis_number": "INE022C01012",
        "face_value": 10
      },
      {
        "stockCode": "EVEREADY",
        "stockName": "Eveready Industries India Limited",
        "Series": "EQ",
        "date_of_listing": "27-APR-2005",
        "paid_up_value": 5,
        "isis_number": "INE128A01029",
        "face_value": 5
      },
      {
        "stockCode": "EVERESTIND",
        "stockName": "Everest Industries Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE295A01018",
        "face_value": 10
      },
      {
        "stockCode": "EXCEL",
        "stockName": "Excel Realty N Infra Limited",
        "Series": "EQ",
        "date_of_listing": "03-AUG-2009",
        "paid_up_value": 10,
        "isis_number": "INE688J01015",
        "face_value": 10
      },
      {
        "stockCode": "EXCELCROP",
        "stockName": "Excel Crop Care Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2004",
        "paid_up_value": 5,
        "isis_number": "INE223G01017",
        "face_value": 5
      },
      {
        "stockCode": "EXCELINDUS",
        "stockName": "Excel Industries Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2004",
        "paid_up_value": 5,
        "isis_number": "INE369A01029",
        "face_value": 5
      },
      {
        "stockCode": "EXIDEIND",
        "stockName": "Exide Industries Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUN-2003",
        "paid_up_value": 1,
        "isis_number": "INE302A01020",
        "face_value": 1
      },
      {
        "stockCode": "EXPLEOSOL",
        "stockName": "Expleo Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "26-OCT-2009",
        "paid_up_value": 10,
        "isis_number": "INE201K01015",
        "face_value": 10
      },
      {
        "stockCode": "FACT",
        "stockName": "Fertilizers and Chemicals Travancore Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE188A01015",
        "face_value": 10
      },
      {
        "stockCode": "FAIRCHEM",
        "stockName": "Fairchem Speciality Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-2015",
        "paid_up_value": 10,
        "isis_number": "INE959A01019",
        "face_value": 10
      },
      {
        "stockCode": "FCL",
        "stockName": "Fineotex Chemical Limited",
        "Series": "EQ",
        "date_of_listing": "15-JAN-2015",
        "paid_up_value": 2,
        "isis_number": "INE045J01026",
        "face_value": 2
      },
      {
        "stockCode": "FCONSUMER",
        "stockName": "Future Consumer Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUL-2013",
        "paid_up_value": 6,
        "isis_number": "INE220J01025",
        "face_value": 6
      },
      {
        "stockCode": "FCSSOFT",
        "stockName": "FCS Software Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "21-SEP-2005",
        "paid_up_value": 1,
        "isis_number": "INE512B01022",
        "face_value": 1
      },
      {
        "stockCode": "FDC",
        "stockName": "FDC Limited",
        "Series": "EQ",
        "date_of_listing": "07-AUG-1997",
        "paid_up_value": 1,
        "isis_number": "INE258B01022",
        "face_value": 1
      },
      {
        "stockCode": "FEDERALBNK",
        "stockName": "The Federal Bank  Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE171A01029",
        "face_value": 2
      },
      {
        "stockCode": "FEL",
        "stockName": "Future Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-2001",
        "paid_up_value": 2,
        "isis_number": "INE623B01027",
        "face_value": 2
      },
      {
        "stockCode": "FELDVR",
        "stockName": "Future Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "13-FEB-2009",
        "paid_up_value": 2,
        "isis_number": "IN9623B01058",
        "face_value": 2
      },
      {
        "stockCode": "FIEMIND",
        "stockName": "Fiem Industries Limited",
        "Series": "EQ",
        "date_of_listing": "19-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE737H01014",
        "face_value": 10
      },
      {
        "stockCode": "FILATEX",
        "stockName": "Filatex India Limited",
        "Series": "EQ",
        "date_of_listing": "29-AUG-2011",
        "paid_up_value": 2,
        "isis_number": "INE816B01027",
        "face_value": 2
      },
      {
        "stockCode": "FINCABLES",
        "stockName": "Finolex Cables Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE235A01022",
        "face_value": 2
      },
      {
        "stockCode": "FINEORG",
        "stockName": "Fine Organic Industries Limited",
        "Series": "EQ",
        "date_of_listing": "02-JUL-2018",
        "paid_up_value": 5,
        "isis_number": "INE686Y01026",
        "face_value": 5
      },
      {
        "stockCode": "FINPIPE",
        "stockName": "Finolex Industries Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE183A01016",
        "face_value": 10
      },
      {
        "stockCode": "FLEXITUFF",
        "stockName": "Flexituff Ventures International Limited",
        "Series": "EQ",
        "date_of_listing": "19-OCT-2011",
        "paid_up_value": 10,
        "isis_number": "INE060J01017",
        "face_value": 10
      },
      {
        "stockCode": "FLFL",
        "stockName": "Future Lifestyle Fashions Limited",
        "Series": "EQ",
        "date_of_listing": "01-OCT-2013",
        "paid_up_value": 2,
        "isis_number": "INE452O01016",
        "face_value": 2
      },
      {
        "stockCode": "FMGOETZE",
        "stockName": "Federal-Mogul Goetze (India) Limited.",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE529A01010",
        "face_value": 10
      },
      {
        "stockCode": "FMNL",
        "stockName": "Future Market Networks Limited",
        "Series": "EQ",
        "date_of_listing": "31-DEC-2010",
        "paid_up_value": 10,
        "isis_number": "INE360L01017",
        "face_value": 10
      },
      {
        "stockCode": "FORTIS",
        "stockName": "Fortis Healthcare Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE061F01013",
        "face_value": 10
      },
      {
        "stockCode": "FOSECOIND",
        "stockName": "Foseco India Limited",
        "Series": "EQ",
        "date_of_listing": "05-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE519A01011",
        "face_value": 10
      },
      {
        "stockCode": "FRETAIL",
        "stockName": "Future Retail Limited",
        "Series": "EQ",
        "date_of_listing": "29-AUG-2016",
        "paid_up_value": 2,
        "isis_number": "INE752P01024",
        "face_value": 2
      },
      {
        "stockCode": "FSC",
        "stockName": "Future Supply Chain Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "18-DEC-2017",
        "paid_up_value": 10,
        "isis_number": "INE935Q01015",
        "face_value": 10
      },
      {
        "stockCode": "FSL",
        "stockName": "Firstsource Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "22-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE684F01012",
        "face_value": 10
      },
      {
        "stockCode": "GABRIEL",
        "stockName": "Gabriel India Limited",
        "Series": "EQ",
        "date_of_listing": "20-APR-2005",
        "paid_up_value": 1,
        "isis_number": "INE524A01029",
        "face_value": 1
      },
      {
        "stockCode": "GAEL",
        "stockName": "Gujarat Ambuja Exports Limited",
        "Series": "EQ",
        "date_of_listing": "11-OCT-2000",
        "paid_up_value": 2,
        "isis_number": "INE036B01022",
        "face_value": 2
      },
      {
        "stockCode": "GAIL",
        "stockName": "GAIL (India) Limited",
        "Series": "EQ",
        "date_of_listing": "02-APR-1997",
        "paid_up_value": 10,
        "isis_number": "INE129A01019",
        "face_value": 10
      },
      {
        "stockCode": "GAL",
        "stockName": "Gyscoal Alloys Limited",
        "Series": "EQ",
        "date_of_listing": "27-OCT-2010",
        "paid_up_value": 1,
        "isis_number": "INE482J01021",
        "face_value": 1
      },
      {
        "stockCode": "GALAXYSURF",
        "stockName": "Galaxy Surfactants Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-2018",
        "paid_up_value": 10,
        "isis_number": "INE600K01018",
        "face_value": 10
      },
      {
        "stockCode": "GALLANTT",
        "stockName": "Gallantt Metal Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE297H01019",
        "face_value": 10
      },
      {
        "stockCode": "GALLISPAT",
        "stockName": "Gallantt Ispat Limited",
        "Series": "EQ",
        "date_of_listing": "11-OCT-2010",
        "paid_up_value": 1,
        "isis_number": "INE528K01029",
        "face_value": 1
      },
      {
        "stockCode": "GAMMNINFRA",
        "stockName": "Gammon Infrastructure Projects Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-2008",
        "paid_up_value": 2,
        "isis_number": "INE181G01025",
        "face_value": 2
      },
      {
        "stockCode": "GANDHITUBE",
        "stockName": "Gandhi Special Tubes Limited",
        "Series": "EQ",
        "date_of_listing": "31-JAN-2007",
        "paid_up_value": 5,
        "isis_number": "INE524B01027",
        "face_value": 5
      },
      {
        "stockCode": "GANECOS",
        "stockName": "Ganesha Ecosphere Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2015",
        "paid_up_value": 10,
        "isis_number": "INE845D01014",
        "face_value": 10
      },
      {
        "stockCode": "GANESHHOUC",
        "stockName": "Ganesh Housing Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE460C01014",
        "face_value": 10
      },
      {
        "stockCode": "GANGESSECU",
        "stockName": "Ganges Securities Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE335W01016",
        "face_value": 10
      },
      {
        "stockCode": "GANGOTRI",
        "stockName": "Gangotri Textiles Limited",
        "Series": "BZ",
        "date_of_listing": "07-APR-2006",
        "paid_up_value": 5,
        "isis_number": "INE670B01028",
        "face_value": 5
      },
      {
        "stockCode": "GARDENSILK",
        "stockName": "Garden Silk Mills Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2003",
        "paid_up_value": 10,
        "isis_number": "INE526A01016",
        "face_value": 10
      },
      {
        "stockCode": "GARFIBRES",
        "stockName": "Garware Technical Fibres Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE276A01018",
        "face_value": 10
      },
      {
        "stockCode": "GATI",
        "stockName": "GATI Limited",
        "Series": "EQ",
        "date_of_listing": "10-OCT-2006",
        "paid_up_value": 2,
        "isis_number": "INE152B01027",
        "face_value": 2
      },
      {
        "stockCode": "GAYAHWS",
        "stockName": "Gayatri Highways Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2018",
        "paid_up_value": 2,
        "isis_number": "INE287Z01012",
        "face_value": 2
      },
      {
        "stockCode": "GAYAPROJ",
        "stockName": "Gayatri Projects Limited",
        "Series": "EQ",
        "date_of_listing": "22-AUG-2011",
        "paid_up_value": 2,
        "isis_number": "INE336H01023",
        "face_value": 2
      },
      {
        "stockCode": "GDL",
        "stockName": "Gateway Distriparks Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAR-2005",
        "paid_up_value": 10,
        "isis_number": "INE852F01015",
        "face_value": 10
      },
      {
        "stockCode": "GEECEE",
        "stockName": "GeeCee Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "04-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE916G01016",
        "face_value": 10
      },
      {
        "stockCode": "GENESYS",
        "stockName": "Genesys International Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "23-JAN-2003",
        "paid_up_value": 5,
        "isis_number": "INE727B01026",
        "face_value": 5
      },
      {
        "stockCode": "GENUSPAPER",
        "stockName": "Genus Paper & Boards Limited",
        "Series": "EQ",
        "date_of_listing": "16-FEB-2015",
        "paid_up_value": 1,
        "isis_number": "INE949P01018",
        "face_value": 1
      },
      {
        "stockCode": "GENUSPOWER",
        "stockName": "Genus Power Infrastructures Limited",
        "Series": "EQ",
        "date_of_listing": "08-JUL-2005",
        "paid_up_value": 1,
        "isis_number": "INE955D01029",
        "face_value": 1
      },
      {
        "stockCode": "GEOJITFSL",
        "stockName": "Geojit Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "01-JUL-2005",
        "paid_up_value": 1,
        "isis_number": "INE007B01023",
        "face_value": 1
      },
      {
        "stockCode": "GEPIL",
        "stockName": "GE Power India Limited",
        "Series": "EQ",
        "date_of_listing": "19-APR-2000",
        "paid_up_value": 10,
        "isis_number": "INE878A01011",
        "face_value": 10
      },
      {
        "stockCode": "GESHIP",
        "stockName": "The Great Eastern Shipping Company Limited",
        "Series": "EQ",
        "date_of_listing": "27-NOV-2006",
        "paid_up_value": 10,
        "isis_number": "INE017A01032",
        "face_value": 10
      },
      {
        "stockCode": "GET&D",
        "stockName": "GE T&D India Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUN-2008",
        "paid_up_value": 2,
        "isis_number": "INE200A01026",
        "face_value": 2
      },
      {
        "stockCode": "GHCL",
        "stockName": "GHCL Limited",
        "Series": "EQ",
        "date_of_listing": "31-JUL-2003",
        "paid_up_value": 10,
        "isis_number": "INE539A01019",
        "face_value": 10
      },
      {
        "stockCode": "GICHSGFIN",
        "stockName": "GIC Housing Finance Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-1996",
        "paid_up_value": 10,
        "isis_number": "INE289B01019",
        "face_value": 10
      },
      {
        "stockCode": "GICRE",
        "stockName": "General Insurance Corporation of India",
        "Series": "EQ",
        "date_of_listing": "25-OCT-2017",
        "paid_up_value": 5,
        "isis_number": "INE481Y01014",
        "face_value": 5
      },
      {
        "stockCode": "GILLANDERS",
        "stockName": "Gillanders Arbuthnot & Company Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2009",
        "paid_up_value": 10,
        "isis_number": "INE047B01011",
        "face_value": 10
      },
      {
        "stockCode": "GILLETTE",
        "stockName": "Gillette India Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUL-2003",
        "paid_up_value": 10,
        "isis_number": "INE322A01010",
        "face_value": 10
      },
      {
        "stockCode": "GINNIFILA",
        "stockName": "Ginni Filaments Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE424C01010",
        "face_value": 10
      },
      {
        "stockCode": "GIPCL",
        "stockName": "Gujarat Industries Power Company Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE162A01010",
        "face_value": 10
      },
      {
        "stockCode": "GISOLUTION",
        "stockName": "GI Engineering Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "30-JAN-2009",
        "paid_up_value": 10,
        "isis_number": "INE065J01016",
        "face_value": 10
      },
      {
        "stockCode": "GKWLIMITED",
        "stockName": "GKW Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUL-2009",
        "paid_up_value": 10,
        "isis_number": "INE528A01020",
        "face_value": 10
      },
      {
        "stockCode": "GLAXO",
        "stockName": "GlaxoSmithKline Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2000",
        "paid_up_value": 10,
        "isis_number": "INE159A01016",
        "face_value": 10
      },
      {
        "stockCode": "GLENMARK",
        "stockName": "Glenmark Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2000",
        "paid_up_value": 1,
        "isis_number": "INE935A01035",
        "face_value": 1
      },
      {
        "stockCode": "GLFL",
        "stockName": "Gujarat Lease Financing Limited",
        "Series": "BE",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE540A01017",
        "face_value": 10
      },
      {
        "stockCode": "GLOBALVECT",
        "stockName": "Global Vectra Helicorp Limited",
        "Series": "EQ",
        "date_of_listing": "27-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE792H01019",
        "face_value": 10
      },
      {
        "stockCode": "GLOBOFFS",
        "stockName": "Global Offshore Services Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE446C01013",
        "face_value": 10
      },
      {
        "stockCode": "GLOBUSSPR",
        "stockName": "Globus Spirits Limited",
        "Series": "EQ",
        "date_of_listing": "23-SEP-2009",
        "paid_up_value": 10,
        "isis_number": "INE615I01010",
        "face_value": 10
      },
      {
        "stockCode": "GMBREW",
        "stockName": "GM Breweries Limited",
        "Series": "EQ",
        "date_of_listing": "23-AUG-1995",
        "paid_up_value": 10,
        "isis_number": "INE075D01018",
        "face_value": 10
      },
      {
        "stockCode": "GMDCLTD",
        "stockName": "Gujarat Mineral Development Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "17-DEC-1997",
        "paid_up_value": 2,
        "isis_number": "INE131A01031",
        "face_value": 2
      },
      {
        "stockCode": "GMMPFAUDLR",
        "stockName": "GMM Pfaudler Limited",
        "Series": "EQ",
        "date_of_listing": "05-MAR-2018",
        "paid_up_value": 2,
        "isis_number": "INE541A01023",
        "face_value": 2
      },
      {
        "stockCode": "GMRINFRA",
        "stockName": "GMR Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "21-AUG-2006",
        "paid_up_value": 1,
        "isis_number": "INE776C01039",
        "face_value": 1
      },
      {
        "stockCode": "GNA",
        "stockName": "GNA Axles Limited",
        "Series": "EQ",
        "date_of_listing": "26-SEP-2016",
        "paid_up_value": 10,
        "isis_number": "INE934S01014",
        "face_value": 10
      },
      {
        "stockCode": "GNFC",
        "stockName": "Gujarat Narmada Valley Fertilizers and Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE113A01013",
        "face_value": 10
      },
      {
        "stockCode": "GOACARBON",
        "stockName": "Goa Carbon Limited",
        "Series": "EQ",
        "date_of_listing": "05-JUN-2007",
        "paid_up_value": 10,
        "isis_number": "INE426D01013",
        "face_value": 10
      },
      {
        "stockCode": "GOCLCORP",
        "stockName": "GOCL Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUN-2014",
        "paid_up_value": 2,
        "isis_number": "INE077F01035",
        "face_value": 2
      },
      {
        "stockCode": "GODFRYPHLP",
        "stockName": "Godfrey Phillips India Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUL-1996",
        "paid_up_value": 2,
        "isis_number": "INE260B01028",
        "face_value": 2
      },
      {
        "stockCode": "GODREJAGRO",
        "stockName": "Godrej Agrovet Limited",
        "Series": "EQ",
        "date_of_listing": "16-OCT-2017",
        "paid_up_value": 10,
        "isis_number": "INE850D01014",
        "face_value": 10
      },
      {
        "stockCode": "GODREJCP",
        "stockName": "Godrej Consumer Products Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2001",
        "paid_up_value": 1,
        "isis_number": "INE102D01028",
        "face_value": 1
      },
      {
        "stockCode": "GODREJIND",
        "stockName": "Godrej Industries Limited",
        "Series": "EQ",
        "date_of_listing": "25-FEB-2003",
        "paid_up_value": 1,
        "isis_number": "INE233A01035",
        "face_value": 1
      },
      {
        "stockCode": "GODREJPROP",
        "stockName": "Godrej Properties Limited",
        "Series": "EQ",
        "date_of_listing": "05-JAN-2010",
        "paid_up_value": 5,
        "isis_number": "INE484J01027",
        "face_value": 5
      },
      {
        "stockCode": "GOENKA",
        "stockName": "Goenka Diamond and Jewels Limited",
        "Series": "BZ",
        "date_of_listing": "16-APR-2010",
        "paid_up_value": 1,
        "isis_number": "INE516K01024",
        "face_value": 1
      },
      {
        "stockCode": "GOKEX",
        "stockName": "Gokaldas Exports Limited",
        "Series": "EQ",
        "date_of_listing": "27-APR-2005",
        "paid_up_value": 5,
        "isis_number": "INE887G01027",
        "face_value": 5
      },
      {
        "stockCode": "GOKUL",
        "stockName": "Gokul Refoils and Solvent Limited",
        "Series": "BE",
        "date_of_listing": "04-JUN-2008",
        "paid_up_value": 2,
        "isis_number": "INE020J01029",
        "face_value": 2
      },
      {
        "stockCode": "GOKULAGRO",
        "stockName": "Gokul Agro Resources Limited",
        "Series": "BE",
        "date_of_listing": "11-MAR-2016",
        "paid_up_value": 2,
        "isis_number": "INE314T01025",
        "face_value": 2
      },
      {
        "stockCode": "GOLDENTOBC",
        "stockName": "Golden Tobacco Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE973A01010",
        "face_value": 10
      },
      {
        "stockCode": "GOLDIAM",
        "stockName": "Goldiam International Limited",
        "Series": "EQ",
        "date_of_listing": "29-AUG-2005",
        "paid_up_value": 10,
        "isis_number": "INE025B01017",
        "face_value": 10
      },
      {
        "stockCode": "GOLDTECH",
        "stockName": "Goldstone Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "11-APR-2001",
        "paid_up_value": 10,
        "isis_number": "INE805A01014",
        "face_value": 10
      },
      {
        "stockCode": "GOODLUCK",
        "stockName": "Goodluck India Limited",
        "Series": "EQ",
        "date_of_listing": "08-JAN-2015",
        "paid_up_value": 2,
        "isis_number": "INE127I01024",
        "face_value": 2
      },
      {
        "stockCode": "GPIL",
        "stockName": "Godawari Power And Ispat limited",
        "Series": "EQ",
        "date_of_listing": "25-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE177H01013",
        "face_value": 10
      },
      {
        "stockCode": "GPPL",
        "stockName": "Gujarat Pipavav Port Limited",
        "Series": "EQ",
        "date_of_listing": "09-SEP-2010",
        "paid_up_value": 10,
        "isis_number": "INE517F01014",
        "face_value": 10
      },
      {
        "stockCode": "GPTINFRA",
        "stockName": "GPT Infraprojects Limited",
        "Series": "EQ",
        "date_of_listing": "11-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE390G01014",
        "face_value": 10
      },
      {
        "stockCode": "GRANULES",
        "stockName": "Granules India Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2005",
        "paid_up_value": 1,
        "isis_number": "INE101D01020",
        "face_value": 1
      },
      {
        "stockCode": "GRAPHITE",
        "stockName": "Graphite India Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2003",
        "paid_up_value": 2,
        "isis_number": "INE371A01025",
        "face_value": 2
      },
      {
        "stockCode": "GRASIM",
        "stockName": "Grasim Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 2,
        "isis_number": "INE047A01021",
        "face_value": 2
      },
      {
        "stockCode": "GRAVITA",
        "stockName": "Gravita India Limited",
        "Series": "EQ",
        "date_of_listing": "16-NOV-2010",
        "paid_up_value": 2,
        "isis_number": "INE024L01027",
        "face_value": 2
      },
      {
        "stockCode": "GREAVESCOT",
        "stockName": "Greaves Cotton Limited",
        "Series": "EQ",
        "date_of_listing": "09-SEP-2004",
        "paid_up_value": 2,
        "isis_number": "INE224A01026",
        "face_value": 2
      },
      {
        "stockCode": "GREENLAM",
        "stockName": "Greenlam Industries Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2015",
        "paid_up_value": 5,
        "isis_number": "INE544R01013",
        "face_value": 5
      },
      {
        "stockCode": "GREENPLY",
        "stockName": "Greenply Industries Limited",
        "Series": "EQ",
        "date_of_listing": "06-MAR-1996",
        "paid_up_value": 1,
        "isis_number": "INE461C01038",
        "face_value": 1
      },
      {
        "stockCode": "GREENPOWER",
        "stockName": "Orient Green Power Company Limited",
        "Series": "EQ",
        "date_of_listing": "08-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE999K01014",
        "face_value": 10
      },
      {
        "stockCode": "GRINDWELL",
        "stockName": "Grindwell Norton Limited",
        "Series": "EQ",
        "date_of_listing": "11-SEP-2006",
        "paid_up_value": 5,
        "isis_number": "INE536A01023",
        "face_value": 5
      },
      {
        "stockCode": "GROBTEA",
        "stockName": "The Grob Tea Company Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE646C01018",
        "face_value": 10
      },
      {
        "stockCode": "GRPLTD",
        "stockName": "GRP Limited",
        "Series": "EQ",
        "date_of_listing": "12-FEB-2015",
        "paid_up_value": 10,
        "isis_number": "INE137I01015",
        "face_value": 10
      },
      {
        "stockCode": "GRSE",
        "stockName": "Garden Reach Shipbuilders & Engineers Limited",
        "Series": "EQ",
        "date_of_listing": "10-OCT-2018",
        "paid_up_value": 10,
        "isis_number": "INE382Z01011",
        "face_value": 10
      },
      {
        "stockCode": "GRUH",
        "stockName": "Gruh Finance Limited",
        "Series": "EQ",
        "date_of_listing": "10-SEP-2004",
        "paid_up_value": 2,
        "isis_number": "INE580B01029",
        "face_value": 2
      },
      {
        "stockCode": "GSCLCEMENT",
        "stockName": "Gujarat Sidhee Cement Limited",
        "Series": "EQ",
        "date_of_listing": "15-MAY-2013",
        "paid_up_value": 10,
        "isis_number": "INE542A01039",
        "face_value": 10
      },
      {
        "stockCode": "GSFC",
        "stockName": "Gujarat State Fertilizers & Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 2,
        "isis_number": "INE026A01025",
        "face_value": 2
      },
      {
        "stockCode": "GSKCONS",
        "stockName": "GlaxoSmithKline Consumer Healthcare Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2003",
        "paid_up_value": 10,
        "isis_number": "INE264A01014",
        "face_value": 10
      },
      {
        "stockCode": "GSPL",
        "stockName": "Gujarat State Petronet Limited",
        "Series": "EQ",
        "date_of_listing": "16-FEB-2006",
        "paid_up_value": 10,
        "isis_number": "INE246F01010",
        "face_value": 10
      },
      {
        "stockCode": "GSS",
        "stockName": "GSS Infotech Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAR-2008",
        "paid_up_value": 10,
        "isis_number": "INE871H01011",
        "face_value": 10
      },
      {
        "stockCode": "GTL",
        "stockName": "GTL Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE043A01012",
        "face_value": 10
      },
      {
        "stockCode": "GTLINFRA",
        "stockName": "GTL Infrastructure Limited",
        "Series": "BE",
        "date_of_listing": "09-NOV-2006",
        "paid_up_value": 10,
        "isis_number": "INE221H01019",
        "face_value": 10
      },
      {
        "stockCode": "GTNIND",
        "stockName": "GTN Industries Limited",
        "Series": "EQ",
        "date_of_listing": "02-AUG-1995",
        "paid_up_value": 10,
        "isis_number": "INE537A01013",
        "face_value": 10
      },
      {
        "stockCode": "GTNTEX",
        "stockName": "GTN Textiles Limited",
        "Series": "EQ",
        "date_of_listing": "18-MAY-2006",
        "paid_up_value": 10,
        "isis_number": "INE302H01017",
        "face_value": 10
      },
      {
        "stockCode": "GTPL",
        "stockName": "GTPL Hathway Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE869I01013",
        "face_value": 10
      },
      {
        "stockCode": "GUFICBIO",
        "stockName": "Gufic Biosciences Limited",
        "Series": "EQ",
        "date_of_listing": "19-OCT-2004",
        "paid_up_value": 1,
        "isis_number": "INE742B01025",
        "face_value": 1
      },
      {
        "stockCode": "GUJALKALI",
        "stockName": "Gujarat Alkalies and Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "07-AUG-1997",
        "paid_up_value": 10,
        "isis_number": "INE186A01019",
        "face_value": 10
      },
      {
        "stockCode": "GUJAPOLLO",
        "stockName": "Gujarat Apollo Industries Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUN-2007",
        "paid_up_value": 10,
        "isis_number": "INE826C01016",
        "face_value": 10
      },
      {
        "stockCode": "GUJFLUORO",
        "stockName": "Gujarat Fluorochemicals Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-1995",
        "paid_up_value": 1,
        "isis_number": "INE538A01037",
        "face_value": 1
      },
      {
        "stockCode": "GUJGASLTD",
        "stockName": "Gujarat Gas Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-2015",
        "paid_up_value": 2,
        "isis_number": "INE844O01030",
        "face_value": 2
      },
      {
        "stockCode": "GUJRAFFIA",
        "stockName": "Gujarat Raffia Industries Limited",
        "Series": "BE",
        "date_of_listing": "09-OCT-1996",
        "paid_up_value": 10,
        "isis_number": "INE610B01024",
        "face_value": 10
      },
      {
        "stockCode": "GULFOILLUB",
        "stockName": "Gulf Oil Lubricants India Limited",
        "Series": "EQ",
        "date_of_listing": "31-JUL-2014",
        "paid_up_value": 2,
        "isis_number": "INE635Q01029",
        "face_value": 2
      },
      {
        "stockCode": "GULFPETRO",
        "stockName": "GP Petroleums Limited",
        "Series": "EQ",
        "date_of_listing": "24-SEP-2004",
        "paid_up_value": 5,
        "isis_number": "INE586G01017",
        "face_value": 5
      },
      {
        "stockCode": "GULPOLY",
        "stockName": "Gulshan Polyols Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-2015",
        "paid_up_value": 1,
        "isis_number": "INE255D01024",
        "face_value": 1
      },
      {
        "stockCode": "GVKPIL",
        "stockName": "GVK Power & Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "27-FEB-2006",
        "paid_up_value": 1,
        "isis_number": "INE251H01024",
        "face_value": 1
      },
      {
        "stockCode": "HAL",
        "stockName": "Hindustan Aeronautics Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAR-2018",
        "paid_up_value": 10,
        "isis_number": "INE066F01012",
        "face_value": 10
      },
      {
        "stockCode": "HARITASEAT",
        "stockName": "Harita Seating Systems Limited",
        "Series": "EQ",
        "date_of_listing": "06-APR-2009",
        "paid_up_value": 10,
        "isis_number": "INE939D01015",
        "face_value": 10
      },
      {
        "stockCode": "HARRMALAYA",
        "stockName": "Harrisons  Malayalam Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE544A01019",
        "face_value": 10
      },
      {
        "stockCode": "HATHWAY",
        "stockName": "Hathway Cable & Datacom Limited",
        "Series": "EQ",
        "date_of_listing": "25-FEB-2010",
        "paid_up_value": 2,
        "isis_number": "INE982F01036",
        "face_value": 2
      },
      {
        "stockCode": "HATSUN",
        "stockName": "Hatsun Agro Product Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2014",
        "paid_up_value": 1,
        "isis_number": "INE473B01035",
        "face_value": 1
      },
      {
        "stockCode": "HAVELLS",
        "stockName": "Havells India Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAR-2001",
        "paid_up_value": 1,
        "isis_number": "INE176B01034",
        "face_value": 1
      },
      {
        "stockCode": "HAVISHA",
        "stockName": "Sri Havisha Hospitality and Infrastructure Limited",
        "Series": "BE",
        "date_of_listing": "16-FEB-2000",
        "paid_up_value": 2,
        "isis_number": "INE293B01029",
        "face_value": 2
      },
      {
        "stockCode": "HBLPOWER",
        "stockName": "HBL Power Systems Limited",
        "Series": "EQ",
        "date_of_listing": "04-JAN-2007",
        "paid_up_value": 1,
        "isis_number": "INE292B01021",
        "face_value": 1
      },
      {
        "stockCode": "HBSL",
        "stockName": "HB Stockholdings Limited",
        "Series": "EQ",
        "date_of_listing": "23-JUL-2018",
        "paid_up_value": 10,
        "isis_number": "INE550B01022",
        "face_value": 10
      },
      {
        "stockCode": "HCC",
        "stockName": "Hindustan Construction Company Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2003",
        "paid_up_value": 1,
        "isis_number": "INE549A01026",
        "face_value": 1
      },
      {
        "stockCode": "HCG",
        "stockName": "Healthcare Global Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2016",
        "paid_up_value": 10,
        "isis_number": "INE075I01017",
        "face_value": 10
      },
      {
        "stockCode": "HCL-INSYS",
        "stockName": "HCL Infosystems Limited",
        "Series": "EQ",
        "date_of_listing": "01-JAN-1997",
        "paid_up_value": 2,
        "isis_number": "INE236A01020",
        "face_value": 2
      },
      {
        "stockCode": "HCLTECH",
        "stockName": "HCL Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "06-JAN-2000",
        "paid_up_value": 2,
        "isis_number": "INE860A01027",
        "face_value": 2
      },
      {
        "stockCode": "HDFC",
        "stockName": "Housing Development Finance Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "23-OCT-1996",
        "paid_up_value": 2,
        "isis_number": "INE001A01036",
        "face_value": 2
      },
      {
        "stockCode": "HDFCAMC",
        "stockName": "HDFC Asset Management Company Limited",
        "Series": "EQ",
        "date_of_listing": "06-AUG-2018",
        "paid_up_value": 5,
        "isis_number": "INE127D01025",
        "face_value": 5
      },
      {
        "stockCode": "HDFCBANK",
        "stockName": "HDFC Bank Limited",
        "Series": "EQ",
        "date_of_listing": "08-NOV-1995",
        "paid_up_value": 2,
        "isis_number": "INE040A01026",
        "face_value": 2
      },
      {
        "stockCode": "HDFCLIFE",
        "stockName": "HDFC Life Insurance Company Limited",
        "Series": "EQ",
        "date_of_listing": "17-NOV-2017",
        "paid_up_value": 10,
        "isis_number": "INE795G01014",
        "face_value": 10
      },
      {
        "stockCode": "HDIL",
        "stockName": "Housing Development and Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUL-2007",
        "paid_up_value": 10,
        "isis_number": "INE191I01012",
        "face_value": 10
      },
      {
        "stockCode": "HEG",
        "stockName": "HEG Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE545A01016",
        "face_value": 10
      },
      {
        "stockCode": "HEIDELBERG",
        "stockName": "HeidelbergCement India Limited",
        "Series": "EQ",
        "date_of_listing": "15-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE578A01017",
        "face_value": 10
      },
      {
        "stockCode": "HERCULES",
        "stockName": "Hercules Hoists Limited",
        "Series": "EQ",
        "date_of_listing": "19-FEB-2008",
        "paid_up_value": 1,
        "isis_number": "INE688E01024",
        "face_value": 1
      },
      {
        "stockCode": "HERITGFOOD",
        "stockName": "Heritage Foods Limited",
        "Series": "EQ",
        "date_of_listing": "27-NOV-1996",
        "paid_up_value": 5,
        "isis_number": "INE978A01027",
        "face_value": 5
      },
      {
        "stockCode": "HEROMOTOCO",
        "stockName": "Hero MotoCorp Limited",
        "Series": "EQ",
        "date_of_listing": "11-APR-2003",
        "paid_up_value": 2,
        "isis_number": "INE158A01026",
        "face_value": 2
      },
      {
        "stockCode": "HESTERBIO",
        "stockName": "Hester Biosciences Limited",
        "Series": "EQ",
        "date_of_listing": "13-MAR-2015",
        "paid_up_value": 10,
        "isis_number": "INE782E01017",
        "face_value": 10
      },
      {
        "stockCode": "HEXATRADEX",
        "stockName": "Hexa Tradex Limited",
        "Series": "BE",
        "date_of_listing": "20-APR-2012",
        "paid_up_value": 2,
        "isis_number": "INE750M01017",
        "face_value": 2
      },
      {
        "stockCode": "HEXAWARE",
        "stockName": "Hexaware Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-2002",
        "paid_up_value": 2,
        "isis_number": "INE093A01033",
        "face_value": 2
      },
      {
        "stockCode": "HFCL",
        "stockName": "Himachal Futuristic Communications Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2011",
        "paid_up_value": 1,
        "isis_number": "INE548A01028",
        "face_value": 1
      },
      {
        "stockCode": "HGINFRA",
        "stockName": "H.G. Infra Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2018",
        "paid_up_value": 10,
        "isis_number": "INE926X01010",
        "face_value": 10
      },
      {
        "stockCode": "HGS",
        "stockName": "Hinduja Global Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUN-2007",
        "paid_up_value": 10,
        "isis_number": "INE170I01016",
        "face_value": 10
      },
      {
        "stockCode": "HIGHGROUND",
        "stockName": "High Ground Enterprise Limited",
        "Series": "EQ",
        "date_of_listing": "24-NOV-2016",
        "paid_up_value": 1,
        "isis_number": "INE361M01021",
        "face_value": 1
      },
      {
        "stockCode": "HIKAL",
        "stockName": "Hikal Limited",
        "Series": "EQ",
        "date_of_listing": "14-FEB-2001",
        "paid_up_value": 2,
        "isis_number": "INE475B01022",
        "face_value": 2
      },
      {
        "stockCode": "HIL",
        "stockName": "HIL Limited",
        "Series": "EQ",
        "date_of_listing": "26-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE557A01011",
        "face_value": 10
      },
      {
        "stockCode": "HILTON",
        "stockName": "Hilton Metal Forging Limited",
        "Series": "EQ",
        "date_of_listing": "24-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE788H01017",
        "face_value": 10
      },
      {
        "stockCode": "HIMATSEIDE",
        "stockName": "Himatsingka Seide Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 5,
        "isis_number": "INE049A01027",
        "face_value": 5
      },
      {
        "stockCode": "HINDALCO",
        "stockName": "Hindalco Industries Limited",
        "Series": "EQ",
        "date_of_listing": "08-JAN-1997",
        "paid_up_value": 1,
        "isis_number": "INE038A01020",
        "face_value": 1
      },
      {
        "stockCode": "HINDCOMPOS",
        "stockName": "Hindustan Composites Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-1996",
        "paid_up_value": 5,
        "isis_number": "INE310C01029",
        "face_value": 5
      },
      {
        "stockCode": "HINDCOPPER",
        "stockName": "Hindustan Copper Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-2010",
        "paid_up_value": 5,
        "isis_number": "INE531E01026",
        "face_value": 5
      },
      {
        "stockCode": "HINDMOTORS",
        "stockName": "Hindustan Motors Limited",
        "Series": "EQ",
        "date_of_listing": "21-FEB-2011",
        "paid_up_value": 5,
        "isis_number": "INE253A01025",
        "face_value": 5
      },
      {
        "stockCode": "HINDNATGLS",
        "stockName": "Hindusthan National Glass & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "15-APR-2009",
        "paid_up_value": 2,
        "isis_number": "INE952A01022",
        "face_value": 2
      },
      {
        "stockCode": "HINDOILEXP",
        "stockName": "Hindustan Oil Exploration Company Limited",
        "Series": "EQ",
        "date_of_listing": "23-SEP-2003",
        "paid_up_value": 10,
        "isis_number": "INE345A01011",
        "face_value": 10
      },
      {
        "stockCode": "HINDPETRO",
        "stockName": "Hindustan Petroleum Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUN-1998",
        "paid_up_value": 10,
        "isis_number": "INE094A01015",
        "face_value": 10
      },
      {
        "stockCode": "HINDSYNTEX",
        "stockName": "Hind Syntex Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE155B01012",
        "face_value": 10
      },
      {
        "stockCode": "HINDUJAVEN",
        "stockName": "Hinduja Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "24-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE353A01023",
        "face_value": 10
      },
      {
        "stockCode": "HINDUNILVR",
        "stockName": "Hindustan Unilever Limited",
        "Series": "EQ",
        "date_of_listing": "06-JUL-1995",
        "paid_up_value": 1,
        "isis_number": "INE030A01027",
        "face_value": 1
      },
      {
        "stockCode": "HINDZINC",
        "stockName": "Hindustan Zinc Limited",
        "Series": "EQ",
        "date_of_listing": "21-NOV-2006",
        "paid_up_value": 2,
        "isis_number": "INE267A01025",
        "face_value": 2
      },
      {
        "stockCode": "HIRECT",
        "stockName": "Hind Rectifiers Limited",
        "Series": "EQ",
        "date_of_listing": "26-DEC-2006",
        "paid_up_value": 2,
        "isis_number": "INE835D01023",
        "face_value": 2
      },
      {
        "stockCode": "HISARMETAL",
        "stockName": "Hisar Metal Industries Limited",
        "Series": "EQ",
        "date_of_listing": "05-JAN-2017",
        "paid_up_value": 10,
        "isis_number": "INE598C01011",
        "face_value": 10
      },
      {
        "stockCode": "HITECH",
        "stockName": "Hi-Tech Pipes Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAY-2018",
        "paid_up_value": 10,
        "isis_number": "INE106T01017",
        "face_value": 10
      },
      {
        "stockCode": "HITECHCORP",
        "stockName": "Hitech Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE120D01012",
        "face_value": 10
      },
      {
        "stockCode": "HITECHGEAR",
        "stockName": "The Hi-Tech Gears Limited",
        "Series": "EQ",
        "date_of_listing": "21-JAN-2002",
        "paid_up_value": 10,
        "isis_number": "INE127B01011",
        "face_value": 10
      },
      {
        "stockCode": "HMT",
        "stockName": "HMT Limited",
        "Series": "BZ",
        "date_of_listing": "29-AUG-2003",
        "paid_up_value": 10,
        "isis_number": "INE262A01018",
        "face_value": 10
      },
      {
        "stockCode": "HMVL",
        "stockName": "Hindustan Media Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "21-JUL-2010",
        "paid_up_value": 10,
        "isis_number": "INE871K01015",
        "face_value": 10
      },
      {
        "stockCode": "HONAUT",
        "stockName": "Honeywell Automation India Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUL-2003",
        "paid_up_value": 10,
        "isis_number": "INE671A01010",
        "face_value": 10
      },
      {
        "stockCode": "HONDAPOWER",
        "stockName": "Honda Siel Power Products Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2003",
        "paid_up_value": 10,
        "isis_number": "INE634A01018",
        "face_value": 10
      },
      {
        "stockCode": "HOTELEELA",
        "stockName": "Hotel Leela Venture Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-1995",
        "paid_up_value": 2,
        "isis_number": "INE102A01024",
        "face_value": 2
      },
      {
        "stockCode": "HOTELRUGBY",
        "stockName": "Hotel Rugby Limited",
        "Series": "BE",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE275F01019",
        "face_value": 10
      },
      {
        "stockCode": "HOVS",
        "stockName": "HOV Services Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE596H01014",
        "face_value": 10
      },
      {
        "stockCode": "HPL",
        "stockName": "HPL Electric & Power Limited",
        "Series": "EQ",
        "date_of_listing": "04-OCT-2016",
        "paid_up_value": 10,
        "isis_number": "INE495S01016",
        "face_value": 10
      },
      {
        "stockCode": "HSCL",
        "stockName": "Himadri Speciality Chemical Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2007",
        "paid_up_value": 1,
        "isis_number": "INE019C01026",
        "face_value": 1
      },
      {
        "stockCode": "HSIL",
        "stockName": "HSIL Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAY-2000",
        "paid_up_value": 2,
        "isis_number": "INE415A01038",
        "face_value": 2
      },
      {
        "stockCode": "HTMEDIA",
        "stockName": "HT Media Limited",
        "Series": "EQ",
        "date_of_listing": "01-SEP-2005",
        "paid_up_value": 2,
        "isis_number": "INE501G01024",
        "face_value": 2
      },
      {
        "stockCode": "HUBTOWN",
        "stockName": "Hubtown Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE703H01016",
        "face_value": 10
      },
      {
        "stockCode": "HUDCO",
        "stockName": "Housing & Urban Development Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAY-2017",
        "paid_up_value": 10,
        "isis_number": "INE031A01017",
        "face_value": 10
      },
      {
        "stockCode": "IBREALEST",
        "stockName": "Indiabulls Real Estate Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2007",
        "paid_up_value": 2,
        "isis_number": "INE069I01010",
        "face_value": 2
      },
      {
        "stockCode": "IBULHSGFIN",
        "stockName": "Indiabulls Housing Finance Limited",
        "Series": "EQ",
        "date_of_listing": "23-JUL-2013",
        "paid_up_value": 2,
        "isis_number": "INE148I01020",
        "face_value": 2
      },
      {
        "stockCode": "IBULISL",
        "stockName": "Indiabulls Integrated Services Limited",
        "Series": "EQ",
        "date_of_listing": "18-AUG-2011",
        "paid_up_value": 2,
        "isis_number": "INE126M01010",
        "face_value": 2
      },
      {
        "stockCode": "IBVENTURES",
        "stockName": "Indiabulls Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "02-APR-2008",
        "paid_up_value": 2,
        "isis_number": "INE274G01010",
        "face_value": 2
      },
      {
        "stockCode": "ICICIBANK",
        "stockName": "ICICI Bank Limited",
        "Series": "EQ",
        "date_of_listing": "17-SEP-1997",
        "paid_up_value": 2,
        "isis_number": "INE090A01021",
        "face_value": 2
      },
      {
        "stockCode": "ICICIGI",
        "stockName": "ICICI Lombard General Insurance Company Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE765G01017",
        "face_value": 10
      },
      {
        "stockCode": "ICICIPRULI",
        "stockName": "ICICI Prudential Life Insurance Company Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2016",
        "paid_up_value": 10,
        "isis_number": "INE726G01019",
        "face_value": 10
      },
      {
        "stockCode": "ICIL",
        "stockName": "Indo Count Industries Limited",
        "Series": "EQ",
        "date_of_listing": "12-SEP-2005",
        "paid_up_value": 2,
        "isis_number": "INE483B01026",
        "face_value": 2
      },
      {
        "stockCode": "ICRA",
        "stockName": "ICRA Limited",
        "Series": "EQ",
        "date_of_listing": "13-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE725G01011",
        "face_value": 10
      },
      {
        "stockCode": "ICSA",
        "stockName": "ICSA (India) Limited",
        "Series": "BE",
        "date_of_listing": "28-SEP-2006",
        "paid_up_value": 2,
        "isis_number": "INE306B01029",
        "face_value": 2
      },
      {
        "stockCode": "IDBI",
        "stockName": "IDBI Bank Limited",
        "Series": "EQ",
        "date_of_listing": "20-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE008A01015",
        "face_value": 10
      },
      {
        "stockCode": "IDEA",
        "stockName": "Vodafone Idea Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE669E01016",
        "face_value": 10
      },
      {
        "stockCode": "IDFC",
        "stockName": "IDFC Limited",
        "Series": "EQ",
        "date_of_listing": "12-AUG-2005",
        "paid_up_value": 10,
        "isis_number": "INE043D01016",
        "face_value": 10
      },
      {
        "stockCode": "IDFCFIRSTB",
        "stockName": "IDFC First Bank Limited",
        "Series": "EQ",
        "date_of_listing": "06-NOV-2015",
        "paid_up_value": 10,
        "isis_number": "INE092T01019",
        "face_value": 10
      },
      {
        "stockCode": "IEX",
        "stockName": "Indian Energy Exchange Limited",
        "Series": "EQ",
        "date_of_listing": "23-OCT-2017",
        "paid_up_value": 1,
        "isis_number": "INE022Q01020",
        "face_value": 1
      },
      {
        "stockCode": "IFBAGRO",
        "stockName": "IFB Agro Industries Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE076C01018",
        "face_value": 10
      },
      {
        "stockCode": "IFBIND",
        "stockName": "IFB Industries Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE559A01017",
        "face_value": 10
      },
      {
        "stockCode": "IFCI",
        "stockName": "IFCI Limited",
        "Series": "EQ",
        "date_of_listing": "26-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE039A01010",
        "face_value": 10
      },
      {
        "stockCode": "IFGLEXPOR",
        "stockName": "IFGL Refractories Limited",
        "Series": "EQ",
        "date_of_listing": "14-NOV-2017",
        "paid_up_value": 10,
        "isis_number": "INE133Y01011",
        "face_value": 10
      },
      {
        "stockCode": "IGARASHI",
        "stockName": "Igarashi Motors India Limited",
        "Series": "EQ",
        "date_of_listing": "09-OCT-2003",
        "paid_up_value": 10,
        "isis_number": "INE188B01013",
        "face_value": 10
      },
      {
        "stockCode": "IGL",
        "stockName": "Indraprastha Gas Limited",
        "Series": "EQ",
        "date_of_listing": "26-DEC-2003",
        "paid_up_value": 2,
        "isis_number": "INE203G01027",
        "face_value": 2
      },
      {
        "stockCode": "IGPL",
        "stockName": "IG Petrochemicals Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2007",
        "paid_up_value": 10,
        "isis_number": "INE204A01010",
        "face_value": 10
      },
      {
        "stockCode": "IIFL",
        "stockName": "IIFL Finance Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-2005",
        "paid_up_value": 2,
        "isis_number": "INE530B01024",
        "face_value": 2
      },
      {
        "stockCode": "IITL",
        "stockName": "Industrial Investment Trust Limited",
        "Series": "EQ",
        "date_of_listing": "17-AUG-2010",
        "paid_up_value": 10,
        "isis_number": "INE886A01014",
        "face_value": 10
      },
      {
        "stockCode": "IL&FSENGG",
        "stockName": "IL&FS Engineering and Construction Company Limited",
        "Series": "BZ",
        "date_of_listing": "25-OCT-2007",
        "paid_up_value": 10,
        "isis_number": "INE369I01014",
        "face_value": 10
      },
      {
        "stockCode": "IL&FSTRANS",
        "stockName": "IL&FS Transportation Networks Limited",
        "Series": "BZ",
        "date_of_listing": "30-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE975G01012",
        "face_value": 10
      },
      {
        "stockCode": "IMFA",
        "stockName": "Indian Metals & Ferro Alloys Limited",
        "Series": "EQ",
        "date_of_listing": "23-JUL-2010",
        "paid_up_value": 10,
        "isis_number": "INE919H01018",
        "face_value": 10
      },
      {
        "stockCode": "IMPAL",
        "stockName": "India Motor Parts and Accessories Limited",
        "Series": "EQ",
        "date_of_listing": "07-OCT-2005",
        "paid_up_value": 10,
        "isis_number": "INE547E01014",
        "face_value": 10
      },
      {
        "stockCode": "IMPEXFERRO",
        "stockName": "Impex Ferro Tech Limited",
        "Series": "BE",
        "date_of_listing": "03-FEB-2005",
        "paid_up_value": 10,
        "isis_number": "INE691G01015",
        "face_value": 10
      },
      {
        "stockCode": "INDBANK",
        "stockName": "Indbank Merchant Banking Services Limited",
        "Series": "EQ",
        "date_of_listing": "08-OCT-2008",
        "paid_up_value": 10,
        "isis_number": "INE841B01017",
        "face_value": 10
      },
      {
        "stockCode": "INDHOTEL",
        "stockName": "The Indian Hotels Company Limited",
        "Series": "EQ",
        "date_of_listing": "03-JUL-1996",
        "paid_up_value": 1,
        "isis_number": "INE053A01029",
        "face_value": 1
      },
      {
        "stockCode": "INDIACEM",
        "stockName": "The India Cements Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAY-2000",
        "paid_up_value": 10,
        "isis_number": "INE383A01012",
        "face_value": 10
      },
      {
        "stockCode": "INDIAGLYCO",
        "stockName": "India Glycols Limited",
        "Series": "EQ",
        "date_of_listing": "01-JUL-2005",
        "paid_up_value": 10,
        "isis_number": "INE560A01015",
        "face_value": 10
      },
      {
        "stockCode": "INDIANB",
        "stockName": "Indian Bank",
        "Series": "EQ",
        "date_of_listing": "01-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE562A01011",
        "face_value": 10
      },
      {
        "stockCode": "INDIANCARD",
        "stockName": "Indian Card Clothing Company Limited",
        "Series": "EQ",
        "date_of_listing": "08-JAN-1997",
        "paid_up_value": 10,
        "isis_number": "INE061A01014",
        "face_value": 10
      },
      {
        "stockCode": "INDIANHUME",
        "stockName": "Indian Hume Pipe Company Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-1995",
        "paid_up_value": 2,
        "isis_number": "INE323C01030",
        "face_value": 2
      },
      {
        "stockCode": "INDIGO",
        "stockName": "InterGlobe Aviation Limited",
        "Series": "EQ",
        "date_of_listing": "10-NOV-2015",
        "paid_up_value": 10,
        "isis_number": "INE646L01027",
        "face_value": 10
      },
      {
        "stockCode": "INDLMETER",
        "stockName": "IMP Powers Limited",
        "Series": "EQ",
        "date_of_listing": "10-JAN-1996",
        "paid_up_value": 10,
        "isis_number": "INE065B01013",
        "face_value": 10
      },
      {
        "stockCode": "INDNIPPON",
        "stockName": "India Nippon Electricals Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAY-1997",
        "paid_up_value": 5,
        "isis_number": "INE092B01025",
        "face_value": 5
      },
      {
        "stockCode": "INDOCO",
        "stockName": "Indoco Remedies Limited",
        "Series": "EQ",
        "date_of_listing": "14-JAN-2005",
        "paid_up_value": 2,
        "isis_number": "INE873D01024",
        "face_value": 2
      },
      {
        "stockCode": "INDORAMA",
        "stockName": "Indo Rama Synthetics (India) Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2003",
        "paid_up_value": 10,
        "isis_number": "INE156A01020",
        "face_value": 10
      },
      {
        "stockCode": "INDOSOLAR",
        "stockName": "Indosolar Limited",
        "Series": "BE",
        "date_of_listing": "29-SEP-2010",
        "paid_up_value": 10,
        "isis_number": "INE866K01015",
        "face_value": 10
      },
      {
        "stockCode": "INDOSTAR",
        "stockName": "IndoStar Capital Finance Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-2018",
        "paid_up_value": 10,
        "isis_number": "INE896L01010",
        "face_value": 10
      },
      {
        "stockCode": "INDOTECH",
        "stockName": "Indo Tech Transformers Limited",
        "Series": "EQ",
        "date_of_listing": "16-MAR-2006",
        "paid_up_value": 10,
        "isis_number": "INE332H01014",
        "face_value": 10
      },
      {
        "stockCode": "INDOTHAI",
        "stockName": "Indo Thai Securities Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-2011",
        "paid_up_value": 10,
        "isis_number": "INE337M01013",
        "face_value": 10
      },
      {
        "stockCode": "INDOWIND",
        "stockName": "Indowind Energy Limited",
        "Series": "EQ",
        "date_of_listing": "14-SEP-2007",
        "paid_up_value": 10,
        "isis_number": "INE227G01018",
        "face_value": 10
      },
      {
        "stockCode": "INDRAMEDCO",
        "stockName": "Indraprastha Medical Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "17-APR-1997",
        "paid_up_value": 10,
        "isis_number": "INE681B01017",
        "face_value": 10
      },
      {
        "stockCode": "INDSWFTLAB",
        "stockName": "Ind-Swift Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "02-JUL-1997",
        "paid_up_value": 10,
        "isis_number": "INE915B01019",
        "face_value": 10
      },
      {
        "stockCode": "INDSWFTLTD",
        "stockName": "Ind-Swift Limited",
        "Series": "EQ",
        "date_of_listing": "18-OCT-2004",
        "paid_up_value": 2,
        "isis_number": "INE788B01028",
        "face_value": 2
      },
      {
        "stockCode": "INDTERRAIN",
        "stockName": "Indian Terrain Fashions Limited",
        "Series": "EQ",
        "date_of_listing": "11-MAR-2011",
        "paid_up_value": 2,
        "isis_number": "INE611L01021",
        "face_value": 2
      },
      {
        "stockCode": "INDUSINDBK",
        "stockName": "IndusInd Bank Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-1998",
        "paid_up_value": 10,
        "isis_number": "INE095A01012",
        "face_value": 10
      },
      {
        "stockCode": "INEOSSTYRO",
        "stockName": "INEOS Styrolution India Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE189B01011",
        "face_value": 10
      },
      {
        "stockCode": "INFIBEAM",
        "stockName": "Infibeam Avenues Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2016",
        "paid_up_value": 1,
        "isis_number": "INE483S01020",
        "face_value": 1
      },
      {
        "stockCode": "INFRATEL",
        "stockName": "Bharti Infratel Limited",
        "Series": "EQ",
        "date_of_listing": "28-DEC-2012",
        "paid_up_value": 10,
        "isis_number": "INE121J01017",
        "face_value": 10
      },
      {
        "stockCode": "INFY",
        "stockName": "Infosys Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 5,
        "isis_number": "INE009A01021",
        "face_value": 5
      },
      {
        "stockCode": "INGERRAND",
        "stockName": "Ingersoll Rand (India) Limited",
        "Series": "EQ",
        "date_of_listing": "15-APR-1999",
        "paid_up_value": 10,
        "isis_number": "INE177A01018",
        "face_value": 10
      },
      {
        "stockCode": "INOXLEISUR",
        "stockName": "INOX Leisure Limited",
        "Series": "EQ",
        "date_of_listing": "23-FEB-2006",
        "paid_up_value": 10,
        "isis_number": "INE312H01016",
        "face_value": 10
      },
      {
        "stockCode": "INOXWIND",
        "stockName": "Inox Wind Limited",
        "Series": "EQ",
        "date_of_listing": "09-APR-2015",
        "paid_up_value": 10,
        "isis_number": "INE066P01011",
        "face_value": 10
      },
      {
        "stockCode": "INSECTICID",
        "stockName": "Insecticides (India) Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE070I01018",
        "face_value": 10
      },
      {
        "stockCode": "INSPIRISYS",
        "stockName": "Inspirisys Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "30-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE020G01017",
        "face_value": 10
      },
      {
        "stockCode": "INTEGRA",
        "stockName": "Integra Garments and Textiles Limited",
        "Series": "BE",
        "date_of_listing": "20-AUG-2013",
        "paid_up_value": 3,
        "isis_number": "INE418N01027",
        "face_value": 3
      },
      {
        "stockCode": "INTELLECT",
        "stockName": "Intellect Design Arena Limited",
        "Series": "EQ",
        "date_of_listing": "18-DEC-2014",
        "paid_up_value": 5,
        "isis_number": "INE306R01017",
        "face_value": 5
      },
      {
        "stockCode": "INTENTECH",
        "stockName": "Intense Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2017",
        "paid_up_value": 2,
        "isis_number": "INE781A01025",
        "face_value": 2
      },
      {
        "stockCode": "INVENTURE",
        "stockName": "Inventure Growth & Securities Limited",
        "Series": "EQ",
        "date_of_listing": "04-AUG-2011",
        "paid_up_value": 10,
        "isis_number": "INE878H01016",
        "face_value": 10
      },
      {
        "stockCode": "IOB",
        "stockName": "Indian Overseas Bank",
        "Series": "EQ",
        "date_of_listing": "07-DEC-2000",
        "paid_up_value": 10,
        "isis_number": "INE565A01014",
        "face_value": 10
      },
      {
        "stockCode": "IOC",
        "stockName": "Indian Oil Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUL-1996",
        "paid_up_value": 10,
        "isis_number": "INE242A01010",
        "face_value": 10
      },
      {
        "stockCode": "IOLCP",
        "stockName": "IOL Chemicals and Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "08-NOV-2010",
        "paid_up_value": 10,
        "isis_number": "INE485C01011",
        "face_value": 10
      },
      {
        "stockCode": "IPAPPM",
        "stockName": "International Paper APPM Limited",
        "Series": "EQ",
        "date_of_listing": "13-MAY-2004",
        "paid_up_value": 10,
        "isis_number": "INE435A01028",
        "face_value": 10
      },
      {
        "stockCode": "IPCALAB",
        "stockName": "IPCA Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE571A01020",
        "face_value": 2
      },
      {
        "stockCode": "IRB",
        "stockName": "IRB Infrastructure Developers Limited",
        "Series": "EQ",
        "date_of_listing": "25-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE821I01014",
        "face_value": 10
      },
      {
        "stockCode": "IRCON",
        "stockName": "Ircon International Limited",
        "Series": "EQ",
        "date_of_listing": "28-SEP-2018",
        "paid_up_value": 10,
        "isis_number": "INE962Y01013",
        "face_value": 10
      },
      {
        "stockCode": "ISEC",
        "stockName": "ICICI Securities Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2018",
        "paid_up_value": 5,
        "isis_number": "INE763G01038",
        "face_value": 5
      },
      {
        "stockCode": "ISFT",
        "stockName": "Intrasoft Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-2010",
        "paid_up_value": 10,
        "isis_number": "INE566K01011",
        "face_value": 10
      },
      {
        "stockCode": "ISMTLTD",
        "stockName": "ISMT Limited",
        "Series": "EQ",
        "date_of_listing": "28-AUG-2007",
        "paid_up_value": 5,
        "isis_number": "INE732F01019",
        "face_value": 5
      },
      {
        "stockCode": "ITC",
        "stockName": "ITC Limited",
        "Series": "EQ",
        "date_of_listing": "23-AUG-1995",
        "paid_up_value": 1,
        "isis_number": "INE154A01025",
        "face_value": 1
      },
      {
        "stockCode": "ITDC",
        "stockName": "India Tourism Development Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "30-DEC-2016",
        "paid_up_value": 10,
        "isis_number": "INE353K01014",
        "face_value": 10
      },
      {
        "stockCode": "ITDCEM",
        "stockName": "ITD Cementation India Limited",
        "Series": "EQ",
        "date_of_listing": "10-FEB-1999",
        "paid_up_value": 1,
        "isis_number": "INE686A01026",
        "face_value": 1
      },
      {
        "stockCode": "ITI",
        "stockName": "ITI Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-2003",
        "paid_up_value": 10,
        "isis_number": "INE248A01017",
        "face_value": 10
      },
      {
        "stockCode": "IVC",
        "stockName": "IL&FS Investment Managers Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-1999",
        "paid_up_value": 2,
        "isis_number": "INE050B01023",
        "face_value": 2
      },
      {
        "stockCode": "IVP",
        "stockName": "IVP Limited",
        "Series": "EQ",
        "date_of_listing": "13-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE043C01018",
        "face_value": 10
      },
      {
        "stockCode": "IVRCLINFRA",
        "stockName": "IVRCL Limited",
        "Series": "BE",
        "date_of_listing": "08-MAR-2000",
        "paid_up_value": 2,
        "isis_number": "INE875A01025",
        "face_value": 2
      },
      {
        "stockCode": "IZMO",
        "stockName": "IZMO Limited",
        "Series": "EQ",
        "date_of_listing": "05-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE848A01014",
        "face_value": 10
      },
      {
        "stockCode": "J&KBANK",
        "stockName": "The Jammu & Kashmir Bank Limited",
        "Series": "EQ",
        "date_of_listing": "22-JUL-1998",
        "paid_up_value": 1,
        "isis_number": "INE168A01041",
        "face_value": 1
      },
      {
        "stockCode": "JAGRAN",
        "stockName": "Jagran Prakashan Limited",
        "Series": "EQ",
        "date_of_listing": "22-FEB-2006",
        "paid_up_value": 2,
        "isis_number": "INE199G01027",
        "face_value": 2
      },
      {
        "stockCode": "JAGSNPHARM",
        "stockName": "Jagsonpal Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAR-2000",
        "paid_up_value": 5,
        "isis_number": "INE048B01027",
        "face_value": 5
      },
      {
        "stockCode": "JAIBALAJI",
        "stockName": "Jai Balaji Industries Limited",
        "Series": "EQ",
        "date_of_listing": "09-DEC-2003",
        "paid_up_value": 10,
        "isis_number": "INE091G01018",
        "face_value": 10
      },
      {
        "stockCode": "JAICORPLTD",
        "stockName": "Jai Corp Limited",
        "Series": "EQ",
        "date_of_listing": "26-NOV-1997",
        "paid_up_value": 1,
        "isis_number": "INE070D01027",
        "face_value": 1
      },
      {
        "stockCode": "JAIHINDPRO",
        "stockName": "Jaihind Projects Limited",
        "Series": "BE",
        "date_of_listing": "29-FEB-2012",
        "paid_up_value": 10,
        "isis_number": "INE343D01010",
        "face_value": 10
      },
      {
        "stockCode": "JAINSTUDIO",
        "stockName": "Jain Studios Limited",
        "Series": "BZ",
        "date_of_listing": "19-NOV-1997",
        "paid_up_value": 10,
        "isis_number": "INE486B01011",
        "face_value": 10
      },
      {
        "stockCode": "JAMNAAUTO",
        "stockName": "Jamna Auto Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-DEC-2010",
        "paid_up_value": 1,
        "isis_number": "INE039C01032",
        "face_value": 1
      },
      {
        "stockCode": "JAYAGROGN",
        "stockName": "Jayant Agro Organics Limited",
        "Series": "EQ",
        "date_of_listing": "17-APR-1996",
        "paid_up_value": 5,
        "isis_number": "INE785A01026",
        "face_value": 5
      },
      {
        "stockCode": "JAYBARMARU",
        "stockName": "Jay Bharat Maruti Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-1996",
        "paid_up_value": 5,
        "isis_number": "INE571B01028",
        "face_value": 5
      },
      {
        "stockCode": "JAYNECOIND",
        "stockName": "Jayaswal Neco Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE854B01010",
        "face_value": 10
      },
      {
        "stockCode": "JAYSREETEA",
        "stockName": "Jayshree Tea & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-1995",
        "paid_up_value": 5,
        "isis_number": "INE364A01020",
        "face_value": 5
      },
      {
        "stockCode": "JBCHEPHARM",
        "stockName": "JB Chemicals & Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "29-APR-2003",
        "paid_up_value": 2,
        "isis_number": "INE572A01028",
        "face_value": 2
      },
      {
        "stockCode": "JBFIND",
        "stockName": "JBF Industries Limited",
        "Series": "EQ",
        "date_of_listing": "25-FEB-2004",
        "paid_up_value": 10,
        "isis_number": "INE187A01017",
        "face_value": 10
      },
      {
        "stockCode": "JBMA",
        "stockName": "JBM Auto Limited",
        "Series": "EQ",
        "date_of_listing": "17-DEC-2004",
        "paid_up_value": 5,
        "isis_number": "INE927D01028",
        "face_value": 5
      },
      {
        "stockCode": "JCHAC",
        "stockName": "Johnson Controls - Hitachi Air Conditioning India Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-2000",
        "paid_up_value": 10,
        "isis_number": "INE782A01015",
        "face_value": 10
      },
      {
        "stockCode": "JETAIRWAYS",
        "stockName": "Jet Airways (India) Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAR-2005",
        "paid_up_value": 10,
        "isis_number": "INE802G01018",
        "face_value": 10
      },
      {
        "stockCode": "JHS",
        "stockName": "JHS Svendgaard Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "21-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE544H01014",
        "face_value": 10
      },
      {
        "stockCode": "JIKIND",
        "stockName": "JIK Industries Limited",
        "Series": "BE",
        "date_of_listing": "26-NOV-2008",
        "paid_up_value": 10,
        "isis_number": "INE026B01049",
        "face_value": 10
      },
      {
        "stockCode": "JINDALPHOT",
        "stockName": "Jindal Photo Limited",
        "Series": "EQ",
        "date_of_listing": "07-APR-2005",
        "paid_up_value": 10,
        "isis_number": "INE796G01012",
        "face_value": 10
      },
      {
        "stockCode": "JINDALPOLY",
        "stockName": "Jindal Poly Films Limited",
        "Series": "EQ",
        "date_of_listing": "21-JAN-2002",
        "paid_up_value": 10,
        "isis_number": "INE197D01010",
        "face_value": 10
      },
      {
        "stockCode": "JINDALSAW",
        "stockName": "Jindal Saw Limited",
        "Series": "EQ",
        "date_of_listing": "29-APR-2003",
        "paid_up_value": 2,
        "isis_number": "INE324A01024",
        "face_value": 2
      },
      {
        "stockCode": "JINDALSTEL",
        "stockName": "Jindal Steel & Power Limited",
        "Series": "EQ",
        "date_of_listing": "29-DEC-1999",
        "paid_up_value": 1,
        "isis_number": "INE749A01030",
        "face_value": 1
      },
      {
        "stockCode": "JINDCOT",
        "stockName": "Jindal Cotex Limited",
        "Series": "BE",
        "date_of_listing": "22-SEP-2009",
        "paid_up_value": 10,
        "isis_number": "INE904J01016",
        "face_value": 10
      },
      {
        "stockCode": "JINDRILL",
        "stockName": "Jindal Drilling And Industries Limited",
        "Series": "EQ",
        "date_of_listing": "22-DEC-2006",
        "paid_up_value": 5,
        "isis_number": "INE742C01031",
        "face_value": 5
      },
      {
        "stockCode": "JINDWORLD",
        "stockName": "Jindal Worldwide Limited",
        "Series": "EQ",
        "date_of_listing": "25-NOV-2010",
        "paid_up_value": 1,
        "isis_number": "INE247D01039",
        "face_value": 1
      },
      {
        "stockCode": "JISLDVREQS",
        "stockName": "Jain Irrigation Systems Limited",
        "Series": "EQ",
        "date_of_listing": "30-NOV-2011",
        "paid_up_value": 2,
        "isis_number": "IN9175A01010",
        "face_value": 2
      },
      {
        "stockCode": "JISLJALEQS",
        "stockName": "Jain Irrigation Systems Limited",
        "Series": "EQ",
        "date_of_listing": "13-AUG-2001",
        "paid_up_value": 2,
        "isis_number": "INE175A01038",
        "face_value": 2
      },
      {
        "stockCode": "JITFINFRA",
        "stockName": "JITF Infralogistics Limited",
        "Series": "BE",
        "date_of_listing": "27-FEB-2017",
        "paid_up_value": 2,
        "isis_number": "INE863T01013",
        "face_value": 2
      },
      {
        "stockCode": "JKCEMENT",
        "stockName": "JK Cement Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAR-2006",
        "paid_up_value": 10,
        "isis_number": "INE823G01014",
        "face_value": 10
      },
      {
        "stockCode": "JKIL",
        "stockName": "J.Kumar Infraprojects Limited",
        "Series": "EQ",
        "date_of_listing": "12-FEB-2008",
        "paid_up_value": 5,
        "isis_number": "INE576I01022",
        "face_value": 5
      },
      {
        "stockCode": "JKLAKSHMI",
        "stockName": "JK Lakshmi Cement Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUN-2006",
        "paid_up_value": 5,
        "isis_number": "INE786A01032",
        "face_value": 5
      },
      {
        "stockCode": "JKPAPER",
        "stockName": "JK Paper Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2005",
        "paid_up_value": 10,
        "isis_number": "INE789E01012",
        "face_value": 10
      },
      {
        "stockCode": "JKTYRE",
        "stockName": "JK Tyre & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAR-2007",
        "paid_up_value": 2,
        "isis_number": "INE573A01042",
        "face_value": 2
      },
      {
        "stockCode": "JMA",
        "stockName": "Jullundur Motor Agency (Delhi) Limited",
        "Series": "EQ",
        "date_of_listing": "16-MAR-2015",
        "paid_up_value": 2,
        "isis_number": "INE412C01023",
        "face_value": 2
      },
      {
        "stockCode": "JMCPROJECT",
        "stockName": "JMC Projects (India)  Limited",
        "Series": "EQ",
        "date_of_listing": "26-NOV-2007",
        "paid_up_value": 2,
        "isis_number": "INE890A01024",
        "face_value": 2
      },
      {
        "stockCode": "JMFINANCIL",
        "stockName": "JM Financial Limited",
        "Series": "EQ",
        "date_of_listing": "10-OCT-2006",
        "paid_up_value": 1,
        "isis_number": "INE780C01023",
        "face_value": 1
      },
      {
        "stockCode": "JMTAUTOLTD",
        "stockName": "JMT Auto Limited",
        "Series": "EQ",
        "date_of_listing": "02-APR-2007",
        "paid_up_value": 1,
        "isis_number": "INE988E01036",
        "face_value": 1
      },
      {
        "stockCode": "JOCIL",
        "stockName": "Jocil Limited",
        "Series": "EQ",
        "date_of_listing": "08-OCT-2008",
        "paid_up_value": 10,
        "isis_number": "INE839G01010",
        "face_value": 10
      },
      {
        "stockCode": "JPASSOCIAT",
        "stockName": "Jaiprakash Associates Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUN-2004",
        "paid_up_value": 2,
        "isis_number": "INE455F01025",
        "face_value": 2
      },
      {
        "stockCode": "JPINFRATEC",
        "stockName": "Jaypee Infratech Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-2010",
        "paid_up_value": 10,
        "isis_number": "INE099J01015",
        "face_value": 10
      },
      {
        "stockCode": "JPOLYINVST",
        "stockName": "Jindal Poly Investment and Finance Company Limited",
        "Series": "EQ",
        "date_of_listing": "11-NOV-2013",
        "paid_up_value": 10,
        "isis_number": "INE147P01019",
        "face_value": 10
      },
      {
        "stockCode": "JPPOWER",
        "stockName": "Jaiprakash Power Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "18-APR-2005",
        "paid_up_value": 10,
        "isis_number": "INE351F01018",
        "face_value": 10
      },
      {
        "stockCode": "JSL",
        "stockName": "Jindal Stainless Limited",
        "Series": "EQ",
        "date_of_listing": "17-NOV-2003",
        "paid_up_value": 2,
        "isis_number": "INE220G01021",
        "face_value": 2
      },
      {
        "stockCode": "JSLHISAR",
        "stockName": "Jindal Stainless (Hisar) Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-2016",
        "paid_up_value": 2,
        "isis_number": "INE455T01018",
        "face_value": 2
      },
      {
        "stockCode": "JSWENERGY",
        "stockName": "JSW Energy Limited",
        "Series": "EQ",
        "date_of_listing": "04-JAN-2010",
        "paid_up_value": 10,
        "isis_number": "INE121E01018",
        "face_value": 10
      },
      {
        "stockCode": "JSWHL",
        "stockName": "JSW Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "21-JUN-2005",
        "paid_up_value": 10,
        "isis_number": "INE824G01012",
        "face_value": 10
      },
      {
        "stockCode": "JSWSTEEL",
        "stockName": "JSW Steel Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2005",
        "paid_up_value": 1,
        "isis_number": "INE019A01038",
        "face_value": 1
      },
      {
        "stockCode": "JTEKTINDIA",
        "stockName": "Jtekt India Limited",
        "Series": "EQ",
        "date_of_listing": "12-JAN-2004",
        "paid_up_value": 1,
        "isis_number": "INE643A01035",
        "face_value": 1
      },
      {
        "stockCode": "JUBILANT",
        "stockName": "Jubilant Life Sciences Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2003",
        "paid_up_value": 1,
        "isis_number": "INE700A01033",
        "face_value": 1
      },
      {
        "stockCode": "JUBLFOOD",
        "stockName": "Jubilant Foodworks Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-2010",
        "paid_up_value": 10,
        "isis_number": "INE797F01012",
        "face_value": 10
      },
      {
        "stockCode": "JUBLINDS",
        "stockName": "Jubilant Industries Limited",
        "Series": "EQ",
        "date_of_listing": "14-FEB-2011",
        "paid_up_value": 10,
        "isis_number": "INE645L01011",
        "face_value": 10
      },
      {
        "stockCode": "JUSTDIAL",
        "stockName": "Just Dial Limited",
        "Series": "EQ",
        "date_of_listing": "05-JUN-2013",
        "paid_up_value": 10,
        "isis_number": "INE599M01018",
        "face_value": 10
      },
      {
        "stockCode": "JVLAGRO",
        "stockName": "JVL Agro Industries Limited",
        "Series": "BZ",
        "date_of_listing": "17-JUN-2011",
        "paid_up_value": 1,
        "isis_number": "INE430G01026",
        "face_value": 1
      },
      {
        "stockCode": "JYOTHYLAB",
        "stockName": "Jyothy Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "19-DEC-2007",
        "paid_up_value": 1,
        "isis_number": "INE668F01031",
        "face_value": 1
      },
      {
        "stockCode": "KABRAEXTRU",
        "stockName": "Kabra Extrusion Technik Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 5,
        "isis_number": "INE900B01029",
        "face_value": 5
      },
      {
        "stockCode": "KAJARIACER",
        "stockName": "Kajaria Ceramics Limited",
        "Series": "EQ",
        "date_of_listing": "01-JUN-2004",
        "paid_up_value": 1,
        "isis_number": "INE217B01036",
        "face_value": 1
      },
      {
        "stockCode": "KAKATCEM",
        "stockName": "Kakatiya Cement Sugar & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "13-DEC-1995",
        "paid_up_value": 10,
        "isis_number": "INE437B01014",
        "face_value": 10
      },
      {
        "stockCode": "KALPATPOWR",
        "stockName": "Kalpataru Power Transmission Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2000",
        "paid_up_value": 2,
        "isis_number": "INE220B01022",
        "face_value": 2
      },
      {
        "stockCode": "KALYANI",
        "stockName": "Kalyani Commercials Limited",
        "Series": "BE",
        "date_of_listing": "13-FEB-2017",
        "paid_up_value": 10,
        "isis_number": "INE610E01010",
        "face_value": 10
      },
      {
        "stockCode": "KALYANIFRG",
        "stockName": "Kalyani Forge Limited",
        "Series": "BE",
        "date_of_listing": "20-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE314G01014",
        "face_value": 10
      },
      {
        "stockCode": "KAMATHOTEL",
        "stockName": "Kamat Hotels (I) Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAY-1996",
        "paid_up_value": 10,
        "isis_number": "INE967C01018",
        "face_value": 10
      },
      {
        "stockCode": "KAMDHENU",
        "stockName": "Kamdhenu Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2006",
        "paid_up_value": 10,
        "isis_number": "INE390H01012",
        "face_value": 10
      },
      {
        "stockCode": "KANANIIND",
        "stockName": "Kanani Industries Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2011",
        "paid_up_value": 1,
        "isis_number": "INE879E01037",
        "face_value": 1
      },
      {
        "stockCode": "KANORICHEM",
        "stockName": "Kanoria Chemicals & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 5,
        "isis_number": "INE138C01024",
        "face_value": 5
      },
      {
        "stockCode": "KANSAINER",
        "stockName": "Kansai Nerolac Paints Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-2003",
        "paid_up_value": 1,
        "isis_number": "INE531A01024",
        "face_value": 1
      },
      {
        "stockCode": "KARDA",
        "stockName": "Karda Constructions Limited",
        "Series": "EQ",
        "date_of_listing": "02-APR-2018",
        "paid_up_value": 10,
        "isis_number": "INE278R01018",
        "face_value": 10
      },
      {
        "stockCode": "KARMAENG",
        "stockName": "Karma Energy Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2011",
        "paid_up_value": 10,
        "isis_number": "INE725L01011",
        "face_value": 10
      },
      {
        "stockCode": "KARURVYSYA",
        "stockName": "Karur Vysya Bank Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUL-2000",
        "paid_up_value": 2,
        "isis_number": "INE036D01028",
        "face_value": 2
      },
      {
        "stockCode": "KAUSHALYA",
        "stockName": "Kaushalya Infrastructure Development Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE234I01010",
        "face_value": 10
      },
      {
        "stockCode": "KAVVERITEL",
        "stockName": "Kavveri Telecom Products Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE641C01019",
        "face_value": 10
      },
      {
        "stockCode": "KAYA",
        "stockName": "Kaya Limited",
        "Series": "EQ",
        "date_of_listing": "14-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE587G01015",
        "face_value": 10
      },
      {
        "stockCode": "KCP",
        "stockName": "KCP Limited",
        "Series": "EQ",
        "date_of_listing": "09-APR-1997",
        "paid_up_value": 1,
        "isis_number": "INE805C01028",
        "face_value": 1
      },
      {
        "stockCode": "KCPSUGIND",
        "stockName": "KCP Sugar and Industries Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "11-JUN-1997",
        "paid_up_value": 1,
        "isis_number": "INE790B01024",
        "face_value": 1
      },
      {
        "stockCode": "KDDL",
        "stockName": "KDDL Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2016",
        "paid_up_value": 10,
        "isis_number": "INE291D01011",
        "face_value": 10
      },
      {
        "stockCode": "KEC",
        "stockName": "KEC International Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAR-2006",
        "paid_up_value": 2,
        "isis_number": "INE389H01022",
        "face_value": 2
      },
      {
        "stockCode": "KECL",
        "stockName": "Kirloskar Electric Company Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE134B01017",
        "face_value": 10
      },
      {
        "stockCode": "KEI",
        "stockName": "KEI Industries Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2006",
        "paid_up_value": 2,
        "isis_number": "INE878B01027",
        "face_value": 2
      },
      {
        "stockCode": "KELLTONTEC",
        "stockName": "Kellton Tech Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2016",
        "paid_up_value": 5,
        "isis_number": "INE164B01022",
        "face_value": 5
      },
      {
        "stockCode": "KERNEX",
        "stockName": "Kernex Microsystems (India) Limited",
        "Series": "BE",
        "date_of_listing": "20-DEC-2005",
        "paid_up_value": 10,
        "isis_number": "INE202H01019",
        "face_value": 10
      },
      {
        "stockCode": "KESARENT",
        "stockName": "Kesar Enterprises Limited",
        "Series": "BE",
        "date_of_listing": "02-JAN-2007",
        "paid_up_value": 10,
        "isis_number": "INE133B01019",
        "face_value": 10
      },
      {
        "stockCode": "KESORAMIND",
        "stockName": "Kesoram Industries Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE087A01019",
        "face_value": 10
      },
      {
        "stockCode": "KEYFINSERV",
        "stockName": "Keynote Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUN-1996",
        "paid_up_value": 10,
        "isis_number": "INE681C01015",
        "face_value": 10
      },
      {
        "stockCode": "KGL",
        "stockName": "Karuturi Global Limited",
        "Series": "BE",
        "date_of_listing": "03-MAY-2007",
        "paid_up_value": 1,
        "isis_number": "INE299C01024",
        "face_value": 1
      },
      {
        "stockCode": "KHADIM",
        "stockName": "Khadim India Limited",
        "Series": "EQ",
        "date_of_listing": "14-NOV-2017",
        "paid_up_value": 10,
        "isis_number": "INE834I01025",
        "face_value": 10
      },
      {
        "stockCode": "KHAITANELE",
        "stockName": "Khaitan Electricals Limited",
        "Series": "BE",
        "date_of_listing": "28-JUN-2000",
        "paid_up_value": 10,
        "isis_number": "INE761A01019",
        "face_value": 10
      },
      {
        "stockCode": "KHAITANLTD",
        "stockName": "Khaitan (India) Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-1995",
        "paid_up_value": 10,
        "isis_number": "INE731C01018",
        "face_value": 10
      },
      {
        "stockCode": "KHANDSE",
        "stockName": "Khandwala Securities Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2001",
        "paid_up_value": 10,
        "isis_number": "INE060B01014",
        "face_value": 10
      },
      {
        "stockCode": "KICL",
        "stockName": "Kalyani Investment Company Limited",
        "Series": "EQ",
        "date_of_listing": "14-JAN-2011",
        "paid_up_value": 10,
        "isis_number": "INE029L01018",
        "face_value": 10
      },
      {
        "stockCode": "KILITCH",
        "stockName": "Kilitch Drugs (India) Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2010",
        "paid_up_value": 10,
        "isis_number": "INE729D01010",
        "face_value": 10
      },
      {
        "stockCode": "KINGFA",
        "stockName": "Kingfa Science & Technology (India) Limited",
        "Series": "EQ",
        "date_of_listing": "15-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE473D01015",
        "face_value": 10
      },
      {
        "stockCode": "KIOCL",
        "stockName": "KIOCL Limited",
        "Series": "EQ",
        "date_of_listing": "29-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE880L01014",
        "face_value": 10
      },
      {
        "stockCode": "KIRIINDUS",
        "stockName": "Kiri Industries Limited",
        "Series": "EQ",
        "date_of_listing": "22-APR-2008",
        "paid_up_value": 10,
        "isis_number": "INE415I01015",
        "face_value": 10
      },
      {
        "stockCode": "KIRLOSBROS",
        "stockName": "Kirloskar Brothers Limited",
        "Series": "EQ",
        "date_of_listing": "20-APR-2010",
        "paid_up_value": 2,
        "isis_number": "INE732A01036",
        "face_value": 2
      },
      {
        "stockCode": "KIRLOSENG",
        "stockName": "Kirloskar Oil Engines Limited",
        "Series": "EQ",
        "date_of_listing": "24-DEC-2010",
        "paid_up_value": 2,
        "isis_number": "INE146L01010",
        "face_value": 2
      },
      {
        "stockCode": "KIRLOSIND",
        "stockName": "Kirloskar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUN-2010",
        "paid_up_value": 10,
        "isis_number": "INE250A01039",
        "face_value": 10
      },
      {
        "stockCode": "KITEX",
        "stockName": "Kitex Garments Limited",
        "Series": "EQ",
        "date_of_listing": "25-SEP-2012",
        "paid_up_value": 1,
        "isis_number": "INE602G01020",
        "face_value": 1
      },
      {
        "stockCode": "KKCL",
        "stockName": "Kewal Kiran Clothing Limited",
        "Series": "EQ",
        "date_of_listing": "13-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE401H01017",
        "face_value": 10
      },
      {
        "stockCode": "KMSUGAR",
        "stockName": "K.M.Sugar Mills Limited",
        "Series": "EQ",
        "date_of_listing": "31-MAY-2007",
        "paid_up_value": 2,
        "isis_number": "INE157H01023",
        "face_value": 2
      },
      {
        "stockCode": "KNRCON",
        "stockName": "KNR Constructions Limited",
        "Series": "EQ",
        "date_of_listing": "18-FEB-2008",
        "paid_up_value": 2,
        "isis_number": "INE634I01029",
        "face_value": 2
      },
      {
        "stockCode": "KOHINOOR",
        "stockName": "Kohinoor Foods Limited",
        "Series": "EQ",
        "date_of_listing": "20-OCT-1999",
        "paid_up_value": 10,
        "isis_number": "INE080B01012",
        "face_value": 10
      },
      {
        "stockCode": "KOKUYOCMLN",
        "stockName": "Kokuyo Camlin Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2008",
        "paid_up_value": 1,
        "isis_number": "INE760A01029",
        "face_value": 1
      },
      {
        "stockCode": "KOLTEPATIL",
        "stockName": "Kolte - Patil Developers Limited",
        "Series": "EQ",
        "date_of_listing": "13-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE094I01018",
        "face_value": 10
      },
      {
        "stockCode": "KOPRAN",
        "stockName": "Kopran Limited",
        "Series": "EQ",
        "date_of_listing": "09-JUN-1999",
        "paid_up_value": 10,
        "isis_number": "INE082A01010",
        "face_value": 10
      },
      {
        "stockCode": "KOTAKBANK",
        "stockName": "Kotak Mahindra Bank Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-1995",
        "paid_up_value": 5,
        "isis_number": "INE237A01028",
        "face_value": 5
      },
      {
        "stockCode": "KOTARISUG",
        "stockName": "Kothari Sugars And Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "13-DEC-2004",
        "paid_up_value": 10,
        "isis_number": "INE419A01022",
        "face_value": 10
      },
      {
        "stockCode": "KOTHARIPET",
        "stockName": "Kothari Petrochemicals Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-1996",
        "paid_up_value": 10,
        "isis_number": "INE720A01015",
        "face_value": 10
      },
      {
        "stockCode": "KOTHARIPRO",
        "stockName": "Kothari Products Limited",
        "Series": "EQ",
        "date_of_listing": "03-JUN-1998",
        "paid_up_value": 10,
        "isis_number": "INE823A01017",
        "face_value": 10
      },
      {
        "stockCode": "KPITTECH",
        "stockName": "KPIT Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "22-APR-2019",
        "paid_up_value": 10,
        "isis_number": "INE04I401011",
        "face_value": 10
      },
      {
        "stockCode": "KPRMILL",
        "stockName": "K.P.R. Mill Limited",
        "Series": "EQ",
        "date_of_listing": "28-AUG-2007",
        "paid_up_value": 5,
        "isis_number": "INE930H01023",
        "face_value": 5
      },
      {
        "stockCode": "KRBL",
        "stockName": "KRBL Limited",
        "Series": "EQ",
        "date_of_listing": "21-JAN-2002",
        "paid_up_value": 1,
        "isis_number": "INE001B01026",
        "face_value": 1
      },
      {
        "stockCode": "KREBSBIO",
        "stockName": "Krebs Biochemicals and Industries Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-1996",
        "paid_up_value": 10,
        "isis_number": "INE268B01013",
        "face_value": 10
      },
      {
        "stockCode": "KRIDHANINF",
        "stockName": "Kridhan Infra Limited",
        "Series": "EQ",
        "date_of_listing": "11-DEC-2015",
        "paid_up_value": 2,
        "isis_number": "INE524L01026",
        "face_value": 2
      },
      {
        "stockCode": "KSB",
        "stockName": "Ksb Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE999A01015",
        "face_value": 10
      },
      {
        "stockCode": "KSCL",
        "stockName": "Kaveri Seed Company Limited",
        "Series": "EQ",
        "date_of_listing": "04-OCT-2007",
        "paid_up_value": 2,
        "isis_number": "INE455I01029",
        "face_value": 2
      },
      {
        "stockCode": "KSERASERA",
        "stockName": "KSS Limited",
        "Series": "EQ",
        "date_of_listing": "05-OCT-2006",
        "paid_up_value": 1,
        "isis_number": "INE216D01026",
        "face_value": 1
      },
      {
        "stockCode": "KSK",
        "stockName": "KSK Energy Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUL-2008",
        "paid_up_value": 10,
        "isis_number": "INE143H01015",
        "face_value": 10
      },
      {
        "stockCode": "KSL",
        "stockName": "Kalyani Steels Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAY-2010",
        "paid_up_value": 5,
        "isis_number": "INE907A01026",
        "face_value": 5
      },
      {
        "stockCode": "KTIL",
        "stockName": "Kesar Terminals & Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "22-DEC-2010",
        "paid_up_value": 5,
        "isis_number": "INE096L01025",
        "face_value": 5
      },
      {
        "stockCode": "KTKBANK",
        "stockName": "The Karnataka Bank Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-2000",
        "paid_up_value": 10,
        "isis_number": "INE614B01018",
        "face_value": 10
      },
      {
        "stockCode": "KWALITY",
        "stockName": "kwality limited",
        "Series": "EQ",
        "date_of_listing": "05-JUL-2011",
        "paid_up_value": 1,
        "isis_number": "INE775B01025",
        "face_value": 1
      },
      {
        "stockCode": "L&TFH",
        "stockName": "L&T Finance Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "12-AUG-2011",
        "paid_up_value": 10,
        "isis_number": "INE498L01015",
        "face_value": 10
      },
      {
        "stockCode": "LAKPRE",
        "stockName": "Lakshmi Precision Screws Limited",
        "Series": "BZ",
        "date_of_listing": "26-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE651C01018",
        "face_value": 10
      },
      {
        "stockCode": "LAKSHVILAS",
        "stockName": "Lakshmi Vilas Bank Limited",
        "Series": "EQ",
        "date_of_listing": "21-JUN-2000",
        "paid_up_value": 10,
        "isis_number": "INE694C01018",
        "face_value": 10
      },
      {
        "stockCode": "LALPATHLAB",
        "stockName": "Dr. Lal Path Labs Ltd.",
        "Series": "EQ",
        "date_of_listing": "23-DEC-2015",
        "paid_up_value": 10,
        "isis_number": "INE600L01024",
        "face_value": 10
      },
      {
        "stockCode": "LAMBODHARA",
        "stockName": "Lambodhara Textiles Limited",
        "Series": "EQ",
        "date_of_listing": "04-FEB-2015",
        "paid_up_value": 5,
        "isis_number": "INE112F01022",
        "face_value": 5
      },
      {
        "stockCode": "LAOPALA",
        "stockName": "La Opala RG Limited",
        "Series": "EQ",
        "date_of_listing": "16-MAR-2007",
        "paid_up_value": 2,
        "isis_number": "INE059D01020",
        "face_value": 2
      },
      {
        "stockCode": "LASA",
        "stockName": "Lasa Supergenerics Limited",
        "Series": "EQ",
        "date_of_listing": "21-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE670X01014",
        "face_value": 10
      },
      {
        "stockCode": "LAURUSLABS",
        "stockName": "Laurus Labs Limited",
        "Series": "EQ",
        "date_of_listing": "19-DEC-2016",
        "paid_up_value": 10,
        "isis_number": "INE947Q01010",
        "face_value": 10
      },
      {
        "stockCode": "LAXMIMACH",
        "stockName": "Lakshmi Machine Works Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE269B01029",
        "face_value": 10
      },
      {
        "stockCode": "LEEL",
        "stockName": "LEEL Electricals Limited",
        "Series": "BE",
        "date_of_listing": "30-APR-1997",
        "paid_up_value": 10,
        "isis_number": "INE245C01019",
        "face_value": 10
      },
      {
        "stockCode": "LEMONTREE",
        "stockName": "Lemon Tree Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "09-APR-2018",
        "paid_up_value": 10,
        "isis_number": "INE970X01018",
        "face_value": 10
      },
      {
        "stockCode": "LFIC",
        "stockName": "Lakshmi Finance & Industrial Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "15-APR-2015",
        "paid_up_value": 10,
        "isis_number": "INE850E01012",
        "face_value": 10
      },
      {
        "stockCode": "LGBBROSLTD",
        "stockName": "LG Balakrishnan & Bros Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE337A01034",
        "face_value": 10
      },
      {
        "stockCode": "LGBFORGE",
        "stockName": "LGB Forge Limited",
        "Series": "EQ",
        "date_of_listing": "01-AUG-2008",
        "paid_up_value": 1,
        "isis_number": "INE201J01017",
        "face_value": 1
      },
      {
        "stockCode": "LIBERTSHOE",
        "stockName": "Liberty Shoes Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE557B01019",
        "face_value": 10
      },
      {
        "stockCode": "LICHSGFIN",
        "stockName": "LIC Housing Finance Limited",
        "Series": "EQ",
        "date_of_listing": "29-JUL-1998",
        "paid_up_value": 2,
        "isis_number": "INE115A01026",
        "face_value": 2
      },
      {
        "stockCode": "LINCOLN",
        "stockName": "Lincoln Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "17-DEC-2015",
        "paid_up_value": 10,
        "isis_number": "INE405C01035",
        "face_value": 10
      },
      {
        "stockCode": "LINCPEN",
        "stockName": "Linc Pen & Plastics Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2015",
        "paid_up_value": 10,
        "isis_number": "INE802B01019",
        "face_value": 10
      },
      {
        "stockCode": "LINDEINDIA",
        "stockName": "Linde India Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-1999",
        "paid_up_value": 10,
        "isis_number": "INE473A01011",
        "face_value": 10
      },
      {
        "stockCode": "LOKESHMACH",
        "stockName": "Lokesh Machines Limited",
        "Series": "EQ",
        "date_of_listing": "05-MAY-2006",
        "paid_up_value": 10,
        "isis_number": "INE397H01017",
        "face_value": 10
      },
      {
        "stockCode": "LOTUSEYE",
        "stockName": "Lotus Eye Hospital and Institute Limited",
        "Series": "EQ",
        "date_of_listing": "11-JUL-2008",
        "paid_up_value": 10,
        "isis_number": "INE947I01017",
        "face_value": 10
      },
      {
        "stockCode": "LOVABLE",
        "stockName": "Lovable Lingerie Limited",
        "Series": "EQ",
        "date_of_listing": "24-MAR-2011",
        "paid_up_value": 10,
        "isis_number": "INE597L01014",
        "face_value": 10
      },
      {
        "stockCode": "LPDC",
        "stockName": "Landmark Property Development Company Limited",
        "Series": "EQ",
        "date_of_listing": "12-AUG-2008",
        "paid_up_value": 1,
        "isis_number": "INE197J01017",
        "face_value": 1
      },
      {
        "stockCode": "LSIL",
        "stockName": "Lloyds Steels Industries Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUL-2016",
        "paid_up_value": 1,
        "isis_number": "INE093R01011",
        "face_value": 1
      },
      {
        "stockCode": "LT",
        "stockName": "Larsen & Toubro Limited",
        "Series": "EQ",
        "date_of_listing": "23-JUN-2004",
        "paid_up_value": 2,
        "isis_number": "INE018A01030",
        "face_value": 2
      },
      {
        "stockCode": "LTI",
        "stockName": "Larsen & Toubro Infotech Limited",
        "Series": "EQ",
        "date_of_listing": "21-JUL-2016",
        "paid_up_value": 1,
        "isis_number": "INE214T01019",
        "face_value": 1
      },
      {
        "stockCode": "LTTS",
        "stockName": "L&T Technology Services Limited",
        "Series": "EQ",
        "date_of_listing": "23-SEP-2016",
        "paid_up_value": 2,
        "isis_number": "INE010V01017",
        "face_value": 2
      },
      {
        "stockCode": "LUMAXIND",
        "stockName": "Lumax Industries Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE162B01018",
        "face_value": 10
      },
      {
        "stockCode": "LUMAXTECH",
        "stockName": "Lumax Auto Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "16-JAN-2007",
        "paid_up_value": 2,
        "isis_number": "INE872H01027",
        "face_value": 2
      },
      {
        "stockCode": "LUPIN",
        "stockName": "Lupin Limited",
        "Series": "EQ",
        "date_of_listing": "10-SEP-2001",
        "paid_up_value": 2,
        "isis_number": "INE326A01037",
        "face_value": 2
      },
      {
        "stockCode": "LUXIND",
        "stockName": "Lux Industries Limited",
        "Series": "EQ",
        "date_of_listing": "30-NOV-2015",
        "paid_up_value": 2,
        "isis_number": "INE150G01020",
        "face_value": 2
      },
      {
        "stockCode": "LYKALABS",
        "stockName": "Lyka Labs Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE933A01014",
        "face_value": 10
      },
      {
        "stockCode": "LYPSAGEMS",
        "stockName": "Lypsa Gems & Jewellery Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-2013",
        "paid_up_value": 10,
        "isis_number": "INE142K01011",
        "face_value": 10
      },
      {
        "stockCode": "M&M",
        "stockName": "Mahindra & Mahindra Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-1996",
        "paid_up_value": 5,
        "isis_number": "INE101A01026",
        "face_value": 5
      },
      {
        "stockCode": "M&MFIN",
        "stockName": "Mahindra & Mahindra Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAR-2006",
        "paid_up_value": 2,
        "isis_number": "INE774D01024",
        "face_value": 2
      },
      {
        "stockCode": "MAANALU",
        "stockName": "Maan Aluminium Limited",
        "Series": "EQ",
        "date_of_listing": "22-OCT-2007",
        "paid_up_value": 10,
        "isis_number": "INE215I01019",
        "face_value": 10
      },
      {
        "stockCode": "MADHAV",
        "stockName": "Madhav Marbles and Granites Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE925C01016",
        "face_value": 10
      },
      {
        "stockCode": "MADHUCON",
        "stockName": "Madhucon Projects Limited",
        "Series": "EQ",
        "date_of_listing": "05-OCT-2006",
        "paid_up_value": 1,
        "isis_number": "INE378D01032",
        "face_value": 1
      },
      {
        "stockCode": "MADRASFERT",
        "stockName": "Madras Fertilizers Limited",
        "Series": "EQ",
        "date_of_listing": "25-JUL-1997",
        "paid_up_value": 10,
        "isis_number": "INE414A01015",
        "face_value": 10
      },
      {
        "stockCode": "MAGADSUGAR",
        "stockName": "Magadh Sugar & Energy Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE347W01011",
        "face_value": 10
      },
      {
        "stockCode": "MAGMA",
        "stockName": "Magma Fincorp Limited",
        "Series": "EQ",
        "date_of_listing": "27-APR-2004",
        "paid_up_value": 2,
        "isis_number": "INE511C01022",
        "face_value": 2
      },
      {
        "stockCode": "MAGNUM",
        "stockName": "Magnum Ventures Limited",
        "Series": "BE",
        "date_of_listing": "20-SEP-2007",
        "paid_up_value": 10,
        "isis_number": "INE387I01016",
        "face_value": 10
      },
      {
        "stockCode": "MAHABANK",
        "stockName": "Bank of Maharashtra",
        "Series": "EQ",
        "date_of_listing": "12-APR-2004",
        "paid_up_value": 10,
        "isis_number": "INE457A01014",
        "face_value": 10
      },
      {
        "stockCode": "MAHAPEXLTD",
        "stockName": "Maha Rashtra Apex Corporation Limited",
        "Series": "BE",
        "date_of_listing": "21-JAN-1998",
        "paid_up_value": 10,
        "isis_number": "INE843B01013",
        "face_value": 10
      },
      {
        "stockCode": "MAHASTEEL",
        "stockName": "Mahamaya Steel Industries Limited",
        "Series": "BE",
        "date_of_listing": "01-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE451L01014",
        "face_value": 10
      },
      {
        "stockCode": "MAHESHWARI",
        "stockName": "Maheshwari Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "15-APR-2019",
        "paid_up_value": 10,
        "isis_number": "INE263W01010",
        "face_value": 10
      },
      {
        "stockCode": "MAHINDCIE",
        "stockName": "Mahindra CIE Automotive Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE536H01010",
        "face_value": 10
      },
      {
        "stockCode": "MAHLIFE",
        "stockName": "Mahindra Lifespace Developers Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-2000",
        "paid_up_value": 10,
        "isis_number": "INE813A01018",
        "face_value": 10
      },
      {
        "stockCode": "MAHLOG",
        "stockName": "Mahindra Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "10-NOV-2017",
        "paid_up_value": 10,
        "isis_number": "INE766P01016",
        "face_value": 10
      },
      {
        "stockCode": "MAHSCOOTER",
        "stockName": "Maharashtra Scooters Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE288A01013",
        "face_value": 10
      },
      {
        "stockCode": "MAHSEAMLES",
        "stockName": "Maharashtra Seamless Limited",
        "Series": "EQ",
        "date_of_listing": "25-AUG-2004",
        "paid_up_value": 5,
        "isis_number": "INE271B01025",
        "face_value": 5
      },
      {
        "stockCode": "MAITHANALL",
        "stockName": "Maithan Alloys Limited",
        "Series": "EQ",
        "date_of_listing": "05-JUL-2011",
        "paid_up_value": 10,
        "isis_number": "INE683C01011",
        "face_value": 10
      },
      {
        "stockCode": "MAJESCO",
        "stockName": "Majesco Limited",
        "Series": "EQ",
        "date_of_listing": "19-AUG-2015",
        "paid_up_value": 5,
        "isis_number": "INE898S01029",
        "face_value": 5
      },
      {
        "stockCode": "MALUPAPER",
        "stockName": "Malu Paper Mills Limited",
        "Series": "EQ",
        "date_of_listing": "05-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE383H01017",
        "face_value": 10
      },
      {
        "stockCode": "MANAKALUCO",
        "stockName": "Manaksia Aluminium Company Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2015",
        "paid_up_value": 1,
        "isis_number": "INE859Q01017",
        "face_value": 1
      },
      {
        "stockCode": "MANAKCOAT",
        "stockName": "Manaksia Coated Metals & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2015",
        "paid_up_value": 1,
        "isis_number": "INE830Q01018",
        "face_value": 1
      },
      {
        "stockCode": "MANAKSIA",
        "stockName": "Manaksia Limited",
        "Series": "EQ",
        "date_of_listing": "08-JAN-2008",
        "paid_up_value": 2,
        "isis_number": "INE015D01022",
        "face_value": 2
      },
      {
        "stockCode": "MANAKSTEEL",
        "stockName": "Manaksia Steels Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2015",
        "paid_up_value": 1,
        "isis_number": "INE824Q01011",
        "face_value": 1
      },
      {
        "stockCode": "MANALIPETC",
        "stockName": "Manali Petrochemicals Limited",
        "Series": "EQ",
        "date_of_listing": "06-DEC-2006",
        "paid_up_value": 5,
        "isis_number": "INE201A01024",
        "face_value": 5
      },
      {
        "stockCode": "MANAPPURAM",
        "stockName": "Manappuram Finance Limited",
        "Series": "EQ",
        "date_of_listing": "01-DEC-2014",
        "paid_up_value": 2,
        "isis_number": "INE522D01027",
        "face_value": 2
      },
      {
        "stockCode": "MANGALAM",
        "stockName": "Mangalam Drugs And Organics Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAY-2005",
        "paid_up_value": 10,
        "isis_number": "INE584F01014",
        "face_value": 10
      },
      {
        "stockCode": "MANGCHEFER",
        "stockName": "Mangalore Chemicals & Fertilizers Limited",
        "Series": "EQ",
        "date_of_listing": "22-OCT-2007",
        "paid_up_value": 10,
        "isis_number": "INE558B01017",
        "face_value": 10
      },
      {
        "stockCode": "MANGLMCEM",
        "stockName": "Mangalam Cement Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-1996",
        "paid_up_value": 10,
        "isis_number": "INE347A01017",
        "face_value": 10
      },
      {
        "stockCode": "MANGTIMBER",
        "stockName": "Mangalam Timber Products Limited",
        "Series": "BE",
        "date_of_listing": "27-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE805B01012",
        "face_value": 10
      },
      {
        "stockCode": "MANINDS",
        "stockName": "Man Industries (India) Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUN-2005",
        "paid_up_value": 5,
        "isis_number": "INE993A01026",
        "face_value": 5
      },
      {
        "stockCode": "MANINFRA",
        "stockName": "Man Infraconstruction Limited",
        "Series": "EQ",
        "date_of_listing": "11-MAR-2010",
        "paid_up_value": 2,
        "isis_number": "INE949H01023",
        "face_value": 2
      },
      {
        "stockCode": "MANPASAND",
        "stockName": "Manpasand Beverages Limited",
        "Series": "EQ",
        "date_of_listing": "09-JUL-2015",
        "paid_up_value": 10,
        "isis_number": "INE122R01018",
        "face_value": 10
      },
      {
        "stockCode": "MANUGRAPH",
        "stockName": "Manugraph India Limited",
        "Series": "EQ",
        "date_of_listing": "14-SEP-2006",
        "paid_up_value": 2,
        "isis_number": "INE867A01022",
        "face_value": 2
      },
      {
        "stockCode": "MARALOVER",
        "stockName": "Maral Overseas Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE882A01013",
        "face_value": 10
      },
      {
        "stockCode": "MARATHON",
        "stockName": "Marathon Nextgen Realty Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2016",
        "paid_up_value": 5,
        "isis_number": "INE182D01020",
        "face_value": 5
      },
      {
        "stockCode": "MARICO",
        "stockName": "Marico Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAY-1996",
        "paid_up_value": 1,
        "isis_number": "INE196A01026",
        "face_value": 1
      },
      {
        "stockCode": "MARKSANS",
        "stockName": "Marksans Pharma Limited",
        "Series": "EQ",
        "date_of_listing": "21-JAN-2002",
        "paid_up_value": 1,
        "isis_number": "INE750C01026",
        "face_value": 1
      },
      {
        "stockCode": "MARUTI",
        "stockName": "Maruti Suzuki India Limited",
        "Series": "EQ",
        "date_of_listing": "09-JUL-2003",
        "paid_up_value": 5,
        "isis_number": "INE585B01010",
        "face_value": 5
      },
      {
        "stockCode": "MASFIN",
        "stockName": "MAS Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "18-OCT-2017",
        "paid_up_value": 10,
        "isis_number": "INE348L01012",
        "face_value": 10
      },
      {
        "stockCode": "MASKINVEST",
        "stockName": "Mask Investments Limited",
        "Series": "BE",
        "date_of_listing": "14-OCT-2016",
        "paid_up_value": 10,
        "isis_number": "INE885F01015",
        "face_value": 10
      },
      {
        "stockCode": "MASTEK",
        "stockName": "Mastek Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 5,
        "isis_number": "INE759A01021",
        "face_value": 5
      },
      {
        "stockCode": "MATRIMONY",
        "stockName": "Matrimony.Com Limited",
        "Series": "EQ",
        "date_of_listing": "21-SEP-2017",
        "paid_up_value": 5,
        "isis_number": "INE866R01028",
        "face_value": 5
      },
      {
        "stockCode": "MAWANASUG",
        "stockName": "Mawana Sugars Limited",
        "Series": "EQ",
        "date_of_listing": "20-MAR-2009",
        "paid_up_value": 10,
        "isis_number": "INE636A01039",
        "face_value": 10
      },
      {
        "stockCode": "MAXINDIA",
        "stockName": "Max India Limited",
        "Series": "EQ",
        "date_of_listing": "14-JUL-2016",
        "paid_up_value": 2,
        "isis_number": "INE153U01017",
        "face_value": 2
      },
      {
        "stockCode": "MAXVIL",
        "stockName": "Max Ventures and Industries Limited",
        "Series": "EQ",
        "date_of_listing": "22-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE154U01015",
        "face_value": 10
      },
      {
        "stockCode": "MAYURUNIQ",
        "stockName": "Mayur Uniquoters Ltd",
        "Series": "EQ",
        "date_of_listing": "25-SEP-2012",
        "paid_up_value": 5,
        "isis_number": "INE040D01038",
        "face_value": 5
      },
      {
        "stockCode": "MAZDA",
        "stockName": "Mazda Limited",
        "Series": "EQ",
        "date_of_listing": "01-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE885E01034",
        "face_value": 10
      },
      {
        "stockCode": "MBECL",
        "stockName": "Mcnally Bharat Engineering Company Limited",
        "Series": "BE",
        "date_of_listing": "06-OCT-2006",
        "paid_up_value": 10,
        "isis_number": "INE748A01016",
        "face_value": 10
      },
      {
        "stockCode": "MBLINFRA",
        "stockName": "MBL Infrastructures Limited",
        "Series": "EQ",
        "date_of_listing": "11-JAN-2010",
        "paid_up_value": 10,
        "isis_number": "INE912H01013",
        "face_value": 10
      },
      {
        "stockCode": "MCDHOLDING",
        "stockName": "McDowell Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE836H01014",
        "face_value": 10
      },
      {
        "stockCode": "MCDOWELL-N",
        "stockName": "United Spirits Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-2001",
        "paid_up_value": 2,
        "isis_number": "INE854D01024",
        "face_value": 2
      },
      {
        "stockCode": "MCLEODRUSS",
        "stockName": "Mcleod Russel India Limited",
        "Series": "EQ",
        "date_of_listing": "29-JUL-2005",
        "paid_up_value": 5,
        "isis_number": "INE942G01012",
        "face_value": 5
      },
      {
        "stockCode": "MCX",
        "stockName": "Multi Commodity Exchange of India Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2012",
        "paid_up_value": 10,
        "isis_number": "INE745G01035",
        "face_value": 10
      },
      {
        "stockCode": "MEGASOFT",
        "stockName": "Megasoft Limited",
        "Series": "BE",
        "date_of_listing": "19-JUL-2007",
        "paid_up_value": 10,
        "isis_number": "INE933B01012",
        "face_value": 10
      },
      {
        "stockCode": "MEGH",
        "stockName": "Meghmani Organics Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2007",
        "paid_up_value": 1,
        "isis_number": "INE974H01013",
        "face_value": 1
      },
      {
        "stockCode": "MELSTAR",
        "stockName": "Melstar Information Technologies Limited",
        "Series": "BE",
        "date_of_listing": "07-MAR-2000",
        "paid_up_value": 10,
        "isis_number": "INE817A01019",
        "face_value": 10
      },
      {
        "stockCode": "MENONBE",
        "stockName": "Menon Bearings Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2015",
        "paid_up_value": 1,
        "isis_number": "INE071D01033",
        "face_value": 1
      },
      {
        "stockCode": "MEP",
        "stockName": "MEP Infrastructure Developers Limited",
        "Series": "EQ",
        "date_of_listing": "06-MAY-2015",
        "paid_up_value": 10,
        "isis_number": "INE776I01010",
        "face_value": 10
      },
      {
        "stockCode": "MERCATOR",
        "stockName": "Mercator Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2005",
        "paid_up_value": 1,
        "isis_number": "INE934B01028",
        "face_value": 1
      },
      {
        "stockCode": "METALFORGE",
        "stockName": "Metalyst Forgings Limited",
        "Series": "EQ",
        "date_of_listing": "23-AUG-1995",
        "paid_up_value": 10,
        "isis_number": "INE425A01011",
        "face_value": 10
      },
      {
        "stockCode": "METKORE",
        "stockName": "Metkore Alloys & Industries Limited",
        "Series": "BE",
        "date_of_listing": "30-JUN-2008",
        "paid_up_value": 2,
        "isis_number": "INE592I01029",
        "face_value": 2
      },
      {
        "stockCode": "METROPOLIS",
        "stockName": "Metropolis Healthcare Limited",
        "Series": "EQ",
        "date_of_listing": "15-APR-2019",
        "paid_up_value": 2,
        "isis_number": "INE112L01020",
        "face_value": 2
      },
      {
        "stockCode": "MFSL",
        "stockName": "Max Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-2000",
        "paid_up_value": 2,
        "isis_number": "INE180A01020",
        "face_value": 2
      },
      {
        "stockCode": "MGL",
        "stockName": "Mahanagar Gas Limited",
        "Series": "EQ",
        "date_of_listing": "01-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE002S01010",
        "face_value": 10
      },
      {
        "stockCode": "MHRIL",
        "stockName": "Mahindra Holidays & Resorts India Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUL-2009",
        "paid_up_value": 10,
        "isis_number": "INE998I01010",
        "face_value": 10
      },
      {
        "stockCode": "MIC",
        "stockName": "MIC Electronics Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAY-2007",
        "paid_up_value": 2,
        "isis_number": "INE287C01029",
        "face_value": 2
      },
      {
        "stockCode": "MIDHANI",
        "stockName": "Mishra Dhatu Nigam Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2018",
        "paid_up_value": 10,
        "isis_number": "INE099Z01011",
        "face_value": 10
      },
      {
        "stockCode": "MIL",
        "stockName": "Mandhana Industries Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUN-2019",
        "paid_up_value": 10,
        "isis_number": "INE087J01028",
        "face_value": 10
      },
      {
        "stockCode": "MINDACORP",
        "stockName": "Minda Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "16-OCT-2014",
        "paid_up_value": 2,
        "isis_number": "INE842C01021",
        "face_value": 2
      },
      {
        "stockCode": "MINDAIND",
        "stockName": "Minda Industries Limited",
        "Series": "EQ",
        "date_of_listing": "02-FEB-2007",
        "paid_up_value": 2,
        "isis_number": "INE405E01023",
        "face_value": 2
      },
      {
        "stockCode": "MINDTECK",
        "stockName": "Mindteck (India) Limited",
        "Series": "EQ",
        "date_of_listing": "02-AUG-2016",
        "paid_up_value": 10,
        "isis_number": "INE110B01017",
        "face_value": 10
      },
      {
        "stockCode": "MINDTREE",
        "stockName": "MindTree Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE018I01017",
        "face_value": 10
      },
      {
        "stockCode": "MIRCELECTR",
        "stockName": "MIRC Electronics Limited",
        "Series": "EQ",
        "date_of_listing": "24-MAY-2004",
        "paid_up_value": 1,
        "isis_number": "INE831A01028",
        "face_value": 1
      },
      {
        "stockCode": "MIRZAINT",
        "stockName": "Mirza International Limited",
        "Series": "EQ",
        "date_of_listing": "28-APR-1999",
        "paid_up_value": 2,
        "isis_number": "INE771A01026",
        "face_value": 2
      },
      {
        "stockCode": "MMFL",
        "stockName": "MM Forgings Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE227C01017",
        "face_value": 10
      },
      {
        "stockCode": "MMTC",
        "stockName": "MMTC Limited",
        "Series": "EQ",
        "date_of_listing": "09-APR-2012",
        "paid_up_value": 1,
        "isis_number": "INE123F01029",
        "face_value": 1
      },
      {
        "stockCode": "MODIRUBBER",
        "stockName": "Modi Rubber Limited",
        "Series": "BE",
        "date_of_listing": "07-FEB-1996",
        "paid_up_value": 10,
        "isis_number": "INE832A01018",
        "face_value": 10
      },
      {
        "stockCode": "MOHITIND",
        "stockName": "Mohit Industries Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAR-2013",
        "paid_up_value": 10,
        "isis_number": "INE954E01012",
        "face_value": 10
      },
      {
        "stockCode": "MOHOTAIND",
        "stockName": "Mohota Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE313D01013",
        "face_value": 10
      },
      {
        "stockCode": "MOIL",
        "stockName": "MOIL Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2010",
        "paid_up_value": 10,
        "isis_number": "INE490G01020",
        "face_value": 10
      },
      {
        "stockCode": "MOLDTECH",
        "stockName": "Mold-Tek Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUL-2016",
        "paid_up_value": 2,
        "isis_number": "INE835B01035",
        "face_value": 2
      },
      {
        "stockCode": "MOLDTKPAC",
        "stockName": "Mold-Tek Packaging Limited",
        "Series": "EQ",
        "date_of_listing": "23-FEB-2015",
        "paid_up_value": 5,
        "isis_number": "INE893J01029",
        "face_value": 5
      },
      {
        "stockCode": "MONSANTO",
        "stockName": "Monsanto India Limited",
        "Series": "EQ",
        "date_of_listing": "19-JAN-2000",
        "paid_up_value": 10,
        "isis_number": "INE274B01011",
        "face_value": 10
      },
      {
        "stockCode": "MONTECARLO",
        "stockName": "Monte Carlo Fashions Limited",
        "Series": "EQ",
        "date_of_listing": "19-DEC-2014",
        "paid_up_value": 10,
        "isis_number": "INE950M01013",
        "face_value": 10
      },
      {
        "stockCode": "MORARJEE",
        "stockName": "Morarjee Textiles Limited",
        "Series": "EQ",
        "date_of_listing": "14-SEP-2012",
        "paid_up_value": 7,
        "isis_number": "INE161G01027",
        "face_value": 7
      },
      {
        "stockCode": "MOREPENLAB",
        "stockName": "Morepen Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "24-NOV-1999",
        "paid_up_value": 2,
        "isis_number": "INE083A01026",
        "face_value": 2
      },
      {
        "stockCode": "MOTHERSUMI",
        "stockName": "Motherson Sumi Systems Limited",
        "Series": "EQ",
        "date_of_listing": "14-AUG-1996",
        "paid_up_value": 1,
        "isis_number": "INE775A01035",
        "face_value": 1
      },
      {
        "stockCode": "MOTILALOFS",
        "stockName": "Motilal Oswal Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "11-SEP-2007",
        "paid_up_value": 1,
        "isis_number": "INE338I01027",
        "face_value": 1
      },
      {
        "stockCode": "MOTOGENFIN",
        "stockName": "The Motor & General Finance Limited",
        "Series": "BE",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE861B01015",
        "face_value": 10
      },
      {
        "stockCode": "MPHASIS",
        "stockName": "MphasiS Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUN-2004",
        "paid_up_value": 10,
        "isis_number": "INE356A01018",
        "face_value": 10
      },
      {
        "stockCode": "MPSLTD",
        "stockName": "MPS Limited",
        "Series": "EQ",
        "date_of_listing": "21-JAN-2002",
        "paid_up_value": 10,
        "isis_number": "INE943D01017",
        "face_value": 10
      },
      {
        "stockCode": "MRF",
        "stockName": "MRF Limited",
        "Series": "EQ",
        "date_of_listing": "18-SEP-1996",
        "paid_up_value": 10,
        "isis_number": "INE883A01011",
        "face_value": 10
      },
      {
        "stockCode": "MRO-TEK",
        "stockName": "MRO-TEK Realty Limited",
        "Series": "EQ",
        "date_of_listing": "01-NOV-2000",
        "paid_up_value": 5,
        "isis_number": "INE398B01018",
        "face_value": 5
      },
      {
        "stockCode": "MRPL",
        "stockName": "Mangalore Refinery and Petrochemicals Limited",
        "Series": "EQ",
        "date_of_listing": "07-JAN-2005",
        "paid_up_value": 10,
        "isis_number": "INE103A01014",
        "face_value": 10
      },
      {
        "stockCode": "MSPL",
        "stockName": "MSP Steel & Power Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUL-2005",
        "paid_up_value": 10,
        "isis_number": "INE752G01015",
        "face_value": 10
      },
      {
        "stockCode": "MSTCLTD",
        "stockName": "Mstc Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-2019",
        "paid_up_value": 10,
        "isis_number": "INE255X01014",
        "face_value": 10
      },
      {
        "stockCode": "MTEDUCARE",
        "stockName": "MT Educare Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-2012",
        "paid_up_value": 10,
        "isis_number": "INE472M01018",
        "face_value": 10
      },
      {
        "stockCode": "MTNL",
        "stockName": "Mahanagar Telephone Nigam Limited",
        "Series": "EQ",
        "date_of_listing": "17-FEB-1999",
        "paid_up_value": 10,
        "isis_number": "INE153A01019",
        "face_value": 10
      },
      {
        "stockCode": "MUKANDENGG",
        "stockName": "Mukand Engineers Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2000",
        "paid_up_value": 10,
        "isis_number": "INE022B01014",
        "face_value": 10
      },
      {
        "stockCode": "MUKANDLTD",
        "stockName": "Mukand Limited",
        "Series": "EQ",
        "date_of_listing": "23-FEB-2004",
        "paid_up_value": 10,
        "isis_number": "INE304A01026",
        "face_value": 10
      },
      {
        "stockCode": "MUKTAARTS",
        "stockName": "Mukta Arts Limited",
        "Series": "EQ",
        "date_of_listing": "12-SEP-2000",
        "paid_up_value": 5,
        "isis_number": "INE374B01019",
        "face_value": 5
      },
      {
        "stockCode": "MUNJALAU",
        "stockName": "Munjal Auto Industries Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-2006",
        "paid_up_value": 2,
        "isis_number": "INE672B01032",
        "face_value": 2
      },
      {
        "stockCode": "MUNJALSHOW",
        "stockName": "Munjal Showa Limited",
        "Series": "EQ",
        "date_of_listing": "12-MAY-2003",
        "paid_up_value": 2,
        "isis_number": "INE577A01027",
        "face_value": 2
      },
      {
        "stockCode": "MURUDCERA",
        "stockName": "Murudeshwar Ceramics Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAY-2004",
        "paid_up_value": 10,
        "isis_number": "INE692B01014",
        "face_value": 10
      },
      {
        "stockCode": "MUTHOOTCAP",
        "stockName": "Muthoot Capital Services Limited",
        "Series": "EQ",
        "date_of_listing": "24-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE296G01013",
        "face_value": 10
      },
      {
        "stockCode": "MUTHOOTFIN",
        "stockName": "Muthoot Finance Limited",
        "Series": "EQ",
        "date_of_listing": "06-MAY-2011",
        "paid_up_value": 10,
        "isis_number": "INE414G01012",
        "face_value": 10
      },
      {
        "stockCode": "MVL",
        "stockName": "MVL Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUN-2008",
        "paid_up_value": 1,
        "isis_number": "INE744I01034",
        "face_value": 1
      },
      {
        "stockCode": "NACLIND",
        "stockName": "NACL Industries Limited",
        "Series": "EQ",
        "date_of_listing": "07-APR-2017",
        "paid_up_value": 1,
        "isis_number": "INE295D01020",
        "face_value": 1
      },
      {
        "stockCode": "NAGAFERT",
        "stockName": "Nagarjuna Fertilizers and Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "15-JUN-2016",
        "paid_up_value": 1,
        "isis_number": "INE454M01024",
        "face_value": 1
      },
      {
        "stockCode": "NAGAROIL",
        "stockName": "Nagarjuna Oil Refinery Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAR-2012",
        "paid_up_value": 1,
        "isis_number": "INE453M01018",
        "face_value": 1
      },
      {
        "stockCode": "NAGREEKCAP",
        "stockName": "Nagreeka Capital & Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "18-SEP-2007",
        "paid_up_value": 5,
        "isis_number": "INE245I01016",
        "face_value": 5
      },
      {
        "stockCode": "NAGREEKEXP",
        "stockName": "Nagreeka Exports Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUN-2007",
        "paid_up_value": 5,
        "isis_number": "INE123B01028",
        "face_value": 5
      },
      {
        "stockCode": "NAHARCAP",
        "stockName": "Nahar Capital and Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "11-MAR-2008",
        "paid_up_value": 5,
        "isis_number": "INE049I01012",
        "face_value": 5
      },
      {
        "stockCode": "NAHARINDUS",
        "stockName": "Nahar Industrial Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2005",
        "paid_up_value": 10,
        "isis_number": "INE289A01011",
        "face_value": 10
      },
      {
        "stockCode": "NAHARPOLY",
        "stockName": "Nahar Poly Films Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2007",
        "paid_up_value": 5,
        "isis_number": "INE308A01027",
        "face_value": 5
      },
      {
        "stockCode": "NAHARSPING",
        "stockName": "Nahar Spinning Mills Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2007",
        "paid_up_value": 5,
        "isis_number": "INE290A01027",
        "face_value": 5
      },
      {
        "stockCode": "NATCOPHARM",
        "stockName": "Natco Pharma Limited",
        "Series": "EQ",
        "date_of_listing": "27-DEC-1995",
        "paid_up_value": 2,
        "isis_number": "INE987B01026",
        "face_value": 2
      },
      {
        "stockCode": "NATHBIOGEN",
        "stockName": "Nath Bio-Genes (India) Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-2014",
        "paid_up_value": 10,
        "isis_number": "INE448G01010",
        "face_value": 10
      },
      {
        "stockCode": "NATIONALUM",
        "stockName": "National Aluminium Company Limited",
        "Series": "EQ",
        "date_of_listing": "28-APR-1999",
        "paid_up_value": 5,
        "isis_number": "INE139A01034",
        "face_value": 5
      },
      {
        "stockCode": "NATNLSTEEL",
        "stockName": "National Steel And Agro Industries Limited",
        "Series": "EQ",
        "date_of_listing": "26-SEP-2002",
        "paid_up_value": 10,
        "isis_number": "INE088B01015",
        "face_value": 10
      },
      {
        "stockCode": "NAUKRI",
        "stockName": "Info Edge (India) Limited",
        "Series": "EQ",
        "date_of_listing": "21-NOV-2006",
        "paid_up_value": 10,
        "isis_number": "INE663F01024",
        "face_value": 10
      },
      {
        "stockCode": "NAVINFLUOR",
        "stockName": "Navin Fluorine International Limited",
        "Series": "EQ",
        "date_of_listing": "01-JUN-2007",
        "paid_up_value": 2,
        "isis_number": "INE048G01026",
        "face_value": 2
      },
      {
        "stockCode": "NAVKARCORP",
        "stockName": "Navkar Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "09-SEP-2015",
        "paid_up_value": 10,
        "isis_number": "INE278M01019",
        "face_value": 10
      },
      {
        "stockCode": "NAVNETEDUL",
        "stockName": "Navneet Education Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE060A01024",
        "face_value": 2
      },
      {
        "stockCode": "NBCC",
        "stockName": "NBCC (India) Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-2012",
        "paid_up_value": 1,
        "isis_number": "INE095N01031",
        "face_value": 1
      },
      {
        "stockCode": "NBIFIN",
        "stockName": "N. B. I. Industrial Finance Company Limited",
        "Series": "EQ",
        "date_of_listing": "23-NOV-2016",
        "paid_up_value": 5,
        "isis_number": "INE365I01020",
        "face_value": 5
      },
      {
        "stockCode": "NBVENTURES",
        "stockName": "Nava Bharat Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 2,
        "isis_number": "INE725A01022",
        "face_value": 2
      },
      {
        "stockCode": "NCC",
        "stockName": "NCC Limited",
        "Series": "EQ",
        "date_of_listing": "14-OCT-2003",
        "paid_up_value": 2,
        "isis_number": "INE868B01028",
        "face_value": 2
      },
      {
        "stockCode": "NCLIND",
        "stockName": "NCL Industries Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE732C01016",
        "face_value": 10
      },
      {
        "stockCode": "NDGL",
        "stockName": "Naga Dhunseri Group Limited",
        "Series": "EQ",
        "date_of_listing": "29-AUG-2016",
        "paid_up_value": 10,
        "isis_number": "INE756C01015",
        "face_value": 10
      },
      {
        "stockCode": "NDL",
        "stockName": "Nandan Denim Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2012",
        "paid_up_value": 10,
        "isis_number": "INE875G01030",
        "face_value": 10
      },
      {
        "stockCode": "NDTV",
        "stockName": "New Delhi Television Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAY-2004",
        "paid_up_value": 4,
        "isis_number": "INE155G01029",
        "face_value": 4
      },
      {
        "stockCode": "NECCLTD",
        "stockName": "North Eastern Carrying Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2016",
        "paid_up_value": 10,
        "isis_number": "INE553C01016",
        "face_value": 10
      },
      {
        "stockCode": "NECLIFE",
        "stockName": "Nectar Lifesciences Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUL-2005",
        "paid_up_value": 1,
        "isis_number": "INE023H01027",
        "face_value": 1
      },
      {
        "stockCode": "NELCAST",
        "stockName": "Nelcast Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUN-2007",
        "paid_up_value": 2,
        "isis_number": "INE189I01024",
        "face_value": 2
      },
      {
        "stockCode": "NELCO",
        "stockName": "NELCO Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE045B01015",
        "face_value": 10
      },
      {
        "stockCode": "NEOGEN",
        "stockName": "Neogen Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-2019",
        "paid_up_value": 10,
        "isis_number": "INE136S01016",
        "face_value": 10
      },
      {
        "stockCode": "NESCO",
        "stockName": "Nesco Limited",
        "Series": "EQ",
        "date_of_listing": "08-APR-2008",
        "paid_up_value": 2,
        "isis_number": "INE317F01035",
        "face_value": 2
      },
      {
        "stockCode": "NESTLEIND",
        "stockName": "Nestle India Limited",
        "Series": "EQ",
        "date_of_listing": "08-JAN-2010",
        "paid_up_value": 10,
        "isis_number": "INE239A01016",
        "face_value": 10
      },
      {
        "stockCode": "NETWORK18",
        "stockName": "Network18 Media & Investments Limited",
        "Series": "EQ",
        "date_of_listing": "02-FEB-2007",
        "paid_up_value": 5,
        "isis_number": "INE870H01013",
        "face_value": 5
      },
      {
        "stockCode": "NEULANDLAB",
        "stockName": "Neuland Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "13-OCT-2008",
        "paid_up_value": 10,
        "isis_number": "INE794A01010",
        "face_value": 10
      },
      {
        "stockCode": "NEWGEN",
        "stockName": "Newgen Software Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2018",
        "paid_up_value": 10,
        "isis_number": "INE619B01017",
        "face_value": 10
      },
      {
        "stockCode": "NEXTMEDIA",
        "stockName": "Next Mediaworks Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2001",
        "paid_up_value": 10,
        "isis_number": "INE747B01016",
        "face_value": 10
      },
      {
        "stockCode": "NFL",
        "stockName": "National Fertilizers Limited",
        "Series": "EQ",
        "date_of_listing": "28-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE870D01012",
        "face_value": 10
      },
      {
        "stockCode": "NH",
        "stockName": "Narayana Hrudayalaya Ltd.",
        "Series": "EQ",
        "date_of_listing": "06-JAN-2016",
        "paid_up_value": 10,
        "isis_number": "INE410P01011",
        "face_value": 10
      },
      {
        "stockCode": "NHPC",
        "stockName": "NHPC Limited",
        "Series": "EQ",
        "date_of_listing": "01-SEP-2009",
        "paid_up_value": 10,
        "isis_number": "INE848E01016",
        "face_value": 10
      },
      {
        "stockCode": "NIACL",
        "stockName": "The New India Assurance Company Limited",
        "Series": "EQ",
        "date_of_listing": "13-NOV-2017",
        "paid_up_value": 5,
        "isis_number": "INE470Y01017",
        "face_value": 5
      },
      {
        "stockCode": "NIBL",
        "stockName": "NRB Industrial Bearings Limited",
        "Series": "EQ",
        "date_of_listing": "09-APR-2013",
        "paid_up_value": 2,
        "isis_number": "INE047O01014",
        "face_value": 2
      },
      {
        "stockCode": "NIITLTD",
        "stockName": "NIIT Limited",
        "Series": "EQ",
        "date_of_listing": "16-AUG-2004",
        "paid_up_value": 2,
        "isis_number": "INE161A01038",
        "face_value": 2
      },
      {
        "stockCode": "NIITTECH",
        "stockName": "NIIT Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-2004",
        "paid_up_value": 10,
        "isis_number": "INE591G01017",
        "face_value": 10
      },
      {
        "stockCode": "NILAINFRA",
        "stockName": "Nila Infrastructures Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-2015",
        "paid_up_value": 1,
        "isis_number": "INE937C01029",
        "face_value": 1
      },
      {
        "stockCode": "NILASPACES",
        "stockName": "Nila Spaces Limited",
        "Series": "EQ",
        "date_of_listing": "28-DEC-2018",
        "paid_up_value": 1,
        "isis_number": "INE00S901012",
        "face_value": 1
      },
      {
        "stockCode": "NILKAMAL",
        "stockName": "Nilkamal Limited",
        "Series": "EQ",
        "date_of_listing": "01-NOV-1995",
        "paid_up_value": 10,
        "isis_number": "INE310A01015",
        "face_value": 10
      },
      {
        "stockCode": "NIPPOBATRY",
        "stockName": "Indo-National Limited",
        "Series": "EQ",
        "date_of_listing": "06-OCT-1999",
        "paid_up_value": 10,
        "isis_number": "INE567A01010",
        "face_value": 10
      },
      {
        "stockCode": "NIRAJISPAT",
        "stockName": "Niraj Ispat Industries Limited",
        "Series": "BE",
        "date_of_listing": "27-OCT-2016",
        "paid_up_value": 10,
        "isis_number": "INE326T01011",
        "face_value": 10
      },
      {
        "stockCode": "NITCO",
        "stockName": "Nitco Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAR-2006",
        "paid_up_value": 10,
        "isis_number": "INE858F01012",
        "face_value": 10
      },
      {
        "stockCode": "NITESHEST",
        "stockName": "NEL Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "13-MAY-2010",
        "paid_up_value": 10,
        "isis_number": "INE639K01016",
        "face_value": 10
      },
      {
        "stockCode": "NITINFIRE",
        "stockName": "Nitin Fire Protection Industries Limited",
        "Series": "EQ",
        "date_of_listing": "05-JUN-2007",
        "paid_up_value": 2,
        "isis_number": "INE489H01020",
        "face_value": 2
      },
      {
        "stockCode": "NITINSPIN",
        "stockName": "Nitin Spinners Limited",
        "Series": "EQ",
        "date_of_listing": "02-FEB-2006",
        "paid_up_value": 10,
        "isis_number": "INE229H01012",
        "face_value": 10
      },
      {
        "stockCode": "NKIND",
        "stockName": "NK Industries Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE542C01019",
        "face_value": 10
      },
      {
        "stockCode": "NLCINDIA",
        "stockName": "NLC India Limited",
        "Series": "EQ",
        "date_of_listing": "23-AUG-2000",
        "paid_up_value": 10,
        "isis_number": "INE589A01014",
        "face_value": 10
      },
      {
        "stockCode": "NMDC",
        "stockName": "NMDC Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAR-2008",
        "paid_up_value": 1,
        "isis_number": "INE584A01023",
        "face_value": 1
      },
      {
        "stockCode": "NOCIL",
        "stockName": "NOCIL Limited",
        "Series": "EQ",
        "date_of_listing": "17-JAN-1996",
        "paid_up_value": 10,
        "isis_number": "INE163A01018",
        "face_value": 10
      },
      {
        "stockCode": "NOIDATOLL",
        "stockName": "Noida Toll Bridge Company Limited",
        "Series": "EQ",
        "date_of_listing": "06-DEC-2002",
        "paid_up_value": 10,
        "isis_number": "INE781B01015",
        "face_value": 10
      },
      {
        "stockCode": "NORBTEAEXP",
        "stockName": "Norben Tea & Exports Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUN-1996",
        "paid_up_value": 10,
        "isis_number": "INE369C01017",
        "face_value": 10
      },
      {
        "stockCode": "NRAIL",
        "stockName": "N R Agarwal Industries Limited",
        "Series": "EQ",
        "date_of_listing": "05-APR-2017",
        "paid_up_value": 10,
        "isis_number": "INE740D01017",
        "face_value": 10
      },
      {
        "stockCode": "NRBBEARING",
        "stockName": "NRB Bearing Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAR-2000",
        "paid_up_value": 2,
        "isis_number": "INE349A01021",
        "face_value": 2
      },
      {
        "stockCode": "NSIL",
        "stockName": "Nalwa Sons Investments Limited",
        "Series": "EQ",
        "date_of_listing": "17-NOV-2003",
        "paid_up_value": 10,
        "isis_number": "INE023A01030",
        "face_value": 10
      },
      {
        "stockCode": "NTL",
        "stockName": "Neueon Towers Limited",
        "Series": "BE",
        "date_of_listing": "11-SEP-2013",
        "paid_up_value": 10,
        "isis_number": "INE333I01036",
        "face_value": 10
      },
      {
        "stockCode": "NTPC",
        "stockName": "NTPC Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-2004",
        "paid_up_value": 10,
        "isis_number": "INE733E01010",
        "face_value": 10
      },
      {
        "stockCode": "NUCLEUS",
        "stockName": "Nucleus Software Exports Limited",
        "Series": "EQ",
        "date_of_listing": "19-DEC-2002",
        "paid_up_value": 10,
        "isis_number": "INE096B01018",
        "face_value": 10
      },
      {
        "stockCode": "OBEROIRLTY",
        "stockName": "Oberoi Realty Limited",
        "Series": "EQ",
        "date_of_listing": "20-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE093I01010",
        "face_value": 10
      },
      {
        "stockCode": "OCCL",
        "stockName": "Oriental Carbon & Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "27-JAN-2016",
        "paid_up_value": 10,
        "isis_number": "INE321D01016",
        "face_value": 10
      },
      {
        "stockCode": "OFSS",
        "stockName": "Oracle Financial Services Software Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2002",
        "paid_up_value": 5,
        "isis_number": "INE881D01027",
        "face_value": 5
      },
      {
        "stockCode": "OIL",
        "stockName": "Oil India Limited",
        "Series": "EQ",
        "date_of_listing": "30-SEP-2009",
        "paid_up_value": 10,
        "isis_number": "INE274J01014",
        "face_value": 10
      },
      {
        "stockCode": "OILCOUNTUB",
        "stockName": "Oil Country Tubular Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-1995",
        "paid_up_value": 10,
        "isis_number": "INE591A01010",
        "face_value": 10
      },
      {
        "stockCode": "OISL",
        "stockName": "OCL Iron and Steel Limited",
        "Series": "BE",
        "date_of_listing": "01-AUG-2008",
        "paid_up_value": 1,
        "isis_number": "INE196J01019",
        "face_value": 1
      },
      {
        "stockCode": "OLECTRA",
        "stockName": "Olectra Greentech Limited",
        "Series": "EQ",
        "date_of_listing": "20-MAR-2002",
        "paid_up_value": 4,
        "isis_number": "INE260D01016",
        "face_value": 4
      },
      {
        "stockCode": "OMAXAUTO",
        "stockName": "Omax Autos Limited",
        "Series": "EQ",
        "date_of_listing": "20-FEB-2003",
        "paid_up_value": 10,
        "isis_number": "INE090B01011",
        "face_value": 10
      },
      {
        "stockCode": "OMAXE",
        "stockName": "Omaxe Limited",
        "Series": "EQ",
        "date_of_listing": "09-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE800H01010",
        "face_value": 10
      },
      {
        "stockCode": "OMKARCHEM",
        "stockName": "Omkar Speciality Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "10-FEB-2011",
        "paid_up_value": 10,
        "isis_number": "INE474L01016",
        "face_value": 10
      },
      {
        "stockCode": "OMMETALS",
        "stockName": "OM Metals Infraprojects Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUN-2011",
        "paid_up_value": 1,
        "isis_number": "INE239D01028",
        "face_value": 1
      },
      {
        "stockCode": "ONELIFECAP",
        "stockName": "Onelife Capital Advisors Limited",
        "Series": "EQ",
        "date_of_listing": "17-OCT-2011",
        "paid_up_value": 10,
        "isis_number": "INE912L01015",
        "face_value": 10
      },
      {
        "stockCode": "ONEPOINT",
        "stockName": "One Point One Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2019",
        "paid_up_value": 10,
        "isis_number": "INE840Y01011",
        "face_value": 10
      },
      {
        "stockCode": "ONGC",
        "stockName": "Oil & Natural Gas Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-1995",
        "paid_up_value": 5,
        "isis_number": "INE213A01029",
        "face_value": 5
      },
      {
        "stockCode": "ONMOBILE",
        "stockName": "OnMobile Global Limited",
        "Series": "EQ",
        "date_of_listing": "19-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE809I01019",
        "face_value": 10
      },
      {
        "stockCode": "ONWARDTEC",
        "stockName": "Onward Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAR-2001",
        "paid_up_value": 10,
        "isis_number": "INE229A01017",
        "face_value": 10
      },
      {
        "stockCode": "OPTIEMUS",
        "stockName": "Optiemus Infracom Limited",
        "Series": "EQ",
        "date_of_listing": "08-AUG-2017",
        "paid_up_value": 10,
        "isis_number": "INE350C01017",
        "face_value": 10
      },
      {
        "stockCode": "OPTOCIRCUI",
        "stockName": "Opto Circuits (India) Limited",
        "Series": "EQ",
        "date_of_listing": "25-AUG-2003",
        "paid_up_value": 10,
        "isis_number": "INE808B01016",
        "face_value": 10
      },
      {
        "stockCode": "ORBTEXP",
        "stockName": "Orbit Exports Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-2013",
        "paid_up_value": 10,
        "isis_number": "INE231G01010",
        "face_value": 10
      },
      {
        "stockCode": "ORCHIDPHAR",
        "stockName": "Orchid Pharma Limited",
        "Series": "BZ",
        "date_of_listing": "02-JUL-1997",
        "paid_up_value": 10,
        "isis_number": "INE191A01019",
        "face_value": 10
      },
      {
        "stockCode": "ORICONENT",
        "stockName": "Oricon Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUL-2015",
        "paid_up_value": 2,
        "isis_number": "INE730A01022",
        "face_value": 2
      },
      {
        "stockCode": "ORIENTABRA",
        "stockName": "Orient Abrasives Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2005",
        "paid_up_value": 1,
        "isis_number": "INE569C01020",
        "face_value": 1
      },
      {
        "stockCode": "ORIENTALTL",
        "stockName": "Oriental Trimex Limited",
        "Series": "EQ",
        "date_of_listing": "07-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE998H01012",
        "face_value": 10
      },
      {
        "stockCode": "ORIENTBANK",
        "stockName": "Oriental Bank of Commerce",
        "Series": "EQ",
        "date_of_listing": "02-JUL-1997",
        "paid_up_value": 10,
        "isis_number": "INE141A01014",
        "face_value": 10
      },
      {
        "stockCode": "ORIENTBELL",
        "stockName": "Orient Bell Limited",
        "Series": "EQ",
        "date_of_listing": "14-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE607D01018",
        "face_value": 10
      },
      {
        "stockCode": "ORIENTCEM",
        "stockName": "Orient Cement Limited",
        "Series": "EQ",
        "date_of_listing": "12-JUL-2013",
        "paid_up_value": 1,
        "isis_number": "INE876N01018",
        "face_value": 1
      },
      {
        "stockCode": "ORIENTELEC",
        "stockName": "Orient Electric Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAY-2018",
        "paid_up_value": 1,
        "isis_number": "INE142Z01019",
        "face_value": 1
      },
      {
        "stockCode": "ORIENTHOT",
        "stockName": "Oriental Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "27-AUG-1998",
        "paid_up_value": 1,
        "isis_number": "INE750A01020",
        "face_value": 1
      },
      {
        "stockCode": "ORIENTLTD",
        "stockName": "Orient Press Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE609C01024",
        "face_value": 10
      },
      {
        "stockCode": "ORIENTPPR",
        "stockName": "Orient Paper & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 1,
        "isis_number": "INE592A01026",
        "face_value": 1
      },
      {
        "stockCode": "ORIENTREF",
        "stockName": "Orient Refractories Limited",
        "Series": "EQ",
        "date_of_listing": "12-MAR-2012",
        "paid_up_value": 1,
        "isis_number": "INE743M01012",
        "face_value": 1
      },
      {
        "stockCode": "ORISSAMINE",
        "stockName": "The Orissa Minerals Development Company Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2010",
        "paid_up_value": 1,
        "isis_number": "INE725E01024",
        "face_value": 1
      },
      {
        "stockCode": "ORTEL",
        "stockName": "Ortel Communications Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAR-2015",
        "paid_up_value": 10,
        "isis_number": "INE849L01019",
        "face_value": 10
      },
      {
        "stockCode": "ORTINLABSS",
        "stockName": "Ortin Laboratories Limited",
        "Series": "BE",
        "date_of_listing": "21-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE749B01012",
        "face_value": 10
      },
      {
        "stockCode": "OSWALAGRO",
        "stockName": "Oswal Agro Mills Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE142A01012",
        "face_value": 10
      },
      {
        "stockCode": "PAEL",
        "stockName": "PAE Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE766A01018",
        "face_value": 10
      },
      {
        "stockCode": "PAGEIND",
        "stockName": "Page Industries Limited",
        "Series": "EQ",
        "date_of_listing": "16-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE761H01022",
        "face_value": 10
      },
      {
        "stockCode": "PAISALO",
        "stockName": "Paisalo Digital Limited",
        "Series": "EQ",
        "date_of_listing": "17-OCT-2011",
        "paid_up_value": 10,
        "isis_number": "INE420C01042",
        "face_value": 10
      },
      {
        "stockCode": "PALASHSECU",
        "stockName": "Palash Securities Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE471W01019",
        "face_value": 10
      },
      {
        "stockCode": "PALREDTEC",
        "stockName": "Palred Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2016",
        "paid_up_value": 10,
        "isis_number": "INE218G01033",
        "face_value": 10
      },
      {
        "stockCode": "PANACEABIO",
        "stockName": "Panacea Biotec Limited",
        "Series": "EQ",
        "date_of_listing": "17-APR-1996",
        "paid_up_value": 1,
        "isis_number": "INE922B01023",
        "face_value": 1
      },
      {
        "stockCode": "PANAMAPET",
        "stockName": "Panama Petrochem Limited",
        "Series": "EQ",
        "date_of_listing": "30-SEP-2011",
        "paid_up_value": 2,
        "isis_number": "INE305C01029",
        "face_value": 2
      },
      {
        "stockCode": "PAPERPROD",
        "stockName": "Huhtamaki PPL Limited",
        "Series": "EQ",
        "date_of_listing": "01-OCT-2004",
        "paid_up_value": 2,
        "isis_number": "INE275B01026",
        "face_value": 2
      },
      {
        "stockCode": "PARABDRUGS",
        "stockName": "Parabolic Drugs Limited",
        "Series": "BE",
        "date_of_listing": "01-JUL-2010",
        "paid_up_value": 10,
        "isis_number": "INE618H01016",
        "face_value": 10
      },
      {
        "stockCode": "PARACABLES",
        "stockName": "Paramount Communications Limited",
        "Series": "EQ",
        "date_of_listing": "03-JAN-2007",
        "paid_up_value": 2,
        "isis_number": "INE074B01023",
        "face_value": 2
      },
      {
        "stockCode": "PARAGMILK",
        "stockName": "Parag Milk Foods Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAY-2016",
        "paid_up_value": 10,
        "isis_number": "INE883N01014",
        "face_value": 10
      },
      {
        "stockCode": "PARSVNATH",
        "stockName": "Parsvnath Developers Limited",
        "Series": "EQ",
        "date_of_listing": "30-NOV-2006",
        "paid_up_value": 5,
        "isis_number": "INE561H01026",
        "face_value": 5
      },
      {
        "stockCode": "PATELENG",
        "stockName": "Patel Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "24-FEB-2005",
        "paid_up_value": 1,
        "isis_number": "INE244B01030",
        "face_value": 1
      },
      {
        "stockCode": "PATINTLOG",
        "stockName": "Patel Integrated Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "11-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE529D01014",
        "face_value": 10
      },
      {
        "stockCode": "PATSPINLTD",
        "stockName": "Patspin India Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE790C01014",
        "face_value": 10
      },
      {
        "stockCode": "PCJEWELLER",
        "stockName": "PC Jeweller Limited",
        "Series": "EQ",
        "date_of_listing": "27-DEC-2012",
        "paid_up_value": 10,
        "isis_number": "INE785M01013",
        "face_value": 10
      },
      {
        "stockCode": "PDMJEPAPER",
        "stockName": "Pudumjee Paper Products Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2016",
        "paid_up_value": 1,
        "isis_number": "INE865T01018",
        "face_value": 1
      },
      {
        "stockCode": "PDPL",
        "stockName": "Parenteral Drugs (India) Limited",
        "Series": "EQ",
        "date_of_listing": "19-AUG-2010",
        "paid_up_value": 10,
        "isis_number": "INE904D01019",
        "face_value": 10
      },
      {
        "stockCode": "PDSMFL",
        "stockName": "PDS Multinational Fashions Limited",
        "Series": "EQ",
        "date_of_listing": "21-OCT-2014",
        "paid_up_value": 10,
        "isis_number": "INE111Q01013",
        "face_value": 10
      },
      {
        "stockCode": "PEARLPOLY",
        "stockName": "Pearl Polymers Limited",
        "Series": "BE",
        "date_of_listing": "11-OCT-1995",
        "paid_up_value": 10,
        "isis_number": "INE844A01013",
        "face_value": 10
      },
      {
        "stockCode": "PEL",
        "stockName": "Piramal Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE140A01024",
        "face_value": 2
      },
      {
        "stockCode": "PENIND",
        "stockName": "Pennar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "25-NOV-2010",
        "paid_up_value": 5,
        "isis_number": "INE932A01024",
        "face_value": 5
      },
      {
        "stockCode": "PENINLAND",
        "stockName": "Peninsula Land Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 2,
        "isis_number": "INE138A01028",
        "face_value": 2
      },
      {
        "stockCode": "PERSISTENT",
        "stockName": "Persistent Systems Limited",
        "Series": "EQ",
        "date_of_listing": "06-APR-2010",
        "paid_up_value": 10,
        "isis_number": "INE262H01013",
        "face_value": 10
      },
      {
        "stockCode": "PETRONENGG",
        "stockName": "Petron Engineering Construction Limited",
        "Series": "BE",
        "date_of_listing": "27-DEC-1995",
        "paid_up_value": 10,
        "isis_number": "INE742A01019",
        "face_value": 10
      },
      {
        "stockCode": "PETRONET",
        "stockName": "Petronet LNG Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAR-2004",
        "paid_up_value": 10,
        "isis_number": "INE347G01014",
        "face_value": 10
      },
      {
        "stockCode": "PFC",
        "stockName": "Power Finance Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "23-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE134E01011",
        "face_value": 10
      },
      {
        "stockCode": "PFIZER",
        "stockName": "Pfizer Limited",
        "Series": "EQ",
        "date_of_listing": "28-APR-1999",
        "paid_up_value": 10,
        "isis_number": "INE182A01018",
        "face_value": 10
      },
      {
        "stockCode": "PFOCUS",
        "stockName": "Prime Focus Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2006",
        "paid_up_value": 1,
        "isis_number": "INE367G01038",
        "face_value": 1
      },
      {
        "stockCode": "PFS",
        "stockName": "PTC India Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2011",
        "paid_up_value": 10,
        "isis_number": "INE560K01014",
        "face_value": 10
      },
      {
        "stockCode": "PGEL",
        "stockName": "PG Electroplast Limited",
        "Series": "EQ",
        "date_of_listing": "26-SEP-2011",
        "paid_up_value": 10,
        "isis_number": "INE457L01011",
        "face_value": 10
      },
      {
        "stockCode": "PGHH",
        "stockName": "Procter & Gamble Hygiene and Health Care Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUL-2004",
        "paid_up_value": 10,
        "isis_number": "INE179A01014",
        "face_value": 10
      },
      {
        "stockCode": "PGHL",
        "stockName": "Procter & Gamble Health Limited",
        "Series": "EQ",
        "date_of_listing": "24-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE199A01012",
        "face_value": 10
      },
      {
        "stockCode": "PGIL",
        "stockName": "Pearl Global Industries Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE940H01014",
        "face_value": 10
      },
      {
        "stockCode": "PHILIPCARB",
        "stockName": "Phillips Carbon Black Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 2,
        "isis_number": "INE602A01023",
        "face_value": 2
      },
      {
        "stockCode": "PHOENIXLTD",
        "stockName": "The Phoenix Mills Limited",
        "Series": "EQ",
        "date_of_listing": "23-APR-2007",
        "paid_up_value": 2,
        "isis_number": "INE211B01039",
        "face_value": 2
      },
      {
        "stockCode": "PIDILITIND",
        "stockName": "Pidilite Industries Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 1,
        "isis_number": "INE318A01026",
        "face_value": 1
      },
      {
        "stockCode": "PIIND",
        "stockName": "PI Industries Limited",
        "Series": "EQ",
        "date_of_listing": "15-JUN-2011",
        "paid_up_value": 1,
        "isis_number": "INE603J01030",
        "face_value": 1
      },
      {
        "stockCode": "PILANIINVS",
        "stockName": "Pilani Investment and Industries Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "08-DEC-2015",
        "paid_up_value": 10,
        "isis_number": "INE417C01014",
        "face_value": 10
      },
      {
        "stockCode": "PILITA",
        "stockName": "PIL ITALICA LIFESTYLE LIMITED",
        "Series": "EQ",
        "date_of_listing": "07-OCT-2013",
        "paid_up_value": 1,
        "isis_number": "INE600A01035",
        "face_value": 1
      },
      {
        "stockCode": "PIONDIST",
        "stockName": "Pioneer Distilleries Limited",
        "Series": "EQ",
        "date_of_listing": "15-JUN-2010",
        "paid_up_value": 10,
        "isis_number": "INE889E01010",
        "face_value": 10
      },
      {
        "stockCode": "PIONEEREMB",
        "stockName": "Pioneer Embroideries Limited",
        "Series": "EQ",
        "date_of_listing": "16-MAY-2006",
        "paid_up_value": 10,
        "isis_number": "INE156C01018",
        "face_value": 10
      },
      {
        "stockCode": "PIRPHYTO",
        "stockName": "Piramal Phytocare Limited",
        "Series": "BE",
        "date_of_listing": "29-MAY-2008",
        "paid_up_value": 10,
        "isis_number": "INE122J01015",
        "face_value": 10
      },
      {
        "stockCode": "PITTIENG",
        "stockName": "Pitti Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "02-FEB-2007",
        "paid_up_value": 5,
        "isis_number": "INE450D01021",
        "face_value": 5
      },
      {
        "stockCode": "PKTEA",
        "stockName": "The Peria Karamalai Tea & Produce Company Limited",
        "Series": "BE",
        "date_of_listing": "19-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE431F01018",
        "face_value": 10
      },
      {
        "stockCode": "PLASTIBLEN",
        "stockName": "Plastiblends India Limited",
        "Series": "EQ",
        "date_of_listing": "28-DEC-2006",
        "paid_up_value": 5,
        "isis_number": "INE083C01022",
        "face_value": 5
      },
      {
        "stockCode": "PNB",
        "stockName": "Punjab National Bank",
        "Series": "EQ",
        "date_of_listing": "24-APR-2002",
        "paid_up_value": 2,
        "isis_number": "INE160A01022",
        "face_value": 2
      },
      {
        "stockCode": "PNBGILTS",
        "stockName": "PNB Gilts Limited",
        "Series": "EQ",
        "date_of_listing": "18-SEP-2000",
        "paid_up_value": 10,
        "isis_number": "INE859A01011",
        "face_value": 10
      },
      {
        "stockCode": "PNBHOUSING",
        "stockName": "PNB Housing Finance Limited",
        "Series": "EQ",
        "date_of_listing": "07-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE572E01012",
        "face_value": 10
      },
      {
        "stockCode": "PNC",
        "stockName": "Pritish Nandy Communications Limited",
        "Series": "EQ",
        "date_of_listing": "11-DEC-2000",
        "paid_up_value": 10,
        "isis_number": "INE392B01011",
        "face_value": 10
      },
      {
        "stockCode": "PNCINFRA",
        "stockName": "PNC Infratech Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAY-2015",
        "paid_up_value": 2,
        "isis_number": "INE195J01029",
        "face_value": 2
      },
      {
        "stockCode": "PODDARHOUS",
        "stockName": "Poddar Housing and Development Limited",
        "Series": "EQ",
        "date_of_listing": "10-APR-2017",
        "paid_up_value": 10,
        "isis_number": "INE888B01018",
        "face_value": 10
      },
      {
        "stockCode": "PODDARMENT",
        "stockName": "Poddar Pigments Limited",
        "Series": "EQ",
        "date_of_listing": "22-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE371C01013",
        "face_value": 10
      },
      {
        "stockCode": "POKARNA",
        "stockName": "Pokarna Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUL-2016",
        "paid_up_value": 2,
        "isis_number": "INE637C01025",
        "face_value": 2
      },
      {
        "stockCode": "POLYCAB",
        "stockName": "Polycab India Limited",
        "Series": "EQ",
        "date_of_listing": "16-APR-2019",
        "paid_up_value": 10,
        "isis_number": "INE455K01017",
        "face_value": 10
      },
      {
        "stockCode": "POLYMED",
        "stockName": "Poly Medicure Limited",
        "Series": "EQ",
        "date_of_listing": "07-DEC-2011",
        "paid_up_value": 5,
        "isis_number": "INE205C01021",
        "face_value": 5
      },
      {
        "stockCode": "POLYPLEX",
        "stockName": "Polyplex Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "11-APR-2003",
        "paid_up_value": 10,
        "isis_number": "INE633B01018",
        "face_value": 10
      },
      {
        "stockCode": "PONNIERODE",
        "stockName": "Ponni Sugars (Erode) Limited",
        "Series": "EQ",
        "date_of_listing": "16-APR-2002",
        "paid_up_value": 10,
        "isis_number": "INE838E01017",
        "face_value": 10
      },
      {
        "stockCode": "POWERGRID",
        "stockName": "Power Grid Corporation of India Limited",
        "Series": "EQ",
        "date_of_listing": "05-OCT-2007",
        "paid_up_value": 10,
        "isis_number": "INE752E01010",
        "face_value": 10
      },
      {
        "stockCode": "POWERMECH",
        "stockName": "Power Mech Projects Limited",
        "Series": "EQ",
        "date_of_listing": "26-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE211R01019",
        "face_value": 10
      },
      {
        "stockCode": "PPAP",
        "stockName": "PPAP Automotive Limited",
        "Series": "EQ",
        "date_of_listing": "11-JAN-2008",
        "paid_up_value": 10,
        "isis_number": "INE095I01015",
        "face_value": 10
      },
      {
        "stockCode": "PPL",
        "stockName": "Prakash Pipes Limited",
        "Series": "BE",
        "date_of_listing": "14-JUN-2019",
        "paid_up_value": 10,
        "isis_number": "INE050001010",
        "face_value": 10
      },
      {
        "stockCode": "PRABHAT",
        "stockName": "Prabhat Dairy Limited",
        "Series": "EQ",
        "date_of_listing": "21-SEP-2015",
        "paid_up_value": 10,
        "isis_number": "INE302M01033",
        "face_value": 10
      },
      {
        "stockCode": "PRADIP",
        "stockName": "Pradip Overseas Limited",
        "Series": "EQ",
        "date_of_listing": "05-APR-2010",
        "paid_up_value": 10,
        "isis_number": "INE495J01015",
        "face_value": 10
      },
      {
        "stockCode": "PRAENG",
        "stockName": "Prajay Engineers Syndicate Limited",
        "Series": "EQ",
        "date_of_listing": "02-JAN-2007",
        "paid_up_value": 10,
        "isis_number": "INE505C01016",
        "face_value": 10
      },
      {
        "stockCode": "PRAJIND",
        "stockName": "Praj Industries Limited",
        "Series": "EQ",
        "date_of_listing": "11-OCT-1995",
        "paid_up_value": 2,
        "isis_number": "INE074A01025",
        "face_value": 2
      },
      {
        "stockCode": "PRAKASH",
        "stockName": "Prakash Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE603A01013",
        "face_value": 10
      },
      {
        "stockCode": "PRAKASHCON",
        "stockName": "Prakash Constrowell Limited",
        "Series": "EQ",
        "date_of_listing": "04-OCT-2011",
        "paid_up_value": 1,
        "isis_number": "INE023M01027",
        "face_value": 1
      },
      {
        "stockCode": "PRAKASHSTL",
        "stockName": "Prakash Steelage Limited",
        "Series": "EQ",
        "date_of_listing": "25-AUG-2010",
        "paid_up_value": 1,
        "isis_number": "INE696K01024",
        "face_value": 1
      },
      {
        "stockCode": "PRAXIS",
        "stockName": "Praxis Home Retail Limited",
        "Series": "EQ",
        "date_of_listing": "31-JAN-2018",
        "paid_up_value": 5,
        "isis_number": "INE546Y01022",
        "face_value": 5
      },
      {
        "stockCode": "PRECAM",
        "stockName": "Precision Camshafts Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-2016",
        "paid_up_value": 10,
        "isis_number": "INE484I01029",
        "face_value": 10
      },
      {
        "stockCode": "PRECOT",
        "stockName": "Precot Meridian Limited",
        "Series": "EQ",
        "date_of_listing": "19-AUG-2005",
        "paid_up_value": 10,
        "isis_number": "INE283A01014",
        "face_value": 10
      },
      {
        "stockCode": "PRECWIRE",
        "stockName": "Precision Wires India Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 5,
        "isis_number": "INE372C01029",
        "face_value": 5
      },
      {
        "stockCode": "PREMEXPLN",
        "stockName": "Premier Explosives Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE863B01011",
        "face_value": 10
      },
      {
        "stockCode": "PREMIER",
        "stockName": "Premier Limited",
        "Series": "BE",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 10,
        "isis_number": "INE342A01018",
        "face_value": 10
      },
      {
        "stockCode": "PREMIERPOL",
        "stockName": "Premier Polyfilm Limited",
        "Series": "EQ",
        "date_of_listing": "13-DEC-1995",
        "paid_up_value": 5,
        "isis_number": "INE309M01012",
        "face_value": 5
      },
      {
        "stockCode": "PRESSMN",
        "stockName": "Pressman Advertising Limited",
        "Series": "EQ",
        "date_of_listing": "05-JAN-2005",
        "paid_up_value": 2,
        "isis_number": "INE980A01023",
        "face_value": 2
      },
      {
        "stockCode": "PRESTIGE",
        "stockName": "Prestige Estates Projects Limited",
        "Series": "EQ",
        "date_of_listing": "27-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE811K01011",
        "face_value": 10
      },
      {
        "stockCode": "PRICOLLTD",
        "stockName": "Pricol Limited",
        "Series": "EQ",
        "date_of_listing": "10-FEB-2017",
        "paid_up_value": 1,
        "isis_number": "INE726V01018",
        "face_value": 1
      },
      {
        "stockCode": "PRIMESECU",
        "stockName": "Prime Securities Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUN-2005",
        "paid_up_value": 5,
        "isis_number": "INE032B01021",
        "face_value": 5
      },
      {
        "stockCode": "PROSEED",
        "stockName": "Proseed India Limited",
        "Series": "EQ",
        "date_of_listing": "16-OCT-2012",
        "paid_up_value": 1,
        "isis_number": "INE217G01027",
        "face_value": 1
      },
      {
        "stockCode": "PROVOGE",
        "stockName": "Provogue (India) Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAR-2012",
        "paid_up_value": 1,
        "isis_number": "INE968G01033",
        "face_value": 1
      },
      {
        "stockCode": "PROZONINTU",
        "stockName": "Prozone Intu Properties Limited",
        "Series": "BE",
        "date_of_listing": "12-SEP-2012",
        "paid_up_value": 2,
        "isis_number": "INE195N01013",
        "face_value": 2
      },
      {
        "stockCode": "PRSMJOHNSN",
        "stockName": "Prism Johnson Limited",
        "Series": "EQ",
        "date_of_listing": "20-AUG-2003",
        "paid_up_value": 10,
        "isis_number": "INE010A01011",
        "face_value": 10
      },
      {
        "stockCode": "PSB",
        "stockName": "Punjab & Sind Bank",
        "Series": "EQ",
        "date_of_listing": "30-DEC-2010",
        "paid_up_value": 10,
        "isis_number": "INE608A01012",
        "face_value": 10
      },
      {
        "stockCode": "PSL",
        "stockName": "PSL Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE474B01017",
        "face_value": 10
      },
      {
        "stockCode": "PSPPROJECT",
        "stockName": "PSP Projects Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAY-2017",
        "paid_up_value": 10,
        "isis_number": "INE488V01015",
        "face_value": 10
      },
      {
        "stockCode": "PTC",
        "stockName": "PTC India Limited",
        "Series": "EQ",
        "date_of_listing": "07-APR-2004",
        "paid_up_value": 10,
        "isis_number": "INE877F01012",
        "face_value": 10
      },
      {
        "stockCode": "PTL",
        "stockName": "PTL Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2007",
        "paid_up_value": 2,
        "isis_number": "INE034D01031",
        "face_value": 2
      },
      {
        "stockCode": "PUNJABCHEM",
        "stockName": "Punjab Chemicals & Crop Protection Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAR-2007",
        "paid_up_value": 10,
        "isis_number": "INE277B01014",
        "face_value": 10
      },
      {
        "stockCode": "PUNJLLOYD",
        "stockName": "Punj Lloyd Limited",
        "Series": "EQ",
        "date_of_listing": "06-JAN-2006",
        "paid_up_value": 2,
        "isis_number": "INE701B01021",
        "face_value": 2
      },
      {
        "stockCode": "PURVA",
        "stockName": "Puravankara Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-2007",
        "paid_up_value": 5,
        "isis_number": "INE323I01011",
        "face_value": 5
      },
      {
        "stockCode": "PVR",
        "stockName": "PVR Limited",
        "Series": "EQ",
        "date_of_listing": "04-JAN-2006",
        "paid_up_value": 10,
        "isis_number": "INE191H01014",
        "face_value": 10
      },
      {
        "stockCode": "QUESS",
        "stockName": "Quess Corp Limited",
        "Series": "EQ",
        "date_of_listing": "12-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE615P01015",
        "face_value": 10
      },
      {
        "stockCode": "QUICKHEAL",
        "stockName": "Quick Heal Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "18-FEB-2016",
        "paid_up_value": 10,
        "isis_number": "INE306L01010",
        "face_value": 10
      },
      {
        "stockCode": "QUINTEGRA",
        "stockName": "Quintegra Solutions Limited",
        "Series": "BE",
        "date_of_listing": "20-DEC-2000",
        "paid_up_value": 10,
        "isis_number": "INE033B01011",
        "face_value": 10
      },
      {
        "stockCode": "RADAAN",
        "stockName": "Radaan Mediaworks India Limited",
        "Series": "EQ",
        "date_of_listing": "27-FEB-2003",
        "paid_up_value": 2,
        "isis_number": "INE874F01027",
        "face_value": 2
      },
      {
        "stockCode": "RADICO",
        "stockName": "Radico Khaitan Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUN-2003",
        "paid_up_value": 2,
        "isis_number": "INE944F01028",
        "face_value": 2
      },
      {
        "stockCode": "RADIOCITY",
        "stockName": "Music Broadcast Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAR-2017",
        "paid_up_value": 2,
        "isis_number": "INE919I01024",
        "face_value": 2
      },
      {
        "stockCode": "RAIN",
        "stockName": "Rain Industries Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAR-2008",
        "paid_up_value": 2,
        "isis_number": "INE855B01025",
        "face_value": 2
      },
      {
        "stockCode": "RAINBOWPAP",
        "stockName": "Rainbow Papers Limited",
        "Series": "BZ",
        "date_of_listing": "02-JUN-2010",
        "paid_up_value": 2,
        "isis_number": "INE028D01025",
        "face_value": 2
      },
      {
        "stockCode": "RAJESHEXPO",
        "stockName": "Rajesh Exports Limited",
        "Series": "EQ",
        "date_of_listing": "09-FEB-2000",
        "paid_up_value": 1,
        "isis_number": "INE343B01030",
        "face_value": 1
      },
      {
        "stockCode": "RAJRAYON",
        "stockName": "Raj Rayon Industries Limited",
        "Series": "BZ",
        "date_of_listing": "04-JAN-2007",
        "paid_up_value": 1,
        "isis_number": "INE533D01024",
        "face_value": 1
      },
      {
        "stockCode": "RAJSREESUG",
        "stockName": "Rajshree Sugars & Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE562B01019",
        "face_value": 10
      },
      {
        "stockCode": "RAJTV",
        "stockName": "Raj Television Network Limited",
        "Series": "BZ",
        "date_of_listing": "16-MAR-2007",
        "paid_up_value": 5,
        "isis_number": "INE952H01027",
        "face_value": 5
      },
      {
        "stockCode": "RAJVIR",
        "stockName": "Rajvir Industries Limited",
        "Series": "BE",
        "date_of_listing": "20-SEP-2005",
        "paid_up_value": 10,
        "isis_number": "INE011H01014",
        "face_value": 10
      },
      {
        "stockCode": "RALLIS",
        "stockName": "Rallis India Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-1999",
        "paid_up_value": 1,
        "isis_number": "INE613A01020",
        "face_value": 1
      },
      {
        "stockCode": "RAMANEWS",
        "stockName": "Shree Rama Newsprint Limited",
        "Series": "EQ",
        "date_of_listing": "20-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE278B01020",
        "face_value": 10
      },
      {
        "stockCode": "RAMASTEEL",
        "stockName": "Rama Steel Tubes Limited",
        "Series": "EQ",
        "date_of_listing": "19-AUG-2015",
        "paid_up_value": 5,
        "isis_number": "INE230R01027",
        "face_value": 5
      },
      {
        "stockCode": "RAMCOCEM",
        "stockName": "The Ramco Cements Limited",
        "Series": "EQ",
        "date_of_listing": "09-APR-1997",
        "paid_up_value": 1,
        "isis_number": "INE331A01037",
        "face_value": 1
      },
      {
        "stockCode": "RAMCOIND",
        "stockName": "Ramco Industries Limited",
        "Series": "EQ",
        "date_of_listing": "06-NOV-1996",
        "paid_up_value": 1,
        "isis_number": "INE614A01028",
        "face_value": 1
      },
      {
        "stockCode": "RAMCOSYS",
        "stockName": "Ramco Systems Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-2000",
        "paid_up_value": 10,
        "isis_number": "INE246B01019",
        "face_value": 10
      },
      {
        "stockCode": "RAMGOPOLY",
        "stockName": "Ramgopal Polytex Limited",
        "Series": "BE",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE410D01017",
        "face_value": 10
      },
      {
        "stockCode": "RAMKY",
        "stockName": "Ramky Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "08-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE874I01013",
        "face_value": 10
      },
      {
        "stockCode": "RANASUG",
        "stockName": "Rana Sugars Limited",
        "Series": "EQ",
        "date_of_listing": "24-FEB-2005",
        "paid_up_value": 10,
        "isis_number": "INE625B01014",
        "face_value": 10
      },
      {
        "stockCode": "RANEENGINE",
        "stockName": "Rane Engine Valve Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUN-2008",
        "paid_up_value": 10,
        "isis_number": "INE222J01013",
        "face_value": 10
      },
      {
        "stockCode": "RANEHOLDIN",
        "stockName": "Rane Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "24-SEP-1997",
        "paid_up_value": 10,
        "isis_number": "INE384A01010",
        "face_value": 10
      },
      {
        "stockCode": "RATNAMANI",
        "stockName": "Ratnamani Metals & Tubes Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2006",
        "paid_up_value": 2,
        "isis_number": "INE703B01027",
        "face_value": 2
      },
      {
        "stockCode": "RAYMOND",
        "stockName": "Raymond Limited",
        "Series": "EQ",
        "date_of_listing": "18-OCT-1995",
        "paid_up_value": 10,
        "isis_number": "INE301A01014",
        "face_value": 10
      },
      {
        "stockCode": "RBL",
        "stockName": "Rane Brake Lining Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2008",
        "paid_up_value": 10,
        "isis_number": "INE244J01017",
        "face_value": 10
      },
      {
        "stockCode": "RBLBANK",
        "stockName": "RBL Bank Limited",
        "Series": "EQ",
        "date_of_listing": "31-AUG-2016",
        "paid_up_value": 10,
        "isis_number": "INE976G01028",
        "face_value": 10
      },
      {
        "stockCode": "RCF",
        "stockName": "Rashtriya Chemicals and Fertilizers Limited",
        "Series": "EQ",
        "date_of_listing": "07-JAN-1998",
        "paid_up_value": 10,
        "isis_number": "INE027A01015",
        "face_value": 10
      },
      {
        "stockCode": "RCOM",
        "stockName": "Reliance Communications Limited",
        "Series": "EQ",
        "date_of_listing": "06-MAR-2006",
        "paid_up_value": 5,
        "isis_number": "INE330H01018",
        "face_value": 5
      },
      {
        "stockCode": "RECLTD",
        "stockName": "REC Limited",
        "Series": "EQ",
        "date_of_listing": "12-MAR-2008",
        "paid_up_value": 10,
        "isis_number": "INE020B01018",
        "face_value": 10
      },
      {
        "stockCode": "REDINGTON",
        "stockName": "Redington (India) Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-2007",
        "paid_up_value": 2,
        "isis_number": "INE891D01026",
        "face_value": 2
      },
      {
        "stockCode": "REFEX",
        "stockName": "Refex Industries Limited",
        "Series": "BE",
        "date_of_listing": "03-DEC-2009",
        "paid_up_value": 10,
        "isis_number": "INE056I01017",
        "face_value": 10
      },
      {
        "stockCode": "REGENCERAM",
        "stockName": "Regency Ceramics Limited",
        "Series": "BE",
        "date_of_listing": "05-JUN-1996",
        "paid_up_value": 10,
        "isis_number": "INE277C01012",
        "face_value": 10
      },
      {
        "stockCode": "RELAXO",
        "stockName": "Relaxo Footwears Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUN-2011",
        "paid_up_value": 1,
        "isis_number": "INE131B01039",
        "face_value": 1
      },
      {
        "stockCode": "RELCAPITAL",
        "stockName": "Reliance Capital Limited",
        "Series": "EQ",
        "date_of_listing": "29-NOV-1995",
        "paid_up_value": 10,
        "isis_number": "INE013A01015",
        "face_value": 10
      },
      {
        "stockCode": "RELIANCE",
        "stockName": "Reliance Industries Limited",
        "Series": "EQ",
        "date_of_listing": "29-NOV-1995",
        "paid_up_value": 10,
        "isis_number": "INE002A01018",
        "face_value": 10
      },
      {
        "stockCode": "RELIGARE",
        "stockName": "Religare Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "21-NOV-2007",
        "paid_up_value": 10,
        "isis_number": "INE621H01010",
        "face_value": 10
      },
      {
        "stockCode": "RELINFRA",
        "stockName": "Reliance Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE036A01016",
        "face_value": 10
      },
      {
        "stockCode": "REMSONSIND",
        "stockName": "Remsons Industries Limited",
        "Series": "EQ",
        "date_of_listing": "31-JAN-1996",
        "paid_up_value": 10,
        "isis_number": "INE474C01015",
        "face_value": 10
      },
      {
        "stockCode": "RENUKA",
        "stockName": "Shree Renuka Sugars Limited",
        "Series": "EQ",
        "date_of_listing": "31-OCT-2005",
        "paid_up_value": 1,
        "isis_number": "INE087H01022",
        "face_value": 1
      },
      {
        "stockCode": "REPCOHOME",
        "stockName": "Repco Home Finance Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2013",
        "paid_up_value": 10,
        "isis_number": "INE612J01015",
        "face_value": 10
      },
      {
        "stockCode": "REPRO",
        "stockName": "Repro India Limited",
        "Series": "EQ",
        "date_of_listing": "22-DEC-2005",
        "paid_up_value": 10,
        "isis_number": "INE461B01014",
        "face_value": 10
      },
      {
        "stockCode": "RESPONIND",
        "stockName": "Responsive Industries Limited",
        "Series": "EQ",
        "date_of_listing": "29-OCT-2010",
        "paid_up_value": 1,
        "isis_number": "INE688D01026",
        "face_value": 1
      },
      {
        "stockCode": "REVATHI",
        "stockName": "Revathi Equipment Limited",
        "Series": "EQ",
        "date_of_listing": "11-AUG-2005",
        "paid_up_value": 10,
        "isis_number": "INE617A01013",
        "face_value": 10
      },
      {
        "stockCode": "RGL",
        "stockName": "Renaissance Global Limited",
        "Series": "EQ",
        "date_of_listing": "12-DEC-2007",
        "paid_up_value": 10,
        "isis_number": "INE722H01016",
        "face_value": 10
      },
      {
        "stockCode": "RHFL",
        "stockName": "Reliance Home Finance Limited",
        "Series": "EQ",
        "date_of_listing": "22-SEP-2017",
        "paid_up_value": 10,
        "isis_number": "INE217K01011",
        "face_value": 10
      },
      {
        "stockCode": "RICOAUTO",
        "stockName": "Rico Auto Industries Limited",
        "Series": "EQ",
        "date_of_listing": "12-MAY-2003",
        "paid_up_value": 1,
        "isis_number": "INE209B01025",
        "face_value": 1
      },
      {
        "stockCode": "RIIL",
        "stockName": "Reliance Industrial Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "29-NOV-1995",
        "paid_up_value": 10,
        "isis_number": "INE046A01015",
        "face_value": 10
      },
      {
        "stockCode": "RITES",
        "stockName": "RITES Limited",
        "Series": "EQ",
        "date_of_listing": "02-JUL-2018",
        "paid_up_value": 10,
        "isis_number": "INE320J01015",
        "face_value": 10
      },
      {
        "stockCode": "RKDL",
        "stockName": "Ravi Kumar Distilleries Limited",
        "Series": "EQ",
        "date_of_listing": "27-DEC-2010",
        "paid_up_value": 10,
        "isis_number": "INE722J01012",
        "face_value": 10
      },
      {
        "stockCode": "RKFORGE",
        "stockName": "Ramkrishna Forgings Limited",
        "Series": "EQ",
        "date_of_listing": "05-MAY-2004",
        "paid_up_value": 10,
        "isis_number": "INE399G01015",
        "face_value": 10
      },
      {
        "stockCode": "RMCL",
        "stockName": "Radha Madhav Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "26-NOV-2007",
        "paid_up_value": 10,
        "isis_number": "INE172H01014",
        "face_value": 10
      },
      {
        "stockCode": "RML",
        "stockName": "Rane (Madras) Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-2005",
        "paid_up_value": 10,
        "isis_number": "INE050H01012",
        "face_value": 10
      },
      {
        "stockCode": "RNAM",
        "stockName": "Reliance Nippon Life Asset Management Limited",
        "Series": "EQ",
        "date_of_listing": "06-NOV-2017",
        "paid_up_value": 10,
        "isis_number": "INE298J01013",
        "face_value": 10
      },
      {
        "stockCode": "RNAVAL",
        "stockName": "Reliance Naval and Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "09-OCT-2009",
        "paid_up_value": 10,
        "isis_number": "INE542F01012",
        "face_value": 10
      },
      {
        "stockCode": "ROHITFERRO",
        "stockName": "Rohit Ferro-Tech Limited",
        "Series": "BE",
        "date_of_listing": "13-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE248H01012",
        "face_value": 10
      },
      {
        "stockCode": "ROHLTD",
        "stockName": "Royal Orchid Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "06-FEB-2006",
        "paid_up_value": 10,
        "isis_number": "INE283H01019",
        "face_value": 10
      },
      {
        "stockCode": "ROLLT",
        "stockName": "Rollatainers Limited",
        "Series": "BE",
        "date_of_listing": "22-NOV-2016",
        "paid_up_value": 1,
        "isis_number": "INE927A01040",
        "face_value": 1
      },
      {
        "stockCode": "ROLTA",
        "stockName": "Rolta India Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE293A01013",
        "face_value": 10
      },
      {
        "stockCode": "ROSSELLIND",
        "stockName": "Rossell India Limited",
        "Series": "EQ",
        "date_of_listing": "25-SEP-2012",
        "paid_up_value": 2,
        "isis_number": "INE847C01020",
        "face_value": 2
      },
      {
        "stockCode": "RPGLIFE",
        "stockName": "RPG Life Sciences Limited",
        "Series": "EQ",
        "date_of_listing": "10-JUN-2008",
        "paid_up_value": 8,
        "isis_number": "INE105J01010",
        "face_value": 8
      },
      {
        "stockCode": "RPOWER",
        "stockName": "Reliance Power Limited",
        "Series": "EQ",
        "date_of_listing": "11-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE614G01033",
        "face_value": 10
      },
      {
        "stockCode": "RPPINFRA",
        "stockName": "R.P.P. Infra Projects Limited",
        "Series": "EQ",
        "date_of_listing": "06-DEC-2010",
        "paid_up_value": 10,
        "isis_number": "INE324L01013",
        "face_value": 10
      },
      {
        "stockCode": "RSSOFTWARE",
        "stockName": "R. S. Software (India) Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAY-1999",
        "paid_up_value": 5,
        "isis_number": "INE165B01029",
        "face_value": 5
      },
      {
        "stockCode": "RSWM",
        "stockName": "RSWM Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE611A01016",
        "face_value": 10
      },
      {
        "stockCode": "RSYSTEMS",
        "stockName": "R Systems International Limited",
        "Series": "EQ",
        "date_of_listing": "26-APR-2006",
        "paid_up_value": 1,
        "isis_number": "INE411H01032",
        "face_value": 1
      },
      {
        "stockCode": "RTNINFRA",
        "stockName": "RattanIndia Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUL-2012",
        "paid_up_value": 2,
        "isis_number": "INE834M01019",
        "face_value": 2
      },
      {
        "stockCode": "RTNPOWER",
        "stockName": "RattanIndia Power Limited",
        "Series": "EQ",
        "date_of_listing": "30-OCT-2009",
        "paid_up_value": 10,
        "isis_number": "INE399K01017",
        "face_value": 10
      },
      {
        "stockCode": "RUBYMILLS",
        "stockName": "The Ruby Mills Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 5,
        "isis_number": "INE301D01026",
        "face_value": 5
      },
      {
        "stockCode": "RUCHINFRA",
        "stockName": "Ruchi Infrastructure Limited",
        "Series": "BE",
        "date_of_listing": "16-OCT-1996",
        "paid_up_value": 1,
        "isis_number": "INE413B01023",
        "face_value": 1
      },
      {
        "stockCode": "RUCHIRA",
        "stockName": "Ruchira Papers Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE803H01014",
        "face_value": 10
      },
      {
        "stockCode": "RUCHISOYA",
        "stockName": "Ruchi Soya Industries Limited",
        "Series": "EQ",
        "date_of_listing": "02-JAN-2003",
        "paid_up_value": 2,
        "isis_number": "INE619A01027",
        "face_value": 2
      },
      {
        "stockCode": "RUPA",
        "stockName": "Rupa & Company Limited",
        "Series": "EQ",
        "date_of_listing": "07-DEC-2011",
        "paid_up_value": 1,
        "isis_number": "INE895B01021",
        "face_value": 1
      },
      {
        "stockCode": "RUSHIL",
        "stockName": "Rushil Decor Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUL-2011",
        "paid_up_value": 10,
        "isis_number": "INE573K01017",
        "face_value": 10
      },
      {
        "stockCode": "RVNL",
        "stockName": "Rail Vikas Nigam Limited",
        "Series": "EQ",
        "date_of_listing": "11-APR-2019",
        "paid_up_value": 10,
        "isis_number": "INE415G01027",
        "face_value": 10
      },
      {
        "stockCode": "SABEVENTS",
        "stockName": "Sab Events & Governance Now Media Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-2016",
        "paid_up_value": 10,
        "isis_number": "INE860T01019",
        "face_value": 10
      },
      {
        "stockCode": "SABTN",
        "stockName": "Sri Adhikari Brothers Television Network Limited",
        "Series": "EQ",
        "date_of_listing": "16-NOV-2007",
        "paid_up_value": 10,
        "isis_number": "INE416A01036",
        "face_value": 10
      },
      {
        "stockCode": "SADBHAV",
        "stockName": "Sadbhav Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAR-2006",
        "paid_up_value": 1,
        "isis_number": "INE226H01026",
        "face_value": 1
      },
      {
        "stockCode": "SADBHIN",
        "stockName": "Sadbhav Infrastructure Project Limited",
        "Series": "EQ",
        "date_of_listing": "16-SEP-2015",
        "paid_up_value": 10,
        "isis_number": "INE764L01010",
        "face_value": 10
      },
      {
        "stockCode": "SAGARDEEP",
        "stockName": "Sagardeep Alloys Limited",
        "Series": "BE",
        "date_of_listing": "25-JAN-2019",
        "paid_up_value": 10,
        "isis_number": "INE976T01013",
        "face_value": 10
      },
      {
        "stockCode": "SAGCEM",
        "stockName": "Sagar Cements Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2007",
        "paid_up_value": 10,
        "isis_number": "INE229C01013",
        "face_value": 10
      },
      {
        "stockCode": "SAIL",
        "stockName": "Steel Authority of India Limited",
        "Series": "EQ",
        "date_of_listing": "06-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE114A01011",
        "face_value": 10
      },
      {
        "stockCode": "SAKAR",
        "stockName": "Sakar Healthcare Limited",
        "Series": "BE",
        "date_of_listing": "11-APR-2019",
        "paid_up_value": 10,
        "isis_number": "INE732S01012",
        "face_value": 10
      },
      {
        "stockCode": "SAKHTISUG",
        "stockName": "Sakthi Sugars Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE623A01011",
        "face_value": 10
      },
      {
        "stockCode": "SAKSOFT",
        "stockName": "Saksoft Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2005",
        "paid_up_value": 10,
        "isis_number": "INE667G01015",
        "face_value": 10
      },
      {
        "stockCode": "SAKUMA",
        "stockName": "Sakuma Exports Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAR-2006",
        "paid_up_value": 1,
        "isis_number": "INE190H01024",
        "face_value": 1
      },
      {
        "stockCode": "SALASAR",
        "stockName": "Salasar Techno Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "25-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE170V01019",
        "face_value": 10
      },
      {
        "stockCode": "SALONA",
        "stockName": "Salona Cotspin Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE498E01010",
        "face_value": 10
      },
      {
        "stockCode": "SALSTEEL",
        "stockName": "S.A.L. Steel Limited",
        "Series": "EQ",
        "date_of_listing": "24-NOV-2004",
        "paid_up_value": 10,
        "isis_number": "INE658G01014",
        "face_value": 10
      },
      {
        "stockCode": "SALZERELEC",
        "stockName": "Salzer Electronics Limited",
        "Series": "EQ",
        "date_of_listing": "02-DEC-2015",
        "paid_up_value": 10,
        "isis_number": "INE457F01013",
        "face_value": 10
      },
      {
        "stockCode": "SAMBHAAV",
        "stockName": "Sambhaav Media Limited",
        "Series": "EQ",
        "date_of_listing": "05-JUN-1996",
        "paid_up_value": 1,
        "isis_number": "INE699B01027",
        "face_value": 1
      },
      {
        "stockCode": "SANCO",
        "stockName": "Sanco Industries Limited",
        "Series": "EQ",
        "date_of_listing": "22-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE782L01012",
        "face_value": 10
      },
      {
        "stockCode": "SANDESH",
        "stockName": "The Sandesh Limited",
        "Series": "EQ",
        "date_of_listing": "26-NOV-2002",
        "paid_up_value": 10,
        "isis_number": "INE583B01015",
        "face_value": 10
      },
      {
        "stockCode": "SANDHAR",
        "stockName": "Sandhar Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "02-APR-2018",
        "paid_up_value": 10,
        "isis_number": "INE278H01035",
        "face_value": 10
      },
      {
        "stockCode": "SANGAMIND",
        "stockName": "Sangam (India) Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUL-1996",
        "paid_up_value": 10,
        "isis_number": "INE495C01010",
        "face_value": 10
      },
      {
        "stockCode": "SANGHIIND",
        "stockName": "Sanghi Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE999B01013",
        "face_value": 10
      },
      {
        "stockCode": "SANGHVIFOR",
        "stockName": "Sanghvi Forging and Engineering Limited",
        "Series": "BE",
        "date_of_listing": "23-MAY-2011",
        "paid_up_value": 10,
        "isis_number": "INE263L01013",
        "face_value": 10
      },
      {
        "stockCode": "SANGHVIMOV",
        "stockName": "Sanghvi Movers Limited",
        "Series": "EQ",
        "date_of_listing": "24-JAN-2007",
        "paid_up_value": 2,
        "isis_number": "INE989A01024",
        "face_value": 2
      },
      {
        "stockCode": "SANOFI",
        "stockName": "Sanofi India Limited",
        "Series": "EQ",
        "date_of_listing": "19-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE058A01010",
        "face_value": 10
      },
      {
        "stockCode": "SANWARIA",
        "stockName": "Sanwaria Consumer Limited",
        "Series": "EQ",
        "date_of_listing": "27-MAR-2006",
        "paid_up_value": 1,
        "isis_number": "INE890C01046",
        "face_value": 1
      },
      {
        "stockCode": "SARDAEN",
        "stockName": "Sarda Energy & Minerals Limited",
        "Series": "EQ",
        "date_of_listing": "03-DEC-2009",
        "paid_up_value": 10,
        "isis_number": "INE385C01013",
        "face_value": 10
      },
      {
        "stockCode": "SAREGAMA",
        "stockName": "Saregama India Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUL-1997",
        "paid_up_value": 10,
        "isis_number": "INE979A01017",
        "face_value": 10
      },
      {
        "stockCode": "SARLAPOLY",
        "stockName": "Sarla Performance Fibers Limited",
        "Series": "EQ",
        "date_of_listing": "19-JAN-2007",
        "paid_up_value": 1,
        "isis_number": "INE453D01025",
        "face_value": 1
      },
      {
        "stockCode": "SASKEN",
        "stockName": "Sasken Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "09-SEP-2005",
        "paid_up_value": 10,
        "isis_number": "INE231F01020",
        "face_value": 10
      },
      {
        "stockCode": "SASTASUNDR",
        "stockName": "Sastasundar Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "05-OCT-2010",
        "paid_up_value": 10,
        "isis_number": "INE019J01013",
        "face_value": 10
      },
      {
        "stockCode": "SATHAISPAT",
        "stockName": "Sathavahana Ispat Limited",
        "Series": "BE",
        "date_of_listing": "27-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE176C01016",
        "face_value": 10
      },
      {
        "stockCode": "SATIN",
        "stockName": "Satin Creditcare Network Limited",
        "Series": "EQ",
        "date_of_listing": "26-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE836B01017",
        "face_value": 10
      },
      {
        "stockCode": "SBILIFE",
        "stockName": "SBI Life Insurance Company Limited",
        "Series": "EQ",
        "date_of_listing": "03-OCT-2017",
        "paid_up_value": 10,
        "isis_number": "INE123W01016",
        "face_value": 10
      },
      {
        "stockCode": "SBIN",
        "stockName": "State Bank of India",
        "Series": "EQ",
        "date_of_listing": "01-MAR-1995",
        "paid_up_value": 1,
        "isis_number": "INE062A01020",
        "face_value": 1
      },
      {
        "stockCode": "SCAPDVR",
        "stockName": "Stampede Capital Limited",
        "Series": "EQ",
        "date_of_listing": "10-OCT-2017",
        "paid_up_value": 1,
        "isis_number": "INE224E01036",
        "face_value": 1
      },
      {
        "stockCode": "SCHAEFFLER",
        "stockName": "Schaeffler India Limited",
        "Series": "EQ",
        "date_of_listing": "29-NOV-2000",
        "paid_up_value": 10,
        "isis_number": "INE513A01014",
        "face_value": 10
      },
      {
        "stockCode": "SCHAND",
        "stockName": "S Chand And Company Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2017",
        "paid_up_value": 5,
        "isis_number": "INE807K01035",
        "face_value": 5
      },
      {
        "stockCode": "SCHNEIDER",
        "stockName": "Schneider Electric Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "20-MAR-2012",
        "paid_up_value": 2,
        "isis_number": "INE839M01018",
        "face_value": 2
      },
      {
        "stockCode": "SCI",
        "stockName": "Shipping Corporation Of India Limited",
        "Series": "EQ",
        "date_of_listing": "13-AUG-1997",
        "paid_up_value": 10,
        "isis_number": "INE109A01011",
        "face_value": 10
      },
      {
        "stockCode": "SDBL",
        "stockName": "Som Distilleries & Breweries Limited",
        "Series": "BZ",
        "date_of_listing": "18-MAR-2014",
        "paid_up_value": 10,
        "isis_number": "INE480C01012",
        "face_value": 10
      },
      {
        "stockCode": "SEAMECLTD",
        "stockName": "Seamec Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-1995",
        "paid_up_value": 10,
        "isis_number": "INE497B01018",
        "face_value": 10
      },
      {
        "stockCode": "SELAN",
        "stockName": "Selan Exploration Technology Limited",
        "Series": "EQ",
        "date_of_listing": "26-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE818A01017",
        "face_value": 10
      },
      {
        "stockCode": "SELMCL",
        "stockName": "SEL Manufacturing Company Limited",
        "Series": "EQ",
        "date_of_listing": "21-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE105I01012",
        "face_value": 10
      },
      {
        "stockCode": "SEPOWER",
        "stockName": "S.E. Power Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUL-2012",
        "paid_up_value": 10,
        "isis_number": "INE735M01018",
        "face_value": 10
      },
      {
        "stockCode": "SEQUENT",
        "stockName": "Sequent Scientific Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAR-2016",
        "paid_up_value": 2,
        "isis_number": "INE807F01027",
        "face_value": 2
      },
      {
        "stockCode": "SESHAPAPER",
        "stockName": "Seshasayee Paper and Boards Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE630A01016",
        "face_value": 10
      },
      {
        "stockCode": "SETCO",
        "stockName": "Setco Automotive Limited",
        "Series": "EQ",
        "date_of_listing": "01-JUL-2016",
        "paid_up_value": 2,
        "isis_number": "INE878E01021",
        "face_value": 2
      },
      {
        "stockCode": "SFL",
        "stockName": "Sheela Foam Limited",
        "Series": "EQ",
        "date_of_listing": "09-DEC-2016",
        "paid_up_value": 5,
        "isis_number": "INE916U01025",
        "face_value": 5
      },
      {
        "stockCode": "SGL",
        "stockName": "STL Global Limited",
        "Series": "BE",
        "date_of_listing": "10-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE353H01010",
        "face_value": 10
      },
      {
        "stockCode": "SHAHALLOYS",
        "stockName": "Shah Alloys Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2005",
        "paid_up_value": 10,
        "isis_number": "INE640C01011",
        "face_value": 10
      },
      {
        "stockCode": "SHAKTIPUMP",
        "stockName": "Shakti Pumps (India) Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2015",
        "paid_up_value": 10,
        "isis_number": "INE908D01010",
        "face_value": 10
      },
      {
        "stockCode": "SHALBY",
        "stockName": "Shalby Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2017",
        "paid_up_value": 10,
        "isis_number": "INE597J01018",
        "face_value": 10
      },
      {
        "stockCode": "SHALPAINTS",
        "stockName": "Shalimar Paints Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAR-2008",
        "paid_up_value": 2,
        "isis_number": "INE849C01026",
        "face_value": 2
      },
      {
        "stockCode": "SHANKARA",
        "stockName": "Shankara Building Products Limited",
        "Series": "EQ",
        "date_of_listing": "05-APR-2017",
        "paid_up_value": 10,
        "isis_number": "INE274V01019",
        "face_value": 10
      },
      {
        "stockCode": "SHANTIGEAR",
        "stockName": "Shanthi Gears Limited",
        "Series": "EQ",
        "date_of_listing": "17-JAN-1996",
        "paid_up_value": 1,
        "isis_number": "INE631A01022",
        "face_value": 1
      },
      {
        "stockCode": "SHARDACROP",
        "stockName": "Sharda Cropchem Limited",
        "Series": "EQ",
        "date_of_listing": "23-SEP-2014",
        "paid_up_value": 10,
        "isis_number": "INE221J01015",
        "face_value": 10
      },
      {
        "stockCode": "SHARDAMOTR",
        "stockName": "Sharda Motor Industries Limited",
        "Series": "EQ",
        "date_of_listing": "03-SEP-2015",
        "paid_up_value": 10,
        "isis_number": "INE597I01010",
        "face_value": 10
      },
      {
        "stockCode": "SHEMAROO",
        "stockName": "Shemaroo Entertainment Limited",
        "Series": "EQ",
        "date_of_listing": "01-OCT-2014",
        "paid_up_value": 10,
        "isis_number": "INE363M01019",
        "face_value": 10
      },
      {
        "stockCode": "SHILPAMED",
        "stockName": "Shilpa Medicare Limited",
        "Series": "EQ",
        "date_of_listing": "03-DEC-2009",
        "paid_up_value": 1,
        "isis_number": "INE790G01031",
        "face_value": 1
      },
      {
        "stockCode": "SHIRPUR-G",
        "stockName": "Shirpur Gold Refinery Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAR-2001",
        "paid_up_value": 10,
        "isis_number": "INE196B01016",
        "face_value": 10
      },
      {
        "stockCode": "SHIVAMAUTO",
        "stockName": "Shivam Autotech Limited",
        "Series": "EQ",
        "date_of_listing": "21-NOV-2006",
        "paid_up_value": 2,
        "isis_number": "INE637H01024",
        "face_value": 2
      },
      {
        "stockCode": "SHIVAMILLS",
        "stockName": "Shiva Mills Limited",
        "Series": "EQ",
        "date_of_listing": "26-FEB-2018",
        "paid_up_value": 10,
        "isis_number": "INE644Y01017",
        "face_value": 10
      },
      {
        "stockCode": "SHIVATEX",
        "stockName": "Shiva Texyarn Limited",
        "Series": "EQ",
        "date_of_listing": "26-DEC-2017",
        "paid_up_value": 10,
        "isis_number": "INE705C01020",
        "face_value": 10
      },
      {
        "stockCode": "SHK",
        "stockName": "S H Kelkar and Company Limited",
        "Series": "EQ",
        "date_of_listing": "16-NOV-2015",
        "paid_up_value": 10,
        "isis_number": "INE500L01026",
        "face_value": 10
      },
      {
        "stockCode": "SHOPERSTOP",
        "stockName": "Shoppers Stop Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAY-2005",
        "paid_up_value": 5,
        "isis_number": "INE498B01024",
        "face_value": 5
      },
      {
        "stockCode": "SHREECEM",
        "stockName": "SHREE CEMENT LIMITED",
        "Series": "EQ",
        "date_of_listing": "26-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE070A01015",
        "face_value": 10
      },
      {
        "stockCode": "SHREEPUSHK",
        "stockName": "Shree Pushkar Chemicals & Fertilisers Limited",
        "Series": "EQ",
        "date_of_listing": "10-SEP-2015",
        "paid_up_value": 10,
        "isis_number": "INE712K01011",
        "face_value": 10
      },
      {
        "stockCode": "SHREERAMA",
        "stockName": "Shree Rama Multi-Tech Limited",
        "Series": "EQ",
        "date_of_listing": "13-MAR-2000",
        "paid_up_value": 5,
        "isis_number": "INE879A01019",
        "face_value": 5
      },
      {
        "stockCode": "SHREYANIND",
        "stockName": "Shreyans Industries Limited",
        "Series": "EQ",
        "date_of_listing": "06-NOV-1996",
        "paid_up_value": 10,
        "isis_number": "INE231C01019",
        "face_value": 10
      },
      {
        "stockCode": "SHREYAS",
        "stockName": "Shreyas Shipping & Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "01-MAR-1995",
        "paid_up_value": 10,
        "isis_number": "INE757B01015",
        "face_value": 10
      },
      {
        "stockCode": "SHRIPISTON",
        "stockName": "Shriram Pistons & Rings Limited",
        "Series": "BE",
        "date_of_listing": "02-JUN-2016",
        "paid_up_value": 10,
        "isis_number": "INE526E01018",
        "face_value": 10
      },
      {
        "stockCode": "SHRIRAMCIT",
        "stockName": "Shriram City Union Finance Limited",
        "Series": "EQ",
        "date_of_listing": "04-APR-2005",
        "paid_up_value": 10,
        "isis_number": "INE722A01011",
        "face_value": 10
      },
      {
        "stockCode": "SHRIRAMEPC",
        "stockName": "Shriram EPC Limited",
        "Series": "EQ",
        "date_of_listing": "20-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE964H01014",
        "face_value": 10
      },
      {
        "stockCode": "SHYAMCENT",
        "stockName": "Shyam Century Ferrous Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2015",
        "paid_up_value": 1,
        "isis_number": "INE979R01011",
        "face_value": 1
      },
      {
        "stockCode": "SHYAMTEL",
        "stockName": "Shyam Telecom Limited",
        "Series": "EQ",
        "date_of_listing": "06-NOV-2006",
        "paid_up_value": 10,
        "isis_number": "INE635A01023",
        "face_value": 10
      },
      {
        "stockCode": "SICAGEN",
        "stockName": "Sicagen India Limited",
        "Series": "EQ",
        "date_of_listing": "21-AUG-2008",
        "paid_up_value": 10,
        "isis_number": "INE176J01011",
        "face_value": 10
      },
      {
        "stockCode": "SICAL",
        "stockName": "Sical Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "28-APR-1999",
        "paid_up_value": 10,
        "isis_number": "INE075B01012",
        "face_value": 10
      },
      {
        "stockCode": "SIEMENS",
        "stockName": "Siemens Limited",
        "Series": "EQ",
        "date_of_listing": "06-SEP-1995",
        "paid_up_value": 2,
        "isis_number": "INE003A01024",
        "face_value": 2
      },
      {
        "stockCode": "SIGIND",
        "stockName": "Signet Industries Limited",
        "Series": "EQ",
        "date_of_listing": "29-AUG-2018",
        "paid_up_value": 10,
        "isis_number": "INE529F01035",
        "face_value": 10
      },
      {
        "stockCode": "SIL",
        "stockName": "Standard Industries Limited",
        "Series": "BE",
        "date_of_listing": "27-JAN-2004",
        "paid_up_value": 5,
        "isis_number": "INE173A01025",
        "face_value": 5
      },
      {
        "stockCode": "SILINV",
        "stockName": "SIL Investments Limited",
        "Series": "EQ",
        "date_of_listing": "22-MAY-1996",
        "paid_up_value": 10,
        "isis_number": "INE923A01015",
        "face_value": 10
      },
      {
        "stockCode": "SIMBHALS",
        "stockName": "Simbhaoli Sugars Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAR-2016",
        "paid_up_value": 10,
        "isis_number": "INE748T01016",
        "face_value": 10
      },
      {
        "stockCode": "SIMPLEXINF",
        "stockName": "Simplex Infrastructures Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2004",
        "paid_up_value": 2,
        "isis_number": "INE059B01024",
        "face_value": 2
      },
      {
        "stockCode": "SINTEX",
        "stockName": "Sintex Industries Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-1998",
        "paid_up_value": 1,
        "isis_number": "INE429C01035",
        "face_value": 1
      },
      {
        "stockCode": "SIS",
        "stockName": "Security and Intelligence Services (India) Limited",
        "Series": "EQ",
        "date_of_listing": "10-AUG-2017",
        "paid_up_value": 10,
        "isis_number": "INE285J01010",
        "face_value": 10
      },
      {
        "stockCode": "SITASHREE",
        "stockName": "Sita Shree Food Products Limited",
        "Series": "BE",
        "date_of_listing": "07-APR-2008",
        "paid_up_value": 10,
        "isis_number": "INE686I01011",
        "face_value": 10
      },
      {
        "stockCode": "SITINET",
        "stockName": "Siti Networks Limited",
        "Series": "EQ",
        "date_of_listing": "10-JAN-2007",
        "paid_up_value": 1,
        "isis_number": "INE965H01011",
        "face_value": 1
      },
      {
        "stockCode": "SIYSIL",
        "stockName": "Siyaram Silk Mills Limited",
        "Series": "EQ",
        "date_of_listing": "29-JAN-2007",
        "paid_up_value": 2,
        "isis_number": "INE076B01028",
        "face_value": 2
      },
      {
        "stockCode": "SJVN",
        "stockName": "SJVN Limited",
        "Series": "EQ",
        "date_of_listing": "20-MAY-2010",
        "paid_up_value": 10,
        "isis_number": "INE002L01015",
        "face_value": 10
      },
      {
        "stockCode": "SKFINDIA",
        "stockName": "SKF India Limited",
        "Series": "EQ",
        "date_of_listing": "27-JAN-1999",
        "paid_up_value": 10,
        "isis_number": "INE640A01023",
        "face_value": 10
      },
      {
        "stockCode": "SKIL",
        "stockName": "SKIL Infrastructure Limited",
        "Series": "EQ",
        "date_of_listing": "09-OCT-1996",
        "paid_up_value": 10,
        "isis_number": "INE429F01012",
        "face_value": 10
      },
      {
        "stockCode": "SKIPPER",
        "stockName": "Skipper Limited",
        "Series": "EQ",
        "date_of_listing": "27-MAY-2015",
        "paid_up_value": 1,
        "isis_number": "INE439E01022",
        "face_value": 1
      },
      {
        "stockCode": "SKMEGGPROD",
        "stockName": "SKM Egg Products Export (India) Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAR-1997",
        "paid_up_value": 10,
        "isis_number": "INE411D01015",
        "face_value": 10
      },
      {
        "stockCode": "SMARTLINK",
        "stockName": "Smartlink Holdings Limited",
        "Series": "BE",
        "date_of_listing": "11-APR-2001",
        "paid_up_value": 2,
        "isis_number": "INE178C01020",
        "face_value": 2
      },
      {
        "stockCode": "SMLISUZU",
        "stockName": "SML Isuzu Limited",
        "Series": "EQ",
        "date_of_listing": "29-AUG-2003",
        "paid_up_value": 10,
        "isis_number": "INE294B01019",
        "face_value": 10
      },
      {
        "stockCode": "SMPL",
        "stockName": "Splendid Metal Products Limited",
        "Series": "BE",
        "date_of_listing": "09-MAR-2010",
        "paid_up_value": 5,
        "isis_number": "INE215G01021",
        "face_value": 5
      },
      {
        "stockCode": "SMSLIFE",
        "stockName": "SMS Lifesciences India Limited",
        "Series": "EQ",
        "date_of_listing": "17-AUG-2017",
        "paid_up_value": 10,
        "isis_number": "INE320X01016",
        "face_value": 10
      },
      {
        "stockCode": "SMSPHARMA",
        "stockName": "SMS Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "28-FEB-2007",
        "paid_up_value": 1,
        "isis_number": "INE812G01025",
        "face_value": 1
      },
      {
        "stockCode": "SNOWMAN",
        "stockName": "Snowman Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "12-SEP-2014",
        "paid_up_value": 10,
        "isis_number": "INE734N01019",
        "face_value": 10
      },
      {
        "stockCode": "SOBHA",
        "stockName": "Sobha Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE671H01015",
        "face_value": 10
      },
      {
        "stockCode": "SOLARA",
        "stockName": "Solara Active Pharma Sciences Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUN-2018",
        "paid_up_value": 10,
        "isis_number": "INE624Z01016",
        "face_value": 10
      },
      {
        "stockCode": "SOLARINDS",
        "stockName": "Solar Industries India Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-2006",
        "paid_up_value": 2,
        "isis_number": "INE343H01029",
        "face_value": 2
      },
      {
        "stockCode": "SOMANYCERA",
        "stockName": "Somany Ceramics Limited",
        "Series": "EQ",
        "date_of_listing": "22-NOV-1995",
        "paid_up_value": 2,
        "isis_number": "INE355A01028",
        "face_value": 2
      },
      {
        "stockCode": "SOMATEX",
        "stockName": "Soma Textiles & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "14-AUG-1996",
        "paid_up_value": 10,
        "isis_number": "INE314C01013",
        "face_value": 10
      },
      {
        "stockCode": "SOMICONVEY",
        "stockName": "Somi Conveyor Beltings Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUL-2016",
        "paid_up_value": 10,
        "isis_number": "INE323J01019",
        "face_value": 10
      },
      {
        "stockCode": "SONATSOFTW",
        "stockName": "Sonata Software Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-1999",
        "paid_up_value": 1,
        "isis_number": "INE269A01021",
        "face_value": 1
      },
      {
        "stockCode": "SORILINFRA",
        "stockName": "SORIL Infra Resources Limited",
        "Series": "EQ",
        "date_of_listing": "06-DEC-2005",
        "paid_up_value": 10,
        "isis_number": "INE034H01016",
        "face_value": 10
      },
      {
        "stockCode": "SOTL",
        "stockName": "Savita Oil Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-1995",
        "paid_up_value": 10,
        "isis_number": "INE035D01012",
        "face_value": 10
      },
      {
        "stockCode": "SOUTHBANK",
        "stockName": "The South Indian Bank Limited",
        "Series": "EQ",
        "date_of_listing": "08-DEC-1998",
        "paid_up_value": 1,
        "isis_number": "INE683A01023",
        "face_value": 1
      },
      {
        "stockCode": "SOUTHWEST",
        "stockName": "South West Pinnacle Exploration Limited",
        "Series": "BE",
        "date_of_listing": "18-APR-2019",
        "paid_up_value": 10,
        "isis_number": "INE980Y01015",
        "face_value": 10
      },
      {
        "stockCode": "SPAL",
        "stockName": "S. P. Apparels Limited",
        "Series": "EQ",
        "date_of_listing": "12-AUG-2016",
        "paid_up_value": 10,
        "isis_number": "INE212I01016",
        "face_value": 10
      },
      {
        "stockCode": "SPARC",
        "stockName": "Sun Pharma Advanced Research Company Limited",
        "Series": "EQ",
        "date_of_listing": "18-JUL-2007",
        "paid_up_value": 1,
        "isis_number": "INE232I01014",
        "face_value": 1
      },
      {
        "stockCode": "SPCENET",
        "stockName": "Spacenet Enterprises India Limited",
        "Series": "EQ",
        "date_of_listing": "10-JAN-2017",
        "paid_up_value": 1,
        "isis_number": "INE970N01027",
        "face_value": 1
      },
      {
        "stockCode": "SPECIALITY",
        "stockName": "Speciality Restaurants Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAY-2012",
        "paid_up_value": 10,
        "isis_number": "INE247M01014",
        "face_value": 10
      },
      {
        "stockCode": "SPENCERS",
        "stockName": "Spencer's Retail Limited",
        "Series": "EQ",
        "date_of_listing": "25-JAN-2019",
        "paid_up_value": 5,
        "isis_number": "INE020801028",
        "face_value": 5
      },
      {
        "stockCode": "SPENTEX",
        "stockName": "Spentex Industries Limited",
        "Series": "BE",
        "date_of_listing": "20-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE376C01020",
        "face_value": 10
      },
      {
        "stockCode": "SPIC",
        "stockName": "Southern Petrochemicals Industries Corporation  Limited",
        "Series": "EQ",
        "date_of_listing": "10-JAN-1996",
        "paid_up_value": 10,
        "isis_number": "INE147A01011",
        "face_value": 10
      },
      {
        "stockCode": "SPICEMOBI",
        "stockName": "Spice Mobility Limited",
        "Series": "BE",
        "date_of_listing": "27-MAY-2008",
        "paid_up_value": 3,
        "isis_number": "INE927C01020",
        "face_value": 3
      },
      {
        "stockCode": "SPLIL",
        "stockName": "SPL Industries Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUL-2005",
        "paid_up_value": 10,
        "isis_number": "INE978G01016",
        "face_value": 10
      },
      {
        "stockCode": "SPMLINFRA",
        "stockName": "SPML Infra Limited",
        "Series": "EQ",
        "date_of_listing": "14-FEB-1996",
        "paid_up_value": 2,
        "isis_number": "INE937A01023",
        "face_value": 2
      },
      {
        "stockCode": "SPTL",
        "stockName": "Sintex Plastics Technology Limited",
        "Series": "EQ",
        "date_of_listing": "08-AUG-2017",
        "paid_up_value": 1,
        "isis_number": "INE501W01021",
        "face_value": 1
      },
      {
        "stockCode": "SPYL",
        "stockName": "Shekhawati Poly-Yarn Limited",
        "Series": "BE",
        "date_of_listing": "12-JAN-2011",
        "paid_up_value": 1,
        "isis_number": "INE268L01020",
        "face_value": 1
      },
      {
        "stockCode": "SREEL",
        "stockName": "Sreeleathers Limited",
        "Series": "EQ",
        "date_of_listing": "01-JAN-2014",
        "paid_up_value": 10,
        "isis_number": "INE099F01013",
        "face_value": 10
      },
      {
        "stockCode": "SREINFRA",
        "stockName": "SREI Infrastructure Finance Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-1995",
        "paid_up_value": 10,
        "isis_number": "INE872A01014",
        "face_value": 10
      },
      {
        "stockCode": "SRF",
        "stockName": "SRF Limited",
        "Series": "EQ",
        "date_of_listing": "18-AUG-2003",
        "paid_up_value": 10,
        "isis_number": "INE647A01010",
        "face_value": 10
      },
      {
        "stockCode": "SRHHYPOLTD",
        "stockName": "Sree Rayalaseema Hi-Strength Hypo Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE917H01012",
        "face_value": 10
      },
      {
        "stockCode": "SRIPIPES",
        "stockName": "Srikalahasthi Pipes Limited",
        "Series": "EQ",
        "date_of_listing": "28-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE943C01027",
        "face_value": 10
      },
      {
        "stockCode": "SRSLTD",
        "stockName": "SRS Limited",
        "Series": "BZ",
        "date_of_listing": "16-SEP-2011",
        "paid_up_value": 10,
        "isis_number": "INE219H01039",
        "face_value": 10
      },
      {
        "stockCode": "SRTRANSFIN",
        "stockName": "Shriram Transport Finance Company Limited",
        "Series": "EQ",
        "date_of_listing": "11-DEC-1996",
        "paid_up_value": 10,
        "isis_number": "INE721A01013",
        "face_value": 10
      },
      {
        "stockCode": "SSWL",
        "stockName": "Steel Strips Wheels Limited",
        "Series": "EQ",
        "date_of_listing": "06-JUN-2005",
        "paid_up_value": 10,
        "isis_number": "INE802C01017",
        "face_value": 10
      },
      {
        "stockCode": "STAMPEDE",
        "stockName": "Stampede Capital Limited",
        "Series": "EQ",
        "date_of_listing": "25-JUL-2016",
        "paid_up_value": 1,
        "isis_number": "INE224E01028",
        "face_value": 1
      },
      {
        "stockCode": "STAR",
        "stockName": "Strides Pharma Science Limited",
        "Series": "EQ",
        "date_of_listing": "02-FEB-2000",
        "paid_up_value": 10,
        "isis_number": "INE939A01011",
        "face_value": 10
      },
      {
        "stockCode": "STARCEMENT",
        "stockName": "Star Cement Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUN-2017",
        "paid_up_value": 1,
        "isis_number": "INE460H01021",
        "face_value": 1
      },
      {
        "stockCode": "STARPAPER",
        "stockName": "Star Paper Mills Limited",
        "Series": "EQ",
        "date_of_listing": "13-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE733A01018",
        "face_value": 10
      },
      {
        "stockCode": "STCINDIA",
        "stockName": "The State Trading Corporation of India Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-2003",
        "paid_up_value": 10,
        "isis_number": "INE655A01013",
        "face_value": 10
      },
      {
        "stockCode": "STEELXIND",
        "stockName": "STEEL EXCHANGE INDIA LIMITED",
        "Series": "EQ",
        "date_of_listing": "20-JUL-2017",
        "paid_up_value": 10,
        "isis_number": "INE503B01013",
        "face_value": 10
      },
      {
        "stockCode": "STEL",
        "stockName": "Stel Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "09-FEB-2011",
        "paid_up_value": 10,
        "isis_number": "INE577L01016",
        "face_value": 10
      },
      {
        "stockCode": "STERTOOLS",
        "stockName": "Sterling Tools Limited",
        "Series": "EQ",
        "date_of_listing": "02-FEB-2006",
        "paid_up_value": 2,
        "isis_number": "INE334A01023",
        "face_value": 2
      },
      {
        "stockCode": "STINDIA",
        "stockName": "STI India Limited",
        "Series": "BE",
        "date_of_listing": "06-DEC-1995",
        "paid_up_value": 10,
        "isis_number": "INE090C01019",
        "face_value": 10
      },
      {
        "stockCode": "STRTECH",
        "stockName": "Sterlite Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "08-DEC-2000",
        "paid_up_value": 2,
        "isis_number": "INE089C01029",
        "face_value": 2
      },
      {
        "stockCode": "SUBCAPCITY",
        "stockName": "International Constructions Limited",
        "Series": "BE",
        "date_of_listing": "10-JUL-1996",
        "paid_up_value": 10,
        "isis_number": "INE845C01016",
        "face_value": 10
      },
      {
        "stockCode": "SUBEX",
        "stockName": "Subex Limited",
        "Series": "EQ",
        "date_of_listing": "05-SEP-2003",
        "paid_up_value": 10,
        "isis_number": "INE754A01014",
        "face_value": 10
      },
      {
        "stockCode": "SUBROS",
        "stockName": "Subros Limited",
        "Series": "EQ",
        "date_of_listing": "13-JUL-2005",
        "paid_up_value": 2,
        "isis_number": "INE287B01021",
        "face_value": 2
      },
      {
        "stockCode": "SUDARSCHEM",
        "stockName": "Sudarshan Chemical Industries Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-1995",
        "paid_up_value": 2,
        "isis_number": "INE659A01023",
        "face_value": 2
      },
      {
        "stockCode": "SUJANAUNI",
        "stockName": "Sujana Universal Industries Limited",
        "Series": "BE",
        "date_of_listing": "19-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE216G01011",
        "face_value": 10
      },
      {
        "stockCode": "SUMEETINDS",
        "stockName": "Sumeet Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-DEC-2010",
        "paid_up_value": 10,
        "isis_number": "INE235C01010",
        "face_value": 10
      },
      {
        "stockCode": "SUMMITSEC",
        "stockName": "Summit Securities Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-2011",
        "paid_up_value": 10,
        "isis_number": "INE519C01017",
        "face_value": 10
      },
      {
        "stockCode": "SUNCLAYLTD",
        "stockName": "Sundaram Clayton Limited",
        "Series": "EQ",
        "date_of_listing": "23-OCT-2012",
        "paid_up_value": 5,
        "isis_number": "INE105A01035",
        "face_value": 5
      },
      {
        "stockCode": "SUNDARAM",
        "stockName": "Sundaram Multi Pap Limited",
        "Series": "EQ",
        "date_of_listing": "02-JUN-2010",
        "paid_up_value": 1,
        "isis_number": "INE108E01023",
        "face_value": 1
      },
      {
        "stockCode": "SUNDARMFIN",
        "stockName": "Sundaram Finance Limited",
        "Series": "EQ",
        "date_of_listing": "07-JAN-1998",
        "paid_up_value": 10,
        "isis_number": "INE660A01013",
        "face_value": 10
      },
      {
        "stockCode": "SUNDARMHLD",
        "stockName": "Sundaram Finance Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAR-2018",
        "paid_up_value": 5,
        "isis_number": "INE202Z01029",
        "face_value": 5
      },
      {
        "stockCode": "SUNDRMBRAK",
        "stockName": "Sundaram Brake Linings Limited",
        "Series": "EQ",
        "date_of_listing": "17-JUL-1996",
        "paid_up_value": 10,
        "isis_number": "INE073D01013",
        "face_value": 10
      },
      {
        "stockCode": "SUNDRMFAST",
        "stockName": "Sundram Fasteners Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUN-2000",
        "paid_up_value": 1,
        "isis_number": "INE387A01021",
        "face_value": 1
      },
      {
        "stockCode": "SUNFLAG",
        "stockName": "Sunflag Iron And Steel Company Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2005",
        "paid_up_value": 10,
        "isis_number": "INE947A01014",
        "face_value": 10
      },
      {
        "stockCode": "SUNILHITEC",
        "stockName": "Sunil Hitech Engineers Limited",
        "Series": "BE",
        "date_of_listing": "02-MAR-2006",
        "paid_up_value": 1,
        "isis_number": "INE305H01028",
        "face_value": 1
      },
      {
        "stockCode": "SUNPHARMA",
        "stockName": "Sun Pharmaceutical Industries Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 1,
        "isis_number": "INE044A01036",
        "face_value": 1
      },
      {
        "stockCode": "SUNTECK",
        "stockName": "Sunteck Realty Limited",
        "Series": "EQ",
        "date_of_listing": "13-NOV-2009",
        "paid_up_value": 1,
        "isis_number": "INE805D01034",
        "face_value": 1
      },
      {
        "stockCode": "SUNTV",
        "stockName": "Sun TV Network Limited",
        "Series": "EQ",
        "date_of_listing": "24-APR-2006",
        "paid_up_value": 5,
        "isis_number": "INE424H01027",
        "face_value": 5
      },
      {
        "stockCode": "SUPERHOUSE",
        "stockName": "Superhouse Limited",
        "Series": "EQ",
        "date_of_listing": "26-SEP-2014",
        "paid_up_value": 10,
        "isis_number": "INE712B01010",
        "face_value": 10
      },
      {
        "stockCode": "SUPERSPIN",
        "stockName": "Super Spinning Mills Limited",
        "Series": "EQ",
        "date_of_listing": "08-JUL-2004",
        "paid_up_value": 1,
        "isis_number": "INE662A01027",
        "face_value": 1
      },
      {
        "stockCode": "SUPPETRO",
        "stockName": "Supreme Petrochem Limited",
        "Series": "EQ",
        "date_of_listing": "13-OCT-1999",
        "paid_up_value": 10,
        "isis_number": "INE663A01017",
        "face_value": 10
      },
      {
        "stockCode": "SUPRAJIT",
        "stockName": "Suprajit Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "18-FEB-2005",
        "paid_up_value": 1,
        "isis_number": "INE399C01030",
        "face_value": 1
      },
      {
        "stockCode": "SUPREMEIND",
        "stockName": "Supreme Industries Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-1995",
        "paid_up_value": 2,
        "isis_number": "INE195A01028",
        "face_value": 2
      },
      {
        "stockCode": "SUPREMEINF",
        "stockName": "Supreme Infrastructure India Limited",
        "Series": "EQ",
        "date_of_listing": "18-OCT-2007",
        "paid_up_value": 10,
        "isis_number": "INE550H01011",
        "face_value": 10
      },
      {
        "stockCode": "SURANASOL",
        "stockName": "Surana Solar Limited",
        "Series": "EQ",
        "date_of_listing": "07-JAN-2011",
        "paid_up_value": 5,
        "isis_number": "INE272L01022",
        "face_value": 5
      },
      {
        "stockCode": "SURANAT&P",
        "stockName": "Surana Telecom and Power Limited",
        "Series": "EQ",
        "date_of_listing": "22-MAY-2002",
        "paid_up_value": 1,
        "isis_number": "INE130B01031",
        "face_value": 1
      },
      {
        "stockCode": "SURYALAXMI",
        "stockName": "Suryalakshmi Cotton Mills Limited",
        "Series": "EQ",
        "date_of_listing": "15-JUN-2005",
        "paid_up_value": 10,
        "isis_number": "INE713B01026",
        "face_value": 10
      },
      {
        "stockCode": "SURYAROSNI",
        "stockName": "Surya Roshni Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE335A01012",
        "face_value": 10
      },
      {
        "stockCode": "SUTLEJTEX",
        "stockName": "Sutlej Textiles and Industries Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2006",
        "paid_up_value": 1,
        "isis_number": "INE645H01027",
        "face_value": 1
      },
      {
        "stockCode": "SUVEN",
        "stockName": "Suven Life Sciences Limited",
        "Series": "EQ",
        "date_of_listing": "23-OCT-2003",
        "paid_up_value": 1,
        "isis_number": "INE495B01038",
        "face_value": 1
      },
      {
        "stockCode": "SUZLON",
        "stockName": "Suzlon Energy Limited",
        "Series": "EQ",
        "date_of_listing": "19-OCT-2005",
        "paid_up_value": 2,
        "isis_number": "INE040H01021",
        "face_value": 2
      },
      {
        "stockCode": "SWANENERGY",
        "stockName": "Swan Energy Limited",
        "Series": "EQ",
        "date_of_listing": "29-MAY-2012",
        "paid_up_value": 1,
        "isis_number": "INE665A01038",
        "face_value": 1
      },
      {
        "stockCode": "SWARAJENG",
        "stockName": "Swaraj Engines Limited",
        "Series": "EQ",
        "date_of_listing": "06-DEC-1995",
        "paid_up_value": 10,
        "isis_number": "INE277A01016",
        "face_value": 10
      },
      {
        "stockCode": "SWELECTES",
        "stockName": "Swelect Energy Systems Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2006",
        "paid_up_value": 10,
        "isis_number": "INE409B01013",
        "face_value": 10
      },
      {
        "stockCode": "SYMPHONY",
        "stockName": "Symphony Limited",
        "Series": "EQ",
        "date_of_listing": "15-JUN-2011",
        "paid_up_value": 2,
        "isis_number": "INE225D01027",
        "face_value": 2
      },
      {
        "stockCode": "SYNCOM",
        "stockName": "Syncom Healthcare Limited",
        "Series": "BE",
        "date_of_listing": "15-FEB-2010",
        "paid_up_value": 10,
        "isis_number": "INE602K01014",
        "face_value": 10
      },
      {
        "stockCode": "SYNDIBANK",
        "stockName": "Syndicate Bank",
        "Series": "EQ",
        "date_of_listing": "22-DEC-1999",
        "paid_up_value": 10,
        "isis_number": "INE667A01018",
        "face_value": 10
      },
      {
        "stockCode": "SYNGENE",
        "stockName": "Syngene International Limited",
        "Series": "EQ",
        "date_of_listing": "11-AUG-2015",
        "paid_up_value": 10,
        "isis_number": "INE398R01022",
        "face_value": 10
      },
      {
        "stockCode": "TAINWALCHM",
        "stockName": "Tainwala Chemical and Plastic (I) Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE123C01018",
        "face_value": 10
      },
      {
        "stockCode": "TAJGVK",
        "stockName": "Taj GVK Hotels & Resorts Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2000",
        "paid_up_value": 2,
        "isis_number": "INE586B01026",
        "face_value": 2
      },
      {
        "stockCode": "TAKE",
        "stockName": "Take Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "27-AUG-2007",
        "paid_up_value": 1,
        "isis_number": "INE142I01023",
        "face_value": 1
      },
      {
        "stockCode": "TALBROAUTO",
        "stockName": "Talbros Automotive Components Limited",
        "Series": "EQ",
        "date_of_listing": "29-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE187D01011",
        "face_value": 10
      },
      {
        "stockCode": "TALWALKARS",
        "stockName": "Talwalkars Better Value Fitness Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-2010",
        "paid_up_value": 10,
        "isis_number": "INE502K01016",
        "face_value": 10
      },
      {
        "stockCode": "TALWGYM",
        "stockName": "Talwalkars Healthclubs Limited",
        "Series": "EQ",
        "date_of_listing": "29-JUN-2018",
        "paid_up_value": 10,
        "isis_number": "INE627Z01019",
        "face_value": 10
      },
      {
        "stockCode": "TANLA",
        "stockName": "Tanla Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "05-JAN-2007",
        "paid_up_value": 1,
        "isis_number": "INE483C01032",
        "face_value": 1
      },
      {
        "stockCode": "TANTIACONS",
        "stockName": "Tantia Constructions Limited",
        "Series": "BE",
        "date_of_listing": "19-FEB-2008",
        "paid_up_value": 10,
        "isis_number": "INE388G01018",
        "face_value": 10
      },
      {
        "stockCode": "TARAJEWELS",
        "stockName": "Tara Jewels Limited",
        "Series": "BE",
        "date_of_listing": "06-DEC-2012",
        "paid_up_value": 10,
        "isis_number": "INE799L01016",
        "face_value": 10
      },
      {
        "stockCode": "TARAPUR",
        "stockName": "Tarapur Transformers Limited",
        "Series": "EQ",
        "date_of_listing": "18-MAY-2010",
        "paid_up_value": 10,
        "isis_number": "INE747K01017",
        "face_value": 10
      },
      {
        "stockCode": "TARMAT",
        "stockName": "Tarmat Limited",
        "Series": "EQ",
        "date_of_listing": "09-JUL-2007",
        "paid_up_value": 10,
        "isis_number": "INE924H01018",
        "face_value": 10
      },
      {
        "stockCode": "TASTYBITE",
        "stockName": "Tasty Bite Eatables Limited",
        "Series": "EQ",
        "date_of_listing": "23-MAR-2017",
        "paid_up_value": 10,
        "isis_number": "INE488B01017",
        "face_value": 10
      },
      {
        "stockCode": "TATACHEM",
        "stockName": "Tata Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "01-APR-1999",
        "paid_up_value": 10,
        "isis_number": "INE092A01019",
        "face_value": 10
      },
      {
        "stockCode": "TATACOFFEE",
        "stockName": "Tata Coffee Limited",
        "Series": "EQ",
        "date_of_listing": "16-FEB-2000",
        "paid_up_value": 1,
        "isis_number": "INE493A01027",
        "face_value": 1
      },
      {
        "stockCode": "TATACOMM",
        "stockName": "Tata Communications Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE151A01013",
        "face_value": 10
      },
      {
        "stockCode": "TATAELXSI",
        "stockName": "Tata Elxsi Limited",
        "Series": "EQ",
        "date_of_listing": "17-SEP-2003",
        "paid_up_value": 10,
        "isis_number": "INE670A01012",
        "face_value": 10
      },
      {
        "stockCode": "TATAGLOBAL",
        "stockName": "Tata Global Beverages Limited",
        "Series": "EQ",
        "date_of_listing": "18-NOV-1998",
        "paid_up_value": 1,
        "isis_number": "INE192A01025",
        "face_value": 1
      },
      {
        "stockCode": "TATAINVEST",
        "stockName": "Tata Investment Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "24-JUN-1998",
        "paid_up_value": 10,
        "isis_number": "INE672A01018",
        "face_value": 10
      },
      {
        "stockCode": "TATAMETALI",
        "stockName": "Tata Metaliks Limited",
        "Series": "EQ",
        "date_of_listing": "27-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE056C01010",
        "face_value": 10
      },
      {
        "stockCode": "TATAMOTORS",
        "stockName": "Tata Motors Limited",
        "Series": "EQ",
        "date_of_listing": "22-JUL-1998",
        "paid_up_value": 2,
        "isis_number": "INE155A01022",
        "face_value": 2
      },
      {
        "stockCode": "TATAMTRDVR",
        "stockName": "Tata Motors Limited",
        "Series": "EQ",
        "date_of_listing": "05-NOV-2008",
        "paid_up_value": 2,
        "isis_number": "IN9155A01020",
        "face_value": 2
      },
      {
        "stockCode": "TATAPOWER",
        "stockName": "Tata Power Company Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-1996",
        "paid_up_value": 1,
        "isis_number": "INE245A01021",
        "face_value": 1
      },
      {
        "stockCode": "TATASPONGE",
        "stockName": "Tata Sponge Iron Limited",
        "Series": "EQ",
        "date_of_listing": "24-FEB-2003",
        "paid_up_value": 10,
        "isis_number": "INE674A01014",
        "face_value": 10
      },
      {
        "stockCode": "TATASTEEL",
        "stockName": "Tata Steel Limited",
        "Series": "EQ",
        "date_of_listing": "18-NOV-1998",
        "paid_up_value": 10,
        "isis_number": "INE081A01012",
        "face_value": 10
      },
      {
        "stockCode": "TATASTLBSL",
        "stockName": "Tata Steel Bsl Limited",
        "Series": "EQ",
        "date_of_listing": "21-NOV-2003",
        "paid_up_value": 2,
        "isis_number": "INE824B01021",
        "face_value": 2
      },
      {
        "stockCode": "TBZ",
        "stockName": "Tribhovandas Bhimji Zaveri Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2012",
        "paid_up_value": 10,
        "isis_number": "INE760L01018",
        "face_value": 10
      },
      {
        "stockCode": "TCI",
        "stockName": "Transport Corporation of India Limited",
        "Series": "EQ",
        "date_of_listing": "21-JAN-2002",
        "paid_up_value": 2,
        "isis_number": "INE688A01022",
        "face_value": 2
      },
      {
        "stockCode": "TCIDEVELOP",
        "stockName": "TCI Developers Limited",
        "Series": "EQ",
        "date_of_listing": "19-APR-2011",
        "paid_up_value": 10,
        "isis_number": "INE662L01016",
        "face_value": 10
      },
      {
        "stockCode": "TCIEXP",
        "stockName": "TCI Express Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2016",
        "paid_up_value": 2,
        "isis_number": "INE586V01016",
        "face_value": 2
      },
      {
        "stockCode": "TCIFINANCE",
        "stockName": "TCI Finance Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-1997",
        "paid_up_value": 10,
        "isis_number": "INE911B01018",
        "face_value": 10
      },
      {
        "stockCode": "TCNSBRANDS",
        "stockName": "TCNS Clothing Co. Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUL-2018",
        "paid_up_value": 2,
        "isis_number": "INE778U01029",
        "face_value": 2
      },
      {
        "stockCode": "TCPLPACK",
        "stockName": "TCPL Packaging Limited",
        "Series": "EQ",
        "date_of_listing": "17-OCT-2017",
        "paid_up_value": 10,
        "isis_number": "INE822C01015",
        "face_value": 10
      },
      {
        "stockCode": "TCS",
        "stockName": "Tata Consultancy Services Limited",
        "Series": "EQ",
        "date_of_listing": "25-AUG-2004",
        "paid_up_value": 1,
        "isis_number": "INE467B01029",
        "face_value": 1
      },
      {
        "stockCode": "TDPOWERSYS",
        "stockName": "TD Power Systems Limited",
        "Series": "EQ",
        "date_of_listing": "08-SEP-2011",
        "paid_up_value": 10,
        "isis_number": "INE419M01019",
        "face_value": 10
      },
      {
        "stockCode": "TEAMLEASE",
        "stockName": "Teamlease Services Limited",
        "Series": "EQ",
        "date_of_listing": "12-FEB-2016",
        "paid_up_value": 10,
        "isis_number": "INE985S01024",
        "face_value": 10
      },
      {
        "stockCode": "TECHIN",
        "stockName": "Techindia Nirman Limited",
        "Series": "EQ",
        "date_of_listing": "08-SEP-2011",
        "paid_up_value": 10,
        "isis_number": "INE778A01021",
        "face_value": 10
      },
      {
        "stockCode": "TECHM",
        "stockName": "Tech Mahindra Limited",
        "Series": "EQ",
        "date_of_listing": "28-AUG-2006",
        "paid_up_value": 5,
        "isis_number": "INE669C01036",
        "face_value": 5
      },
      {
        "stockCode": "TECHNOE",
        "stockName": "Techno Electric & Engineering Company Limited",
        "Series": "EQ",
        "date_of_listing": "04-DEC-2018",
        "paid_up_value": 2,
        "isis_number": "INE285K01026",
        "face_value": 2
      },
      {
        "stockCode": "TECHNOFAB",
        "stockName": "Technofab Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUL-2010",
        "paid_up_value": 10,
        "isis_number": "INE509K01011",
        "face_value": 10
      },
      {
        "stockCode": "TEJASNET",
        "stockName": "Tejas Networks Limited",
        "Series": "EQ",
        "date_of_listing": "27-JUN-2017",
        "paid_up_value": 10,
        "isis_number": "INE010J01012",
        "face_value": 10
      },
      {
        "stockCode": "TERASOFT",
        "stockName": "Tera Software Limited",
        "Series": "EQ",
        "date_of_listing": "29-DEC-2016",
        "paid_up_value": 10,
        "isis_number": "INE482B01010",
        "face_value": 10
      },
      {
        "stockCode": "TEXINFRA",
        "stockName": "Texmaco Infrastructure & Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "09-SEP-2004",
        "paid_up_value": 1,
        "isis_number": "INE435C01024",
        "face_value": 1
      },
      {
        "stockCode": "TEXMOPIPES",
        "stockName": "Texmo Pipes and Products Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE141K01013",
        "face_value": 10
      },
      {
        "stockCode": "TEXRAIL",
        "stockName": "Texmaco Rail & Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "03-MAR-2011",
        "paid_up_value": 1,
        "isis_number": "INE621L01012",
        "face_value": 1
      },
      {
        "stockCode": "TFCILTD",
        "stockName": "Tourism Finance Corporation of India Limited",
        "Series": "EQ",
        "date_of_listing": "26-JUL-2000",
        "paid_up_value": 10,
        "isis_number": "INE305A01015",
        "face_value": 10
      },
      {
        "stockCode": "TFL",
        "stockName": "Transwarranty Finance Limited",
        "Series": "EQ",
        "date_of_listing": "26-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE804H01012",
        "face_value": 10
      },
      {
        "stockCode": "TGBHOTELS",
        "stockName": "TGB Banquets And Hotels Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE797H01018",
        "face_value": 10
      },
      {
        "stockCode": "THANGAMAYL",
        "stockName": "Thangamayil Jewellery Limited",
        "Series": "EQ",
        "date_of_listing": "19-FEB-2010",
        "paid_up_value": 10,
        "isis_number": "INE085J01014",
        "face_value": 10
      },
      {
        "stockCode": "THEINVEST",
        "stockName": "The Investment Trust Of India Limited",
        "Series": "EQ",
        "date_of_listing": "02-AUG-2017",
        "paid_up_value": 10,
        "isis_number": "INE924D01017",
        "face_value": 10
      },
      {
        "stockCode": "THEMISMED",
        "stockName": "Themis Medicare Limited",
        "Series": "EQ",
        "date_of_listing": "02-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE083B01016",
        "face_value": 10
      },
      {
        "stockCode": "THERMAX",
        "stockName": "Thermax Limited",
        "Series": "EQ",
        "date_of_listing": "30-AUG-1995",
        "paid_up_value": 2,
        "isis_number": "INE152A01029",
        "face_value": 2
      },
      {
        "stockCode": "THIRUSUGAR",
        "stockName": "Thiru Arooran Sugars Limited",
        "Series": "BZ",
        "date_of_listing": "02-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE409A01015",
        "face_value": 10
      },
      {
        "stockCode": "THOMASCOOK",
        "stockName": "Thomas Cook  (India)  Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUN-2000",
        "paid_up_value": 1,
        "isis_number": "INE332A01027",
        "face_value": 1
      },
      {
        "stockCode": "THOMASCOTT",
        "stockName": "Thomas Scott (India) Limited",
        "Series": "BE",
        "date_of_listing": "30-JAN-2012",
        "paid_up_value": 10,
        "isis_number": "INE480M01011",
        "face_value": 10
      },
      {
        "stockCode": "THYROCARE",
        "stockName": "Thyrocare Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2016",
        "paid_up_value": 10,
        "isis_number": "INE594H01019",
        "face_value": 10
      },
      {
        "stockCode": "TI",
        "stockName": "Tilaknagar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "16-JUL-2010",
        "paid_up_value": 10,
        "isis_number": "INE133E01013",
        "face_value": 10
      },
      {
        "stockCode": "TIDEWATER",
        "stockName": "Tide Water Oil Company (India) Limited",
        "Series": "EQ",
        "date_of_listing": "16-JAN-2007",
        "paid_up_value": 5,
        "isis_number": "INE484C01022",
        "face_value": 5
      },
      {
        "stockCode": "TIIL",
        "stockName": "Technocraft Industries (India) Limited",
        "Series": "EQ",
        "date_of_listing": "12-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE545H01011",
        "face_value": 10
      },
      {
        "stockCode": "TIINDIA",
        "stockName": "Tube Investments of India Limited",
        "Series": "EQ",
        "date_of_listing": "02-NOV-2017",
        "paid_up_value": 1,
        "isis_number": "INE974X01010",
        "face_value": 1
      },
      {
        "stockCode": "TIJARIA",
        "stockName": "Tijaria Polypipes Limited",
        "Series": "EQ",
        "date_of_listing": "14-OCT-2011",
        "paid_up_value": 10,
        "isis_number": "INE440L01017",
        "face_value": 10
      },
      {
        "stockCode": "TIL",
        "stockName": "TIL Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE806C01018",
        "face_value": 10
      },
      {
        "stockCode": "TIMESGTY",
        "stockName": "Times Guaranty Limited",
        "Series": "EQ",
        "date_of_listing": "11-JUN-2002",
        "paid_up_value": 10,
        "isis_number": "INE289C01025",
        "face_value": 10
      },
      {
        "stockCode": "TIMETECHNO",
        "stockName": "Time Technoplast Limited",
        "Series": "EQ",
        "date_of_listing": "13-JUN-2007",
        "paid_up_value": 1,
        "isis_number": "INE508G01029",
        "face_value": 1
      },
      {
        "stockCode": "TIMKEN",
        "stockName": "Timken India Limited",
        "Series": "EQ",
        "date_of_listing": "06-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE325A01013",
        "face_value": 10
      },
      {
        "stockCode": "TINPLATE",
        "stockName": "The Tinplate Company of India Limited",
        "Series": "EQ",
        "date_of_listing": "27-JAN-2006",
        "paid_up_value": 10,
        "isis_number": "INE422C01014",
        "face_value": 10
      },
      {
        "stockCode": "TIPSINDLTD",
        "stockName": "TIPS Industries Limited",
        "Series": "EQ",
        "date_of_listing": "10-NOV-2000",
        "paid_up_value": 10,
        "isis_number": "INE716B01011",
        "face_value": 10
      },
      {
        "stockCode": "TIRUMALCHM",
        "stockName": "Thirumalai Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAY-2003",
        "paid_up_value": 1,
        "isis_number": "INE338A01024",
        "face_value": 1
      },
      {
        "stockCode": "TITAN",
        "stockName": "Titan Company Limited",
        "Series": "EQ",
        "date_of_listing": "24-SEP-2004",
        "paid_up_value": 1,
        "isis_number": "INE280A01028",
        "face_value": 1
      },
      {
        "stockCode": "TMRVL",
        "stockName": "The Mandhana Retail Ventures Limited",
        "Series": "EQ",
        "date_of_listing": "14-DEC-2016",
        "paid_up_value": 10,
        "isis_number": "INE759V01019",
        "face_value": 10
      },
      {
        "stockCode": "TNPETRO",
        "stockName": "Tamilnadu PetroProducts Limited",
        "Series": "EQ",
        "date_of_listing": "27-OCT-1999",
        "paid_up_value": 10,
        "isis_number": "INE148A01019",
        "face_value": 10
      },
      {
        "stockCode": "TNPL",
        "stockName": "Tamil Nadu Newsprint & Papers Limited",
        "Series": "EQ",
        "date_of_listing": "14-FEB-1996",
        "paid_up_value": 10,
        "isis_number": "INE107A01015",
        "face_value": 10
      },
      {
        "stockCode": "TNTELE",
        "stockName": "Tamilnadu Telecommunication Limited",
        "Series": "BE",
        "date_of_listing": "04-FEB-2003",
        "paid_up_value": 10,
        "isis_number": "INE141D01018",
        "face_value": 10
      },
      {
        "stockCode": "TOKYOPLAST",
        "stockName": "Tokyo Plast International Limited",
        "Series": "EQ",
        "date_of_listing": "11-OCT-1995",
        "paid_up_value": 10,
        "isis_number": "INE932C01012",
        "face_value": 10
      },
      {
        "stockCode": "TORNTPHARM",
        "stockName": "Torrent Pharmaceuticals Limited",
        "Series": "EQ",
        "date_of_listing": "25-NOV-2002",
        "paid_up_value": 5,
        "isis_number": "INE685A01028",
        "face_value": 5
      },
      {
        "stockCode": "TORNTPOWER",
        "stockName": "Torrent Power Limited",
        "Series": "EQ",
        "date_of_listing": "28-NOV-2006",
        "paid_up_value": 10,
        "isis_number": "INE813H01021",
        "face_value": 10
      },
      {
        "stockCode": "TPLPLASTEH",
        "stockName": "TPL Plastech Limited",
        "Series": "EQ",
        "date_of_listing": "20-MAY-2015",
        "paid_up_value": 10,
        "isis_number": "INE413G01014",
        "face_value": 10
      },
      {
        "stockCode": "TREEHOUSE",
        "stockName": "Tree House Education & Accessories Limited",
        "Series": "EQ",
        "date_of_listing": "26-AUG-2011",
        "paid_up_value": 10,
        "isis_number": "INE040M01013",
        "face_value": 10
      },
      {
        "stockCode": "TREJHARA",
        "stockName": "TREJHARA SOLUTIONS LIMITED",
        "Series": "EQ",
        "date_of_listing": "28-DEC-2018",
        "paid_up_value": 10,
        "isis_number": "INE00CA01015",
        "face_value": 10
      },
      {
        "stockCode": "TRENT",
        "stockName": "Trent Limited",
        "Series": "EQ",
        "date_of_listing": "07-JUN-2004",
        "paid_up_value": 1,
        "isis_number": "INE849A01020",
        "face_value": 1
      },
      {
        "stockCode": "TRF",
        "stockName": "TRF Limited",
        "Series": "EQ",
        "date_of_listing": "26-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE391D01019",
        "face_value": 10
      },
      {
        "stockCode": "TRIDENT",
        "stockName": "Trident Limited",
        "Series": "EQ",
        "date_of_listing": "21-FEB-2001",
        "paid_up_value": 10,
        "isis_number": "INE064C01014",
        "face_value": 10
      },
      {
        "stockCode": "TRIGYN",
        "stockName": "Trigyn Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "09-APR-1998",
        "paid_up_value": 10,
        "isis_number": "INE948A01012",
        "face_value": 10
      },
      {
        "stockCode": "TRIL",
        "stockName": "Transformers And Rectifiers (India) Limited",
        "Series": "EQ",
        "date_of_listing": "28-DEC-2007",
        "paid_up_value": 1,
        "isis_number": "INE763I01026",
        "face_value": 1
      },
      {
        "stockCode": "TRITURBINE",
        "stockName": "Triveni Turbine Limited",
        "Series": "EQ",
        "date_of_listing": "28-OCT-2011",
        "paid_up_value": 1,
        "isis_number": "INE152M01016",
        "face_value": 1
      },
      {
        "stockCode": "TRIVENI",
        "stockName": "Triveni Engineering & Industries Limited",
        "Series": "EQ",
        "date_of_listing": "13-DEC-2005",
        "paid_up_value": 1,
        "isis_number": "INE256C01024",
        "face_value": 1
      },
      {
        "stockCode": "TTKHLTCARE",
        "stockName": "TTK Healthcare Limited",
        "Series": "EQ",
        "date_of_listing": "02-DEC-2015",
        "paid_up_value": 10,
        "isis_number": "INE910C01018",
        "face_value": 10
      },
      {
        "stockCode": "TTKPRESTIG",
        "stockName": "TTK Prestige Limited",
        "Series": "EQ",
        "date_of_listing": "22-DEC-1999",
        "paid_up_value": 10,
        "isis_number": "INE690A01010",
        "face_value": 10
      },
      {
        "stockCode": "TTL",
        "stockName": "T T Limited",
        "Series": "EQ",
        "date_of_listing": "22-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE592B01016",
        "face_value": 10
      },
      {
        "stockCode": "TTML",
        "stockName": "Tata Teleservices (Maharashtra) Limited",
        "Series": "BE",
        "date_of_listing": "20-OCT-2000",
        "paid_up_value": 10,
        "isis_number": "INE517B01013",
        "face_value": 10
      },
      {
        "stockCode": "TV18BRDCST",
        "stockName": "TV18 Broadcast Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-2007",
        "paid_up_value": 2,
        "isis_number": "INE886H01027",
        "face_value": 2
      },
      {
        "stockCode": "TVSELECT",
        "stockName": "TVS Electronics Limited",
        "Series": "EQ",
        "date_of_listing": "26-DEC-2003",
        "paid_up_value": 10,
        "isis_number": "INE236G01019",
        "face_value": 10
      },
      {
        "stockCode": "TVSMOTOR",
        "stockName": "TVS Motor Company Limited",
        "Series": "EQ",
        "date_of_listing": "02-AUG-2000",
        "paid_up_value": 1,
        "isis_number": "INE494B01023",
        "face_value": 1
      },
      {
        "stockCode": "TVSSRICHAK",
        "stockName": "TVS Srichakra Limited",
        "Series": "EQ",
        "date_of_listing": "13-FEB-2007",
        "paid_up_value": 10,
        "isis_number": "INE421C01016",
        "face_value": 10
      },
      {
        "stockCode": "TVTODAY",
        "stockName": "TV Today Network Limited",
        "Series": "EQ",
        "date_of_listing": "16-JAN-2004",
        "paid_up_value": 5,
        "isis_number": "INE038F01029",
        "face_value": 5
      },
      {
        "stockCode": "TVVISION",
        "stockName": "TV Vision Limited",
        "Series": "EQ",
        "date_of_listing": "15-SEP-2016",
        "paid_up_value": 10,
        "isis_number": "INE871L01013",
        "face_value": 10
      },
      {
        "stockCode": "TWL",
        "stockName": "Titagarh Wagons Limited",
        "Series": "EQ",
        "date_of_listing": "21-APR-2008",
        "paid_up_value": 2,
        "isis_number": "INE615H01020",
        "face_value": 2
      },
      {
        "stockCode": "UBL",
        "stockName": "United Breweries Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2008",
        "paid_up_value": 1,
        "isis_number": "INE686F01025",
        "face_value": 1
      },
      {
        "stockCode": "UCALFUEL",
        "stockName": "Ucal Fuel Systems Limited",
        "Series": "EQ",
        "date_of_listing": "13-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE139B01016",
        "face_value": 10
      },
      {
        "stockCode": "UCOBANK",
        "stockName": "UCO Bank",
        "Series": "EQ",
        "date_of_listing": "09-OCT-2003",
        "paid_up_value": 10,
        "isis_number": "INE691A01018",
        "face_value": 10
      },
      {
        "stockCode": "UFLEX",
        "stockName": "UFLEX Limited",
        "Series": "EQ",
        "date_of_listing": "23-AUG-1995",
        "paid_up_value": 10,
        "isis_number": "INE516A01017",
        "face_value": 10
      },
      {
        "stockCode": "UFO",
        "stockName": "UFO Moviez India Limited",
        "Series": "EQ",
        "date_of_listing": "14-MAY-2015",
        "paid_up_value": 10,
        "isis_number": "INE527H01019",
        "face_value": 10
      },
      {
        "stockCode": "UGARSUGAR",
        "stockName": "The Ugar Sugar Works Limited",
        "Series": "EQ",
        "date_of_listing": "23-AUG-2010",
        "paid_up_value": 1,
        "isis_number": "INE071E01023",
        "face_value": 1
      },
      {
        "stockCode": "UJAAS",
        "stockName": "Ujaas Energy Limited",
        "Series": "EQ",
        "date_of_listing": "20-OCT-2011",
        "paid_up_value": 1,
        "isis_number": "INE899L01022",
        "face_value": 1
      },
      {
        "stockCode": "UJJIVAN",
        "stockName": "Ujjivan Financial Services Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-2016",
        "paid_up_value": 10,
        "isis_number": "INE334L01012",
        "face_value": 10
      },
      {
        "stockCode": "ULTRACEMCO",
        "stockName": "UltraTech Cement Limited",
        "Series": "EQ",
        "date_of_listing": "24-AUG-2004",
        "paid_up_value": 10,
        "isis_number": "INE481G01011",
        "face_value": 10
      },
      {
        "stockCode": "UMANGDAIRY",
        "stockName": "Umang Dairies Limited",
        "Series": "EQ",
        "date_of_listing": "02-DEC-2015",
        "paid_up_value": 5,
        "isis_number": "INE864B01027",
        "face_value": 5
      },
      {
        "stockCode": "UMESLTD",
        "stockName": "Usha Martin Education & Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "12-JUL-2010",
        "paid_up_value": 1,
        "isis_number": "INE240C01028",
        "face_value": 1
      },
      {
        "stockCode": "UNICHEMLAB",
        "stockName": "Unichem Laboratories Limited",
        "Series": "EQ",
        "date_of_listing": "07-FEB-2001",
        "paid_up_value": 2,
        "isis_number": "INE351A01035",
        "face_value": 2
      },
      {
        "stockCode": "UNIENTER",
        "stockName": "Uniphos Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "23-JAN-2004",
        "paid_up_value": 2,
        "isis_number": "INE037A01022",
        "face_value": 2
      },
      {
        "stockCode": "UNIONBANK",
        "stockName": "Union Bank of India",
        "Series": "EQ",
        "date_of_listing": "24-SEP-2002",
        "paid_up_value": 10,
        "isis_number": "INE692A01016",
        "face_value": 10
      },
      {
        "stockCode": "UNIPLY",
        "stockName": "Uniply Industries Limited",
        "Series": "BE",
        "date_of_listing": "08-MAR-2007",
        "paid_up_value": 2,
        "isis_number": "INE950G01023",
        "face_value": 2
      },
      {
        "stockCode": "UNITECH",
        "stockName": "Unitech Limited",
        "Series": "EQ",
        "date_of_listing": "08-SEP-1999",
        "paid_up_value": 2,
        "isis_number": "INE694A01020",
        "face_value": 2
      },
      {
        "stockCode": "UNITEDBNK",
        "stockName": "United Bank of India",
        "Series": "EQ",
        "date_of_listing": "18-MAR-2010",
        "paid_up_value": 10,
        "isis_number": "INE695A01019",
        "face_value": 10
      },
      {
        "stockCode": "UNITEDTEA",
        "stockName": "The United Nilgiri Tea Estates Company Limited",
        "Series": "EQ",
        "date_of_listing": "28-JAN-2015",
        "paid_up_value": 10,
        "isis_number": "INE458F01011",
        "face_value": 10
      },
      {
        "stockCode": "UNITY",
        "stockName": "Unity Infraprojects Limited",
        "Series": "BZ",
        "date_of_listing": "12-JUN-2006",
        "paid_up_value": 2,
        "isis_number": "INE466H01028",
        "face_value": 2
      },
      {
        "stockCode": "UNIVCABLES",
        "stockName": "Universal Cables Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE279A01012",
        "face_value": 10
      },
      {
        "stockCode": "UPL",
        "stockName": "UPL Limited",
        "Series": "EQ",
        "date_of_listing": "23-JAN-2004",
        "paid_up_value": 2,
        "isis_number": "INE628A01036",
        "face_value": 2
      },
      {
        "stockCode": "URJA",
        "stockName": "Urja Global Limited",
        "Series": "EQ",
        "date_of_listing": "28-MAR-2017",
        "paid_up_value": 1,
        "isis_number": "INE550C01020",
        "face_value": 1
      },
      {
        "stockCode": "USHAMART",
        "stockName": "Usha Martin Limited",
        "Series": "EQ",
        "date_of_listing": "11-OCT-2000",
        "paid_up_value": 1,
        "isis_number": "INE228A01035",
        "face_value": 1
      },
      {
        "stockCode": "UTTAMSTL",
        "stockName": "Uttam Galva Steels Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE699A01011",
        "face_value": 10
      },
      {
        "stockCode": "UTTAMSUGAR",
        "stockName": "Uttam Sugar Mills Limited",
        "Series": "EQ",
        "date_of_listing": "10-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE786F01031",
        "face_value": 10
      },
      {
        "stockCode": "UVSL",
        "stockName": "Uttam Value Steels Limited",
        "Series": "BE",
        "date_of_listing": "24-JUN-2016",
        "paid_up_value": 1,
        "isis_number": "INE292A01023",
        "face_value": 1
      },
      {
        "stockCode": "V2RETAIL",
        "stockName": "V2 Retail Limited",
        "Series": "EQ",
        "date_of_listing": "04-JUL-2007",
        "paid_up_value": 10,
        "isis_number": "INE945H01013",
        "face_value": 10
      },
      {
        "stockCode": "VADILALIND",
        "stockName": "Vadilal Industries Limited",
        "Series": "EQ",
        "date_of_listing": "15-JUN-2011",
        "paid_up_value": 10,
        "isis_number": "INE694D01016",
        "face_value": 10
      },
      {
        "stockCode": "VAIBHAVGBL",
        "stockName": "Vaibhav Global Limited",
        "Series": "EQ",
        "date_of_listing": "05-APR-2004",
        "paid_up_value": 10,
        "isis_number": "INE884A01019",
        "face_value": 10
      },
      {
        "stockCode": "VAKRANGEE",
        "stockName": "Vakrangee Limited",
        "Series": "EQ",
        "date_of_listing": "03-APR-2006",
        "paid_up_value": 1,
        "isis_number": "INE051B01021",
        "face_value": 1
      },
      {
        "stockCode": "VARDHACRLC",
        "stockName": "Vardhman Acrylics Limited",
        "Series": "EQ",
        "date_of_listing": "30-SEP-2003",
        "paid_up_value": 10,
        "isis_number": "INE116G01013",
        "face_value": 10
      },
      {
        "stockCode": "VARDMNPOLY",
        "stockName": "Vardhman Polytex Limited",
        "Series": "BE",
        "date_of_listing": "12-MAY-2003",
        "paid_up_value": 10,
        "isis_number": "INE835A01011",
        "face_value": 10
      },
      {
        "stockCode": "VARROC",
        "stockName": "Varroc Engineering Limited",
        "Series": "EQ",
        "date_of_listing": "06-JUL-2018",
        "paid_up_value": 1,
        "isis_number": "INE665L01035",
        "face_value": 1
      },
      {
        "stockCode": "VASCONEQ",
        "stockName": "Vascon Engineers Limited",
        "Series": "EQ",
        "date_of_listing": "15-FEB-2010",
        "paid_up_value": 10,
        "isis_number": "INE893I01013",
        "face_value": 10
      },
      {
        "stockCode": "VASWANI",
        "stockName": "Vaswani Industries Limited",
        "Series": "EQ",
        "date_of_listing": "20-SEP-2011",
        "paid_up_value": 10,
        "isis_number": "INE590L01019",
        "face_value": 10
      },
      {
        "stockCode": "VBL",
        "stockName": "Varun Beverages Limited",
        "Series": "EQ",
        "date_of_listing": "08-NOV-2016",
        "paid_up_value": 10,
        "isis_number": "INE200M01013",
        "face_value": 10
      },
      {
        "stockCode": "VEDL",
        "stockName": "Vedanta Limited",
        "Series": "EQ",
        "date_of_listing": "13-MAY-1998",
        "paid_up_value": 1,
        "isis_number": "INE205A01025",
        "face_value": 1
      },
      {
        "stockCode": "VENKEYS",
        "stockName": "Venky's (India) Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2003",
        "paid_up_value": 10,
        "isis_number": "INE398A01010",
        "face_value": 10
      },
      {
        "stockCode": "VENUSREM",
        "stockName": "Venus Remedies Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE411B01019",
        "face_value": 10
      },
      {
        "stockCode": "VESUVIUS",
        "stockName": "Vesuvius India Limited",
        "Series": "EQ",
        "date_of_listing": "04-OCT-2002",
        "paid_up_value": 10,
        "isis_number": "INE386A01015",
        "face_value": 10
      },
      {
        "stockCode": "VETO",
        "stockName": "Veto Switchgears And Cables Limited",
        "Series": "EQ",
        "date_of_listing": "29-APR-2015",
        "paid_up_value": 10,
        "isis_number": "INE918N01018",
        "face_value": 10
      },
      {
        "stockCode": "VGUARD",
        "stockName": "V-Guard Industries Limited",
        "Series": "EQ",
        "date_of_listing": "13-MAR-2008",
        "paid_up_value": 1,
        "isis_number": "INE951I01027",
        "face_value": 1
      },
      {
        "stockCode": "VHL",
        "stockName": "Vardhman Holdings Limited",
        "Series": "EQ",
        "date_of_listing": "30-JUN-2005",
        "paid_up_value": 10,
        "isis_number": "INE701A01023",
        "face_value": 10
      },
      {
        "stockCode": "VICEROY",
        "stockName": "Viceroy Hotels Limited",
        "Series": "BE",
        "date_of_listing": "21-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE048C01017",
        "face_value": 10
      },
      {
        "stockCode": "VIDEOIND",
        "stockName": "Videocon Industries Limited",
        "Series": "BZ",
        "date_of_listing": "31-JUL-1996",
        "paid_up_value": 10,
        "isis_number": "INE703A01011",
        "face_value": 10
      },
      {
        "stockCode": "VIDHIING",
        "stockName": "Vidhi Specialty Food Ingredients Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2016",
        "paid_up_value": 1,
        "isis_number": "INE632C01026",
        "face_value": 1
      },
      {
        "stockCode": "VIJIFIN",
        "stockName": "Viji Finance Limited",
        "Series": "EQ",
        "date_of_listing": "11-JUL-2016",
        "paid_up_value": 1,
        "isis_number": "INE159N01027",
        "face_value": 1
      },
      {
        "stockCode": "VIJSHAN",
        "stockName": "Vijay Shanthi Builders Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-2008",
        "paid_up_value": 10,
        "isis_number": "INE806F01011",
        "face_value": 10
      },
      {
        "stockCode": "VIKASECO",
        "stockName": "Vikas EcoTech Limited",
        "Series": "EQ",
        "date_of_listing": "12-DEC-2011",
        "paid_up_value": 1,
        "isis_number": "INE806A01020",
        "face_value": 1
      },
      {
        "stockCode": "VIKASMCORP",
        "stockName": "Vikas Multicorp Limited",
        "Series": "EQ",
        "date_of_listing": "08-MAY-2019",
        "paid_up_value": 1,
        "isis_number": "INE161L01027",
        "face_value": 1
      },
      {
        "stockCode": "VIMALOIL",
        "stockName": "Vimal Oil & Foods Limited",
        "Series": "BE",
        "date_of_listing": "21-MAY-2013",
        "paid_up_value": 10,
        "isis_number": "INE067D01015",
        "face_value": 10
      },
      {
        "stockCode": "VIMTALABS",
        "stockName": "Vimta Labs Limited",
        "Series": "EQ",
        "date_of_listing": "15-DEC-2005",
        "paid_up_value": 2,
        "isis_number": "INE579C01029",
        "face_value": 2
      },
      {
        "stockCode": "VINATIORGA",
        "stockName": "Vinati Organics Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUL-2009",
        "paid_up_value": 2,
        "isis_number": "INE410B01029",
        "face_value": 2
      },
      {
        "stockCode": "VINDHYATEL",
        "stockName": "Vindhya Telelinks Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE707A01012",
        "face_value": 10
      },
      {
        "stockCode": "VINYLINDIA",
        "stockName": "Vinyl Chemicals (India) Limited",
        "Series": "EQ",
        "date_of_listing": "21-JUL-2008",
        "paid_up_value": 1,
        "isis_number": "INE250B01029",
        "face_value": 1
      },
      {
        "stockCode": "VIPCLOTHNG",
        "stockName": "VIP Clothing Limited",
        "Series": "EQ",
        "date_of_listing": "06-AUG-2007",
        "paid_up_value": 2,
        "isis_number": "INE450G01024",
        "face_value": 2
      },
      {
        "stockCode": "VIPIND",
        "stockName": "VIP Industries Limited",
        "Series": "EQ",
        "date_of_listing": "02-MAR-2005",
        "paid_up_value": 2,
        "isis_number": "INE054A01027",
        "face_value": 2
      },
      {
        "stockCode": "VIPULLTD",
        "stockName": "Vipul Limited",
        "Series": "EQ",
        "date_of_listing": "23-APR-2015",
        "paid_up_value": 1,
        "isis_number": "INE946H01037",
        "face_value": 1
      },
      {
        "stockCode": "VISAKAIND",
        "stockName": "Visaka Industries Limited",
        "Series": "EQ",
        "date_of_listing": "28-AUG-1996",
        "paid_up_value": 10,
        "isis_number": "INE392A01013",
        "face_value": 10
      },
      {
        "stockCode": "VISASTEEL",
        "stockName": "Visa Steel Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAR-2006",
        "paid_up_value": 10,
        "isis_number": "INE286H01012",
        "face_value": 10
      },
      {
        "stockCode": "VISESHINFO",
        "stockName": "Visesh Infotecnics Limited",
        "Series": "EQ",
        "date_of_listing": "14-JAN-2000",
        "paid_up_value": 1,
        "isis_number": "INE861A01058",
        "face_value": 1
      },
      {
        "stockCode": "VISHNU",
        "stockName": "Vishnu Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "05-MAR-2015",
        "paid_up_value": 10,
        "isis_number": "INE270I01014",
        "face_value": 10
      },
      {
        "stockCode": "VIVIDHA",
        "stockName": "Visagar Polytex Limited",
        "Series": "EQ",
        "date_of_listing": "21-MAY-2013",
        "paid_up_value": 1,
        "isis_number": "INE370E01029",
        "face_value": 1
      },
      {
        "stockCode": "VIVIMEDLAB",
        "stockName": "Vivimed Labs Limited",
        "Series": "EQ",
        "date_of_listing": "17-AUG-2005",
        "paid_up_value": 2,
        "isis_number": "INE526G01021",
        "face_value": 2
      },
      {
        "stockCode": "VLSFINANCE",
        "stockName": "VLS Finance Limited",
        "Series": "EQ",
        "date_of_listing": "25-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE709A01018",
        "face_value": 10
      },
      {
        "stockCode": "VMART",
        "stockName": "V-Mart Retail Limited",
        "Series": "EQ",
        "date_of_listing": "20-FEB-2013",
        "paid_up_value": 10,
        "isis_number": "INE665J01013",
        "face_value": 10
      },
      {
        "stockCode": "VOLTAMP",
        "stockName": "Voltamp Transformers Limited",
        "Series": "EQ",
        "date_of_listing": "20-SEP-2006",
        "paid_up_value": 10,
        "isis_number": "INE540H01012",
        "face_value": 10
      },
      {
        "stockCode": "VOLTAS",
        "stockName": "Voltas Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-1995",
        "paid_up_value": 1,
        "isis_number": "INE226A01021",
        "face_value": 1
      },
      {
        "stockCode": "VRLLOG",
        "stockName": "VRL Logistics Limited",
        "Series": "EQ",
        "date_of_listing": "30-APR-2015",
        "paid_up_value": 10,
        "isis_number": "INE366I01010",
        "face_value": 10
      },
      {
        "stockCode": "VSSL",
        "stockName": "Vardhman Special Steels Limited",
        "Series": "EQ",
        "date_of_listing": "17-MAY-2012",
        "paid_up_value": 10,
        "isis_number": "INE050M01012",
        "face_value": 10
      },
      {
        "stockCode": "VSTIND",
        "stockName": "VST Industries Limited",
        "Series": "EQ",
        "date_of_listing": "05-SEP-2003",
        "paid_up_value": 10,
        "isis_number": "INE710A01016",
        "face_value": 10
      },
      {
        "stockCode": "VSTTILLERS",
        "stockName": "V.S.T Tillers Tractors Limited",
        "Series": "EQ",
        "date_of_listing": "20-JUN-2011",
        "paid_up_value": 10,
        "isis_number": "INE764D01017",
        "face_value": 10
      },
      {
        "stockCode": "VTL",
        "stockName": "Vardhman Textiles Limited",
        "Series": "EQ",
        "date_of_listing": "14-JAN-2003",
        "paid_up_value": 10,
        "isis_number": "INE825A01012",
        "face_value": 10
      },
      {
        "stockCode": "WABAG",
        "stockName": "VA Tech Wabag Limited",
        "Series": "EQ",
        "date_of_listing": "13-OCT-2010",
        "paid_up_value": 2,
        "isis_number": "INE956G01038",
        "face_value": 2
      },
      {
        "stockCode": "WABCOINDIA",
        "stockName": "WABCO India Limited",
        "Series": "EQ",
        "date_of_listing": "01-OCT-2008",
        "paid_up_value": 5,
        "isis_number": "INE342J01019",
        "face_value": 5
      },
      {
        "stockCode": "WALCHANNAG",
        "stockName": "Walchandnagar Industries Limited",
        "Series": "EQ",
        "date_of_listing": "18-SEP-1996",
        "paid_up_value": 2,
        "isis_number": "INE711A01022",
        "face_value": 2
      },
      {
        "stockCode": "WANBURY",
        "stockName": "Wanbury Limited",
        "Series": "BE",
        "date_of_listing": "29-JAN-2007",
        "paid_up_value": 10,
        "isis_number": "INE107F01022",
        "face_value": 10
      },
      {
        "stockCode": "WEBELSOLAR",
        "stockName": "Websol Energy System Limited",
        "Series": "EQ",
        "date_of_listing": "15-MAY-2007",
        "paid_up_value": 10,
        "isis_number": "INE855C01015",
        "face_value": 10
      },
      {
        "stockCode": "WEIZFOREX",
        "stockName": "Weizmann Forex Limited",
        "Series": "EQ",
        "date_of_listing": "28-JUN-2011",
        "paid_up_value": 10,
        "isis_number": "INE726L01019",
        "face_value": 10
      },
      {
        "stockCode": "WEIZMANIND",
        "stockName": "Weizmann Limited",
        "Series": "EQ",
        "date_of_listing": "10-MAY-1995",
        "paid_up_value": 10,
        "isis_number": "INE080A01014",
        "face_value": 10
      },
      {
        "stockCode": "WELCORP",
        "stockName": "Welspun Corp Limited",
        "Series": "EQ",
        "date_of_listing": "24-MAY-2005",
        "paid_up_value": 5,
        "isis_number": "INE191B01025",
        "face_value": 5
      },
      {
        "stockCode": "WELENT",
        "stockName": "Welspun Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "04-NOV-2004",
        "paid_up_value": 10,
        "isis_number": "INE625G01013",
        "face_value": 10
      },
      {
        "stockCode": "WELINV",
        "stockName": "Welspun Investments and Commercials Limited",
        "Series": "EQ",
        "date_of_listing": "20-SEP-2010",
        "paid_up_value": 10,
        "isis_number": "INE389K01018",
        "face_value": 10
      },
      {
        "stockCode": "WELSPUNIND",
        "stockName": "Welspun India Limited",
        "Series": "EQ",
        "date_of_listing": "04-DEC-2003",
        "paid_up_value": 1,
        "isis_number": "INE192B01031",
        "face_value": 1
      },
      {
        "stockCode": "WENDT",
        "stockName": "Wendt (India) Limited",
        "Series": "EQ",
        "date_of_listing": "07-AUG-2006",
        "paid_up_value": 10,
        "isis_number": "INE274C01019",
        "face_value": 10
      },
      {
        "stockCode": "WHEELS",
        "stockName": "Wheels India Limited",
        "Series": "EQ",
        "date_of_listing": "07-APR-2000",
        "paid_up_value": 10,
        "isis_number": "INE715A01015",
        "face_value": 10
      },
      {
        "stockCode": "WHIRLPOOL",
        "stockName": "Whirlpool of India Limited",
        "Series": "EQ",
        "date_of_listing": "06-APR-2010",
        "paid_up_value": 10,
        "isis_number": "INE716A01013",
        "face_value": 10
      },
      {
        "stockCode": "WILLAMAGOR",
        "stockName": "Williamson Magor & Company Limited",
        "Series": "EQ",
        "date_of_listing": "08-FEB-1995",
        "paid_up_value": 10,
        "isis_number": "INE210A01017",
        "face_value": 10
      },
      {
        "stockCode": "WINDMACHIN",
        "stockName": "Windsor Machines Limited",
        "Series": "EQ",
        "date_of_listing": "17-AUG-2011",
        "paid_up_value": 2,
        "isis_number": "INE052A01021",
        "face_value": 2
      },
      {
        "stockCode": "WINSOME",
        "stockName": "Winsome Yarns Limited",
        "Series": "EQ",
        "date_of_listing": "25-AUG-2011",
        "paid_up_value": 10,
        "isis_number": "INE784B01035",
        "face_value": 10
      },
      {
        "stockCode": "WIPL",
        "stockName": "The Western India Plywoods Limited",
        "Series": "BE",
        "date_of_listing": "17-APR-2017",
        "paid_up_value": 10,
        "isis_number": "INE215F01023",
        "face_value": 10
      },
      {
        "stockCode": "WIPRO",
        "stockName": "Wipro Limited",
        "Series": "EQ",
        "date_of_listing": "08-NOV-1995",
        "paid_up_value": 2,
        "isis_number": "INE075A01022",
        "face_value": 2
      },
      {
        "stockCode": "WOCKPHARMA",
        "stockName": "Wockhardt Limited",
        "Series": "EQ",
        "date_of_listing": "23-FEB-2000",
        "paid_up_value": 5,
        "isis_number": "INE049B01025",
        "face_value": 5
      },
      {
        "stockCode": "WONDERLA",
        "stockName": "Wonderla Holidays Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAY-2014",
        "paid_up_value": 10,
        "isis_number": "INE066O01014",
        "face_value": 10
      },
      {
        "stockCode": "WSI",
        "stockName": "W S Industries (I) Limited",
        "Series": "BE",
        "date_of_listing": "01-AUG-2007",
        "paid_up_value": 10,
        "isis_number": "INE100D01014",
        "face_value": 10
      },
      {
        "stockCode": "WSTCSTPAPR",
        "stockName": "West Coast Paper Mills Limited",
        "Series": "EQ",
        "date_of_listing": "17-JAN-2001",
        "paid_up_value": 2,
        "isis_number": "INE976A01021",
        "face_value": 2
      },
      {
        "stockCode": "XCHANGING",
        "stockName": "Xchanging Solutions Limited",
        "Series": "EQ",
        "date_of_listing": "09-MAR-2005",
        "paid_up_value": 10,
        "isis_number": "INE692G01013",
        "face_value": 10
      },
      {
        "stockCode": "XELPMOC",
        "stockName": "Xelpmoc Design And Tech Limited",
        "Series": "EQ",
        "date_of_listing": "04-FEB-2019",
        "paid_up_value": 10,
        "isis_number": "INE01P501012",
        "face_value": 10
      },
      {
        "stockCode": "XLENERGY",
        "stockName": "XL Energy Limited",
        "Series": "BE",
        "date_of_listing": "28-DEC-2006",
        "paid_up_value": 10,
        "isis_number": "INE183H01011",
        "face_value": 10
      },
      {
        "stockCode": "XPROINDIA",
        "stockName": "Xpro India Limited",
        "Series": "EQ",
        "date_of_listing": "27-APR-2004",
        "paid_up_value": 10,
        "isis_number": "INE445C01015",
        "face_value": 10
      },
      {
        "stockCode": "YESBANK",
        "stockName": "Yes Bank Limited",
        "Series": "EQ",
        "date_of_listing": "12-JUL-2005",
        "paid_up_value": 2,
        "isis_number": "INE528G01027",
        "face_value": 2
      },
      {
        "stockCode": "ZEEL",
        "stockName": "Zee Entertainment Enterprises Limited",
        "Series": "EQ",
        "date_of_listing": "09-SEP-1998",
        "paid_up_value": 1,
        "isis_number": "INE256A01028",
        "face_value": 1
      },
      {
        "stockCode": "ZEELEARN",
        "stockName": "Zee Learn Limited",
        "Series": "EQ",
        "date_of_listing": "20-DEC-2010",
        "paid_up_value": 1,
        "isis_number": "INE565L01011",
        "face_value": 1
      },
      {
        "stockCode": "ZEEMEDIA",
        "stockName": "Zee Media Corporation Limited",
        "Series": "EQ",
        "date_of_listing": "10-JAN-2007",
        "paid_up_value": 1,
        "isis_number": "INE966H01019",
        "face_value": 1
      },
      {
        "stockCode": "ZENITHBIR",
        "stockName": "Zenith Birla (India) Limited",
        "Series": "BE",
        "date_of_listing": "30-APR-2007",
        "paid_up_value": 10,
        "isis_number": "INE318D01020",
        "face_value": 10
      },
      {
        "stockCode": "ZENITHEXPO",
        "stockName": "Zenith Exports Limited",
        "Series": "EQ",
        "date_of_listing": "10-JUL-1996",
        "paid_up_value": 10,
        "isis_number": "INE058B01018",
        "face_value": 10
      },
      {
        "stockCode": "ZENSARTECH",
        "stockName": "Zensar Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "09-JUL-2003",
        "paid_up_value": 2,
        "isis_number": "INE520A01027",
        "face_value": 2
      },
      {
        "stockCode": "ZENTEC",
        "stockName": "Zen Technologies Limited",
        "Series": "EQ",
        "date_of_listing": "30-MAR-2015",
        "paid_up_value": 1,
        "isis_number": "INE251B01027",
        "face_value": 1
      },
      {
        "stockCode": "ZICOM",
        "stockName": "Zicom Electronic Security Systems Limited",
        "Series": "BE",
        "date_of_listing": "18-APR-2006",
        "paid_up_value": 10,
        "isis_number": "INE871B01014",
        "face_value": 10
      },
      {
        "stockCode": "ZODIACLOTH",
        "stockName": "Zodiac Clothing Company Limited",
        "Series": "EQ",
        "date_of_listing": "27-SEP-1995",
        "paid_up_value": 10,
        "isis_number": "INE206B01013",
        "face_value": 10
      },
      {
        "stockCode": "ZODJRDMKJ",
        "stockName": "Zodiac JRD- MKJ Limited",
        "Series": "EQ",
        "date_of_listing": "19-JUL-1995",
        "paid_up_value": 10,
        "isis_number": "INE077B01018",
        "face_value": 10
      },
      {
        "stockCode": "ZUARI",
        "stockName": "Zuari Agro Chemicals Limited",
        "Series": "EQ",
        "date_of_listing": "27-NOV-2012",
        "paid_up_value": 10,
        "isis_number": "INE840M01016",
        "face_value": 10
      },
      {
        "stockCode": "ZUARIGLOB",
        "stockName": "Zuari Global Limited",
        "Series": "EQ",
        "date_of_listing": "12-APR-1995",
        "paid_up_value": 10,
        "isis_number": "INE217A01012",
        "face_value": 10
      },
      {
        "stockCode": "ZYDUSWELL",
        "stockName": "Zydus Wellness Limited",
        "Series": "EQ",
        "date_of_listing": "13-NOV-2009",
        "paid_up_value": 10,
        "isis_number": "INE768C01010",
        "face_value": 10
      }
    ];
  }

  