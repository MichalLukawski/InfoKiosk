const express = require('express');
const router = express.Router();
const Click = require('../models/Click');

router.post('/api/click', async (req, res) => {
  const { page } = req.body;
  if (!page) return res.status(400).json({ error: 'Page is required' });

  try {
    await new Click({ page }).save();
    res.status(201).json({ message: 'Click saved' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/api/clicks-summary', async (req, res) => {
  try {
    const summary = await Click.aggregate([
      {
        $group: {
          _id: {
            page: "$page",
            year: { $year: "$timestamp" },
            month: { $month: "$timestamp" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { "_id.year": -1, "_id.month": -1 }
      }
    ]);

    res.json(summary);
  } catch (err) {
    console.error("Błąd podczas agregacji kliknięć:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Wszystkie kliknięcia zgrupowane według roku i miesiąca
router.get('/api/clicks-summary-total', async (req, res) => {
  try {
    const result = await Click.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$timestamp" },
            month: { $month: "$timestamp" }
          },
          total: { $sum: 1 }
        }
      },
      {
        $sort: { "_id.year": -1, "_id.month": -1 }
      }
    ]);

    res.json(result);
  } catch (err) {
    console.error("Błąd podczas agregacji kliknięć:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Zliczanie kliknięć w całym roku
router.get('/api/clicks-summary-yearly', async (req, res) => {
  try {
    const result = await Click.aggregate([
      {
        $group: {
          _id: { year: { $year: "$timestamp" } },
          total: { $sum: 1 }
        }
      },
      {
        $sort: { "_id.year": -1 }
      }
    ]);

    res.json(result);
  } catch (err) {
    console.error("Błąd podczas rocznej agregacji:", err);
    res.status(500).json({ error: 'Server error' });
  }
});


module.exports = router;
