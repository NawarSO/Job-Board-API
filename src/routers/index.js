import user from './jobseeker.js'
import employers from './employers.js'
import admin from './admin.js'
export default (app) => {
    app.use('/jobseekers',user)
    app.use('/employers',employers)
    app.use('/admin',admin)
};
