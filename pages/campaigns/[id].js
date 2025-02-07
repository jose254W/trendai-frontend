import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../src/app/api/axiosInstance';
import { Container, Typography, Button, TextField } from '@mui/material';

const CampaignDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [campaign, setCampaign] = useState(null);
  const [postLink, setPostLink] = useState('');

  useEffect(() => {
    if (id) {
      api.get(`/campaigns/${id}`)
        .then(response => setCampaign(response.data))
        .catch(error => console.error('Error fetching campaign details:', error));
    }
  }, [id]);

  const handleSubmit = async () => {
    try {
      await api.post('/submissions', { campaignId: id, postLink });
      alert('Submission successful!');
    } catch (error) {
      console.error('Error submitting content:', error);
    }
  };

  if (!campaign) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4">{campaign.name}</Typography>
      <Typography variant="body1">{campaign.description}</Typography>

      <TextField
        label="Post Link"
        variant="outlined"
        fullWidth
        value={postLink}
        onChange={(e) => setPostLink(e.target.value)}
        sx={{ marginTop: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default CampaignDetails;
