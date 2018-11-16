module.exports = function () {
    switch (process.env.NODE_ENV) {
        case 'development':
            return { dbUrl: "mongodb://houoradb2.oii.oceaneering.com:27017/lessonGlobalSearch" };

        case 'production':
            return { dbUrl: "mongodb://houoradb2.oii.oceaneering.com:27017/lessonGlobalSearch" };

        default:
            return { dbUrl: "mongodb://houoradb2.oii.oceaneering.com:27017/lessonGlobalSearch" };
    }
};