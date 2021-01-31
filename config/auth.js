module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Iltimos,ma\'lumotlardan foydalanish uchun avval ro\'yxatdan o\'ting !');
        res.redirect('/users/login');
    }
}