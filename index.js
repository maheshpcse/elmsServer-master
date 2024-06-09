require('./source/appServer.js');

// const unordered = [{ "type": "string", "db_key_name": "mid", "header_name": "MID" }, { "type": "string", "db_key_name": "dba_name", "header_name": "Merchant Name" }, { "type": "string", "db_key_name": "partner_name", "header_name": "Partner Name" }, { "type": "string", "db_key_name": "partner_code", "header_name": "Partner Code" }, { "type": "string", "db_key_name": "account_number", "header_name": "Account" }, { "type": "string", "db_key_name": "station", "header_name": "Station" }, { "type": "string", "db_key_name": "id_number", "header_name": "ID Number" }, { "type": "number", "db_key_name": "check_number", "header_name": "Check Number" }, { "type": "amountWithCurrency", "db_key_name": "face_amount", "header_name": "Face Amount" }, { "type": "number", "db_key_name": "approval_number", "header_name": "Approval Number" }, { "type": "string", "db_key_name": "declined", "header_name": "Declined" }, { "type": "date", "db_key_name": "transaction_date", "header_name": "Transaction Date" }, { "type": "string", "db_key_name": "service_type", "header_name": "Service Type" }, { "type": "string", "db_key_name": "chain_number", "header_name": "Chain #" }, { "type": "string", "db_key_name": "chain_name", "header_name": "Chain Name" }, { "type": "number", "db_key_name": "region", "header_name": "Region" }, { "type": "string", "db_key_name": "store", "header_name": "Store" }, { "type": "string", "db_key_name": "check_type", "header_name": "Check Type" }, { "type": "string", "db_key_name": "id_type", "header_name": "ID Type" }, { "type": "string", "db_key_name": "full_micr", "header_name": "Full Micr" }, { "type": "amountWithCurrency", "db_key_name": "warranty_amount", "header_name": "Warranty Amount" }, { "type": "string", "db_key_name": "source_type", "header_name": "Source Type" }, { "type": "string", "db_key_name": "transaction_time", "header_name": "Call Time" }];

// let testData = [];

// unordered.map((ele, id) => {
//     ele['width'] = 15;
//     let newObj = Object.keys(ele).sort().reduce(
//         (obj, key) => {
//             obj[key] = ele[key];
//             return obj;
//         },
//         {}
//     );
//     testData.push(newObj);
// });

// console.log(testData);

// let additionalInfo = {};

// const isOwner = false;

// const isOfficer = true;

// if (isOwner) {
//     additionalInfo = Object.assign({'isOwner': true}, {});
// }

// if (isOfficer) {
//     additionalInfo = Object.assign(additionalInfo, {'isOfficer': true}, {});
// }

// console.log(additionalInfo);

// let expiredDate = new Date('Wed, 05 Oct 2022 19:24:44 GMT');
// let issuedDate = new Date('Wed, 05 Oct 2022 16:24:44 GMT').getTime();

// console.log('issued time isss:', issuedDate);


// FLAMES program
// let relationWord = 'FLAMES';

// let firstName = 'Mahesh';
// let lastName = 'Prasanna';

// let firstChars = {};
// let lastChars = {};

// for (let item of firstName.split(',')) {
//     firstChars[item] = true;
// }

// for (let item of lastName.split(',')) {
//     lastChars[item] = true;
// }