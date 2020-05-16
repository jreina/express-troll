const { paths } = require("./paths");

/**
 * A middleware to redirect common admin or login paths to a custom URL.
 * @param {string} url
 */
module.exports.troll = function troll(
  url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
) {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  return function trollMiddleware(req, res, next) {
    if (paths.includes(req.url)) {
      return res.redirect(url);
    }
    next();
  };
};
