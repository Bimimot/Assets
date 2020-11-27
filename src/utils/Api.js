import React from 'react';


class Api{
    getIcon(companyCode) {
        
        let urlIcon = 'https://divplan.com/media/icons/' + companyCode + '.png';
        return (urlIcon);
    }

    getDataAssets(){
        return (
            {"assets": [
                    {
                        "asset": 2,
                        "data": {
                            "code": "mtss",
                            "id": 2,
                            "companyCode": "mtss",
                            "name": "МТС",
                            "type": "STOCK",
                            "market": "RU",
                            "yield": 8.71,
                            "quantityIncrement": 10,
                            "nominal": 0.1,
                            "baseCurrency": "RUB",
                            "state": "ENABLED",
                            "sector": "Communication Services",
                            "hasFee": true,
                            "hasUserPrices": false,
                            "hasFutureDividends": true,
                            "hasDividends": true,
                            "hasNews": true,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 27.672710543066557,
                                "AUD": 5.71908644967718,
                                "JPY": 441.7071524912674,
                                "TRY": 14.422510445840246,
                                "RUB": 318.25,
                                "GBP": 3.1542755962558235,
                                "USD": 4.206873675886586,
                                "EUR": 3.536739819285163,
                                "CAD": 5.476210802862634,
                                "CHF": 3.821812708596207
                            },
                            "userPrices": {
                                "CNY": 27.672710543066557,
                                "AUD": 5.71908644967718,
                                "JPY": 441.7071524912674,
                                "TRY": 14.422510445840246,
                                "RUB": 318.25,
                                "GBP": 3.1542755962558235,
                                "USD": 4.206873675886586,
                                "EUR": 3.536739819285163,
                                "CAD": 5.476210802862634,
                                "CHF": 3.821812708596207
                            }
                        },
                        "amount": 200,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 416473,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 318.25,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 27.672710543066557,
                                    "AUD": 5.71908644967718,
                                    "JPY": 441.7071524912674,
                                    "TRY": 14.422510445840246,
                                    "RUB": 318.25,
                                    "GBP": 3.1542755962558235,
                                    "USD": 4.206873675886586,
                                    "EUR": 3.536739819285163,
                                    "CAD": 5.476210802862634,
                                    "CHF": 3.821812708596207
                                },
                                "count": 200
                            }
                        ]
                    },
                    {
                        "asset": 40,
                        "data": {
                            "code": "sber",
                            "id": 40,
                            "companyCode": "sber",
                            "name": "Сбербанк",
                            "type": "STOCK",
                            "market": "RU",
                            "yield": 7.6,
                            "quantityIncrement": 10,
                            "nominal": 3,
                            "baseCurrency": "RUB",
                            "state": "ENABLED",
                            "sector": "Financial Services",
                            "hasFee": true,
                            "hasUserPrices": false,
                            "hasFutureDividends": true,
                            "hasDividends": true,
                            "hasNews": true,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 21.652972127052426,
                                "AUD": 4.474994211150389,
                                "JPY": 345.6211001205826,
                                "TRY": 11.285132918218816,
                                "RUB": 249.02,
                                "GBP": 2.4681153463617442,
                                "USD": 3.291738201945884,
                                "EUR": 2.7673808320452205,
                                "CAD": 4.284952126092233,
                                "CHF": 2.990440850572278
                            },
                            "userPrices": {
                                "CNY": 21.652972127052426,
                                "AUD": 4.474994211150389,
                                "JPY": 345.6211001205826,
                                "TRY": 11.285132918218816,
                                "RUB": 249.02,
                                "GBP": 2.4681153463617442,
                                "USD": 3.291738201945884,
                                "EUR": 2.7673808320452205,
                                "CAD": 4.284952126092233,
                                "CHF": 2.990440850572278
                            }
                        },
                        "amount": 300,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 416474,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 208.32,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 18.11399547629733,
                                    "AUD": 3.743598080743912,
                                    "JPY": 289.1325499041031,
                                    "TRY": 9.440683035592897,
                                    "RUB": 208.32,
                                    "GBP": 2.064724877335469,
                                    "USD": 2.753734247166358,
                                    "EUR": 2.315078206295319,
                                    "CAD": 3.5846166047206407,
                                    "CHF": 2.501681142041671
                                },
                                "count": 300
                            }
                        ]
                    },
                    {
                        "asset": 57,
                        "data": {
                            "code": "gazp",
                            "id": 57,
                            "companyCode": "gazp",
                            "name": "Газпром",
                            "type": "STOCK",
                            "market": "RU",
                            "yield": 4.48,
                            "quantityIncrement": 10,
                            "nominal": 5,
                            "baseCurrency": "RUB",
                            "state": "ENABLED",
                            "sector": "Energy",
                            "hasFee": true,
                            "hasUserPrices": false,
                            "hasFutureDividends": true,
                            "hasDividends": true,
                            "hasNews": true,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 16.221903782920652,
                                "AUD": 3.3525617220794177,
                                "JPY": 258.9313004517544,
                                "TRY": 8.45455946198258,
                                "RUB": 186.56,
                                "GBP": 1.849054690455574,
                                "USD": 2.4660938035299336,
                                "EUR": 2.073257441275224,
                                "CAD": 3.2101866060708657,
                                "CHF": 2.240368826129484
                            },
                            "userPrices": {
                                "CNY": 16.221903782920652,
                                "AUD": 3.3525617220794177,
                                "JPY": 258.9313004517544,
                                "TRY": 8.45455946198258,
                                "RUB": 186.56,
                                "GBP": 1.849054690455574,
                                "USD": 2.4660938035299336,
                                "EUR": 2.073257441275224,
                                "CAD": 3.2101866060708657,
                                "CHF": 2.240368826129484
                            }
                        },
                        "amount": 100,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 416475,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 160.52,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 13.957654348383485,
                                    "AUD": 2.8846119619864288,
                                    "JPY": 222.78973171374153,
                                    "TRY": 7.274474082533469,
                                    "RUB": 160.52,
                                    "GBP": 1.5909640807886405,
                                    "USD": 2.121877022634139,
                                    "EUR": 1.7838726654883093,
                                    "CAD": 2.762109530480786,
                                    "CHF": 1.9276586833742755
                                },
                                "count": 100
                            }
                        ]
                    },
                    {
                        "asset": 14254,
                        "data": {
                            "code": "III",
                            "id": 14254,
                            "companyCode": "iii",
                            "name": "3I GROUP PLC ORD 73 19/22P",
                            "type": "STOCK",
                            "market": "GB",
                            "yield": 4.7337,
                            "baseCurrency": "GBP",
                            "state": "ENABLED",
                            "hasFee": true,
                            "hasUserPrices": true,
                            "hasFutureDividends": true,
                            "hasDividends": false,
                            "hasNews": false,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 94.98506633836824,
                                "AUD": 19.61869191990838,
                                "JPY": 1506.6870628502595,
                                "TRY": 114.16658205057318,
                                "RUB": 1095.0790055556845,
                                "GBP": 10.815,
                                "USD": 14.440216214564304,
                                "EUR": 12.138592378772353,
                                "CAD": 18.79888824745139,
                                "CHF": 13.123407074039077
                            },
                            "userPrices": {
                                "CNY": 98.10878022228435,
                                "AUD": 20.276025895273406,
                                "JPY": 1565.9958528072175,
                                "TRY": 51.132501291568104,
                                "RUB": 1128.3,
                                "GBP": 11.182935287526929,
                                "USD": 14.914738628445669,
                                "EUR": 12.538895642103533,
                                "CAD": 19.4149525494734,
                                "CHF": 13.549571968920974
                            }
                        },
                        "amount": 100,
                        "history": {},
                        "note": "Моя замктка про данный сток ",
                        "transactionData": [
                            {
                                "id": 435700,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 1128.3,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 98.10878022228435,
                                    "AUD": 20.276025895273406,
                                    "JPY": 1565.9958528072175,
                                    "TRY": 51.132501291568104,
                                    "RUB": 1128.3,
                                    "GBP": 11.182935287526929,
                                    "USD": 14.914738628445669,
                                    "EUR": 12.538895642103533,
                                    "CAD": 19.4149525494734,
                                    "CHF": 13.549571968920974
                                },
                                "count": 100
                            }
                        ]
                    },
                    {
                        "asset": 47277,
                        "data": {
                            "code": "LU1681041387",
                            "id": 47277,
                            "companyCode": "lu1681041387",
                            "name": "Amundi BBB Euro Corporate Investment Grade UCITS ETF - EUR (C)",
                            "type": "ETF",
                            "market": "DE",
                            "baseCurrency": "EUR",
                            "state": "ENABLED",
                            "hasFee": true,
                            "hasUserPrices": true,
                            "hasFutureDividends": false,
                            "hasDividends": false,
                            "hasNews": false,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 129.29159079764898,
                                "AUD": 26.695435953088122,
                                "JPY": 2049.1540297703423,
                                "TRY": 155.32255243806836,
                                "RUB": 1493.669752659487,
                                "GBP": 14.718672779854694,
                                "USD": 19.65841450028756,
                                "EUR": 16.517,
                                "CAD": 25.576029949626783,
                                "CHF": 17.862008880299026
                            },
                            "userPrices": {
                                "CNY": 129.14395334728457,
                                "AUD": 26.690028520941212,
                                "JPY": 2061.374067629474,
                                "TRY": 67.30746571679764,
                                "RUB": 1485.22,
                                "GBP": 14.72048138592639,
                                "USD": 19.632782155224742,
                                "EUR": 16.505378521284243,
                                "CAD": 25.556568133943887,
                                "CHF": 17.835766444811494
                            }
                        },
                        "amount": 100,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 435701,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 1485.22,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 129.14395334728457,
                                    "AUD": 26.690028520941212,
                                    "JPY": 2061.374067629474,
                                    "TRY": 67.30746571679764,
                                    "RUB": 1485.22,
                                    "GBP": 14.72048138592639,
                                    "USD": 19.632782155224742,
                                    "EUR": 16.505378521284243,
                                    "CAD": 25.556568133943887,
                                    "CHF": 17.835766444811494
                                },
                                "count": 100
                            }
                        ]
                    },
                    {
                        "asset": 24188,
                        "data": {
                            "code": "XS0925043100",
                            "id": 24188,
                            "companyCode": "xs0925043100",
                            "name": "Alliance23",
                            "type": "BOND",
                            "market": "RU",
                            "yield": 6.83,
                            "quantityIncrement": 1,
                            "nominal": 1000,
                            "matDate": 1683147600000,
                            "baseCurrency": "USD",
                            "state": "ENABLED",
                            "creditQuality": "A",
                            "hasFee": true,
                            "hasUserPrices": true,
                            "hasFutureDividends": true,
                            "hasDividends": true,
                            "hasNews": false,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 6574.399886045725,
                                "AUD": 1357.910025556093,
                                "JPY": 104262.99546783879,
                                "TRY": 7856.809994509154,
                                "RUB": 75649.99953852268,
                                "GBP": 748.950023708782,
                                "USD": 1000,
                                "EUR": 840.1999947716665,
                                "CAD": 1300.6299566643152,
                                "CHF": 908.3699990210932
                            },
                            "userPrices": {
                                "CNY": 6564.584305292547,
                                "AUD": 1356.694895851778,
                                "JPY": 104782.7908389025,
                                "TRY": 3421.3412368237396,
                                "RUB": 75496,
                                "GBP": 748.2645417594018,
                                "USD": 997.9642891900507,
                                "EUR": 838.9935880494978,
                                "CAD": 1299.0793739918852,
                                "CHF": 906.6192372291571
                            }
                        },
                        "amount": 100,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 435702,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 75496,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 6564.584305292547,
                                    "AUD": 1356.694895851778,
                                    "JPY": 104782.7908389025,
                                    "TRY": 3421.3412368237396,
                                    "RUB": 75496,
                                    "GBP": 748.2645417594018,
                                    "USD": 997.9642891900507,
                                    "EUR": 838.9935880494978,
                                    "CAD": 1299.0793739918852,
                                    "CHF": 906.6192372291571
                                },
                                "count": 100
                            }
                        ]
                    },
                    {
                        "asset": 9712,
                        "data": {
                            "code": "US90131HAQ83",
                            "id": 9712,
                            "companyCode": "us90131haq83",
                            "name": "21ST CENTURY FOX A. 11/21",
                            "type": "BOND",
                            "market": "WW",
                            "yield": 2.79,
                            "quantityIncrement": 10,
                            "nominal": 99.38,
                            "matDate": 1613336400000,
                            "baseCurrency": "USD",
                            "state": "ENABLED",
                            "creditQuality": "WR",
                            "hasFee": true,
                            "hasUserPrices": true,
                            "hasFutureDividends": true,
                            "hasDividends": true,
                            "hasNews": false,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 661.1873965396185,
                                "AUD": 136.56501127017626,
                                "JPY": 10485.729454200546,
                                "TRY": 790.1593811477857,
                                "RUB": 7608.120453589226,
                                "GBP": 75.3219038843922,
                                "USD": 100.57,
                                "EUR": 84.4989134741865,
                                "CAD": 130.80435474173015,
                                "CHF": 91.35477080155134
                            },
                            "userPrices": {
                                "CNY": 661.1873965396185,
                                "AUD": 136.56501127017626,
                                "JPY": 10485.729454200546,
                                "TRY": 790.1593811477857,
                                "RUB": 7608.120453589226,
                                "GBP": 75.3219038843922,
                                "USD": 100.57,
                                "EUR": 84.4989134741865,
                                "CAD": 130.80435474173015,
                                "CHF": 91.35477080155134
                            }
                        },
                        "amount": 100,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 435703,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 100.57,
                                "currency": "USD",
                                "prices": {
                                    "CNY": 661.1873965396185,
                                    "AUD": 136.56501127017626,
                                    "JPY": 10485.729454200546,
                                    "TRY": 790.1593811477857,
                                    "RUB": 7608.120453589226,
                                    "GBP": 75.3219038843922,
                                    "USD": 100.57,
                                    "EUR": 84.4989134741865,
                                    "CAD": 130.80435474173015,
                                    "CHF": 91.35477080155134
                                },
                                "count": 100
                            }
                        ]
                    },
                    {
                        "asset": 48135,
                        "data": {
                            "code": "EUR",
                            "id": 48135,
                            "name": "Euro",
                            "type": "CURRENCY",
                            "market": "CURRENCY",
                            "quantityIncrement": 1,
                            "baseCurrency": "EUR",
                            "state": "ENABLED",
                            "hasFee": true,
                            "hasUserPrices": true,
                            "hasFutureDividends": false,
                            "hasDividends": false,
                            "hasNews": true,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 7.827788993016225,
                                "AUD": 1.6162399923162876,
                                "JPY": 124.06333049405717,
                                "TRY": 9.403799263671875,
                                "RUB": 90.4322669164792,
                                "GBP": 0.891122648171865,
                                "USD": 1.1901928013735883,
                                "EUR": 1,
                                "CAD": 1.5484670309152258,
                                "CHF": 1.0814317902947888
                            },
                            "userPrices": {
                                "CNY": 7.834442167887814,
                                "AUD": 1.6191349225951732,
                                "JPY": 125.05204851363138,
                                "TRY": 4.083167921980223,
                                "RUB": 90.1,
                                "GBP": 0.893009367549567,
                                "USD": 1.1910112119320702,
                                "EUR": 1.0012891051613297,
                                "CAD": 1.5503742131592249,
                                "CHF": 1.0819963080738986
                            }
                        },
                        "amount": 1000,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 435704,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 90.1,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 7.834442167887814,
                                    "AUD": 1.6191349225951732,
                                    "JPY": 125.05204851363138,
                                    "TRY": 4.083167921980223,
                                    "RUB": 90.1,
                                    "GBP": 0.893009367549567,
                                    "USD": 1.1910112119320702,
                                    "EUR": 1.0012891051613297,
                                    "CAD": 1.5503742131592249,
                                    "CHF": 1.0819963080738986
                                },
                                "count": 1000
                            }
                        ]
                    },
                    {
                        "asset": 12412,
                        "data": {
                            "code": "POLY",
                            "id": 12412,
                            "companyCode": "poly",
                            "name": "Polymetal",
                            "type": "STOCK",
                            "market": "RU",
                            "yield": 7.71,
                            "quantityIncrement": 1,
                            "nominal": 0,
                            "baseCurrency": "RUB",
                            "state": "ENABLED",
                            "sector": "Basic Materials",
                            "hasFee": true,
                            "hasUserPrices": true,
                            "hasFutureDividends": true,
                            "hasDividends": true,
                            "hasNews": true,
                            "isCustom": false,
                            "payments": {},
                            "prices": {
                                "CNY": 141.36776999502783,
                                "AUD": 29.21631029029115,
                                "JPY": 2256.4885735123407,
                                "TRY": 73.6782953113812,
                                "RUB": 1625.8,
                                "GBP": 16.11381387083336,
                                "USD": 21.491076896328078,
                                "EUR": 18.067656239414983,
                                "CAD": 27.975564880735494,
                                "CHF": 19.523968897519914
                            },
                            "userPrices": {
                                "CNY": 138.63745385660746,
                                "AUD": 28.6520390742036,
                                "JPY": 2212.9077264165803,
                                "TRY": 72.25530449284427,
                                "RUB": 1594.4,
                                "GBP": 15.802598619545279,
                                "USD": 21.076007506154195,
                                "EUR": 17.718705319303265,
                                "CAD": 27.43525688636036,
                                "CHF": 19.146891382830457
                            }
                        },
                        "amount": 1,
                        "history": {},
                        "note": "",
                        "transactionData": [
                            {
                                "id": 435705,
                                "time": 1546203600000,
                                "side": "BUY",
                                "price": 1594.4,
                                "currency": "RUB",
                                "prices": {
                                    "CNY": 138.63745385660746,
                                    "AUD": 28.6520390742036,
                                    "JPY": 2212.9077264165803,
                                    "TRY": 72.25530449284427,
                                    "RUB": 1594.4,
                                    "GBP": 15.802598619545279,
                                    "USD": 21.076007506154195,
                                    "EUR": 17.718705319303265,
                                    "CAD": 27.43525688636036,
                                    "CHF": 19.146891382830457
                                },
                                "count": 1
                            }
                        ]
                    }
                ],
                "refCode": "",
                "id": 20252,
                "name": "Главный портфель",
                "isDefault": false,
                "state": "ACTIVE",
                "settings": {
                    "hasFee": false,
                    "feePercent": null,
                    "currency": null,
                    "priceType": null
                },
                "type": "COMMON"
            }
        )
    }
}
// _____________________

const api = new Api;

export { api };
