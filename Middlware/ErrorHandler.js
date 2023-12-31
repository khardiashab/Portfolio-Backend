export const ErrorHandler = (err, req, res, next) => {
  err.status = err?.status ? err.status : 500
  res.status(err.status).json(err.message)
}