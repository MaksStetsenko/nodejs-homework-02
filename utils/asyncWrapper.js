exports.asyncWrapper = (controller) => (req, res, next) =>
  controller(req, res).catch(next);
