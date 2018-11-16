// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var maindataSchema = new Schema({
    OES_ID: String,
    CUSTOMER: String,
    CATEGORY: String,
    AREA: String,
    PROJECT_PHASE: String,
    IMPACT: String,
    STATUS: String,
    PROJECT_ID: String,
    KEYWORD: String,
    INITIATED_BY: String,
    DATE_INITIATED: String,
    LESSON_LEARNED_TITLE: String,
    LESSON_LEARNED_DESCRIPTION: String,
    SUGGESTED_SOLUTION: String,
    PARTS_COMPONENTS_AFFECTED: String,
    INITIATOR_EMAIL: String,
    PROJECT_PHASE_DATE: String,
    CLOSING_COMMENTS: String,
    APPROVAL_STATUS: String,
    ISDELETED: String,
    CREATED_BY: String,
    CREATED_DATE: String,
    MODIFIED_BY: String,
    MODIFIED_DATE: String,
    STR_ID: String,
    SERVICELINEID: String,
    PRIMARYCATEGORYID: String,
    SECONDARYCATEGORYID: String,
    IMPROVEMENTAREAID: String,
    CREATEDDATE: String,
    PROJECTBIDNUMBER: String,
    DESCRIPTION: String,
    CRITICAL: String,
    NCRNUMBER: String,
    RECOMMENDEDACTION: String,
    EQUIPMENTTOOLNAME: String,
    EVALUATIONCOMMENTS: String,
    PARTNUMBER: String,
    LLID: String
});

//maindataSchema.index({'$**': 'text'});

maindataSchema.index({ 'STATUS': 'text' }, { 'KEYWORD': 'text' });

// the schema is useless so far
// we need to create a model using it
var mainData = mongoose.model('record', maindataSchema);

// make this available to our users in our Node applications
module.exports = mainData;