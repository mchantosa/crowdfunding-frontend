import { CircularProgress, useTheme, Box, Typography } from "@mui/material";

export default function Loading({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          marginX: 4,
        }}
      >
        <Typography
          sx={{
            marginTop: 2,
            textAlign: "center",
          }}
        >
          {children}
        </Typography>
        <br />
        <CircularProgress />
      </Box>
    </div>
  );
}
