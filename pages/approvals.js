import { useEffect, useState } from 'react';
import api from '../src/app/api/axiosInstance';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';

const SubmissionApproval = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await api.get('/submissions/campaign/campaign123');
        setSubmissions(response.data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };
    fetchSubmissions();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      await api.patch(`/submissions/${id}`, { status });
      setSubmissions(submissions.filter((submission) => submission._id !== id));
    } catch (error) {
      console.error('Error updating submission:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Submission Approvals</Typography>
      {submissions.map((submission) => (
        <Card key={submission._id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">Post: {submission.postLink}</Typography>
            <Button onClick={() => handleApproval(submission._id, 'approved')} color="success">
              Approve
            </Button>
            <Button onClick={() => handleApproval(submission._id, 'rejected')} color="error">
              Reject
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default SubmissionApproval;
