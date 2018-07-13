"use strict";
function decorateWithDetectedEnv(SEC) {
    const ENV = typeof NODE_ENV === 'string'
        ? NODE_ENV
        : 'development';
    const DEBUG = false; // TODO or verbose?
    SEC.injectDependencies({
        ENV,
        DEBUG,
    });
    SEC.setAnalyticsAndErrorDetails({
        ENV,
    });
}
module.exports = {
    decorateWithDetectedEnv,
};
//# sourceMappingURL=common.js.map