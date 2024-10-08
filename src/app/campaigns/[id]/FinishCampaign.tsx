import { Button } from "@mui/material";

export default function FinishCampaign(props) {
  const { loadCampaignData, contractAddress, contract, userAccount } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={async () => {
        console.log("Finish campaign");

        try {
          await contract.methods
            .finishedCrowdfunding()
            .send({ from: userAccount });
          await loadCampaignData(contractAddress);
          console.log("Campaign finished successfully");
        } catch (error) {
          console.error("Error finishing campaign:", error);
        }
      }}
    >
      Finish Campaign
    </Button>
  );
}
