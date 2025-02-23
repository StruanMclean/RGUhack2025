
export default function initMiddleware(middleware) {
    return (req, res, next) => {
      middleware(req, res, next);
    };
}
  