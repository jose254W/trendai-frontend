import { useEffect, useState } from 'react';
import api from '../src/app/api/axiosInstance';
import { Container, Typography, Card, CardContent } from '@mui/material';

const PerformanceSnapshot = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const response = await api.get('/submissions/performance');
        setMetrics(response.data);
      } catch (error) {
        console.error('Error fetching performance metrics:', error);
      }
    };
    fetchPerformance();
  }, []);

  if (!metrics) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">Performance Metrics</Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6">Total Posts Submitted: {metrics.totalPosts}</Typography>
          <Typography variant="body2">Engagement Estimate: {metrics.engagement}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PerformanceSnapshot;
