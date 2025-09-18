import { Box, InputBase, Button, Typography } from "@mui/material";

export function BankingInvite(){
    return(<>
     <Box
          sx={{
            p: 5,
            borderRadius: 5,
            position: "relative",
            color: "common.white",
            backgroundImage: `linear-gradient(135deg, #00a76f,#007867)`,
          }}
        >
          <Box
            component="img"
            alt="Invite"
            src={
              "https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/illustrations/illustration-receipt.webp"
            }
            sx={{
              top: 16,
              right: 16,
              width: 128,
              height: 128,
              position: "absolute",
            }}
          />

          <Box sx={{ whiteSpace: "pre-line" }}>
            <Typography variant="h6">Invite Friends</Typography>
             <Typography variant="h6">and earn</Typography>
          </Box>

          <Box sx={{ typography: "h2" }}>$50</Box>

          <Box sx={{ mt: 2, mb: 3, typography: "body2" }}>
            Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.
          </Box>

          <InputBase
            fullWidth
            placeholder="Email"
            endAdornment={
              <Button
                color="warning"
                variant="contained"
                size="small"
                sx={{ mr: 0.5 }}
              >
                Invite
              </Button>
            }
            inputProps={{
              id: "email-input",
              sx: {
                color: "common.white",
                "&::placeholder": { opacity: 0.48, color: "inherit" },
              },
            }}
            sx={{
              pl: 1.5,
              height: 40,
              borderRadius: 1,
              bgcolor: "rgb(0 0 0 / 12%)",
            }}
          />
        </Box>
    </>)
}