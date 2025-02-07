import { useEffect, useState } from "react";
import api from "../../src/app/api/axiosInstance";
import { Container, Typography, Card, CardContent } from "@mui/material";

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]); // ✅ Default to an empty array
  const [loading, setLoading] = useState(true); // ✅ Loading state
  const [error, setError] = useState(null); // ✅ Error state

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await api.get("/campaigns");

        console.log("Fetched data:", response.data); // 🔍 Debugging

        if (Array.isArray(response.data)) {
          setCampaigns(response.data); // ✅ Only set state if it's an array
        } else {
          throw new Error("API response is not an array");
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) return <p>Loading campaigns...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Campaigns
      </Typography>
      {campaigns.length === 0 ? (
        <p>No campaigns found.</p>
      ) : (
        campaigns.map((campaign) => (
          <Card key={campaign._id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5">{campaign.name}</Typography>
              <Typography variant="body2">{campaign.description}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
};

export default CampaignList;
