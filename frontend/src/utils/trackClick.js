const trackClick = async (page) => {
  try {
    await fetch('http://localhost:4000/api/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page })
    });
  } catch (err) {
    console.error('Click tracking failed:', err);
  }
};

export default trackClick;
