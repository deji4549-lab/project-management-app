const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use('/', express.static(path.join(__dirname, '..', '..', 'frontend')));

app.get('/health', (req, res) => {
	res.json({ status: 'ok' });
});

// Sample API endpoint returning mock projects
app.get('/api/projects', (req, res) => {
	const projects = [
		{
			id: 1,
			name: 'Central Plaza Redevelopment',
			category: 'Commercial',
			value: '$45,000,000',
			duration: '18 months'
		},
		{
			id: 2,
			name: 'Riverside Hospital Wing',
			category: 'Healthcare',
			value: '$120,000,000',
			duration: '30 months'
		},
		{
			id: 3,
			name: 'Greenfield High School',
			category: 'Education',
			value: '$22,500,000',
			duration: '14 months'
		}
	];

	res.json({ projects });
});

app.listen(PORT, () => {
	console.log(`Backend listening on port ${PORT}`);
});
