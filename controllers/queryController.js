const pool = require("../db/postgres");

exports.executeQuery = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Query is required",
      });
    }

    // SECURITY (only SELECT)
    if (!query.trim().toLowerCase().startsWith("select")) {
      return res.status(400).json({
        success: false,
        message: "Only SELECT queries allowed",
      });
    }

    const result = await pool.query(query);

    res.json({
      success: true,
      data: result.rows,
    });

  } catch (error) {
    console.error("QUERY ERROR:", error.message);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};