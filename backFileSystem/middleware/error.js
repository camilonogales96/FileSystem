module.exports = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`);

  if (err.message === 'Información no encontrada') {
    return res.status(404).json({
      success: false,
      error: err.message
    });
  }

  return res.status(500).json({
    success: false,
    error: 'Error interno del servidor',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};