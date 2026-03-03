module.exports = (err, req, res, next) => {
  console.error('[Error Middleware]', err);
  console.error('Stack:', err.stack);
  
  if (err.message === 'Información no encontrada') {
    return res.status(404).json({
      success: false,
      error: err.message
    });
  }

  return res.status(500).json({
    success: false,
    error: 'Error interno del servidor',
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};