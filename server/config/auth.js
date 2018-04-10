module.exports = {
    isAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.status(401).send('Need registration!');
        }
    },
    isInRole: (role) => {
        return (req, res, next) => {
            if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
                next();
            } else {
                res.status(401).send('Only for admins!');
            }
        }
    }
}